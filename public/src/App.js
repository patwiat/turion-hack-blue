import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import SolarSystem from "./pages/SolarSystem";

import { io } from "socket.io-client";

export const socket = (() => {
  const SERVER_URL = "http://localhost:3000";
  const socket = io(SERVER_URL);

  socket.on("connect", () => {
    console.log("Established socket.io connection with server!");
  });

  return socket;
})();

export function App() {
  return (
    <div className="bg-black">
      <GoogleOAuthProvider clientId="606620997861-bd8qmbcvsg6400s2ok7votrfhe4qgk8s.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleLogin} />
      </GoogleOAuthProvider>
      <SolarSystem socket={socket} />
    </div>
  );
}

const handleLogin = async (credentialResponse) => {
  var obj = jwtDecode(credentialResponse.credential);
  var data = JSON.stringify(obj);
  console.log(data);

  const config = {
    method: 'POST',
    url: 'http://localhost:3000/users',
    headers: {},
    data: data
  }

  await axios(config)
};

function Chat({ title, room }) {
  const [roomJoined, setRoomJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const appendMessage = (sender, content) => {
    setMessages((messages) => {
      console.log(messages);
      const msgs = structuredClone(messages);
      msgs.push({ sender, content });
      return msgs;
    });
  };

  useEffect(() => {
    const chatMessageListener = ({ sender, content }) => {
      appendMessage(sender, content);
    };

    if (!socket.hasListeners("chat_message")) {
      socket.emit("join_room", { room });
      socket.on("chat_message", chatMessageListener);
      setRoomJoined(true);
    }

    () => {
      socket.removeListener(chatMessageListener);
    };
  }, [roomJoined]);

  return (
    <div
      className=""
      width="600"
      height="800"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>{title}</h1>
      {messages.map(({ sender, content }, i) => {
        return (
          <div key={`message${i}`}>
            <p>
              <b>{sender}</b>
            </p>
            <p>{content}</p>
          </div>
        );
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: Base on user
          const sender = "Suneel";
          appendMessage(sender, message);
          socket.emit("chat_message", { sender, content: message });
          setMessage("");
          console.log("Sent a message:", message);
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
