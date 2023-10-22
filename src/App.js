import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { useUserAuth, UserAuthContextProvider } from './context/userAuthContext';
import { auth, provider, providerFacebook, authFB } from './firebase';
import Home from './home';
// import { navigate } from 'react-router-dom';


function App() {

  // Bu Googlega
  const { googleSignIn, logOut, user } = useUserAuth();
  const [value, setValue] = useState(false)
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("userEmail", data.user.email)
    })
  };

  useEffect(() => {
    setValue(localStorage.getItem("userEmail"))
  })

  //  Bu Facebokga

  const [value1, SetValue1] = useState(false)
  const SiginInFacebook = () => {
    signInWithPopup(authFB, providerFacebook)
      .then((data) => {
        SetValue1(data.user.email1)
        localStorage.setItem("userNumber", data.user.email)
      })
      .catch((err) => {
        console.log(err.message);
      })

      useEffect(() => {
        SetValue1(localStorage.getItem("userNumber"))
      })
    
  }
  return (
    <div className="App">
      {/* Google start */}
      <div>
        {
          value ? <Home /> : <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        }
      </div>
      {/* Google finish */}
      {/* Facebook start */}
      <div>
        {
          value1 ? <Home /> : <button
            type="dark"
            onClick={SiginInFacebook}>Sign in with FB</button>
        }

      </div>
      {/* Facebook finish */}..
/    </div>
  );
}

export default App;
