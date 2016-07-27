var session = express.Router()
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var user = require('../models/user')
passport.use(new GoogleStrategy({
  clientID: google_protocol.clientID,
  clientSecret: google_protocol.clientSecret,
  callbackURL: "http://localhost:3000/session/auth"
},
  function(accessToken, refreshToken, profile, done) {
    user.getText(function(){
      return done(null, profile)
    })
  }
));

session.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

session.get('/auth', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

// app.get('/auth/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//       res.redirect('/');
//     });

module.exports = session
