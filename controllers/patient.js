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
    req.body._id = req.user._id;
    req.body.name = req.user.name;
    req.body.email = req.user.email;
    req.body.googleId = req.user.googleId;
    Patient.create(req.body);
    res.redirect('/patient');
}