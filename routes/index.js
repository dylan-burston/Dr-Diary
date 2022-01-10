var express = require('express');
var router = express.Router();

const passport = require('passport');

let User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

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

router.post('/updateProfile', function(req, res){
  req.user.isDoctor = req.body.isDoctor;
  req.user.save();
  res.redirect('/');
})

module.exports = router;


