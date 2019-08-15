module.exports = (sequelize, Sequelize) => {
    const CART_ITEMS = sequelize.define('cartItems', {
      
      shoppingCartId	: {
      type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
   
    });
    
    return CART_ITEMS;
  }