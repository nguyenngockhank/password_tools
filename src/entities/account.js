class Account {

    constructor(id, username, password, loginUrl, note) {
        this._id = id;
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