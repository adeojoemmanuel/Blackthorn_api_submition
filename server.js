var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 var cors = require('cors')
const db = require('./app/db.config');
  
app.use(cors());

app.options('*', cors());
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });
 
require('./routes/shopping_cart.route')(app);

 
// Create a Server
var server = app.listen(process.env.PORT || 3000, function () {
 
  var host = 'localhost'
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})