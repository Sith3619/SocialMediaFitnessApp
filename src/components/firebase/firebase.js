import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQsFZLj8pnf3BSyriARL-bRtLlM5MvLDE",
  authDomain: "socialmediafitnessapp.firebaseapp.com",
  projectId: "socialmediafitnessapp",
  storageBucket: "socialmediafitnessapp.firebasestorage.app",
  messagingSenderId: "496770063981",
  appId: "1:496770063981:web:e020cb85274e6d54582964",
  measurementId: "G-TLCGN1JZE5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    const user = auth.currentUser;
    if (user) {
      console.log("User has logged in: ", user);
    } else {
      console.log("No user has logged in");
    }
  })
  .catch((error) => {
    console.log("Error setting the persistence: ", error);
  });

export { auth, db };
