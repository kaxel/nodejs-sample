
// functions.js
// ========
module.exports = {
	
    validate_form_submission: function (first_name, last_name, street_address, city, state, zip) {
		
		var regex = /([<>\/\\():;])/; // check for <> and slashes / and \ and () and :;
		var regex_zip = /([^0-9-])/;  // check for zipcode-ishness
		var function_reply = true;    // default is true unless proven otherwise
		
		//validate presence of fields
		if (!(first_name) || !(last_name) || !(street_address) || !(city) || !(state) || !(zip))
		{
			// send back false if we are missing fields (the form should have already checked);
			function_reply = false;
		};
		
		//check for SQL injection
		if ((regex.test(first_name)) || regex.test(last_name) || regex.test(street_address) || regex.test(city) || regex.test(state) || regex.test(zip) || regex_zip.test(zip))
		{
			function_reply = false;
		};
		
  	  return function_reply;
    }
	
}