var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  note_number:Number,
  note_name:String,
  note_body:String,
  user_name:String,
  date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('noteInfo', noteSchema);
