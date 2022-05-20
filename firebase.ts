import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const app = initializeApp({
  apiKey: "AIzaSyDlswLnOk1I1gcxethvFqCRgHfMfsQ9lLs",
  authDomain: "design-challange.firebaseapp.com",
  databaseURL: "https://design-challange-default-rtdb.firebaseio.com",
  projectId: "design-challange",
  storageBucket: "design-challange.appspot.com",
  messagingSenderId: "526055294891",
  appId: "1:526055294891:web:e3895d08f16b48f47ef4ee",
});

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { app, auth, firestore, storage, functions };
