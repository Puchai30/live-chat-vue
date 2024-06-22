import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOVB1ZC10xOGhuq9jps2Z36yNm9p-JW38",
  authDomain: "live-chat-c35c5.firebaseapp.com",
  projectId: "live-chat-c35c5",
  storageBucket: "live-chat-c35c5.appspot.com",
  messagingSenderId: "212094376112",
  appId: "1:212094376112:web:110f249bac951b761c8375",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const timestap = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestap, auth, firebaseApp };
