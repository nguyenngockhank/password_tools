class UserStore {
    constructor() {
        this.user = null;
    }

    hasUser() {
        return this.user != null;
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
    }
}

export default UserStore;