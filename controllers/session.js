var session = express.Router()
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var user = require('../models/user')
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: google_protocol.clientID,
  clientSecret: google_protocol.clientSecret,
  callbackURL: "http://vinblog.com/session/auth",
  passReqToCallback : true
},
  function(req, accessToken, refreshToken, profile, done) {
    current_user = profile
    return done(null, profile)
  }
));

session.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

session.get('/auth', 
    passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/homepage' }))

module.exports = session
