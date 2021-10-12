// firebase.initializeApp(firebaseConfig);
var dbObj=firebase.database().ref('Register');
$('#Registerfetch').submit(function(e)
{
	e.preventDefault();
	// alert("data submitted succefully");
	//push the data into the server
	var data=dbObj.push();
	data.set({
		name:$('#name').val(),
        mobileNo:$('#mobile').val(),
        Email:$('#Emailid').val(),
        Twelth:$('#twelve').val(),
        Graduation:$('#graduation').val(),
        city:$('#exam_city').val(),
        Exam_slot:$('#exam_slot').val()
	});
	alert("Data Submitted Successfully");
	document.getElementById('Registerfetch').style.display="none";
	// document.getElementById('College_Detail').style.display="block";
	window.location.href="../template/dashbord.html";
	
});
