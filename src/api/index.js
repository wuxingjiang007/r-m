import Vue from 'vue'
import api from './create-api.js'

const vue = new Vue;

const fetch = (path, data, method = 'post') => {
  return new Promise((resolve, reject) => {
    vue.$http[method](path, data).then(res => {
      if(res.body.code == '000') {
        resolve(res.body)
      } else {
        console.log(res.body)
        reject(res.body)
      }
    }, reject => {
      reject(res.body)
    })
  })
}

export function signin () {
  var formData = new FormData();

  formData.append('email', '13658082213@fotor.net.cn')
  formData.append('password', '8536469')
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

export function addCouponCode (data) {
  return fetch(api.addCouponCode, data)
}

export function listOrder (data) {
  return fetch(api.listOrder, data)
}

export function GetOrderInfo (data) {
  return fetch(api.getOrderInfo, data)
}