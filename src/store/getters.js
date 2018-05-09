function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

function getForm(data) {
  if(Object.keys(data).length == 0) {
    return ''
  }
  let m = new Map()
  data.forEach((item) => {
    if(typeof item.value === 'object') {
      
      for (let p in item.value) {
        if(Object.prototype.toString.call(item.value[p]) == "[object Date]" ){
          item.value[p] = dateFormat(item.value[p])
        }
      }
      console.log(Object.values(item.value))
      m.set(item.label, Object.values(item.value).join('至'))
    } else {
      m.set(item.label, item.value)
    }
    
  })
  return [strMapToObj(m)];
}

const dateFormat = function(date, fmt = 'yyyy-MM-dd')   
  { //author: meizz   
    var o = {   
      "M+" : date.getMonth()+1,                 //月份   
      "d+" : date.getDate(),                    //日   
      // "h+" : date.getHours(),                   //小时   
      // "m+" : date.getMinutes(),                 //分   
      // "s+" : date.getSeconds(),                 //秒   
      "q+" : Math.floor((date.getMonth()+3)/3), //季度   
      "S"  : date.getMilliseconds()             //毫秒   
    };   
    if(/(y+)/.test(fmt))   
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)   
      if(new RegExp("("+ k +")").test(fmt))   
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt + ' 00:00:00';   
  }  

export default {
  isSign (state) {
    return typeof state.users == 'object'
  },
  moneyShowData (state) {
    return getForm(state.moneyData)
  },
  sumbitMoneyForm (state) {
    var data = state.moneyData.map( ({value}) => (value));

    var formData = new FormData();

    formData.append('userId', data[0])
    formData.append('price', data[1])
    formData.append('discountPrice', data[2])
    formData.append('remark', data[3])

    return formData;
  },
  codeShowData (state) {
    return getForm(state.codeData)
  },
  sumbitCodeForm (state) {
   // amount(金额,必须传递),count(个数,必须传递),createTime和endTime(必须传递),remark可传可不传
    var data = state.moneyData.map( ({value}) => (value));
    var formData = new FormData();

    formData.append('amount', data[0])
    formData.append('count', data[1])
    formData.append('createTime', data[2].start)
    formData.append('endTime', data[2].end)
    formData.append('remark', data[3])

    return formData;
  }
}