require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var mongoose = require('mongoose');
var morgan = require('morgan');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');

var config = require('./config');
var routes = require('./app/routes');
var Idea = require('./models/idea');

var app = express();

mongoose.connect(config.dbUrl);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB');
});

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use(morgan('dev'));


var apiRouter = express.Router();


apiRouter.route('/ideas')

	.post(function(req, res){
		var idea = new Idea();
	    idea.header = req.body.header;
      idea.desc = req.body.desc;
	    idea.creator = req.body.creator;
	    idea.location	= req.body.location;
      idea.points	= req.body.points;
      idea.labels	= req.body.labels;

	    idea.save(function(err) {
	    	if (err){
	    		res.send(err);
	    	}
	    	res.json({ message: 'Idea created!' });
	    });
	})

	.get(function(req, res){
		Idea.find(function(err, ideas){
			if (err){
				res.send(err);
			}
			res.json(ideas);
		});
	});

apiRouter.route('/ideas/:idea_id')
	.get(function(req, res){
		Idea.findById(req.params.idea_id, function(err, idea){
			if (err){
				res.send(err);
			}
			res.json(idea);
		});
	})

	.put(function(req, res){
		Idea.findById(req.params.idea_id, function(err, idea){
			if (err){
				res.send(err);
			}

			if(req.body.header) idea.header = req.body.header;
			if(req.body.desc) idea.desc = req.body.desc;
			if(req.body.creator) idea.creator = req.body.creator;
			if(req.body.location) idea.location = req.body.location;
      if(req.body.points) idea.creator = req.body.points;
			if(req.body.labels) idea.location = req.body.labels;

			idea.save(function(err){
				if (err){
					res.send(err);
				}
				res.json({message: 'Idea updated!'});
			});
		});
	})

	.delete(function(req, res){
		Idea.remove({
			_id: req.params.idea_id
		}, function(err, idea){
			if(err, idea){
				return res.send(err);
			}
			res.json({message: 'Idea successfully deleted!'});
		});
	});

app.use('/api', apiRouter);

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
