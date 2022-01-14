var express = require('express');
var router = express.Router();
const passport = require('passport');

let User = require('../models/user');
let Doctor = require('../models/doctor');
let Patient = require('../models/patient');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/account', function(req, res, next) {
  res.render('account', { user: req.user })
})

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/updateProfile', function(req, res) {
  req.user.isStatusClicked = true;
  req.user.isDoctor = req.body.isDoctor;
  if (req.user.isDoctor) {
    let doctor = {};
    doctor._id = req.user._id;
    doctor.name = req.user.name;
    doctor.email = req.user.email;
    doctor.googleId = req.user.googleId;
    doctor.patients = [];
    Doctor.create(doctor);
  } else { 
    let patient = {};
    patient._id = req.user._id;
    patient.name = req.user.name;
    patient.email = req.user.email;
    patient.googleId = req.user.googleId;
    Patient.create(patient);
  }
  req.user.save();
  res.redirect('/');
})

module.exports = router;