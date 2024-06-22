import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOVB1ZC10xOGhuq9jps2Z36yNm9p-JW38",
  authDomain: "live-chat-c35c5.firebaseapp.com",
  projectId: "live-chat-c35c5",
  storageBucket: "live-chat-c35c5.appspot.com",
  messagingSenderId: "212094376112",
  appId: "1:212094376112:web:110f249bac951b761c8375",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestap = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestap };
