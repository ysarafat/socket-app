import http from "http";
import SocketServer from "./services/socket";

async function init() {
  const socketService = new SocketServer();

  const httpServer = http.createServer();
  const PORT = process.env.PORT ? process.env.PORT : 8000;
  socketService.io.attach(httpServer);
  httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT:${PORT}`)
  );
  socketService.initListeners();
}

init();
