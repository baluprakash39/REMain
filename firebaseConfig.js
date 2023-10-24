import * as firebase from 'firebase';

// Initialize Firebase with your config object
// const firebaseConfig = {
//   apiKey: 'AIzaSyB2YOWsnr_VvJVNr6ACS63UEJq2sQTByUw',
//   authDomain: 'reactnative-c001f.firebaseapp.com',
//   projectId: 'reactnative-c001f',
//   storageBucket: 'reactnative-c001f.appspot.com',
//   messagingSenderId: '600370283825',
//   appId: '1:600370283825:web:073b4ea5aab2de92c95c10',
// };

const firebaseConfig={
  apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  authDomain: "otplogin-c4da2.firebaseapp.com",
  projectId: "otplogin-c4da2",
  storageBucket: "otplogin-c4da2.appspot.com",
  messagingSenderId: "783500853422",
  appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  // measurementId: "G-69272HMPPD"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }