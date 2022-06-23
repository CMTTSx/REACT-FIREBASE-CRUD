import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyA0cHpr82FkW2FZ9AZKmuDCaP4sRytlE80",
  authDomain: "crud-firebase-react-7aa8f.firebaseapp.com",
  databaseURL: "https://crud-firebase-react-7aa8f-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-react-7aa8f",
  storageBucket: "crud-firebase-react-7aa8f.appspot.com",
  messagingSenderId: "319636058006",
  appId: "1:319636058006:web:b81e1b4a8b1238468437b7"
};

firebase.initializeApp(config);

export default firebase.database();
