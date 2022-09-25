<?php
include "config.php";


// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
//Add user
if(isset($_POST['myEmail']))
{
    $sql = "INSERT INTO users (email, username, passwd)
        VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."', '".$_POST['myPass']."')";
    if (mysqli_query($con,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $con->error);
        echo json_encode($data);

    }
}
die();


?>
