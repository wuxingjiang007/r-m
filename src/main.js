import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'

import router from './router/index.js'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/common.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
