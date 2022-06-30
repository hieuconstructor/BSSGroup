function functionLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username == ""){
  	document.getElementById("error_username").innerHTML = "Please enter your username!";
  	setTimeout(function(){ document.getElementById("error_username").style.display="none"; }, 2000);
  	return false;
  }

  if(password == ""){
  	document.getElementById("error_password").innerHTML = "Please enter your password!";
  	setTimeout(function(){ document.getElementById("error_password").style.display="none"; }, 2000);
  	return false;
  }

  if(username != "john"){
  	document.getElementById("error_").innerHTML = "Username or password is not correct!";
  	setTimeout(function(){ document.getElementById("error_").style.display="none"; }, 2000);
  	return false;
  }

  if(password != "1234"){
  	document.getElementById("error_").innerHTML = "Username or password is not correct!";
  	setTimeout(function(){ document.getElementById("error_").style.display="none"; }, 2000);
  	return false;
  }



  if(username == "john" && password == "1234"){
  	alert("Login succesful !!");
  	window.location = "device_management.html"; // Redirecting to other page.
	return false;
  }
}
