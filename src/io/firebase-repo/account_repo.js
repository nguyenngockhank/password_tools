import { database } from '../firebase'

class AccountRepo {


    async store(userId, accountEntity) {
        console.log('Create account ', userId, accountEntity)

        var id = accountEntity.getId();

        database.ref(`users/${userId}/accounts/${id}`).set({
            username: accountEntity.getUsername(),
            note: accountEntity.getNote(),
            password: accountEntity.getPassword(),
            loginUrl: accountEntity.getLoginUrl(),
        });
    }

    async getManyOfUser(userId) {
        let snapshot = await database.ref(`/users/${userId}/accounts`).once('value'); 
        let val = snapshot.val();

        // transform data


        return val;
    }

}


export default new AccountRepo;