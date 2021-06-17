import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAfn2iPuT2kDvyGCFDEzK1UsbfcQU4X9gM",
    authDomain: "peopletree-75939.firebaseapp.com",
    databaseURL: "https://peopletree-75939-default-rtdb.firebaseio.com",
    projectId: "peopletree-75939",
    storageBucket: "peopletree-75939.appspot.com",
    messagingSenderId: "1027065093654",
    appId: "1:1027065093654:web:0afa55656b0a121a1f5f37"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase.firestore();