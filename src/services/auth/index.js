import loginUsecase from '@/use-cases/user/login'
import logoutUsecase from '@/use-cases/user/logout'

import UserStore from './store'
var userStore = new UserStore(userStore)

import userTransformer from './user_transformer';
import { firebase, authProvider } from '../firebase'

// inject dependencies to Use Cases
loginUsecase.setUserStore(userStore);
loginUsecase.setUserTransformer(userTransformer);

logoutUsecase.setUserStore(userStore);


class AppProvider {

    init() {
        firebase.auth().onAuthStateChanged(function(result) {
            if (result !== null) {
                // login success
                loginUsecase.execute(result);

            } else {
                // logout success
                logoutUsecase.execute();
            }
        });
    }

    hasAuth() {
        return userStore.hasUser();
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