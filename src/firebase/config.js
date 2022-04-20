import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD5SOgIcnZQUhsD-KPckXXFEDOvR-g83jk',
    authDomain: 'vue-firebase-913a7.firebaseapp.com',
    projectId: 'vue-firebase-913a7',
    storageBucket: 'vue-firebase-913a7.appspot.com',
    messagingSenderId: '231001948803',
    appId: '1:231001948803:web:43983de41a40c4b72911b6',
};

const app = initializeApp(firebaseConfig);

const fireAuth = getAuth(app);

const firestore = getFirestore();

export { fireAuth, firestore };
