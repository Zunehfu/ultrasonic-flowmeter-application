import express from "express";
import router from "./routes/router.js";
import bodyParser from "body-parser";
import { WebSocketServer } from "ws";
import cors from "cors";
import Config from "dotenv";
Config.config();

const app = express();
const http_port = 3000;

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/", router);

app.listen(http_port, () => {
  console.log(`Listening on http://localhost:${http_port}`);
});

const socket_port = 8080;
const wss = new WebSocketServer({ port: socket_port });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received:", message);

    ws.send(`Server received: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.send("Hello from Node.js WebSocket server");
});

// db.prepare(
//   `
//   CREATE TABLE IF NOT EXISTS users (
//     user_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     email TEXT UNIQUE NOT NULL,
//     password TEXT NOT NULL,
//     created_at TEXT DEFAULT (datetime('now')),
//     updated_at TEXT DEFAULT (datetime('now'))
//   )
// `
// ).run();

// db.prepare(
//   `
//   CREATE TABLE IF NOT EXISTS flowmeters (
//     fm_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     product_code TEXT UNIQUE NOT NULL,
//     user_id INTEGER NOT NULL,
//     production_date TEXT NOT NULL,
//     purchase_date TEXT NOT NULL,
//     created_at TEXT DEFAULT (datetime('now')),
//     updated_at TEXT DEFAULT (datetime('now')),
//     FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
//     CHECK (purchase_date >= production_date)
//   )
// `
// ).run();
