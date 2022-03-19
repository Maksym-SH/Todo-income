import Vue from "vue";
import App from "./App.vue";
import store from "./store/";
import router from "./router/";
Vue.config.productionTip = false;
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
