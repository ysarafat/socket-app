import { Server } from "socket.io";

class SocketServer {
  private _io: Server;
  constructor() {
    console.log("Int Socket server");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }

  public initListeners() {
    const io = this.io;
    console.log("Int socket listeners...");
    io.on("connect", (socket) => {
      console.log("New Socket connected", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message rec.", message);
      });
    });
  }
  get io() {
    return this._io;
  }
}

export default SocketServer;
