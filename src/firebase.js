import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzsDm-HRSc2v1Jpkgxge121oHcE7hlsb4",
    authDomain: "twitter-clone-53171.firebaseapp.com",
    projectId: "twitter-clone-53171",
    storageBucket: "twitter-clone-53171.appspot.com",
    messagingSenderId: "758128971966",
    appId: "1:758128971966:web:7dd97afe5c8a25ed0f0eef",
    measurementId: "G-T2BVETFC6S"
  };

  const firebaseApp = firebase.initilizeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;