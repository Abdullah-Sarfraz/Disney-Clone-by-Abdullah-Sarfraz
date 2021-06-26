import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHVQW4NU_xpfhMgCWf8kKZc_fMheIFDQQ",
  authDomain: "semesterproject-b75cf.firebaseapp.com",
  projectId: "semesterproject-b75cf",
  storageBucket: "semesterproject-b75cf.appspot.com",
  messagingSenderId: "80398499815",
  appId: "1:80398499815:web:f12b2ff698b128e2304742",
  measurementId: "G-GWEQCWQLSC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
