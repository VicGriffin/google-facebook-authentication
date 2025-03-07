import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJhzXE271CAM4P00S2WdI9gGzAOfzzW-M",
  authDomain: "multi-e9b11.firebaseapp.com",
  projectId: "multi-e9b11",
  storageBucket: "multi-e9b11.appspot.com",
  messagingSenderId: "733333686028",
  appId: "1:733333686028:web:7743a296d75f971414eb29",
  measurementId: "G-44HDC4QMFZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
