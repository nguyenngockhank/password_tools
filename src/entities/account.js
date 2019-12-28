/** @module entities */

/** Class representing an Account. */
class Account {

    /**
     * Create an Account
     * @param {string} id identifier
     * @param {string} catId category slug
     * @param {string} username user or email
     * @param {string} password password was encoded
     * @param {string} loginUrl url to login
     * @param {string} note few note 
     */
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