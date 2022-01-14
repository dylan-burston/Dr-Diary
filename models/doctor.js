var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    patients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Doctor', doctorSchema);