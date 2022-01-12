var mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title: String,
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

var doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    patients: [patientSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Doctor', doctorSchema);