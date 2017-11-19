var bodyParser = require('body-parser');

const mysql = require('mysql');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

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

module.exports = function(app){
	
	app.get('/list', function(req, res){
		
		if (req.params.added==1) {
			alert("turn it on!");
			document.getElementById("hidden-main-list").style.display = "block";
		};
		
		// get list
		let sql = 'select * from names';
		let query = db.query(sql, (err, result) => {
			if(err) throw err;
			//console.log(result);
			
			var rows = result;
			//console.log(rows);
			
			res.render('list', {names: rows});
		});
		
		
	});
	
	app.post('/list', urlEncodedParser, function(req, res){
		// gather fields for INSERT
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var address_street = req.body.address_street;
		var address_city = req.body.address_city;
		var address_state = req.body.address_state;
		var address_zip = req.body.address_zip;
		console.log(firstname + " " + lastname + " at " + address_street + " in " + address_city + ", " + address_state + " " + address_zip);
		console.log("is being added to the database.");
		
		// INSERT QUERY
		let sql = "INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`) VALUES ('" + firstname + "', '" + lastname + "', '" + address_street + "', '" + address_city + "', '" + address_state + "', '" + address_zip + "');";
		//console.log(sql);
		let query = db.query(sql, (err, result) => {
			if(err) {throw err}
			else {
				//cleanup
				console.log("time to add " + firstname + " to the front end.");
			};
			res.redirect('/list');
		});
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