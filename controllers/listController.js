var bodyParser = require('body-parser');

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