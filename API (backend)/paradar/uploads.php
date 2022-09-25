<?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET,POST,DELETE, PUT, PATCH, OPTIONS');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header('Access-Control-Max-Age: 1728000');
// header('Access-Control-Lenght: 0');
// header('Content-Type: text/plain');
include "config.php";
$target_path = "images/";

$name=time();
$target_path = $target_path .$name. basename( $_FILES['file']['name']);

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {

    header('Content-type: application/json');
    $data = ['success' => true, 'message' => $target_path];
    echo json_encode( $data );
} else{
    header('Content-type: application/json');
    $data = ['success' => false, 'message' => 'There was an error uploading the file, please try again!'];
    echo json_encode( $data );
}

// try{
//    $bdd=new \pdo('mysql:host=localhost;dbname=test', 'root','',array(PD0::ATTR_EMULATE_PREPARES => false,PDO::ATTR ERRMODE
//         >PDO::ERRMODE_EXCEPTION));
// }
// catch(Exception $e){
//    echo 'Can\'t connect: '.$e->getMessage(). '<br/>';
// }

// if (isset($_FILES['image'])) {
//   $img = uploadImage('image');
//   $stmt=$bbd->prepare("INSERT INTO image (`id`, `image`) VALUES(:id, :image)");
//   $stmt->execute(array(':id' => NULL,  ':image' =>$img));
//   echo json_encode($_FILES['image']);
// }

// function uploadImage ($imgName){
//    if (isset($_FILES[$imgName])) {
//         $img_tmp = $_FILES[$imgName]['tmp_name'];
//         $imgFolder  = 'images/';
//         if (file_exists($img_tmp)){
//             $taille_maxi = 1000000;
//             $taille = filesize($_FILES[$imgName]['tmp_name']);
//             $imgsize = getimagesize($_FILES[$imgName]['tmp_name']);
//             $extensions =   array('.png', '.gif', '.jpg', '.jpeg');# Extensions allowed
//             $extension = strtolower(strrchr($_FILES[$imgName]['name'], '.'));

//                 if ($imgsize['mime'] == 'image/jpeg'){
//                     $img_src=imagecreatefromjpeg($img_tmp);
//                 }elseif ($imgsize['mime'] == 'image/png'){
//                     $img_src=imagecreatefrompng($img_tmp);
//                 }elseif ($imgsize['mime'] == 'image/gif'){
//                     $img_src = imagecreatefromgif($img_tmp);
//                   }

//                 $new_width = 380;
//                 $new_height = 380;
//                 $image_finale = imagecreatetruecolor($new_width, $new_height);

//                 imagecopyresampled($image_finale, $img_src, 0, 0, 0, 0, $new_width, $new_height, $imgsize[0], $imgsize[1]);
//                 $imgName = $imgFolder. '1'.'.jpg';
//                 imagejpeg($image_finale,$imgName);
//                 return $imgName;
//               }
//             }
//           }

?>
