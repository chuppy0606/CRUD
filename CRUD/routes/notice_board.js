var express = require('express');
var router = express.Router();
var userInfo = require('../models/user.js');

router.get('/schema_add', function(req, res, next) {
  var name = req.query.id;
  var password = req.query.pwd;

  var user = new userInfo();
  user.name = name;
  user.password = password;

  console.log("user-Schema add!");
  console.log(user.name);
  console.log(user.password);

  user.save(function(err){
  if(err) console.log(err);
});

  res.redirect('/');
});

module.exports = router;
