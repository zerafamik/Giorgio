function checkUsername()
{
	var usernameInput = document.getElementById("usernameTxt").value;


	if(usernameInput.length >= 8  && usernameInput.length <= 16)
	{
		document.getElementById("usernameTitle").style.color = "#8cff66";
	}

	else
	{
		document.getElementById("usernameTitle").style.color = "#8EAEBD";
	}
}

function checkEmail()
{
	var emailInput = document.getElementById("EmailTxt").value;

	if(emailInput.length >= 8)
	{
		document.getElementById("EmailTitle").style.color = "#8cff66";
	}

	else
	{
		document.getElementById("EmailTitle").style.color = "#8EAEBD";
	}
}

function checkPasswordValid()
{
	var passwordInput = document.getElementById("passwordTxt").value;

	if(passwordInput.length >= 8  && passwordInput.length <= 16)
	{
		document.getElementById("passwordTitle").style.color = "#8cff66";
	}

	else
	{
		document.getElementById("passwordTitle").style.color = "#8EAEBD";
	}
}


function checkConfirmPasswordValid()
{
	var passwordInput = document.getElementById("passwordTxt").value;
	var confirmPasswordInput = document.getElementById("confirmPasswordTxt").value;

	if(confirmPasswordInput >= 8 && confirmPasswordInput == passwordInput)
	{
		document.getElementById("confirmPasswordTitle").style.color = "#8cff66";
	}

	else
	{
		document.getElementById("confirmPasswordTitle").style.color = "#8EAEBD";
	}
}
