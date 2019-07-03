import Vue from 'vue'
import api from './create-api.js'

const vue = new Vue;

const fetch = (path, data, method = 'post') => {
  let loader = vue.$loading.show()
  return new Promise((resolve, reject) => {
    if(Object.prototype.toString.call(data) !== '[object FormData]') {
      data = {params: data}
    }
    vue.$http[method](path, data).then(res => {
      loader.hide()
      if(res.body.code == '000') {
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }, res => {
      loader.hide()
      reject(res.body)
    })
  })
}

export function signin (data) {

  return fetch(api.signin, data)
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

export function getListOrder (data) {
  return fetch(api.listOrder, data, 'get')
}

export function GetOrderInfo (data) {
  return fetch(api.getOrderInfo, data)
}

export function getListCouponCode (data) {
  return fetch(api.listCouponCode, data, 'get')
}

export function getCouponDetail (data) {
  return fetch(api.findCouponCode, data, 'get')
}
export function getOrderDetail (data) {
  return fetch(api.getOrderInfo, data, 'get')

}
