import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button'
import jwtDecode from 'jwt-decode';
import SolarSystem from "./pages/SolarSystem";

export function App() {
  return (
    <div>
      <SolarSystem />
      <GoogleOAuthProvider clientId="606620997861-bd8qmbcvsg6400s2ok7votrfhe4qgk8s.apps.googleusercontent.com">
        <GoogleLogin onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}/>;
      </GoogleOAuthProvider>
    </div>
  );
}
