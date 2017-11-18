var express = require('express');
var listController = require('./controllers/listController');

var app = express();

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
