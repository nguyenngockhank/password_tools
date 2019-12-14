import loginUsecase from '@/use-cases/user/login'
import logoutUsecase from '@/use-cases/user/logout'

import userStore from './store'
import LocalSession from './local_session'
import userTransformer from './user_transformer';
import { firebase, authProvider } from '@/io/firebase'

// inject dependencies to Use Cases
loginUsecase.setUserStore(userStore);
loginUsecase.setUserTransformer(userTransformer);

logoutUsecase.setUserStore(userStore);
// end


class AppProvider {

    init() {
        // set up local session
        if (LocalSession.hasSession()) {
            let lastReponse = LocalSession.getSession();
            loginUsecase.execute(lastReponse);
        }

        // set up callback for auth 
        firebase.auth().onAuthStateChanged(function(result) {
            if (result !== null) {
                // login success
                loginUsecase.execute(result);
                LocalSession.saveSession(result);
            } else {
                // logout success
                logoutUsecase.execute();
                LocalSession.removeSession();
            }
        });
    }

    hasAuth() {
        return userStore.hasUser();
    }

    getUser() {
        return userStore.getUser();
    }

    //info: return a Promise 
    requestLogin() {
        return firebase.auth().signInWithPopup(authProvider);
    }

    //info: return a Promise 
    requestLogout() {
        return firebase.auth().signOut();
    }
}

export default new AppProvider;