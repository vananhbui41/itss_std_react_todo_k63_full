import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8JLz80X1IL6bah0lB1HfiWQ9I6IW7Pxk",
    authDomain: "itss-firebase-demo.firebaseapp.com",
    projectId: "itss-firebase-demo",
    storageBucket: "itss-firebase-demo.appspot.com",
    messagingSenderId: "308633364056",
    appId: "1:308633364056:web:950dcc5e688a34bd0a8c2d"
  };

firebase.initializeApp(firebaseConfig);