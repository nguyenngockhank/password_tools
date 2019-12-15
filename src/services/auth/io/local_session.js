import BrowserStorage from '@/io/browser-storage/storage';

class LocalSession {

    constructor() {
        const KEY = 'APP.FIREBASE.AUTHED';
        this.store = new BrowserStorage('sessionStorage', KEY);
    }

    hasSession() {
        return this.store.hasValue();
    }

    getSession() {
        return this.store.getValue();
    }

    saveSession(firebaseResponse) {
        var { uid, email, displayName, photoURL, refreshToken } = firebaseResponse;
        this.store.saveValue({  uid, email, displayName, photoURL, refreshToken });
    }

    removeSession() {
        this.store.removeValue();
    }
}

export default new LocalSession;