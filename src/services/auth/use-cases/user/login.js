import { USER_LOGGED_IN } from '@/constants/events'
import { EventBus } from '@/services';

class LoginUsecase {

    setUserStore(userStore) {
        this.userStore = userStore;
    }

    setUserTransformer(userTransformer) {
        this.userTransformer = userTransformer;
    }

    execute(result) {
        var user = this.userTransformer(result); 

        // store user
        this.userStore.setUser(user);

        //info: Emit Event
        EventBus.$emit(USER_LOGGED_IN, user);
    }
}

export default new LoginUsecase;