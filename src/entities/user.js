class User {

    constructor(email, name, photoURL, token) {
        this._name = name;
        this._email = email;
        this._token = token;
        this._photoURL = photoURL;
    }

    getName() {
        return this._name;
    }
}

export default User;