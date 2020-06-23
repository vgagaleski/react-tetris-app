import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-tetris-app.firebaseapp.com',
  databaseURL: 'https://react-tetris-app.firebaseio.com',
  projectId: 'react-tetris-app',
  storageBucket: 'react-tetris-app.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
