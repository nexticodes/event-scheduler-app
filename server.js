const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');
require('dotenv').config();
require('./config/database');

const app = express();
app.use(require('cors')());

const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http, {
  cors: {
    origin: 'http://localhost:3000',
  }
});

io.on('connection', socket => {
  console.log('User connected!', socket.id);

  socket.on('join-chat', data => {
    socket.join(data.channelId);
    console.log('User has joined channel', data.channelId);
  });

  socket.on('leave-chat', data => {
    socket.leave(data.channelId);
    console.log('User has left channel', data.channelId);
  })

  socket.on('send-message', data => {
    socket.to(data.channelId).emit('receive-message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from socket', socket.id);
  });
});

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/events', ensureLoggedIn, require('./routes/api/events'));
app.use('/api/messages', ensureLoggedIn, require('./routes/api/messages'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(process.env.PORT || 3001, function() {
  console.log(`Express app running on port ${this.address().port}`)
});

