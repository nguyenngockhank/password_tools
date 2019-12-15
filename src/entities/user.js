class User {

    constructor(id, email, name, photoURL, token) {

        if (!id) {
            throw new Error('Id is invalid');
        }
        

        this._id = id;
        this._name = name;
        this._email = email;
        this._token = token;
        this._photoURL = photoURL;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }
}

export default User;