// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIPI33cx584Y2lhFvKGNO4CMX4y9wyiqs",
  authDomain: "toptrips-83954.firebaseapp.com",
  projectId: "toptrips-83954",
  storageBucket: "toptrips-83954.appspot.com",
  messagingSenderId: "1076699710237",
  appId: "1:1076699710237:web:e7650f9f539aa2298ad7f4",
  measurementId: "G-81382GR331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider()



export { provider, auth , app ,providerFacebook } ;
export const authFB = getAuth(app)