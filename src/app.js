// __webpack_public_path__ = window.assetUrl || '';

import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});