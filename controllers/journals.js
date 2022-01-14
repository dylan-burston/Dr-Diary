module.exports = {
    index,
    new: getJournalForm,
    show: showJournal,
    create: newJournal,
    edit: editJournal,
    update: updateJournal,
    delete: deleteJournal,
}

let Patient = require('../models/patient');

function index(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        res.render('journals/index', { user: req.user, patient });
    })
}

function getJournalForm(req, res, next) {
    res.render('journals/new');
}

function newJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        patient.journals.push(req.body);
        patient.save();
    })
    res.redirect('/journals');
}

function showJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        let journal = patient.journals.filter(journal => journal._id == req.params.id)[0];
        res.render('journals/show', { journal })
    })
}

function editJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        let journal = patient.journals.filter(journal => journal._id == req.params.id)[0];
        res.render('journals/edit', { journal })
    })
}

function updateJournal(req, res, next) {
    Patient.findById(req.user._id, function (err, patient) {
        let journal = patient.journals.filter(journal => journal._id == req.params.id)[0];
        journal.body = req.body.body;
        patient.save();
        res.redirect(`/journals/${journal._id}`);
    })
}

function deleteJournal(req, res, next) { 
    Patient.findById(req.user._id, function (err, patient) {
        patient.journals = patient.journals.filter(journal => journal._id != req.params.id);
        patient.save();
        res.redirect("/journals/");
    })
}