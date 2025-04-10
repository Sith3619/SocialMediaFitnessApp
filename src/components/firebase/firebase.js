import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQsFZLj8pnf3BSyriARL-bRtLlM5MvLDE",
  authDomain: "socialmediafitnessapp.firebaseapp.com",
  projectId: "socialmediafitnessapp",
  storageBucket: "socialmediafitnessapp.appspot.com",
  messagingSenderId: "496770063981",
  appId: "1:496770063981:web:e020cb85274e6d54582964",
  measurementId: "G-TLCGN1JZE5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Auth persistence set"))
  .catch((error) => console.error("Error setting auth persistence:", error));

const getCollection = async (colName) => {
  const querySnapshot = await getDocs(collection(db, colName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const addDocument = async (colName, data) => {
  return await addDoc(collection(db, colName), data);
};

const updateDocument = async (colName, id, data) => {
  const docRef = doc(db, colName, id);
  return await updateDoc(docRef, data);
};

const deleteDocument = async (colName, id) => {
  const docRef = doc(db, colName, id);
  return await deleteDoc(docRef);
};

const uploadFile = async (file, filePath) => {
  const storageRef = ref(storage, filePath);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export {
  auth,
  db,
  storage,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getCollection,
  addDocument,
  updateDocument,
  deleteDocument,
  uploadFile,
};
