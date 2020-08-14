import firebase from "firebase/app";
import "firebase/database";

//connecting to the firebase data store
const firebaseConfig = {
  apiKey: "AIzaSyDiBZB5Uw7mgcJoFpRh0wSKU-ItAmVczvk",
  authDomain: "button-game-6b89f.firebaseapp.com",
  databaseURL: "https://button-game-6b89f.firebaseio.com",
  projectId: "button-game-6b89f",
  storageBucket: "button-game-6b89f.appspot.com",
  messagingSenderId: "556932643649",
  appId: "1:556932643649:web:770ada9a70d7ea82817fc0",
  measurementId: "G-0T1KXSW461",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
