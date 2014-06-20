var express = require('express');
var router = express.Router();
//var fs = require('fs');

/* GET home page.
router.get('/', function(req, res) {
  res.render('index.jade', { title: 'Express' });
});
*/

/*
router.get('/', function(req, res) {
 	fs.readFile('index.html', function(error, data) {
 		res.writeHead(200, { 'Content-Type': 'text/html' });
 		res.end(data);
	 });
 })
*/


router.get('/', function(req, res) {
	res.render( 'index.html');
});


module.exports = router;
