const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/newsfeed', controller.index);                //route to explore page
routes.post('/userauth', controller.user);                //route to check login au
routes.get('/:id', controller.show);                      //route to profile page
routes.get('/editprofile/:id', controller.showUserData);  //route to editprofile, getting data
routes.put('/editprofile/:id', controller.update);        //route to editprofile, posting data
routes.get('/comments/:id', controller.showComments);    //route to comments, using piture_id
routes.post('/', controller.create);                      //route to create new account page
routes.delete('/:id', controller.destroy);

module.exports = routes;
