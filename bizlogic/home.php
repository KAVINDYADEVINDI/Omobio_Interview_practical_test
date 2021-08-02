<?php 
//import require connection.php file
require_once('connection.php');

header('Access-Control-Allow-Origin: *'); 

//  $hash=sha1("kavindya");
// echo $hash;
$sql="SELECT * FROM user";

$result=mysqli_query($connection,$sql);

if($result){
   $rows = array();
    while($records = mysqli_fetch_assoc($result)) {
        $rows[] = $records;
    }
  
}

else{
    echo "No Available Users";
}

print json_encode($rows);

?>
