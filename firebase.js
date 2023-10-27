// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJGZ4m1v7lxIMUldZA_IUW1WMLd9ReD8",
  authDomain: "k6app-ducanh.firebaseapp.com",
  projectId: "k6app-ducanh",
  storageBucket: "k6app-ducanh.appspot.com",
  messagingSenderId: "31607119232",
  appId: "1:31607119232:web:5415fa9390c71a6b45b565",
  measurementId: "G-7XY9ZHXDXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const provider = new GoogleAuthProvider();
const firestore = getFirestore();

export { auth, provider, firestore }