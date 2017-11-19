const bodyParser = require('body-parser');
const mysql = require('mysql');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

//connect to the database;
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodely'
});

db.connect((err) => {
	if(err){
		throw err;
	}
	console.log('Mysql connected.');
});

var tools = require('../public/assets/functions');

module.exports = function(app){
	
	app.get('/list', function(req, res){
		// get list
		let sql = 'select * from names';
		let query = db.query(sql, (err, result) => {
			if(err) throw err;
			var rows = result;
			res.render('list', {names: rows});
		});
	});
	
	app.post('/list', urlEncodedParser, function(req, res){
		
		//console.log(req.body);
		// gather fields for INSERT
		var firstname = req.body.firstname.trim();
		var lastname = req.body.lastname.trim();
		var address_street = req.body.address_street;
		var address_city = req.body.address_city;
		var address_state = req.body.address_state;
		var address_zip = req.body.address_zip;
		console.log(firstname + " " + lastname + " at " + address_street + " in " + address_city + ", " + address_state + " " + address_zip);
		// last round of validations
		if (tools.validate_form_submission(firstname, lastname, address_street, address_city, address_state, address_zip)) {
			
			console.log("a record is being added to the database.");
		
			// INSERT QUERY
			let sql = "INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`) VALUES ('" + firstname + "', '" + lastname + "', '" + address_street + "', '" + address_city + "', '" + address_state + "', '" + address_zip + "');";
			//console.log(sql);
			let query = db.query(sql, (err, result) => {
				if(err) {throw err}
				else {
					console.log("time to add " + firstname + " to the front end.");
				};
				res.redirect('/list');
			});
			
		} else {
			console.log("server side validation has failed.");
			var url_string = '/list?failed_server_validation=1&fname='+firstname+'&lname='+lastname;
			res.redirect(url_string);
		};
		
		
	});
	
	//use req.params.item for delete
	app.delete('/list/:item', function(req, res){
		// get list
		let sql = 'delete from names where id=' + req.params.item + ";";
		//console.log(sql);
		let query = db.query(sql, (err, result) => {
			if(err) throw err;
			res.redirect('/list');
		});
	});
};