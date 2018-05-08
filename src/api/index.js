import Vue from 'vue'
import api from './create-api.js'

const vue = new Vue;

const fetch = (path, data, method = 'post') => {
  return new Promise((resolve, reject) => {
    vue.$http[method](path, data).then(res => {
      if(res.body.code == '000') {
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }, reject => {
      reject(res.body)
    })
  })
}

export function signin () {
  var formData = new FormData();

  formData.append('email', 'lxy_luckysmile@sina.com')
  formData.append('password', 'lxy654321')
  return fetch(api.signin, formData)
}

export function checkSign () {

  return fetch(api.getSign + '?_=' + Date.parse(new Date()), {}, 'get')
}

export function signOut () {
  return fetch(api.signOut + '?_=' + Date.parse(new Date()), {}, 'get')
}

export function saveOrder (data) {
  return fetch(api.saveOrder, data)
}