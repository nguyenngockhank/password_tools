import { USER_LOGGED_OUT } from '@/constants/events'
import { EventBus } from '@/services';

class LogoutUsecase {

    setUserStore(userStore) {
        this.userStore = userStore;
    }

    execute() {
        this.userStore.setUser(null);

        //info: Emit Event
        EventBus.$emit(USER_LOGGED_OUT);
    }
}

export default new LogoutUsecase;