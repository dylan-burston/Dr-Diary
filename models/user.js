var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isDoctor: Boolean,
  isStatusClicked: Boolean,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);