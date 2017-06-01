var express = require('express');
var router = express.Router();
var userInfo = require('../models/note.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});

module.exports = router;
