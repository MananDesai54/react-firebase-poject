import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Your fire base connection code
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDERID",
    appId: "YOUR_APPID",
    measurementId: "YOUR_MESUREMENTID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;
