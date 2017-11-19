
// tools.js
// ========
module.exports = {
	
    validate_form_submission: function (first_name, last_name, street_address, city, state, zip) {
		
		var regex = /([<>\/])/;
		var function_reply = true;
		
		//validate presence of fields
		if (!(first_name) || !(last_name) || !(street_address) || !(city) || !(state) || !(zip))
		{
			function_reply = false;
		};
		
		//check for SQL injection
		if ((regex.test(first_name)) || regex.test(last_name) || regex.test(street_address) || regex.test(city) || regex.test(state) || regex.test(zip))
		{
			function_reply = false;
		};
		
  	  return function_reply;
    }
	
}