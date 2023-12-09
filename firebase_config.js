import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8shOB-dL4kxBD_PTXGw6xxUn-Ohfkoew",
  authDomain: "wanderwise-896f5.firebaseapp.com",
  projectId: "wanderwise-896f5",
  storageBucket: "wanderwise-896f5.appspot.com",
  messagingSenderId: "172009442176",
  appId: "1:172009442176:web:c0e019364d7fc62a0e4f65",
  measurementId: "G-2YT560JGBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
export { auth, db, storage };
