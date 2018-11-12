const db = require('../models');
const RestfulAPI = require('./RestClass');

module.exports = function (app) {

const getItems = new RestfulAPI('api/todo', app, db.Todo)
getItems.findAll();

};