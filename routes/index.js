var express = require('express');
var router = express.Router();
const passport = require('passport');

let User = require('../models/user');
let Doctor = require('../models/doctor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

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
  let doctor = {};
  doctor._id = req.user._id;
  doctor.name = req.user.name;
  doctor.email = req.user.email;
  doctor.googleId = req.user.googleId;
  doctor.patients = [];
  Doctor.create(doctor);
  req.user.isDoctor = req.body.isDoctor;
  req.user.save();
  res.redirect('/');
})

module.exports = router;

