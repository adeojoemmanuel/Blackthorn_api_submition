const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.admin = require('../models/admin')(sequelize,Sequelize)
db.devices = require('../models/devices')(sequelize,Sequelize)
db.occupant = require('../models/occupant')(sequelize,Sequelize)
db.channels = require('../models/channels')(sequelize,Sequelize)
db.streams = require('../models/streams')(sequelize,Sequelize)

module.exports = db;