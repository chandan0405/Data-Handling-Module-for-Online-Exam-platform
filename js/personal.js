firebase.initializeApp(firebaseConfig);

var db = firebase.database().ref('personldetails');

$('#presonal_detail').submit(function(e)
{
	//avoid auto refresh
	e.preventDefault();
	// push the data into the server
	var data = db.push();
	data.set({
		username:$('#username').val(),
		usermobile:$('#usermobile').val(),
		Email:$('#email').val(),
		DOB:$('#userdate').val(),
		gender:$('#gender_select').val(),
		city:$('#city').val(),
		state:$('#state').val()

	});
	alert('Data Submited Successfully');
	// hide the personal details container,display the edu container
	document.getElementById('personal-details').style.display='none';
	// window.location.href = "../template/dashbord.html";
	});
function retrack()
{
	window.location.href="../template/dashbord.html";
}