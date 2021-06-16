import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3bNHpYfd4tHqQznJyiS6BjYnJv3G4pcE",
    authDomain: "user-app-1772.firebaseapp.com",
    projectId: "user-app-1772",
    storageBucket: "user-app-1772.appspot.com",
    messagingSenderId: "745147508038",
    appId: "1:745147508038:web:e47ee586c8772f7a6d7147"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;