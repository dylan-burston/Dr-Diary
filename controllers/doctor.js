module.exports = {
    index,
    newPatient,
    viewPatientJournal,
    delete: deletePatient
}

let Doctor = require('../models/doctor');
let Patient = require('../models/patient');
let journals;

function index(req, res, next) {
    Doctor.findById(req.user._id, function (err, doctor) {
        Patient.find({}, function(err, patients) {
            // console.log(patients);
            res.render('doctor', { user: req.user, doctor, patients, journals })
        })
    })
}

function newPatient(req, res, next) {
    Doctor.findById(req.user._id, function (err, doctor) {
        Patient.findById(req.body.patient, function(err, patient){
            doctor.patients.push(patient);
            doctor.save();
            res.redirect('/doctor')
        })
    })
}

function viewPatientJournal(req, res, next) {
    Patient.findById(req.body.patient, function(err, patient) {
        journals = patient.journals;
    })
    res.redirect('/doctor');
}

function deletePatient(req, res, next) {
    console.log(req.params.patientId);
    Doctor.findById(req.user._id, function (err, doctor) {
        doctor.patients = doctor.patients.filter(patient => patient._id != req.params.patientId);
        doctor.save();
    })
    res.redirect('/doctor')
}