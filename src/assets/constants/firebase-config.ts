// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyCneI-9WPco0wH8zERGyqowI0sXaWeM1IQ',
  authDomain: 'cv-cherkas.firebaseapp.com',
  projectId: 'cv-cherkas',
  storageBucket: 'cv-cherkas.appspot.com',
  messagingSenderId: '730620484477',
  appId: '1:730620484477:web:b4f712078442af97da0a14',
  measurementId: 'G-H99D40549Z',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
