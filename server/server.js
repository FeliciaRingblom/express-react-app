var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var config = require('./config');

var app = new express();

mongoose.connect(config.dbUrl);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public/js'));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})


var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', apiRouter);

app.listen(7777);
