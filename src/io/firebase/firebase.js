import firebaseConfig from './config';
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";


// set up firebase
firebase.initializeApp(firebaseConfig);

export default firebase;