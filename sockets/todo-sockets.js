const db = require("../models");

module.exports = function(io) {
  io.on('connection', function(socket) {
    //SOCKET ROUTES
    socket.on('send-item', function(data) {
      db.Todo.create(data)
      .then(function(data){
        io.emit('display-item', data);  
      })
    })
  });
};
