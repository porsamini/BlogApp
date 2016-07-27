var homepage = express.Router()
homepage.get('/', function(req, res){
  res.render('homepage')
})
module.exports = homepage
