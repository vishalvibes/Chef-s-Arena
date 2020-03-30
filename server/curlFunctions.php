<?php
function curl_get_new_token($ref_token){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/oauth/token');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"grant_type\":\"refresh_token\" ,\"refresh_token\":\"$ref_token\", \"client_id\":\"ad65745b99e00211dd613e8bb4cd9a76\",\"client_secret\":\"769449d33436c1996fdaf0f4c6d95a26\"}");
    
    $headers = array();
    $headers[] = 'Content-Type: application/json';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function make_curl_request_for_auth_token($code){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/oauth/token');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"grant_type\": \"authorization_code\",\"code\": \"$code\",\"client_id\":\"ad65745b99e00211dd613e8bb4cd9a76\",\"client_secret\":\"769449d33436c1996fdaf0f4c6d95a26\",\"redirect_uri\":\"http://localhost:80/\"}");
    
    $headers = array();
    $headers[] = 'Content-Type: application/json';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;

}

function curl_user_details($token){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/users/me');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}


function curl_problem_details($contest, $problem, $token){
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/contests/'.$contest.'/problems/'.$problem);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function curl_submission_details($contest, $problem, $token){
    
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/submissions/?problemCode='.$problem.'&contestCode='.$contest);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function curl_contest_details($contest, $token){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/contests/'.$contest);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function curl_ranklist($contest, $token){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/rankings/'.$contest);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function curl_get_all_contests($token){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/contests');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

function curl_get_present_contests($token, $limit){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.codechef.com/contests?status=present&limit='.$limit);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


    $headers = array();
    $headers[] = 'Accept: application/json';
    $headers[] = 'Authorization: Bearer '.$token;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    return $result;
}

