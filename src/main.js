import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
