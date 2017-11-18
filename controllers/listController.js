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
		
		// get list
		let sql = 'select id, first, last from names';
		let query = db.query(sql, (err, result) => {
			if(err) throw err;
			console.log(result);
			
			var rows = result.map(function(x) {
   			    return x.first + " " + x.last + " : " + x.id;
			});
			console.log(rows);
			
			res.render('list', {names: rows });
		});
		
		
	});
	
	app.post('/list', urlEncodedParser, function(req, res){
		data.push(req.body);
		res.json(data);
	});
	
	//use req.params.item for delete
	
	app.delete('/list/:item', function(req, res){
		// get list
		let sql = 'delete from names where id=' + Math.abs(parseInt(req.params.item.split(":")[1])) + ";";
		console.log(sql);
		let query = db.query(sql, (err, result) => {
			if(err) throw err;
			console.log(result);
			// get jquery to remove the div - TODO
			res.redirect('/list');
		});
		
	});
	
	
};