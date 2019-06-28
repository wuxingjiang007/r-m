
import Vue from 'vue'
let alertId = 0;
export default {
  SETAPPERROR: (state, msg) => {
    state.appError.push({
      msg,
      time: 10,
      pTime: 10,
      dismissed: false,
      alertId: alertId++
    })
  },
  DELAPPERROR: (state, item) => {
    state.appError.splice(state.appError.indexOf(item), 1)
  },
  SETUSERS: (state, data) => {
    state.users = data
  },
  SETMONEYDATA: (state, data) => {
    state.moneyData = data
  },
  SETCODEDATA: (state, data) => {
    state.codeData = data
  },
  SETORDERNO: (state, data) => {
    state.orderNo = data
  },
  CLEARLISTCOUPON: (state) => {
    state.couponRecordList = []
  },
  CONCATLISTCOUPON: (state, data) => {
    state.couponRecordList = state.couponRecordList.concat(data)
  },
  SETCOUPONPAGENO: (state, page) => {
    state.couponState.pageNo = page
  },
  SETCOUPONEMAIL: (state, email) => {
    state.couponState.email = email
  },
  CONCATLISTORDER: (state, data) => {
    state.orderRecordList = state.orderRecordList.concat(data)
  },
  CLEARLISTORDER: (state) => {
    state.orderRecordList = []
  },
  RESETMONEYDATA: (state) => {
    state.moneyData = state.initMoneyData
  },
  RESETCODEDATA: (state) => {
    state.codeData = state.initCodeData
  }
}
