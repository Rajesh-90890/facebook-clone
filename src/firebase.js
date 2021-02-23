import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaBCEzvXwNs4RfPQpj9n5NdOfbj2jD8FI",
    authDomain: "facebook-clone-440e7.firebaseapp.com",
    projectId: "facebook-clone-440e7",
    storageBucket: "facebook-clone-440e7.appspot.com",
    messagingSenderId: "1021266745640",
    appId: "1:1021266745640:web:4bbe86918b1c036a32581d",
    measurementId: "G-E283C57Z0S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;