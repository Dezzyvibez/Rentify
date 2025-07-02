<?php
require_once 'config.php';
error_reporting(-1);
ini_set('display_errors', 1);


	// LOGIN
if(isset($_POST['login'])){
	$email = trim($_POST['email']);
	$password = trim($_POST['password']);
	
	//empty validation of fields
        if(empty($email == "") || empty($password == "")){
            echo "Please all fileds are required!";
			exit();
		}
		
		//check if user exist
		$stmt = $conn->prepare("SELECT * FROM guest WHERE email = '$email'");
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$result = $stmt->get_result();
		
		if($result->num_rows > 0){
			$user = $result->fetch_assoc();
			if ($password_verify($password, $user['password'])){
					session_start();
					$_SESSION['email'] = $email;
					header("Location:php/dashboard.php");
					exit();
				}else{
				echo "Invalid password";
			}
		}else{
			echo "Email not found";
		}
	}

?>