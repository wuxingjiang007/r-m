import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import router from './router/index.js'

import {createStore} from './store'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/common.css"


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

const store = createStore()

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
