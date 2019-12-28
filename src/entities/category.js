/** @module entities */

/** Class representing a Category. */
class Category {

    constructor(id, name, icon) {
        this._id = id;
        this._name = name;
        this._icon = icon;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getIcon() {
        return this._icon;
    }
}

export default Category;