import {
  signin,
  checkSign,
  signOut,
  saveOrder,
  addCouponCode,
  getListCouponCode,
  getListOrder,
  getCouponDetail,
  getOrderDetail,
} from '../api'

import {
  getEmail
} from '../assets/common'

export default {
  SIGNIN: ({commit}, data) => {
    return new Promise((resolve, reject) => {
      var formData = new FormData();

      formData.append('email', getEmail(data.account))
      formData.append('password', data.password)
      signin(formData).then(res => {
        commit('SETUSERS', res.data)
        resolve()
      }, res => {
        reject(res)
      })
    })
  },
  CHECKSIGN: ({commit}) => {
    return new Promise((resolve, reject) => {
      checkSign().then(res => {
        resolve()
        commit('SETUSERS', res.data)
      }, () => {
        // 没有登录
        console.log('没有登录')
        reject()
      })
    })
  },
  SIGNOUT: ({commit}) => {
    return new Promise((resolve, reject) => {
      signOut().then(res => {
        resolve()
        commit('SETUSERS', '')
      }, () => {
        // 没有登录
        
        reject()
      })
    })
  },
  SAVEORDER: ({getters, commit}) => {
    return new Promise((resolve, reject) => {
      saveOrder(getters.sumbitMoneyForm).then(res => {
        resolve(res)
      }, (res) => {
        reject(res)
        commit('SETAPPERROR', res)
      })
    })
  },
  SAVECODE: ({getters, commit}) => {
    return new Promise((resolve, reject) => {
      addCouponCode(getters.sumbitCodeForm).then(res => {
        resolve(res)
      }, res => {
        reject(res)
        commit('SETAPPERROR', res)
      })
    })
  },
  GETLISTCOUPON: ({getters, commit}, data) => {
    return new Promise((resolve, reject) => {
      getListCouponCode(data).then(res => {
        resolve(res)
      }, res => {
        // reject(res)
        commit('SETAPPERROR', res)
      })
    })
  },
  GETLISTORDER: ({getters, commit}, data) => {
    return new Promise((resolve, reject) => {
      getListOrder(data).then(res=> {
        resolve(res)
      }, res => {
        commit('SETAPPERROR', res)
      })
    })
    
  },
  GETCOUPONDETAIL: ({commit}, data) => {
    return new Promise((resolve, reject) => {
      getCouponDetail(data).then(res=> {
        resolve(res)
      }, res => {
        commit('SETAPPERROR', res)
      })
    })
  },
  GETORDERDETAIL: ({commit}, data) => {
    return new Promise((resolve, reject) => {
      getOrderDetail(data).then(res=> {
        resolve(res)
      }, res => {
        commit('SETAPPERROR', res)
      })
    })
  }
}