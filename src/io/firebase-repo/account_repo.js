/** 
 * Firebase Repository Module
 * @module firebase/repositories 
 * */

import { database } from '../firebase'
import Account from '@/entities/account';

class AccountRepo {

    /**
     * Store an Account
     * @param {string} userId
     * @param {Account} accountEntity 
     */
    async store(userId, accountEntity) {
        // console.log('Create account ', userId, accountEntity)
        var id = accountEntity.getId();

        database.ref(`users/${userId}/accounts/${id}`).set({
            id: accountEntity.getId(),
            catId: accountEntity.getCategoryId(),
            username: accountEntity.getUsername(),
            note: accountEntity.getNote(),
            password: accountEntity.getPassword(),
            loginUrl: accountEntity.getLoginUrl(),
        });
    }

    /**
     * Grab list Accounts of an User
     * @param {string} userId
     */
    async getManyOfUser(userId) {
        let snapshot = await database.ref(`/users/${userId}/accounts`).once('value'); 
        let val = snapshot.val();
        return val;
    }

}


export default new AccountRepo;