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

apiRouter.route('/ideas')						// on routes that end in /ideas

		.post(function(req, res){
			var idea = new Idea();					// create a new instance of the idea model
			idea.header 	= req.body.header;		// set the idea information (comes from the request)
		    idea.desc  		= req.body.desc;
		    idea.creator	= req.body.creator;
		    idea.location	= req.body.location;

		    idea.save(function(err) {
		    	if (err){
		    		res.send(err);
		    	}
		    	res.json({ message: 'Idea created!' });
		    });
		})

		.get(function(req, res){					// get all ideas in the database
			Idea.find(function(err, ideas){
				if (err){
					res.send(err);
				}
				res.json(ideas);
			});
		});

	apiRouter.route('/ideas/:idea_id')								// on routes that end in /ideas/:idea_id
		.get(function(req, res){									// get the idea with that id
			Idea.findById(req.params.idea_id, function(err, idea){
				if (err){
					res.send(err);
				}
				res.json(idea);										//return that idea
			});
		})

		.put(function(req, res){									//update the idea with this id
			Idea.findById(req.params.idea_id, function(err, idea){
				if (err){
					res.send(err);
				}

				if(req.body.header) idea.header 	= req.body.header;	//update the idea header if it's new
				if(req.body.desc) idea.desc 		= req.body.desc;	//update the idea desc if it's new
				if(req.body.creator) idea.creator 	= req.body.creator;	//update the idea creator if it's new
				if(req.body.location) idea.location = req.body.location;	//update the idea creator if it's new

				idea.save(function(err){
					if (err){
						res.send(err);
					}
					res.json({message: 'Idea updated!'});
				});
			});
		})

		.delete(function(req, res){									//delete the idea with this id
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
