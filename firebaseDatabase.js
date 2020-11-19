import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDA-RvgEPFjDA-v-aXJlUYU1NSB8FdT1Og',
  authDomain: 'random-lucky-auth.firebaseapp.com',
  databaseURL: 'https://random-lucky-auth.firebaseio.com',
  projectId: 'random-lucky-auth',
  storageBucket: 'random-lucky-auth.appspot.com',
  messagingSenderId: '586521104728',
  appId: '1:586521104728:web:6cd3f009cc1ec99324d52d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
