const express = require('express');
const mongoose = require('mongoose');
const http = require('http');


const io = require('socket.io')(server);

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/realtimetodo', { useNewUrlParser: true});
mongoose.connect('mongodb://user:pass12@ds041377.mlab.com:41377/heroku_wzvb04pg', { useNewUrlParser: true});

require('./sockets/todo-sockets.js')(io);
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

server.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`)
})