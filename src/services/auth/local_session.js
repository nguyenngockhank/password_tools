const KEY = 'APP.FIREBASE.AUTHED';


class LocalSession {

    hasSession() {
        return sessionStorage.getItem(KEY) != null;
    }

    getSession() {
        return JSON.parse(sessionStorage.getItem(KEY));
    }

    saveSession(firebaseResponse) {
        var { email, displayName, photoURL, refreshToken } = firebaseResponse
        var data = JSON.stringify({  email, displayName, photoURL, refreshToken });
        // from window
        sessionStorage.setItem(KEY, data)
    }

    removeSession() {
        sessionStorage.removeItem(KEY);
    }
}

export default new LocalSession;