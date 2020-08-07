import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCSKg22DInFNIKjXUExoA7yIIxiUr1HrkE",
    authDomain: "crwn-db-62bce.firebaseapp.com",
    databaseURL: "https://crwn-db-62bce.firebaseio.com",
    projectId: "crwn-db-62bce",
    storageBucket: "crwn-db-62bce.appspot.com",
    messagingSenderId: "981814701049",
    appId: "1:981814701049:web:e1483c87becbab34672b28",
    measurementId: "G-3GF47RRFDM"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error creating user", error.message);
      }
      }
      return userRef;

    };


  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ props : "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
