import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqRYLLHDiv-5sPIMCBdtte-a_O4DhuKm0",
  authDomain: "whatsapclone-44e98.firebaseapp.com",
  projectId: "whatsapclone-44e98",
  storageBucket: "whatsapclone-44e98.appspot.com",
  messagingSenderId: "321935995041",
  appId: "1:321935995041:web:c4d84d5cb63eefbd3f40e0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
