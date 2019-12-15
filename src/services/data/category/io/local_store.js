import BrowserStorage from '@/io/browser-storage/storage';

class LocalStore extends BrowserStorage {

    constructor() {
        const KEY = 'APP.DATA.CATEGORY';
        super('localStorage', KEY);
    }

    getValue() {
        var val = super.getValue();

        console.log('LOCAL STORGE', val)

    }

}

export default new LocalStore;