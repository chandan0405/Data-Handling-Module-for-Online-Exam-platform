firebase.initializeApp(firebaseConfig);
var databaseObject = firebase.database().ref('Scores');

$('#inner').submit(function(e)
{
	//avoid auto refresh
	e.preventDefault();
	// push the data into the server
	var data = databaseObject.push();
	data.set({

		// MCQ_Score:$(score),
		// SBQ_Score:$('#usermobile').val()
	});
	alert("good");

	});
