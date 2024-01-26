// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2ryN7oYTTQOWdAeif9uLILqrzMyLXFCY",
  authDomain: "netflix-gpt-13b85.firebaseapp.com",
  projectId: "netflix-gpt-13b85",
  storageBucket: "netflix-gpt-13b85.appspot.com",
  messagingSenderId: "333036346200",
  appId: "1:333036346200:web:f2d3cc58c551bc9034632d",
  measurementId: "G-633WV0G3RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();