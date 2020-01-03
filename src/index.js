import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb24uXiA4KqTkgDdHqsC0P2bgXL1Qepe4",
    authDomain: "exchange-experiences-3ea8c.firebaseapp.com",
    databaseURL: "https://exchange-experiences-3ea8c.firebaseio.com",
    projectId: "exchange-experiences-3ea8c",
    storageBucket: "exchange-experiences-3ea8c.appspot.com",
    messagingSenderId: "1059579288862",
    appId: "1:1059579288862:web:1b70e9f939a1711f093d0f",
    measurementId: "G-D29DJSFKWQ"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
