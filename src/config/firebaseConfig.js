import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyCV89tUQVUkVKqPSDPgpZ4h1dkvPrlsGmc",
    authDomain: "agenda-85776.firebaseapp.com",
    projectId: "agenda-85776",
    storageBucket: "agenda-85776.appspot.com",
    messagingSenderId: "798141081518",
    appId: "1:798141081518:web:e17516701085be8706ca3f",
    measurementId: "G-QSR9N0DEJK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;