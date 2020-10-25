import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEF8G2yzpZ1LlYDD4I9Z2x6b4lGkst29c",
    authDomain: "ya-netflix.firebaseapp.com",
    databaseURL: "https://ya-netflix.firebaseio.com",
    projectId: "ya-netflix",
    storageBucket: "ya-netflix.appspot.com",
    messagingSenderId: "228364049604",
    appId: "1:228364049604:web:ab911422d3a313a3a87d91"
};

const firebase = Firebase.initializeApp(config);


export { firebase };