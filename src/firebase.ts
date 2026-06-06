import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
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

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// --- Authentication Functions required by the App ---

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithEmail = async (email: string, pass: string) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

export const signUpWithEmail = async (email: string, pass: string) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
  return signOut(auth);
};

// --- Error Handling & Types required by ProjectsPage ---

export type OperationType = 'create' | 'read' | 'update' | 'delete';

export const handleFirestoreError = (error: any, operation: OperationType = 'read'): string => {
  console.error(`Firestore error during ${operation}:`, error);
  if (error?.code === 'permission-denied') {
    return 'عذراً، لا تمتلك الصلاحيات الكافية لإجراء هذه العملية.';
  }
  return error?.message || 'حدث خطأ غير متوقع أثناء الاتصال بقاعدة البيانات.';
};

export default app;
