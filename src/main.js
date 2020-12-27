import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import {VueMasonryPlugin} from 'vue-masonry'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueTyperPlugin)
Vue.use(VueMasonryPlugin)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
