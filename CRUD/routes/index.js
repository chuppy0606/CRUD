var express = require('express');
var router = express.Router();
var userInfo = require('../models/user.js');

router.get('/create', function(req, res, next) {
    res.render('create');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HELLO' });
});

module.exports = router;
