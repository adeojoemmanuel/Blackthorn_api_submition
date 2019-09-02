var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

app.use(bodyParser.json())
var cors = require('cors')
const db = require('./app/db.config');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.options('*', cors());
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });
 

app.get("*", (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'))
})
require('./routes/main.route')(app);

 
// Create a Server
var server = app.listen(process.env.PORT || 3000, function () {
 
  var host = 'localhost'
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})