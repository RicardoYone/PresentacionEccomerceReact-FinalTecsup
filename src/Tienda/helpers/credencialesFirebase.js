// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2w4WDOEzWQKPsS-0wj_DjmwjVmsGLgzI",
  authDomain: "tienda-75f88.firebaseapp.com",
  databaseURL: "https://tienda-75f88-default-rtdb.firebaseio.com",
  projectId: "tienda-75f88",
  storageBucket: "tienda-75f88.appspot.com",
  messagingSenderId: "385306789519",
  appId: "1:385306789519:web:56400bdc67e0472d5052fa",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);