import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGESENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const firebaseapp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebaseapp.firestore();

export const storage = firebaseapp.storage();

export default db;
