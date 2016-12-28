// app.js
var express = require('express')
//����path
var path = require('path')
 
var app = express()
 
// serve our static stuff like index.css
app.use(express.static(__dirname))
 
//���������룬��������⡣
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
 
var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})