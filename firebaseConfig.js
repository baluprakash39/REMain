import * as firebase from 'firebase';

const firebaseConfig={
  // apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  // authDomain: "otplogin-c4da2.firebaseapp.com",
  // projectId: "otplogin-c4da2",
  // storageBucket: "otplogin-c4da2.appspot.com",
  // messagingSenderId: "783500853422",
  // appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  // measurementId: "G-69272HMPPD"
  // apiKey: "AIzaSyB2YOWsnr_VvJVNr6ACS63UEJq2sQTByUw",
  // authDomain: "reactnative-c001f.firebaseapp.com",
  // projectId: "reactnative-c001f",
  // storageBucket: "reactnative-c001f.appspot.com",
  // messagingSenderId: "600370283825",
  // appId: "1:600370283825:web:073b4ea5aab2de92c95c10",
  // measurementId: "G-DGDSDSSZGW"

  apiKey: "AIzaSyDHbvo-bul-mB6ZStx3k4tYX7mUKBATCLg",
  authDomain: "otp-login-126b7.firebaseapp.com",
  projectId: "otp-login-126b7",
  storageBucket: "otp-login-126b7.appspot.com",
  messagingSenderId: "574488248540",
  appId: "1:574488248540:web:853e40d56676cc84cbf419",
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }