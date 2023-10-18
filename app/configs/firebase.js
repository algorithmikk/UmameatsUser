import {initializeApp} from 'firebase/app';
import {getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyAog303VEpKp-l2LfgE0JTMO1oWC202zQo",
    authDomain: "friendlyeats-5e84b.firebaseapp.com",
    projectId: "friendlyeats-5e84b",
    storageBucket: "friendlyeats-5e84b.appspot.com",
    messagingSenderId: "845905714417",
    appId: "1:845905714417:android:c1f0f09aa42eba16"
};

const app = initializeApp(firebaseConfig);

//const auth = authFirebase;
const db = getFirestore(app);;

const timestamp = db.timestamp;

//const auth = getAuth(app); 

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });


export { auth, db, timestamp }