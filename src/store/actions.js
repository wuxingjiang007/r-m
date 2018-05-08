import {
  signin,
  checkSign,
  signOut,
  saveOrder,
} from '../api'

export default {
  SIGNIN: ({commit}) => {
    signin().then(res => {
      commit('SETUSERS', res.data)
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
  SAVEDATA: ({getters}) => {
    return new Promise((resolve, reject) => {
      saveOrder(getters.sumbitMoneyForm).then(res => {
        resolve()
      }, () => {
        reject()
      })
    })
  }
}