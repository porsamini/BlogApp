var blogs = express.Router()
var MongoClient = require("mongodb").MongoClient
var index = function(req, res){
  res.send("Inside blogs index action") 
}

var show = function(req, res){
  res.send("Inside blogs show action")
}
blogs.get("/", index)
blogs.get("/:id", show)

module.exports = blogs
