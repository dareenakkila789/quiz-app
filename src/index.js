import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8yRaA5V-hrWjm7sl-8zSF-DJ2ZkE2OFU",
  authDomain: "exchange-experiences.firebaseapp.com",
  databaseURL: "https://exchange-experiences.firebaseio.com",
  projectId: "exchange-experiences",
  storageBucket: "exchange-experiences.appspot.com",
  messagingSenderId: "318757269452",
  appId: "1:318757269452:web:e42dfac2463d95448db769",
  measurementId: "G-4P8152PSVS"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
