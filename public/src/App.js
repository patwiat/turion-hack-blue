import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export function App() {
  <GoogleOAuthProvider>
  return (
    <div>
      <h1>Your website here</h1>
      <GoogleLogin>
        onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
  }}
      </GoogleLogin>
    </div>
  )
  </GoogleOAuthProvider>
}