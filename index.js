var express = require('express'),
	http = require('http'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan');

app.get("/faiq", function(req, res){
	res.send("faiq is my ruler...not");
})

app.listen(1033);

app.get("/", function(req,res){
	console.log(req)
	res.sendfile("index.html")
})

