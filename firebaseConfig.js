import * as firebase from 'firebase';

// Initialize Firebase with your config object
const firebaseConfig = {
  apiKey: 'AIzaSyB2YOWsnr_VvJVNr6ACS63UEJq2sQTByUw',
  authDomain: 'reactnative-c001f.firebaseapp.com',
  projectId: 'reactnative-c001f',
  storageBucket: 'reactnative-c001f.appspot.com',
  messagingSenderId: '600370283825',
  appId: '1:600370283825:web:073b4ea5aab2de92c95c10',
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }