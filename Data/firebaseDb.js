// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATtl0KJrFMiN8hKj3vbdNnGHe4fWJJJgI",
  authDomain: "app2-6e19a.firebaseapp.com",
  projectId: "app2-6e19a",
  storageBucket: "app2-6e19a.appspot.com",
  messagingSenderId: "100882771700",
  appId: "1:100882771700:web:31ff3f526339d3e969b8a1"
};

// Initialize Firebase
app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth(app)

export {auth}