class User {

    constructor(email, name, photoURL, token) {
        this.name = name;
        this.email = email;
        this.token = token;
        this.photoURL = photoURL;
    }

    getName() {
        return this.name;
    }
}

export default User;