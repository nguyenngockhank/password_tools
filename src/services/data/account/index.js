import FireAccountRepo from '@/io/firebase-repo/account_repo'
import makeUuid from './make_uuid'
import Account from '@/entities/account'

// import { arrEntityToRaws, arrRawToEntities } from './transformer'

import { AuthService } from '@/services'

function getUserId() {
    return AuthService.getUser().getId();
}

class AccountData {

    async create(data) {
        // pass validation
        var { user,  pass, login_url, note } = data;
        var id = makeUuid();

        var account = new Account(id, user, pass, login_url, note );

        console.log('Build entity', account)
        
        await FireAccountRepo.store( getUserId(), account);

        return account;
    }

    async getAll() {
      
    }
}

export default new AccountData;
