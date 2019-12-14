// __webpack_public_path__ = window.assetUrl || '';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});