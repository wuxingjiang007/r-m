export default {
  signin: '/User/Login',
  getSign: '/User/GetLoginState',
  signOut: '/User/LogOut',
  saveOrder: '/User/manage/SaveOrder', //String userId, String price, String discountPrice, String remark
  listOrder: '/User/manage/listOrder', // int pageNo(必须传递), int pageSize(必须传递),fotorToken(当前登录用户的fotorToken)
  getOrderInfo: '/User/manage/GetOrderInfo', //获取某个订单信息,必须传递参数orderId(订单id)
  addCouponCode:'/User/manage/addCouponCode', //amount(金额,必须传递),count(个数,必须传递),createTime和endTime(必须传递),remark可传可不传
  listCouponCode: '/User/manage/listCouponCode', //status(必须传递,已使用传递1,未使用传递0,如果不区分是否使用,传递-1),int pageNo(必须传递), int pageSize(必须传递),email(可传可不传,传了就是当前登录用户操作的优惠码,不传就是所有的,它的值来源于/User/Login返回数据中的email)
  findCouponCode:'/User/manage/findCouponCode' //参数id(必须传递,上个接口返回数据中的优惠码的id)
}