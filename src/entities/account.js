class Account {

    constructor(id, catId, username, password, loginUrl, note) {
        this._id = id;
        this._catId = catId,
        this._username = username;
        this._password = password;
        this._loginUrl = loginUrl;
        this._note = note;
        
    }

    getLoginUrl() {
        return this._loginUrl;
    }

    getId() {
        return this._id;
    }

    getCategoryId() {
        return this._catId;
    }

    getUsername() {
        return this._username;
    }

    getPassword() {
        return this._password;
    }

    getNote() {
        return this._note;
    }
}

export default Account;