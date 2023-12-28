"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";
export default function Page() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <div>
      <div>
        <h1>All Message</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Message..."
          className={classes["chat-input"]}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["button"]}
        >
          Send
        </button>
      </div>
    </div>
  );
}
