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
$title = str_replace("'", "\'", $advert_title);
$text = str_replace("'", "\'", $advert_desc);

$name=time();
$invertImg =$name.basename($_FILES['file']['name']).$data['invertImg'];
$q = mysqli_query($con, "INSERT INTO `advert` (`advert_title`, `advert_desc`, `location`, `price`, `deadline`, `workarea`, `userId_FK`, `invertImg`) VALUES ('$title','$text', '$location', '$price', '$deadline', '$workarea', '$userId_FK', '$invertImg')");



if($q) {
   http_response_code (201);
   $message['status'] = "Success";
} else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysql_error($con);
 ?>
