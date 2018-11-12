const path = require('path');
const db = require('../models');
const moment = require('moment');


module.exports = function(app){

  app.get('/', function(req, res){
    db.Todo.find({})
    .then(function(data){
      res.render('index', {moment: moment})
    })
    .catch(function(err){
      console.log(err)
    })

  });
}