import {
  signin,
  checkSign,
  signOut,
  saveOrder,
  addCouponCode,
} from '../api'

export default {
  SIGNIN: ({commit}) => {
    return new Promise((resolve, reject) => {
      signin().then(res => {
        commit('SETUSERS', res.data)
        console.log('dsds')
        resolve()
      }, res => {
        console.log('error')
        console.log(res)
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
        commit('SETAPPERROR', res.msg)
      })
    })
  },
  SAVECODE: ({getters, commit}) => {
    return new Promise((resolve, reject) => {
      addCouponCode(getters.sumbitCodeForm).then(res => {
        resolve(res)
      }, res => {
        reject(res)
        commit('SETAPPERROR', res.msg)
      })
    })
  }
}