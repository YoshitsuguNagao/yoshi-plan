import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBakE4pAmA8M-Pvi5b62wN0n7-5j9luk8Y",
  authDomain: "yoshi-plan.firebaseapp.com",
  databaseURL: "https://yoshi-plan.firebaseio.com",
  projectId: "yoshi-plan",
  storageBucket: "",
  messagingSenderId: "177633136817",
  appId: "1:177633136817:web:c0ce731d4c171567"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;