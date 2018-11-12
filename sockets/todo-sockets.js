const db = require("../models");

module.exports = io => {
  io.on("connection", (socket) => {
    //SOCKET ROUTES
    socket.on('send-item', (data) => {
      db.Todo.create(data);
      io.emit('display-item', data);
    })
  });
};
