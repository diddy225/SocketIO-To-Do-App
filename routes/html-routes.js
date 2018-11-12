const path = require('path');
const moment = require('moment');

const items = {
  item1: 'Bread',
  item2: 'Water',
  item3: 'Books',
  item4: 'iPad',
  item5: 'sushi',
  item6: 'soda'
};

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('index', {moment: moment, data: items});
  });
  
}