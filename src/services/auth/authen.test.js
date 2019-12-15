var assert = require('assert');

import userStore from './io/store';
import userTransformer from './user_transformer';

import User from '@/entities/user';


describe('Authenication', function () {

    describe('# User Store', function () {

        it('should `store` has no session after set null', function () {
            userStore.setUser(null);
            assert.strictEqual(userStore.hasUser(), false);
        });

        it('should `store` has session after set user', function () {
            userStore.setUser({ name: 'khank' });
            assert.strictEqual(userStore.hasUser(), true);
        });
    });


    describe('# User Transformer', function () {

        it('The result must be an instance of User Entity', function () {
            var request = { 
                email: 'test@mail.com', 
                displayName: 'khank ne', 
                photoURL: 'aaaa', 
                refreshToken: 'null'
            }

            var user = userTransformer(request);

            assert.strictEqual( user instanceof User, true);
        });
      
    });
    
});


