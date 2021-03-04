import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHRCoBjtdkPN6p_UiszGNQTPqBrDibwIE",
  authDomain: "signal-clone-cff0e.firebaseapp.com",
  projectId: "signal-clone-cff0e",
  storageBucket: "signal-clone-cff0e.appspot.com",
  messagingSenderId: "248311317819",
  appId: "1:248311317819:web:9b2a41dc4b74f74977631e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
