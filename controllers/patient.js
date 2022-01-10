module.exports = {
    index,
}

let Patient = require('../models/patient');


function index(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        res.render('patient', { user: req.user, patient });
    })
}