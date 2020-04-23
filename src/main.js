import Vue from 'vue';
import App from './App.vue';
import axiosConfig from './axios.config';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import store from "./store.js";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$http = axiosConfig;


Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
