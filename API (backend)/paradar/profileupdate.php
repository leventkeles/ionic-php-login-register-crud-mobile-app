<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$user_id = $_GET['user_id'];
$user_mail = $data['user_mail'];
$user_phone = $data['user_phone'];
$profile_desc = $data['profile_desc'];
$password = $data['password'];
$fullname = $_GET['fullname'];
$user_tc = $_GET['user_tc'];
$user_birth = $_GET['user_birth'];

$q = mysqli_query($con, "UPDATE `users` SET `user_mail` = '$user_mail', `user_phone`= '$user_phone', `profile_desc`='$profile_desc', `password`='$password' WHERE `user_id` = '{$user_id}' LIMIT 1");

if($q) {
  http_response_code(201);
    $message['status'] = "Success";
}else{
   http_response_code (422);
   $message['status'] = "Error";
}

echo json_encode ($message);
echo mysqli_error ($con);

 ?>
