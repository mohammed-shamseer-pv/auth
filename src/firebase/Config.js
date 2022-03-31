import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAYrcF3jZMkK03JuQ36hJmOmS6EQLHi88I",
    authDomain: "regstration-e7916.firebaseapp.com",
    projectId: "regstration-e7916",
    storageBucket: "regstration-e7916.appspot.com",
    messagingSenderId: "867194107703",
    appId: "1:867194107703:web:32b09c53c63eebceaf4cb2",
    measurementId: "G-JR73BYFXBL"
  };

 export default firebase .initializeApp(firebaseConfig)