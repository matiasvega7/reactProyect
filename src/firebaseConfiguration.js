
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB1xo3ZVURicwClTAN8UvJOQrywRsVOlIc",
  authDomain: "reactproyect-3f9f0.firebaseapp.com",
  projectId: "reactproyect-3f9f0",
  storageBucket: "reactproyect-3f9f0.firebasestorage.app",
  messagingSenderId: "198655317777",
  appId: "1:198655317777:web:9241339a201fa596d85eb0",
  measurementId: "G-QFWSNR8PWV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);