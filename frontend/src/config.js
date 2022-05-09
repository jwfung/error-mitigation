// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4I95_r3t9qWmWYbuJwn3iELwJi_e8CoU",
  authDomain: "errormitt.firebaseapp.com",
  projectId: "errormitt",
  storageBucket: "errormitt.appspot.com",
  messagingSenderId: "127674217335",
  appId: "1:127674217335:web:35ff0c1048b210de16a772",
  measurementId: "G-ZJVQSV22ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;