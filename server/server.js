var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var config = require('./config');
var Idea = require('./models/idea');

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

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})

app.listen(7777);
