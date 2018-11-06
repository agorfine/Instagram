const Model = require('../models/models');
const controller = {};

controller.index = (req, res) => {
  Model.findAll()
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

// checks if username and password entered by user exists and is correct
controller.user = async (req, res) => {
    const user = await Model.findUser(req.body.username)
    .then(obj => {
      let data;
      console.log(obj)
      if(obj.length === 0){
        data = { data: 'no user' }
      }
      if (req.body.password === obj[0].password){
        data = { data: 'good pass' }
      } else {
        data = { data: 'bad pass' }
      }
      res.json(data);

    }).catch(err => {
      console.log(err);
      res.end()
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