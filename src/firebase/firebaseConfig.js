import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqCVM9Hj_urHFUwC2R9aSrcHMBp0xeVSo",
  authDomain: "my-debt-f8829.firebaseapp.com",
  projectId: "my-debt-f8829",
  storageBucket: "my-debt-f8829.appspot.com",
  messagingSenderId: "533551551705",
  appId: "1:533551551705:web:15e748f85e777682ca9ac8",
  measurementId: "G-SSC8DCVV8Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
