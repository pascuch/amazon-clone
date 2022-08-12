import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAG-uV1zZiUNEHDUSIKOqRnBzbxlfun7C4",
  authDomain: "clone-9fa2b.firebaseapp.com",
  projectId: "clone-9fa2b",
  storageBucket: "clone-9fa2b.appspot.com",
  messagingSenderId: "360595294020",
  appId: "1:360595294020:web:576cbee9938923597bf911"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;