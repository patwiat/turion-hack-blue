import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import SolarSystem from "./pages/SolarSystem";

export function App() {
  console.log("hello");
  return (
    <div>
      <SolarSystem />
      <GoogleOAuthProvider clientID="606620997861-bd8qmbcvsg6400s2ok7votrfhe4qgk8s.apps.googleusercontent.com"></GoogleOAuthProvider>
    </div>
  );
  // </GoogleOAuthProvider>;
}
