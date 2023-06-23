import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: 'AIzaSyBAWRHu7TOwaHT6fkm28n-sbf0wDnFkMjk',
    authDomain: 'healthcare-freelance.firebaseapp.com',
    databaseURL:
        'https://healthcare-freelance-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'healthcare-freelance',
    storageBucket: 'healthcare-freelance.appspot.com',
    messagingSenderId: '4717444796',
    appId: '1:4717444796:web:7ce66390d49a275cc75ab9',
    measurementId: 'G-8YZS4S08RN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export default firebaseConfig;
export { auth, app, storage, db};
