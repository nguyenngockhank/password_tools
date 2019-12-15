import BrowserStorage from '@/io/browser-storage/storage';

class LocalStore extends BrowserStorage {

    constructor() {
        const KEY = 'APP.DATA.CATEGORY';
        super('localStorage', KEY);
    }

}

export default new LocalStore;