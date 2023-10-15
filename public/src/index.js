// Accessible from anywhere
window.IS_DEV = process.env.NODE_ENV === 'development';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleLogin } from '@react-oauth/google'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { io } from 'socket.io-client';

export const socket = (() => {
  const SERVER_URL = 'http://localhost:3000'
  const socket = io(SERVER_URL);
  
  socket.on('connect', () => {
    console.log('Established socket.io connection with server!')
  });
  
  return socket;
})();

import { App } from './App'

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }
])

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)