const db = require('../app/db.config');
const admin = db.admin
const devices = db.devices
const occupant = db.occupant
const channels = db.channels
const streams = db.streams
var Sequelize = require('sequelize');

//const mustache   = require('mustache');
// Post a Customer


exports.rootpage = (req,res)=>{
  res.send({
    status:true,
    message:"Hello World"
  })
}

exports.adminlogin = (req,res)=>{
  const body = req.body;

  // const user = USERS.find(user => user.username == body.username);
  if(body.username != "admin" || body.password != 'magnitude') {
     res.send({'code':401, 'message':"testing"});
  }
  
  var token = jwt.sign({userID: 1}, 'super-shared-secret', {expiresIn: '2h'});
  res.send({token});
}

exports.register_occupants_to_device = (req,res)=>{
    // register device to occupant
    occupant.create({
      deviceId:req.body.deviceid,
      guest_fname:req.body.guest_fname,
      guest_lname:req.body.guest_lname,
      guest_tag: req.body.guest_tag
    }).then(result=>{
      res.send({
        status:true,
        message:"shopping cart created"
      })
    })
}

exports.list_screen = (req,res)=>{
  devices.findAll({
    where:{}
  }).then(result=>{
    res.json(result)
  })
}

exports.create_screen = (req,res)=>{
  devices.create({
    deviceId:req.body.deviceid,
    uuid:req.body.uuid,
    room_class:req.body.room_class,
    room_num: req.body.room_num
  }).then(result=>{
    res.send({
      status:true,
      message:"Screen successfully Added"
    })
  })
}

exports.available_channels = (req,res)=>{
  const tags = req.body.tags
  streams.findAll({
    where:{}
  }).then(result=>{
    res.json(result)
  })
}
