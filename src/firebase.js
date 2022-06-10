
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEZCCmBC9mn78u-gzl8cU5FXz1O4TyyZw",
  authDomain: "todo-gs.firebaseapp.com",
  projectId: "todo-gs",
  storageBucket: "todo-gs.appspot.com",
  messagingSenderId: "731466879149",
  appId: "1:731466879149:web:c8c30b51ef79a064ac3624",
  measurementId: "G-GRM96CN2P4"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




export default db;
