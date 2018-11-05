const Model = require('../models/models');
const controller = {};

controller.index = (req, res) => {
  Model.findAll()
    .then(obj => {
      res.json({
        message:'ok',
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

controller.index = (req, res) => {
  Model.findNewsfeed()
    .then(obj => {
      res.json({
        message:'ok',
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

controller.show = (req, res) => {
  Model.findAll()
    .then(obj => {
      res.json({
        message:'ok',
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

controller.create = (req, res) => {
  Model.create({
    name: req.body.name,
    color: req.body.color
  })
  .then(obj => {
    res.json({
      message:'ok',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

controller.update = (req, res) => {
  Model.update({
    name: req.body.name,
    color: req.body.color
  }, req.params.id)
  .then(model => {
    res.json({
      message: 'Model updated successfully',
      data: Model,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

controller.destroy = (req, res) => {
  Model.destroy(req.params.id)
    Model.findById(req.params.id)
    .then(model => {
      res.json({
        message: 'Model deleted successfully!',
      });
    }).catch(err => {
      res.status(500).json(err);
    });
}

module.exports = controller;

