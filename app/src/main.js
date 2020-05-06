import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = process.env.VUE_APP_FIREBASE_URL;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
