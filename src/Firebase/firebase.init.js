import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Code for initializeAuthentication
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;