 function createaccount()
 {
 	// document.getElementById('modalcontainer').style.display="block";
 	document.getElementById('SignupContainer').style.display="block";
 	document.getElementById('loginContainer').style.display="none";
 	document.getElementById('alertmessage').innerHTML="Create Account";
 	// document.getElementById('modalcontainer').style.display="none";
 }

function signup() {
   //fetch the data
    //document.getElementById('ring').style.display="block";
   var user_id = document.getElementById('signupinput').value;
   var password1 = document.getElementById('signuPpass').value;
   //create account
   firebase.auth().createUserWithEmailAndPassword(user_id,password1).then((success)=>
   {
      // document.getElementById('ring').style.display="block";
      alert('Account Created Successfully');
      //enable message verification container and disable signup-contaner
      document.getElementById('SignupContainer').style.display='none';
      document.getElementById('loginContainer').style.display="block";

   }).catch((error)=>
   {
      alert('something wrong');
      document.getElementById('something went wrong ').innerHTML='Create Account';
      // document.getElementById("modalcontainer").style.display="none";

   });
}

function login()
{
	document.getElementById('SignupContainer').style.display='none';
	// document.getElementById('ring').style.display="block";
	var userid = document.getElementById('logininput').value;
      var password = document.getElementById('loginpass').value;
      // alert(userid+password);
      // validate the data from the server
      firebase.auth().signInWithEmailAndPassword(userid, password).then((success)=>
      {
         alert("Login Successfully");
         // document.getElementById("modalcontainer").style.display="none";
         //hide the signup-container and login-container
         // document.getElementById('verification-container').style.display='none';
          // document.getElementById('loginContainer').innerHTML='Dashboard';
         // document.getElementById('SignupContainer').style.display='none';
         // document.getElementById('dashboardContainer').style.display='block';
         // document.getElementById('alertmessage').style.display="none";
         window.location.href = "template/dashbord.html";
      }).catch((error)=>
      {
         alert("Invalid credintials");
         // document.getElementById("modalcontainer").style.display="none";
      });
}