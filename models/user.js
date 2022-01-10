var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  isDoctor: Boolean,
  googleId: String
}, {
  timestamps: true
});
module.exports = mongoose.model('User', userSchema);