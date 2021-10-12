// firebase.initializeApp(firebaseConfig);
function fetchdata()
{
  firebase.database().ref('personldetails').once('value',function(snapshot)
  {
  	// alert("good");
  	snapshot.forEach(function(childsnapshot)
  	{
  		// alert('good');
  		var DBuserid=childsnapshot.val().Email;
  		var name1=childsnapshot.val().username;
  		var email1=childsnapshot.val().Email;
  		document.getElementById('username').innerHTML=name1;
  		document.getElementById('email').innerHTML=email1;
	    
  	});


  });
}
fetchdata();