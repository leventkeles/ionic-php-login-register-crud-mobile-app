<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$advert_title = $data['advert_title'];
$advert_desc = $data['advert_desc'];
$location = $data['location'];
$price = $data['price'];
$deadline = $data['deadline'];
$workarea = $data['workarea'];
$userId_FK = $data['userId_FK'];
$id = $_GET['id'];
$name=time();
$invertImg =$name. basename( $_FILES['file']['name']).$data['invertImg'];

$q = mysqli_query($con, "UPDATE `advert` SET `advert_title` = '$advert_title', `advert_desc`= '$advert_desc', `location`='$location', `price`='$price', `deadline`='$deadline', `workarea`='$workarea' , `invertImg`='$invertImg' WHERE `id` = '{$id}' LIMIT 1");

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
