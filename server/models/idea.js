var mongoose 	= require('mongoose');
var Schema  = mongoose.Schema;

var IdeaSchema = new Schema ({
   header		: String,
   desc 		: String,
   location	: String,
   creator	: String
});

module.exports = mongoose.model('Idea', IdeaSchema);
