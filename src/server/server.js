const express = require('express');
const io = require('socket.io');
const cors = require('cors');
const http = require('http');
const Sockets = require('../sockets/sockets');
const path = require('path');
const { databaseConnection } = require('../database/database');
require('dotenv').config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = io(this.server);
    this.socketsConfiguration();
    databaseConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(__dirname, '../../public')));
    this.app.use('/api/v1/auth', require('../components/auth/auth.router'));
    this.app.use('/api/v1/message', require('../components/messages/message.router'));
  }

  socketsConfiguration() {
    new Sockets(this.io);
  }

  execute(callback) {
    this.middlewares();
    this.socketsConfiguration();
    this.server.listen(this.port, callback(this.port));
  }
}

module.exports = Server;
