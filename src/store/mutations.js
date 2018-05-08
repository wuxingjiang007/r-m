
import Vue from 'vue'
export default {
  SETUSERS: (state, data) => {
    state.users = data
  },
  SETMONEYDATA: (state, data) => {
    state.moneyData = data
  }
}