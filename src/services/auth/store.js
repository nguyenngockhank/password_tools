class UserStore {
    constructor() {
        this.user = null;
    }

    hasUser() {
        return this.user != null;
    }

    setUser(user) {
        this.user = user;
    }
}

export default UserStore;