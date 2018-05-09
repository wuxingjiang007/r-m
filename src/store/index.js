import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store( {
    state: {
      appError: [],
      users: '',
      orderNo: '',
      moneyData: [
        {
          inputType: 'input',
          label:"用户懒设计号:",
          inputId: 'MoneyManagementId',
          type: 'text',
          value: '13658082213@fotor.net.cn',
          placeholder:"请输入懒设计号",
          description: "也许是手机号、邮箱、或者fotorToken"
        },
        {
          inputType: 'inputGroup',
          label:"用户充值实付:",
          inputId: 'MoneyManagementMoney',
          type: 'number',
          value: '',
          placeholder:"请输入充值实付金额",
          description: "",
          unit: '元'
        },
        {
          inputType: 'inputGroup',
          label:"用户充值赠送:",
          inputId: 'MoneyManagementGift',
          type: 'number',
          value: '',
          placeholder:"请输入充值赠送金额",
          description: "",
          unit: '元'
        },
        {
          inputType: 'textarea',
          label:"用户充值理由备注:",
          inputId: 'MoneyManagementDesc',
          type: 'text',
          value: '',
          placeholder:"请输入用户充值理由",
          description: ""
        },
      ],
      codeData: [
        {
          inputType: 'inputGroup',
          label:"优惠码优惠额度:",
          inputId: '200',
          type: 'number',
          value: 'd8e9132f64e6400cb6bde5beee44642e1 ',
          placeholder:"请输入优惠金额",
          description: "",
          unit: '元'
        },
        {
          inputType: 'inputGroup',
          label:"优惠码优惠数量:",
          inputId: 'codeManagementNo',
          type: 'number',
          value: ' ',
          placeholder:"请输入优惠码数量",
          description: "",
          unit: '个'
        },
        {
          inputType: 'datepicker',
          label:"优惠码有效起止日期:",
          inputId: 'MoneyManagementMoney',
          type: 'number',
          value: {
            start: '',
            end: ''
          },
          placeholder:"请输入充值实付金额",
          description: ""
        },
        {
          inputType: 'textarea',
          label:"优惠码申请备注:",
          inputId: 'MoneyManagementGift',
          type: 'number',
          value: '212',
          placeholder:"请输入优惠码备注",
          description: ""
        },
      ],
      moneyRecord: [],
      codeRecord: [],
    },
    getters,
    mutations,
    actions,
  })
}
