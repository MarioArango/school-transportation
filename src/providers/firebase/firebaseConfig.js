import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firestore
export const db = getFirestore(app)
//Initialize Firebase Authentication
// export const auth = getAuth(app)
