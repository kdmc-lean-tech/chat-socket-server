
class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', socket => {
      // TODO: Validator jwt here.....
      /*
        if (!token) {
          // TODO: Disconnect
        }
      */
     // TODO: Meet the user with uid
     // TODO: Emit users connected
     // TODO: Join to specific room
     // TODO: Listen when client send a message
     // TODO: Managment disconnect
    });
  }
}

module.exports = Sockets;
