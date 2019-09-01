module.exports = function(app) {
 
    const controller = require('../controllers/main_controller');
 
    app.post('/api/register_occupants', controller.register_occupants_to_device);
    app.get('/api/list_screen',controller.list_screen);
    app.post('/api/create_screen',controller.create_screen);
    app.post('/api/available_channels',controller.available_channels);
}