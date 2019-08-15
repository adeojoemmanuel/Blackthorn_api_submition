const db = require('../app/db.config');
const shoping_cart = db.shopping_cart
const cart_item = db.cart_items
var Sequelize = require('sequelize');

//const mustache   = require('mustache');
// Post a Customer


exports.create_cart = (req,res)=>{

  //insert into shopping_cart
    shoping_cart.create({
    userId:req.body.userId,
    subtotal:req.body.subtotal,
    discounts:req.body.discounts,
    taxes: req.body.taxes,
    total: req.body.total
  
    }).then(result=>{
      if(result){
       //we create cart items

       cart_item.create({
        
        shoppingCartId: result.id,
        productId: req.body.productId,
        quantity: req.body.quantity,
        name: req.body.name,
        price: req.body.price,
       
       }).then(result2=>{
         res.send({
           status:true,
           message:"shopping cart created"
         })
       })

      }
    })
}

exports.get_cart_id = (req,res)=>{
  cart_item.findAll({
    where:{
      shoppingCartId:req.body.shoppingCartId
    }
  }).then(result=>{
    res.json(result)
  })
}


exports.get_cart_user_id = (req,res)=>{
  shoping_cart.findAll({
    where:{
      userId:req.body.userId
    }
  }).then(result=>{
    res.json(result)
  })
}

exports.update_cart_by_id = (req,res)=>{
  shoping_cart.find({ where: { id: req.body.cartid } })
    .on('success', function (response) {
      // Check if record exists in db
    if (response) {
      shoping_cart.update({
        total: '10'
      }).success(function () {})
      cart_item.create({
        shoppingCartId: result.shoppingCartId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        name: req.body.name,
        price: req.body.price,
       
      }).then(result2=>{
         res.send({
           status:true,
           message:"shopping cart created"
         })
      })
    }
  })
}
