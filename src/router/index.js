import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/login/Main';

import HelloWorld from '../components/HelloWorld'
const SecondWorld = () => import(/* webpackChunkName: "secondworld" */ '../components/SecondWorld')

import { AuthService, EventBus } from '@/services';
AuthService.init();

var router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/secondworld',
            name: 'SecondWorld',
            component: SecondWorld
        },
    ]
})

// set up events
import { USER_LOGGED_IN , USER_LOGGED_OUT} from '@/constants/events';
EventBus.$on(USER_LOGGED_IN, (user) => {
    router.push({ path: '/' });
});

EventBus.$on(USER_LOGGED_OUT, () => {

    if(router.history.current.name == 'Login') {
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