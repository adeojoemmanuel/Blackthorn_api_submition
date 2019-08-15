module.exports = function(app) {
 
    const shoping_cart = require('../controllers/shopping_cart');
 
    app.post('/api/create_cart', shoping_cart.create_cart);
    app.post('/api/get_cart_id',shoping_cart.get_cart_id)
    app.post('/api/get_cart_user_id',shoping_cart.get_cart_user_id)
    app.post('/api/update_cart',shoping_cart.update_cart_by_id)
}