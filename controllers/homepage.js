var homepage = express.Router()
homepage.get('/', function(req, res){
  console.log(current_user)
  res.render('homepage')
})
module.exports = homepage
