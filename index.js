express = require('express')
var app = express()
var ejs = require('ejs')
current_user = null
app.set('view engine', 'ejs')

app.get('/login', function(req, res){
  res.render("login")
})

app.get('/home', function(req, res){
  res.render('index')
})

google_protocol = require('./config/sec_protocol.json')
var blogs = require('./controllers/blogs')
var session = require('./controllers/session')
var users = require('./controllers/users')
var homepage = require('./controllers/homepage')
app.use("/blogs", blogs)
app.use("/session", session)
app.use("/users", users)
app.use("/homepage", homepage)

app.listen(3000)
