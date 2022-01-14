module.exports = {
    index,
    new: newPatient,
}

let Patient = require('../models/patient');

function index(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        res.render('patient', {user: req.user, patient });
    })
}

function newPatient(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        patient.phone = req.body.phone;
        res.redirect('/patient');
    })
    res.redirect('/patient');
}