// app.js
var express = require('express')
//导入path
var path = require('path')
 
var app = express()
 
// serve our static stuff like index.css
app.use(express.static(__dirname))
 
//就是这句代码，解决的问题。
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
 
var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})