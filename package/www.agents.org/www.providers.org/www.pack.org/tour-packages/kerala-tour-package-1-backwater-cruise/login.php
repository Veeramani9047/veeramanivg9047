<?php
$con = mysqli_connect('localhost', 'root', '','rev');
$review_title = $_POST['review_title'];
$review_descr = $_POST['review_descr'];
$sql = "INSERT INTO review VALUES ($review_title, $review_descr)";
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
?>
