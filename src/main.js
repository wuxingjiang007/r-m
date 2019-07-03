import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Loading from 'vue-loading-overlay';


import router from './router'
import browser from './assets/browser'

import {createStore} from './store'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.min.css';

import "./assets/common.css"

import "babel-polyfill";

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Loading)

const store = createStore()

Vue.mixin({
  data () {
    return {
      isMobile: new browser().device == 'Mobile'
    }
  }
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
