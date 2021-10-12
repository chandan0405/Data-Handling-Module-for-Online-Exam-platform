
function personalDetails() {
	// alert('All Good!!Please,Fill Personal Details');
	window.location.href = "../template/Personal.html";
}

function educationalDetails() {
	// alert('All Good!!Please,Fill Educational Details');
	window.location.href="../template/edu.html";
}

function register() {
	// alert('All Good!!! Please,Register');
	window.location.href = "../template/regbtn.html";
}

function examRegister() {
	// alert('All Good!! Please,Register for exam');
}

function logOut() 
{
	authenticationObject.signOut();
	alert('Logout Successfully');
	window.location.href = "../index.html";
}
function examRegister()
{
	window.location.href="../template/exam.html";
}