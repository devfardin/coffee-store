// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOWnFSUhwXfEyu7K266YfqXF0FVDgzaQI",
  authDomain: "coffee-store-12016.firebaseapp.com",
  projectId: "coffee-store-12016",
  storageBucket: "coffee-store-12016.appspot.com",
  messagingSenderId: "426672087569",
  appId: "1:426672087569:web:4d97297828aa0f6373c7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app