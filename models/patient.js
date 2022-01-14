var mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  body: String,
}, {
  timestamps: true
});

var patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  meds: String,
  dosage: String,
  googleId: String,
  journals: [journalSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Patient', patientSchema);