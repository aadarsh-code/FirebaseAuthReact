import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCClogdbXC0q5_FFoeKbps-dVLOIXY7rWY",
  authDomain: "auth-production-47ebb.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
export default app;
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
