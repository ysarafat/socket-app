import Redis from "ioredis";
import { Server } from "socket.io";

const pub = new Redis({
  host: "",
  port: 19987,
  username: "default",
  password: "",
});
const sub = new Redis({
  host: "",
  port: 19987,
  username: "default",
  password: "",
});
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
    sub.subscribe("MESSAGES");
  }

  public initListeners() {
    const io = this.io;
    console.log("Int socket listeners...");
    io.on("connect", (socket) => {
      console.log("New Socket connected", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message rec.", message);
        // publish this message to redis
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
    sub.on("message", (channel, message) => {
      if (channel === "MESSAGES") {
        io.emit("message", message);
      }
    });
  }
  get io() {
    return this._io;
  }
}

export default SocketServer;
