import {initializeApp} from "firebase/app";
import { getFirestore, } from "firebase/firestore/lite";
  
const firebaseConfig = {
  apiKey: "AIzaSyCtD-lPWq0ibhy024Ex-E7o6S905FsPmN0",
  authDomain: "me-indique-d01e5.firebaseapp.com",
  projectId: "me-indique-d01e5",
  storageBucket: "me-indique-d01e5.appspot.com",
  messagingSenderId: "653459366381",
  appId: "1:653459366381:web:83dc545eacc8834a3407e4"
}
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
export default db;