import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App';
import VueRouter from 'vue-router'
import router from './router';
import VueTyperPlugin from 'vue-typer'
import {VueMasonryPlugin} from 'vue-masonry';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'

Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.use(router);
Vue.use(VueRouter);
Vue.use(VueTyperPlugin);
Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	render: h => h(App),
	router: router
}).$mount('#app');
