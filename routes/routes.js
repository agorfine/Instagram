const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/', controller.index);          //route to explore page
routes.get('/newsfeed'), controller.);      //route to newfeed
routes.get('/:id', controller.show);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.destroy);

module.exports = routes;
