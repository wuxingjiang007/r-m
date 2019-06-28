import { dateFormat } from '../assets/common.js'

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

function getForm(data) {
  if (Object.keys(data).length == 0) {
    return ''
  }
  let m = new Map()
  data.forEach((item) => {
    if (typeof item.value === 'object') {

      for (let p in item.value) {
        if (Object.prototype.toString.call(item.value[p]) == "[object Date]") {
          item.value[p] = dateFormat(item.value[p], 'yyyy-MM-dd 00:00:00')
        }
      }
      m.set(item.label, Object.values(item.value).join('至'))
    } else {
      m.set(item.label, item.value)
    }

  })
  return [strMapToObj(m)];
}



export default {
  isSign(state) {
    return typeof state.users == 'object'
  },
  moneyShowData(state) {
    return getForm(state.moneyData)
  },
  sumbitMoneyForm(state) {
    var data = state.moneyData.map(({ value }) => (value));

    var formData = new FormData();

    formData.append('userId', data[0])
    formData.append('price', data[1])
    formData.append('discountPrice', data[2])
    formData.append('remark', data[3])

    return formData;
  },
  codeShowData(state) {
    return getForm(state.codeData)
  },
  sumbitCodeForm(state) {
    // amount(金额,必须传递),count(个数,必须传递),createTime和endTime(必须传递),remark可传可不传
    var data = state.codeData.map(({ value }) => (value));
    var formData = new FormData();

    formData.append('amount', data[0])
    formData.append('count', data[1])
    formData.append('createTime', data[2].start)
    formData.append('endTime', data[2].end)
    formData.append('remark', data[3])

    return formData;
  },
  couponLists(state) {
    return state.couponRecordList.map(({
      id,
      code,
      createTime,
      creator,
      usedTimes,
      expiredDate,
      subscriptPackages }) => {
      return {
        'id': id,
        '优惠码': code,
        '类型': subscriptPackages + '元',
        '申请人': creator,
        '优惠码日期': dateFormat(new Date(createTime), 'yyyy/MM/dd') + '-' + dateFormat(new Date(expiredDate), 'yyyy/MM/dd'),
        '使用情况': usedTimes + '次',
        '操作': ''

      }
    })

  },
  orderLists(state) {
    return state.orderRecordList.map(({
      orderId,
      addressId,
      createTime,
      printWork,
    }) => {
      return {
        '单号': orderId,
        '申请人': addressId,
        '优惠码日期': createTime,
        '申请理由': printWork,
        '操作': ''
      }
    })

  }
}
