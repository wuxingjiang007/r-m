import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store( {
    state: {
      users: '',
      moneyData: [{
        label:"用户懒设计号:",
        inputId: 'MoneyManagementId',
        type: 'text',
        value: '',
        placeholder:"请输入懒设计号"
        },
        {
        label:"用户充值实付:",
        inputId: 'MoneyManagementMoney',
        type: 'number',
        value: '',
        placeholder:"请输入充值实付金额"
        },
        {
        label:"用户充值赠送:",
        inputId: 'MoneyManagementGift',
        type: 'number',
        value: '',
        placeholder:"请输入充值赠送金额"
        },
        {
        label:"用户充值理由备注:",
        inputId: 'MoneyManagementDesc',
        type: 'text',
        value: '',
        placeholder:"请输入用户充值理由"
        },],
      codeData: {},
      moneyRecord: [],
      codeRecord: [],
    },
    getters,
    mutations,
    actions,
  })
}