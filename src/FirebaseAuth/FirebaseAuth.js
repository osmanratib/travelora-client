// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCJM1FWBXBsKJ9gT3jBkVlOHMXO-3O4Y90",
 authDomain: "travelora-fb639.firebaseapp.com",
 projectId: "travelora-fb639",
 storageBucket: "travelora-fb639.firebasestorage.app",
 messagingSenderId: "663763410963",
 appId: "1:663763410963:web:fc1fdf671abbbac5f65fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app) ;

export default auth ; 