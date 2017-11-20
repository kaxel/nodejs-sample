var express = require('express');
var listController = require('./controllers/listController');

var app = express();

//set up the template engine
app.set('view engine', 'ejs'); 

//set up static files
app.use(express.static('./public'));
app.use(function(req, res, next){
    console.log('incoming req : ' + req.url);
    next();
});

app.get('/', function (req, res) {
  res.redirect('/list');
})

//fire controller
listController(app);

//port listener
app.listen('3000', () => {
	console.log('You are listening to the sound of port 3000');
});
