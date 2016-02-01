var mongoose 	= require('mongoose');
var timestamps = require("mongoose-times");
var Schema  = mongoose.Schema;

var IdeaSchema = new Schema ({
   header		: {type: String, required: true},
   desc 		: {type: String, required: true},
   location	: {type: String, required: true},
   creator	: {type: String, required: true},
   points   : {type: Number, required: true},
   labels   : {type: [String], required: false}
 });

IdeaSchema.plugin(timestamps);
module.exports = mongoose.model('Idea', IdeaSchema);
