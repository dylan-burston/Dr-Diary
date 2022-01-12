module.exports = {
    new: newJournal,
    show: showJournal,
}

let Patient = require('../models/patient');

function newJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        patient.journals.push(req.body);
        patient.save();
    })
    res.redirect('/patient');
}

function showJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        let journal = patient.journals.filter(journal => journal._id == req.params.id)[0];
        // console.log(journal);
        res.render('journal', { journal })
    })
}