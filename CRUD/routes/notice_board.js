//notice_board.js is a collection of functions required for the notice board.
var express = require('express');
var router = express.Router();
var noteInfo = require('../models/note.js');

//no use
router.get('/create', function(req, res, next) {
    res.render('create');
});

//After you click add button of add Modal
router.get('/schema_add', function(req, res, next) {
  var note_name = req.query.note_name;
  var note_body = req.query.note_body;
  var user_name = req.query.user_name;

  var note = new noteInfo();
  note.note_name = note_name;
  note.note_body = note_body;
  note.user_name = user_name;
  note.date = new Date();

  console.log(note.note_name);
  console.log(note.note_body);
  console.log(note.user_name);
  console.log("Here:"+note.date);

  note.save(function(err){
  if(err) console.log(err);
});

  res.redirect('/read');
});

//read
router.get('/read', function(req, res, next) {
  noteInfo.find({}).sort({date:1}).exec(function(err, raw) {
        if(err) throw err;
        res.render('read', {noteInfo: raw});
    });
  });

//delete
router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);

    noteInfo.findByIdAndRemove(id, function(err, rawUser) {
        if(err) throw err;
        res.redirect('/read');
    });
});

//After you click update button of update Modal
router.get('/update', function(req, res, next) {

  console.log("SUCCESS");
  //id's type is hidden, other's type is text or textarea
    var id = req.query.note_id;
    var notename = req.query.note_name;
    var notebody = req.query.note_body;
    var username = req.query.user_name;

    console.log("HERE:"+id+' '+notename+' '+notebody+' '+username);

  noteInfo.update({_id:id}, {$set: {note_name: notename, note_body: notebody, user_name: username}}, function(err){
       if(err) throw err;
       res.redirect('/read');
    });
});

module.exports = router;
