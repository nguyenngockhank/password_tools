__webpack_public_path__ = window.assetUrl || '';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});