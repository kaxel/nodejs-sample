const express = require('express');
const listController = require('./controllers/listController');
const mysql = require('mysql');

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

const app = express();

//set up the template engine
app.set('view engine', 'ejs'); 

//set up  static files
app.use(express.static('./public'));

//fire controller
listController(app);

//port listener
app.listen('3000', () => {
	console.log('You are listening to the sound of port 3000');
});


// USING MVC
