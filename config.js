import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/storage';
import {getStorage} from 'firebase/storage';
import {ref as stroageRef} from 'firebase/storage'




export const firebaseConfig = {
    apiKey: "AIzaSyB2YOWsnr_VvJVNr6ACS63UEJq2sQTByUw",
    authDomain: "reactnative-c001f.firebaseapp.com",
    projectId: "reactnative-c001f",
    storageBucket: "reactnative-c001f.appspot.com",
    messagingSenderId: "600370283825",
    appId: "1:600370283825:web:073b4ea5aab2de92c95c10",
    measurementId: "G-DGDSDSSZGW"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);

export {stroageRef}
