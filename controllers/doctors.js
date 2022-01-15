module.exports = {
    index,
    newPatient,
    viewPatientJournal,
    delete: deletePatient,
    setMeds,
}

let Doctor = require('../models/doctor');
let Patient = require('../models/patient');
let journals, meds, dosage;

function index(req, res, next) {
    
    let allPatients;

    Patient.find({}, function(err, patients) {
        allPatients = patients;
    })

    Doctor.findById(req.user._id)
    .populate('patients').exec(function(err, doctor) {
        Patient.find({_id: {$nin: doctor.patients}})
        .exec(function(err, myPatients) {
            res.render('doctor', { 
                user: req.user, 
                doctor, 
                journals, 
                myPatients, 
                patients: allPatients,
                meds,
                dosage
            })
        })
    })
}

function newPatient(req, res) {
    Doctor.findById(req.user._id, function (err, doctor) {
        Patient.findById(req.body.patient, function(err, patient){
            doctor.patients.push(patient._id);
            doctor.save();
            res.redirect('/doctor')
        })
    })
}

function viewPatientJournal(req, res) {
    Patient.findById(req.body.patient, function(err, patient) {
        journals = patient.journals;
    })
    res.redirect('/doctor');
}

function deletePatient(req, res) {
    Doctor.findById(req.user._id, function (err, doctor) {
        doctor.patients = doctor.patients.filter(patient => patient._id != req.params.patientId);
        doctor.save();
    })
    res.redirect('/doctor')
}

function setMeds(req, res) {
    Patient.findById(req.params.patientId, function (err, patient) {
        patient.meds = req.body.meds;
        patient.dosage = req.body.dosage;
        patient.save();
    })
    res.redirect('/doctor');
}
