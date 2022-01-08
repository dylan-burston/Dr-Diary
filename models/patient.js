var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  medication: String,
  dosage: String,
  googleId: String
}, {
  timestamps: true
});
module.exports = mongoose.model('Patient', patientSchema);