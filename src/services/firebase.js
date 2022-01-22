import firebase from "./firebase";
const config = {
  apiKey: "AIzaSyDNuu3zch1edtU32q2rj-N2fI_KNEkaaRE",
  authDomain: "synday-f21da.firebaseapp.com",
  databaseURL: "https://synday-f21da.firebaseio.com",
  projectId: "synday-f21da",
  storageBucket: "synday-f21da.appspot.com",
  messagingSenderId: "135088495571",
  appId: "1:135088495571:web:10545c221927f77ab72d26",
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore();
export const docRef = firestore.collection("users");
