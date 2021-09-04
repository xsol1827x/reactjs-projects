import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4w1-FrUUxDpo7j6glDOXtAZt7YxMOtGI",
    authDomain: "online-cards-react.firebaseapp.com",
    projectId: "online-cards-react",
    storageBucket: "online-cards-react.appspot.com",
    messagingSenderId: "233818130667",
    appId: "1:233818130667:web:ad1bd8306d8f55b15e16ae"
};

firebase.initializeApp(firebaseConfig)

export { firebase };

