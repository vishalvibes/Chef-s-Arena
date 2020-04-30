<?php

$dbServername = $_ENV["HTTP_DB_SERVER"];
$dbUsername = "my_user";
$dbPassword = "password";
$dbName = "testreact";

$db = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);
