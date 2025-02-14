// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc,getDocs,doc, updateDoc,deleteDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdAsmfXcHeOF1Au4Ds3quqC30VXhEhnO4",
  authDomain: "datasave-app-f6243.firebaseapp.com",
  projectId: "datasave-app-f6243",
  storageBucket: "datasave-app-f6243.firebasestorage.app",
  messagingSenderId: "251118060840",
  appId: "1:251118060840:web:6be76cc5ba48762a0d7c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,getFirestore,collection, addDoc,getDocs,doc, updateDoc,deleteDoc }