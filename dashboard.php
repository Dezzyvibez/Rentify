<?php
session_start();
echo $_SESSION['email'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title"> Dashboard  </title>
    <link rel="stylesheet" href="dashboard.css">
	<link rel="icon" href="img/Rentify-Logo3.png" type="image/x-icon"/>
	
</head>
<body>

    <!-- Navigation Bar -->
    <header id="header">
            <div class="logo">
			<img src="img/Rentify-Logo4.png"/>
                <h1>Rentify</h1>
            </div>
			
	  <div class="hamburger">
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	  </div>

		<div class="searchbar">
			<form id="mySearch" method="post" action="">
					<input type="text" id="searchbox" name="searchbox" autocomplete="off" placeholder="Search for listings, location....."/>
					<input type="submit" id="searchbutton" name="submit" value="&#x1f50d"/>
			</form>		
		</div>
		
		<div class="profile">
			<span>&#x2709</span>
			<span>&#x1F514</span>
			
			<img src="img/image3.jpg" class="profilepic" id="profilepic" alt="profile pic" width="100%">
			<p class="username" id="profilename">Users Name</p>
		
		
		</div>

    </header>

<div class="container">
			
					<div class="nav">
						<ul>
							<li><a href="index.html" class="active"><span class="active">&#x2756</span>Dashboard</a></li>
							<li><a href="index.html" ><span>&#x2302</span>My Property</a></li>
							<li><a href="Contact.html"><span>&#x1F4C4</span>Application </a></li>
							<li><a href="Contact.html"><span>&#x1f4c5</span>My Plan </a></li>
							<li><a href="Contact.html"><span>&#x265E</span>Renter List </a></li>
							<li><a href="Contact.html"><span>&#x2699</span>Settings</a></li>
							<li><a href="index.html" ><span>&#8505</span>Help</a></li>
							<li><a href="About.html" ><span>&#xf2f5</span>Logout</a></li>
						</ul>
						
						
						<ol>
							
							
						</ol>
					</div>
			


			<div class="dashboard-content">
				
				<div class="dashboarddetail">
						<header> <h1>Welcome Adeniran</h1><br>
							<p> This is your portfolio report </p>
									<canvas id="myCanvas" width="200" height="200"></canvas>
						</header>
				</div>
				
				<div class="Properties">
						<header> <h1>Welcome <span>User Name </span> </h1></header>
				</div>
				
				<div class="Analytics">
						<header> <h1>Welcome <span>User Name </span> </h1></header>
				</div>
			
			</div>
			
			


</div>


<script src="chart.js"></script>
<script src="slider.js"></script>
</body>
</html>
