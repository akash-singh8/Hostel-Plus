import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZOel4Hx220JZ-eN2fU1jOY4KHq73UlM0",
  authDomain: "hostel-plus.firebaseapp.com",
  projectId: "hostel-plus",
  storageBucket: "hostel-plus.appspot.com",
  messagingSenderId: "507203476252",
  appId: "1:507203476252:web:7afff585105c167293b8d9",
  measurementId: "G-K7WWFXKR86",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const fullName = user.displayName;
      const len = fullName.length;
      const email = user.email;

      if (email.slice(-15) !== "vitbhopal.ac.in") {
        alert("Please login with vitbhopal email");
        auth.signOut();
      } else {
        const userName = fullName.slice(0, len - 11);
        const fName = userName.split(" ")[0];
        localStorage.setItem("userName", userName);
        localStorage.setItem(
          "fname",
          fName.charAt(0) + fName.slice(1).toLowerCase()
        );
        localStorage.setItem("id", fullName.slice(len - 10));
        localStorage.setItem("email", email);
        localStorage.setItem("photo", user.photoURL);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const sign_out = () => {
  auth.signOut();
  localStorage.clear();
};

const db = app.firestore();

export { auth, signInWithGoogle, sign_out as signOut, db };
