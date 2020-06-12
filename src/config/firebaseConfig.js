import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBEHGACAzaz8aYqn7MtauOtFWL3KpSWljQ",
    authDomain: "react-redux-firebase-pro-5543c.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-pro-5543c.firebaseio.com",
    projectId: "react-redux-firebase-pro-5543c",
    storageBucket: "react-redux-firebase-pro-5543c.appspot.com",
    messagingSenderId: "593631698406",
    appId: "1:593631698406:web:bf3087b7a8bcc5c59fca27",
    measurementId: "G-Z4WER3V2E2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;