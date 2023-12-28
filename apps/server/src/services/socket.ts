import { Server } from "socket.io";

class SocketServer {
  private _io: Server;
  constructor() {
    console.log("Int Socket server");
    this._io = new Server();
  }

  get io() {
    return this._io;
  }
}

export default SocketServer;
