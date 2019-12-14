import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/login/Main';
import Dashboard from '../components/dashboard/Main';
import { AuthService, EventBus } from '@/services';


AuthService.init();

var router = new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})

// set up events
import { USER_LOGGED_IN , USER_LOGGED_OUT} from '@/constants/events';
EventBus.$on(USER_LOGGED_IN, (user) => {
    // save to browser session
    if(router.history.current.name !== 'Login') {
        return;
    }

    router.push({ name: 'Dashboard' });
});

EventBus.$on(USER_LOGGED_OUT, () => {
    if(router.history.current.name === 'Login') {
        return;
    }
    router.push({ name: 'Login' });
});


// set up guard
router.beforeEach((to, from, next) => {

    if (!AuthService.hasAuth()) {
        if (to.name != 'Login') {
            next({ path: '/login' });
        } else {
            next();
        }
    }

    //INFO: now app has user session
    else if (to.name == 'Login') {
        // go to default
        next({path: '/' }); 
    }

    else {
        next();
    }
})

export default router;