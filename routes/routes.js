const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/newsfeed', controller.index);    //route to explore page
routes.post('/userauth', controller.user);    //route to check login au
routes.get('/profilepage/:id', controller.show);          //route to profile page
routes.post('/', controller.create);          //route to create new account page
routes.put('/:id', controller.update);
routes.delete('/:id', controller.destroy);

module.exports = routes;
