import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
      apiKey: "AIzaSyD82Ej0MGjEnk2_tTFiiQ_b82amEjWdxVY",
      authDomain: "react-native-firebase-775a3.firebaseapp.com",
      projectId: "react-native-firebase-775a3",
      storageBucket: "react-native-firebase-775a3.appspot.com",
      messagingSenderId: "763159335420",
      appId: "1:763159335420:web:1281b433511fc3b4e46279",
      measurementId: "G-0RGQ7C9SQP"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};


