<?php 

require_once('connection.php');

header('Access-Control-Allow-Origin: *'); 

 $username=$_POST['username'];
 $hashed_password=sha1($_POST['password']);

//  $hash=sha1("kavindya");
// echo $hash;
$sql="SELECT * FROM user WHERE username='{$username}' AND password='{$hashed_password}' ";

$result=mysqli_query($connection,$sql);

if(mysqli_num_rows($result)==1){
   $success=true; 
}
else{
    $success=false;
}

echo json_encode($success);

?>
