function fetchdata()
{
	firebase.database().ref('school').once('value',function(snapshot)
	{
     snapshot.forEach(function(childsnapshot)
     {
       // alert('good');
       var score=childsnapshot.val().school_mark;
       if(score<60)
       {
       	// alert('good');
       	document.getElementById('mcq_btn').disabled=true;
       	document.getElementById('sbq_btn').disabled=true;
       }
     });
	});
}
fetchdata();


function mcq()
{
  window.location.href="../template/mcq.html";
}

function sbq()
{
  window.location.href="../template/sbq.html";
}

function backtodashboard()
{
  window.location.href="../template/dashbord.html";
}