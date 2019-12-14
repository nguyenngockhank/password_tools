import User from '@/entities/user';

// from  firebase login response -> to user entity
export default function(firebaseResponse) {
    var { email, displayName, photoURL, refreshToken } = firebaseResponse;
    return  new User(email, displayName, photoURL, refreshToken);
}