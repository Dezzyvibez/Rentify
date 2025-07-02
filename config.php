<?php
	$host = "localhost";
	$username = "root";
	$password = "";
	$database = "rentifier";
	$conn = new mysqli($host, $username,$password,$database);

	if ($conn->connect_error) {
		echo " Please check database information again";
		die("Connection failed:" . $conn->connect_error );
}


?>