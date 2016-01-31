var mongoose 	= require('mongoose');
var Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  ideaId: { type: String, unique: true, index: true },
  header: String,
  desc: String,
  location: String,
  creator: String,
  points: Number,
  added: { type: Date, default: Date.now },
  labels: [String]
});

module.exports = mongoose.model('Idea', IdeaSchema);
