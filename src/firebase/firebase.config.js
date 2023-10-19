// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASOtIRmkqpAohZ0ZCKBc6CI4gX-5aURKY",
  authDomain: "brand-shop-a541e.firebaseapp.com",
  projectId: "brand-shop-a541e",
  storageBucket: "brand-shop-a541e.appspot.com",
  messagingSenderId: "305505387271",
  appId: "1:305505387271:web:bbbb00c56362e43ff5fba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
