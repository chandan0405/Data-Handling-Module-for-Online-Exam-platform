<script >
	function validate() {
		 var userinput=document.getElementById('Tenth_mark').value;
		 var user_scool=document.getElementById('scool_name').value;
		 var user_Tenth_passid=document.getElementById('Tenth_passid').value;
		 var user_sc_mark=document.getElementById('sc_mark').value;
		 var user_college_name=document.getElementById('college_name').value;
		 var user_Twelth_pass=document.getElementById('Twelth_pass').value;
		 
		//10th mark input field
		 if(userinput=="")
		 {
		 	document.getElementById('sch_span').innerHTML="**this is required Detail";
		 	return false;
		 }
          

         //10th school input field Restriction

		 if(user_scool=="")
		 {
		 	document.getElementById('sch_namespan').innerHTML="**this is required Detaile";
		 	return false;
		 }
		 if((user_scool.length<=2)||(user_scool.length>20)){
          	document.getElementById('sch_namespan').innerHTML="**length must be between 2 and 20 character";
		 	return false;
          }
          if(!isNaN(user_scool)){
          	document.getElementById('sch_namespan').innerHTML="**only character are allowed";
		 	return false;
          }

         //10th passing year input field restriction
		 if(user_Tenth_passid=="")
		 {
		 	document.getElementById('sch_pass_span').innerHTML="*this is required Detail";
		 	return false;
		 }

		 //12th marks input field restriction
		 if(user_sc_mark=="")
		 {
		 	document.getElementById('sch_marks_span').innerHTML="**this is required Detail";
		 	return false;
		 }
		 
		 //12th college name input field restriction
         if(user_college_name==""){
         	document.getElementById('coll_span').innerHTML="**this is required Detail";
		 	return false;
         } 
		 if((user_college_name.length<=2)||(user_college_name.length>200)){
          	document.getElementById('coll_span').innerHTML="**length must be between 2 and 200 character";
		 	return false;
          }
          if(!isNaN(user_college_name)){
          	document.getElementById('coll_span').innerHTML="**only character are allowed";
		 	return false;
          } 

          //   12th Passing year input restriction
          if(user_Twelth_pass=="")
		 {
		 	document.getElementById('coll_pass_span').innerHTML="**this is required Detail";
		 	return false;
		 }

		 
		
		 
	}
	
</script>
<script >
	function validation(){
		var userinput=document.getElementById('coll_name').value;
		 var user_aggr_marks=document.getElementById('aggr_marks').value;
          var  Qual1=document.getElementById('Qual').value;
          var Semesters=document.getElementById('Sem').value;
          
        //Graduate level College Name
          if(userinput=="")
		 {
		 	document.getElementById('coll_name_span').innerHTML="*this is required Detail ";
		 	return false;
		 }
		 if((userinput.length<=3)){
          	document.getElementById('coll_name_span').innerHTML="**length must be between grater than 2";
		 	return false;
          }
          if(!isNaN(userinput)){
          	document.getElementById('coll_name_span').innerHTML="**only character are allowed";
		 	return false;
          }

          //validation of Qualification and Also Restriction
          if(Qual1=="Select Qualification"){
          	document.getElementById('Qual_span').innerHTML="Please select Qualification";
          	return false;
          }
          // return true;

          if(Semesters=="Select semester"){
          	document.getElementById('semester_span').innerHTML="Please select semester";
          	return false;
          }
          // return true;


          //aggregete marks
         if(user_aggr_marks=="")
		 {
		 	document.getElementById('Agg_span').innerHTML="**this is required Detail";
		 	return false;
		 }
	}
</script>