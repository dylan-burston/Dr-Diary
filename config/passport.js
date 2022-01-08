const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Patient.findOne({ 'googleId': profile.id }, function(err, patient) {
      if (err) return cb(err);
      if (student) {
        return cb(null, patient);
      } else {
        var newPatient = new Patient({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newPatient.save(function(err) {
          if (err) return cb(err);
          return cb(null, newPatient);
        });
      }
    });
  }
));

passport.serializeUser(function(patient, done) {
  done(null, patient.id);
});

passport.deserializeUser(function(id, done) {
  Patient.findById(id, function(err, patient) {
    done(err, patient);
  });
});