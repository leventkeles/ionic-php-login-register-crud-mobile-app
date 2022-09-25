<?PHP
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,DELETE, PUT, PATCH, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Max-Age: 1728000');
header('Access-Control-Lenght: 0');
header('Content-Type: text/plain');


$con = mysqli_connect("localhost", "root", "", "paradar") or die("could not connect to db");
?>
