var users = express.Router()
users.post('/create', function(req, res){
  console.log(req.params)
  res.send("Created!")
})

module.exports = users
