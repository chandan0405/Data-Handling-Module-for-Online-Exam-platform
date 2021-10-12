<script type="text/javascript">
	function validate(){
		var u_name=document.getElementById('username').value;
		var u_mobile=document.getElementById('usermobile').value;
		var u_email=document.getElementById('email').value;
		var u_date=document.getElementById('userdate').value;
		var u_gender=document.getElementById('gender_select').value;
		var u_city=document.getElementById('city').value;
		var u_state=document.getElementById('state').value;

		if(u_name==""){
			document.getElementById('name_span').innerHTML="*this field is required";
			return false;
		}
              if(u_name.length<=3){
         	    document.getElementById('name_span').innerHTML="*Must Be grater than 3 chracter";
			    return false;
                 }
                      if(!isNaN(u_name)){
         	             document.getElementById('name_span').innerHTML="*Only chracter are Allowed";
			                    return false;

                             }


		if(u_mobile==""){
			document.getElementById('Phone_span').innerHTML="*this field is required";
			return false;
		}
		if(u_email==""){
			document.getElementById('email_span').innerHTML="*this field is required";
			return false;
		}

		if(u_date==""){
			document.getElementById('date_span').innerHTML="*this field is required";
			return false;
		}

		if(u_gender=="select gender"){
			document.getElementById('gender_span').innerHTML="*this field is required";
			return false;
		}

		if(u_city==""){
			document.getElementById('city_span').innerHTML="*this field is required";
			return false;
		}

		if(u_state==""){
			document.getElementById('State_span').innerHTML="*this field is required";
			return false;
		}
	}
	
</script>