export default {
  isSign (state) {
    return typeof state.users == 'object'
  },
  moneyForm (state) {
    var data = state.moneyData
    if(Object.keys(data).length == 0) {
      return ''
    }
    let m = new Map()
    data.forEach((item) => {
      m.set(item.label, item.value)
    })

    function strMapToObj(strMap) {
      let obj = Object.create(null);
      for (let [k,v] of strMap) {
        obj[k] = v;
      }
      return obj;
    }
    return [strMapToObj(m)];
  },
  sumbitMoneyForm (state) {
    var data = state.moneyData.map( ({value}) => (value))
    return {
      userId: data[0],
      price: data[1],
      discountPrice: data[2],
      remark: data[3]
    }
  }
}