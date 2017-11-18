var bodyParser = require('body-parser');

//connect to the database;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodely'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

var data = [{item: "Joe Shmoe"}, {item: "Nancy Pelosi"}, {item: "Carl Rove"}]
var urlEncodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){
	
	app.get('/list', function(req, res){
		res.render('list', {names: data });
	});
	
	app.post('/list', urlEncodedParser, function(req, res){
		data.push(req.body);
		res.json(data);
	});
	
	app.delete('/list/:item', function(req, res){
		 data = data.filter(function(list){
			 return list.item.replace(/ /g,'-') !== req.params.item;
		 });
		 res.json(data);
	});
	
	
};