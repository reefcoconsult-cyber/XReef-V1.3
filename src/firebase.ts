import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3044lUMz7LHHX2uChIc6y2KyneRW7528",
  authDomain: "xreef-8b39b.firebaseapp.com",
  projectId: "xreef-8b39b",
  storageBucket: "xreef-8b39b.firebasestorage.app",
  messagingSenderId: "360423427486",
  appId: "1:360423427486:web:c3a3668324be813061da8f",
  measurementId: "G-7Q9JRYS767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services for Xreef App
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;