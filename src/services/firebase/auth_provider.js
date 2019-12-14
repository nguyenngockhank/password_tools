import firebase from './firebase';

firebase.auth().languageCode = 'vi';

var provider = new firebase.auth.GoogleAuthProvider();

export default provider;

