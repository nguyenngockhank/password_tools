import User from '@/entities/user';

// from  firebase login response -> to user entity
export default function(firebaseResponse) {
    // console.log('Firebase response', firebaseResponse);
    var { uid, email, displayName, photoURL, refreshToken } = firebaseResponse;
    return  new User(uid, email, displayName, photoURL, refreshToken);
}