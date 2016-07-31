express = require('express')
passport = require('passport')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()
var ejs = require('ejs')
current_user = null
app.set('view engine', 'ejs')

// app.use(express.static('public'));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(session({ 
  // secret: 'keyboard cat', 
  // resave: false,
  // saveUninitialized: true,
  // cookie: { secure: true }
// }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function(req, res){
  res.render("login")
})

app.get('/home', function(req, res){
  res.render('index')
})

google_protocol = require('./config/vinblog.json')
var blogs = require('./controllers/blogs')
var session = require('./controllers/session')
var users = require('./controllers/users')
var homepage = require('./controllers/homepage')
app.use("/blogs", blogs)
app.use("/session", session)
app.use("/users", users)
app.use("/homepage", homepage)

app.listen(80)
