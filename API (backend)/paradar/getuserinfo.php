<?php
include "config.php";
$data = array();
$user_id = $_GET['user_id'];
$q = mysqli_query($con, "SELECT * FROM `users` WHERE `user_id` = $user_id LIMIT 1");


while ($row = mysqli_fetch_object ($q)){
  $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($con);


 ?>
