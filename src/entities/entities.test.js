var assert = require('assert');

import User from './user';
import Category from './category';


describe('Entities', function () {

    describe('# User Entity', function () {

        it('Check method `getName` & `getId` after initilization ', function () {
            
            const NAME = 'khanh';
            const USER_ID = 1;
            var user = new User(USER_ID, null, NAME, null, null);

            assert.strictEqual(user.getName(), NAME);
            assert.strictEqual(user.getId(), USER_ID);
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


