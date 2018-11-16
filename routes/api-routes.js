const db = require('../models');
const RestfulAPI = require('./RestClass.js');

module.exports = function (app) {

const getItems = new RestfulAPI('/api/todo', app, db.Todo)
getItems.findAll();

const complete = new RestfulAPI('/api/todo', app, db.Todo)
complete.update();

const removeTodo = new RestfulAPI('/api/todo', app, db.Todo)
removeTodo.delete();

};