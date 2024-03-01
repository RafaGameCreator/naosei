import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQeW-u-ooXOgm3U7RpiwanH8eXCo9uc54",
    authDomain: "equipeaoub.firebaseapp.com",
    databaseURL: "https://equipeaoub-default-rtdb.firebaseio.com",
    projectId: "equipeaoub",
    storageBucket: "equipeaoub.appspot.com",
    messagingSenderId: "424611912058",
    appId: "1:424611912058:web:283d9c6457e00d84d71ec3"
  };
  
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();