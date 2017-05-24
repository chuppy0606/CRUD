var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:String, // 유저 명
    password: String,
});

module.exports = mongoose.model('userInfo', userSchema);
