<!DOCTYPE html>
<html>
	<head>
			<Title> Giorgio </Title>
			<link rel = "stylesheet" href = "../css/webCss.css"> </link>
			<script src="../js/signUpValidation.js"></script>
			<script src="../js/contentLoader.js"></script>
			<script src="../js/GiorgioScript.js"></script>
			<script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
	</head>


	<header onload = "giveFunctionalityToNav()">

		<img src = "../logo/GiorgioLogoOriginal.png" alt = "Giorgio Logo"/>

		<nav>
			<ul>
				<li> <a href="javascript: loadHome();" > Home </a> </li>
				<li> <a href="javascript: loadAbout();" >About </a> </li>
				<li> <a href="javascript:loadLogin();" > Login </a> </li>
				<li> <a href="javascrip: loadSignup();"> Sign Up </a> </li>
				<li> <a href="javascript: loadHighscores();"> HighScores </a> </li>
			</ul>
		</nav>

	</header>