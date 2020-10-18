var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  last_name: String,
  username: String,
  password: String,
  position: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');