var assert = require('assert');

import User from './user';
import Category from './category';


describe('Entities', function () {

    describe('# User Entity', function () {

        it('Check method `getName` after initilization ', function () {
            const NAME = 'khanh';
            var user = new User(null, NAME, null, null);
            assert.strictEqual(user.getName(), NAME);
        });
    });

    
    describe('# Category Entity', function () {

        it('Check method `getName` & `getId` after initilization ', function () {
            const NAME = 'test';
            const ID = 'id';

            var cat = new Category(ID, NAME, null);

            assert.strictEqual(cat.getId(), ID);
            assert.strictEqual(cat.getName(), NAME);
        });
    });
});


