firebase.initializeApp(firebaseConfig);
function fetchdata()
{
	firebase.database().ref('personldetails').once('value',function(snapshot)
	{
         // alert("good");
      snapshot.forEach(function(childsnapshot)
  	  {
  			//fetching and storing in to variable 
  		var name1=childsnapshot.val().username;
      var phone_no=childsnapshot.val().usermobile;
  		var email1=childsnapshot.val().Email;
      //setting the data
  		document.getElementById('name').value = name1;
  		document.getElementById('mobile').value=phone_no;
  		document.getElementById('Emailid').value=email1;
        });
	});
  firebase.database().ref('school').once('value',function(snapshot)
  {
         // alert("good");
      snapshot.forEach(function(childsnapshot)
      {
        // alert('good');
        //fetchinng 12th marks and storing into variable  
      var twelvth1=childsnapshot.val().school_mark;     
      //setting the data
      document.getElementById('twelve').value = twelvth1;
     
        });
  });

  firebase.database().ref('College').once('value',function(snapshot)
  {
         // alert("good");
      snapshot.forEach(function(childsnapshot)
      {
        // alert('good');
        //fetching the graduation marks and store in to variable
      var GraduationMark=childsnapshot.val().aggregate_marks;     
      //setting the data
      document.getElementById('graduation').value = GraduationMark;
     
        });
  });

}

fetchdata();