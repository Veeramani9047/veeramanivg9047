<?php


$con = mysqli_connect('localhost', 'root', '','svs');

$user = $_POST['user'];
$email = $_POST['email'];
$password = $_POST['password'];


$sql = "INSERT INTO tourism  VALUES ('$user', '$email', '$password')";

$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>