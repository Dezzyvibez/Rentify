<?php
session_start();
require_once 'config.php';

if(isset($_POST['signup'])){
	$email = trim($_POST['email']);
	$password = trim($_POST['password']);
	$cpassword = trim($_POST['cpassword']);
	
	//empty validation of fields
        if(empty($email ==  "" || $password ==  "" || $cpassword ==  "")){
            echo json_encode(['success' => false, 'error' => 'All Fileds are required!']);
			exit();

        } elseif($password != $cpassword){
			echo json_encode(['success' => false, 'error' => "Password does not match!"]);
			exit();
		}
        //password and confirm password length validation
        if(strlen($password) < 8 && strlen($cpassword) < 8){
            echo " Password can not be less than 5 characters";
        } elseif(strlen($password) > 30 && strlen($cpassword) > 30){
            echo "Password can not be more than 15 characters";
        } 
			
			//check if email already exist
			$stmt = $conn->prepare("SELECT * FROM guest WHERE email =?");
			$stmt->bind_param("s", $email);
			$stmt->execute();			
			$result = $stmt->get_result();
			if (($result->num_rows > 0)){
				echo json_encode(['success' => false, 'error' => 'User already exist']);
				exit();
			} 
			
			//Hashed password (recommended)
			$hashed_password = password_hash($password, PASSWORD_DEFAULT);
	
			//Insert new user
			$stmt = $conn->prepare ("INSERT INTO guest (email, password, cpassword) VALUES ('$email','$password','$cpassword')");
			$stmt->bind_param("ss", $email, $hashed_password);
			if($stmt->execute()){
				session_start();
				$_SESSION['email'] = $email;
				echo json_encode(['success' => true, 'redirect' => "login.html"]);
				header("Location:../login.html");
				exit();
			}
			else{
				echo json_encode(['success' => false, 'error' => 'Error:' . $conn->error]);
				exit();
			}
		}
$conn->close();

?>