// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: 'AIzaSyCneI-9WPco0wH8zERGyqowI0sXaWeM1IQ',
    authDomain: 'cv-cherkas.firebaseapp.com',
    databaseURL:
        'https://cv-cherkas-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cv-cherkas',
    storageBucket: 'cv-cherkas.appspot.com',
    messagingSenderId: '730620484477',
    appId: '1:730620484477:web:b4f712078442af97da0a14',
    measurementId: 'G-H99D40549Z',
};

export const initializeFirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(initializeFirebaseApp);
