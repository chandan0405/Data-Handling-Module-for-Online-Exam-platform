firebase.initializeApp(firebaseConfig);
var databaseObject=firebase.database().ref('school');
$('#School_detail').submit(function(e)
{
	//avoid  auto refreshment
	e.preventDefault();
	// alert("data submitted succefully");
	//push the data into the server
	var data=databaseObject.push();
	data.set({
		Board_12th:$('#Bord_12th').val(),
        college_name:$('#college_name').val(),
        school_mark:$('#sc_mark').val(),
        Pattern:$('#marks_twelvfth').val(),
        Twelth_pass:$('#Twelth_pass').val()
	});
	alert("Data Submitted Successfully");
	document.getElementById('School_detail').style.display="none";
	// document.getElementById('College_Detail').style.display="block";
	document.location.href="../template/college_Part.html";
	
});

var databaseObject1=firebase.database().ref('College');
$('#College_Detail').submit(function(e)
{
	//avoid  auto refreshment
	e.preventDefault();
	// alert("data submitted succefully");
	//push the data into the server
	var data=databaseObject1.push();
	data.set({
		Qualalification:$('#Qual').val(),
        college_name:$('#coll_name').val(),
        Semester:$('#Sem').val(),
        department:$('#dept_name').val(),
        aggregate_marks:$('#aggr_marks').val()
	});
	alert("Data Submitted Successfully");
	document.getElementById('College_Detail').style.display="none";
	// document.getElementById('College_Detail').style.display="block";
	// document.location.href="../index/college_Part.html"
	
});

function retrack()
{
	window.location.href="../template/dashbord.html";
}