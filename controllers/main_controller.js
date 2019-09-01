const db = require('../app/db.config');
const admin = db.admin
const devices = db.devices
const occupant = db.occupant
const channels = db.channels
const streams = db.streams
var Sequelize = require('sequelize');

//const mustache   = require('mustache');
// Post a Customer


exports.register_occupants_to_device = (req,res)=>{
    // register device to occupant
    occupant.create({
      id: req.body.deviceid,
      deviceId:req.body.deviceid,
      guest_fname:req.body.guest_fname,
      guest_lname:req.body.guest_lname,
      guest_tag: req.body.guest_tag,
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
  occupant.create({
    deviceId:req.body.deviceid,
    uuid:req.body.uuid,
    room_class:req.body.room_class,
    room_num: req.body.room_num,
  }).then(result=>{
    res.send({
      status:true,
      message:"Screen successfully Added"
    })
  })
}

exports.available_channels = (req,res)=>{
  streams.findAll({
    where:{}
  }).then(result=>{
    res.json(result)
  })
}
