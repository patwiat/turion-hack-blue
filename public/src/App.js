import { useState, useEffect } from 'react'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import SolarSystem from "./pages/SolarSystem";

import { io } from 'socket.io-client';

export const socket = (() => {
  const SERVER_URL = 'http://localhost:3000'
  const socket = io(SERVER_URL);
  
  socket.on('connect', () => {
    console.log('Established socket.io connection with server!')
  });
  
  return socket;
})();

export function App() {
  console.log("hello");
  return (
    <div>
      <SolarSystem socket={socket}/>
      <GoogleOAuthProvider clientID="606620997861-bd8qmbcvsg6400s2ok7votrfhe4qgk8s.apps.googleusercontent.com"></GoogleOAuthProvider>
    </div>
  )
}