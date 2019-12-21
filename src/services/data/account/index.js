import FireAccountRepo from '@/io/firebase-repo/account_repo'
import makeUuid from './make_uuid'
import Account from '@/entities/account'

import { arrRawToEntities } from './transformer'

import { AuthService } from '@/services'

function getUserId() {
    return AuthService.getUser().getId();
}

class AccountData {

    async create(data) {
        // pass validation
        var { cat_id, user,  pass, login_url, note } = data;
        var id = makeUuid();

        var account = new Account(id, cat_id, user, pass, login_url, note );

        console.log('Build entity', account)
        
        await FireAccountRepo.store( getUserId(), account);

        return account;
    }

    /**
     * get all accounts current user 
     * @param {string} returnType Should be 'entity' or 'raw'. 'raw' will be default value
     */
    async getUserData(returnType = 'raw') {
        var userId = getUserId();
        var value = await FireAccountRepo.getManyOfUser(userId);

        // console.log('>>> all account from friebase', value)
        value = Object.values(value);
        if (returnType === 'raw') {
            return value;
        }

        // entity
        return arrRawToEntities(value);
    }
}

export default new AccountData;
