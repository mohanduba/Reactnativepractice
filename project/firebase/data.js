// firebase/index.js
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc,getDocs,doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDLq-gmtr412pWc6f9i9oO0or4hpgCKNqE",
  authDomain: "shopping-app-590af.firebaseapp.com",
  projectId: "shopping-app-590af",
  storageBucket: "shopping-app-590af.firebasestorage.app",
  messagingSenderId: "14420940406",
  appId: "1:14420940406:web:b07b8d738382e3fa2eb157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc,getDocs,doc, updateDoc,deleteDoc };
