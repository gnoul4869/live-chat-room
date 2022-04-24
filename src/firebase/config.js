import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyApuY7_ePpNv2LtX4IZlLSVXJBpaXz0Jpc',
    authDomain: 'live-chat-room-v2.firebaseapp.com',
    projectId: 'live-chat-room-v2',
    storageBucket: 'live-chat-room-v2.appspot.com',
    messagingSenderId: '274904558684',
    appId: '1:274904558684:web:a5014cd84d41db7e878a99',
    measurementId: 'G-7SGC0D6ZVW',
};

const app = initializeApp(firebaseConfig);

const fireAuth = getAuth(app);

const firestore = getFirestore();

export { fireAuth, firestore };
