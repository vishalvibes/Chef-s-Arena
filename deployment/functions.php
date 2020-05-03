<?php

//getting ip of client
function get_client_ip() {

    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;

}


use Elasticsearch\ClientBuilder;
use ipinfo\ipinfo\IPinfo;

function location_details(){

    $ip = get_client_ip();

    $redis = new Redis(); 
    $redis->connect('localhost', 6379); 

    if($redis->exists($ip) == 1){
        $details_json = $redis->get($ip);
        $details = json_decode($details_json);
        $redis->close();
        return $details;
    }

    $access_token = $_ENV["HTTP_IPINFO_TOKEN"];
    $client = new IPinfo($access_token);
    $details = $client->getDetails($ip);
    $redis->set($ip, json_encode($details), 360000);
    $redis->close();

    return $details;

}



function store_search_data($username, $code){
    $location = location_details();
    $random = uniqid();
    $elastic = ClientBuilder::create()->build();
    $elastic_params = [
        'index' => 'search_data',
        'id'    => $username.$random,
        'body'  => ['username' => $username,
                    'problem_code' => $code,
                    'date' =>date("Y/m/d"),
                    'day' => date("l"),
                    'ip' => get_client_ip(),
                    'location_details' => $location]
    ];
    $response = $elastic->index($elastic_params);
    // $elastic->close();
}

function get_auth_token($code){

    $oauth_config = array('grant_type' => 'authorization_code',
                          'code'=> $code,
                          'client_id' => $config['client_id'],
                          'client_secret' => $config['client_secret'],
                          'redirect_uri'=> $config['redirect_uri']);
    
    $response = json_decode(make_curl_request_for_auth_token($code), true);
    $result = $response['result']['data'];

    return $result;
    
}             

function get_user($token){
    $response = json_decode(curl_user_details($token), true);
    $result = $response['result']['data']['content'];
    return $result;
}

function login($token, $ref_token, $username){

    include 'includes/connection.php';


    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 

    //check if the user already exists
    $sql = "SELECT id FROM users WHERE id =?";
    $stmt = mysqli_stmt_init($db);

    //handle error

    //pending -> to convert into object form *IMPORTANT*
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);
    $check = mysqli_stmt_num_rows($stmt);

    //generating a random password
    $password = uniqid();

    //if new user create user
    if($check == 0){

        $stmt = $db->prepare("INSERT INTO users(id,password,token,refresh) VALUES(?,?,?,?);");
        $stmt->bind_param("ssss", $username, $password, $token, $ref_token);

        $stmt->execute();
        $stmt->close();
        $db->close();
    }

    else{

        $stmt = $db->prepare("UPDATE users SET password=?, token=?, refresh=? WHERE id = ?;");
        $stmt->bind_param("ssss",$password, $token, $ref_token,  $username);

        $stmt->execute();
        $stmt->close();
        $db->close();
    }

    return $password;
}

function get_token_from_db($username, $password){

    include_once 'includes/connection.php';

    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
    $stmt = $db->prepare("SELECT * FROM users WHERE id =?;");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result(); 
    $user = $result->fetch_assoc();
    $ref_token = $user['refresh'];
    $token = $user['token'];


    $response = json_decode(curl_get_new_token($ref_token), true);
    $result = $response['result']['data'];


    $stmt = $db->prepare("UPDATE users SET token=?, refresh=? WHERE id=?;");
    $stmt->bind_param("sss", $result['access_token'], $result['refresh_token'],  $username);
    $stmt->execute();


    $stmt = $db->prepare("SELECT * FROM users WHERE id =?;");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result(); 
    $user = $result->fetch_assoc();
    $pass = $user['password'];
    $token = $user['token'];
    $stmt->close();
    $db->close();
    
    if(strcmp($pass, $password)==0){
        return $token;
    }

    else{
        return "Incorrect Password";
    }
}

