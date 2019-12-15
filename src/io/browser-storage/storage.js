class Storage {

    constructor(type = 'localStorage', key = null) {
        if (!key) { 
            throw new Error('Key invalid!')
        }

        if (!['localStorage', 'sessionStorage'].includes(type)) { 
            throw new Error('Type of storage invalid!')
        }

        this._key = key;
        this._type = type;
    }

    get storage () {
        return window[this._type]; 
    }

    hasValue() {
        return  this.storage.getItem(this._key) != null;
    }

    getValue() {
        return JSON.parse(this.storage.getItem(this._key));
    }

    saveValue(data) {
        var data = JSON.stringify(data);
        this.storage.setItem(this._key, data)
    }

    removeValue() {
        this.storage.removeItem(this._key);
    }
}

export default Storage;