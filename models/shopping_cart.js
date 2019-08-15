
  module.exports = (sequelize,Sequelize)=>{
      const SHOPING_CARTS = sequelize.define('shopping_carts',{
       
            userId: {
            type: Sequelize.INTEGER
            },
            subtotal: {
              type: Sequelize.STRING
            },
            discounts: {
              type: Sequelize.STRING
            },
            taxes: {
              type: Sequelize.STRING
            },
            total: {
              type: Sequelize.STRING
            },
         
            
      })
      return SHOPING_CARTS
  }