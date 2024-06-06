import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD64xPYWy-A5BnlSjnFz8w_iBT_Gnqc0iY",
  authDomain: "login-registation-task.firebaseapp.com",
  projectId: "login-registation-task",
  storageBucket: "login-registation-task.appspot.com",
  messagingSenderId: "870638816884",
  appId: "1:870638816884:web:1722e8008b2cbd50ec8b21",
  measurementId: "G-ZDN6T3PBYM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;