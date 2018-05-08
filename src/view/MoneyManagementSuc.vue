<template>
  <div id="MoneyManagementNext" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
           <b-card title="充值管理"
                  class="text-center" 
                  bg-variant="Light" >
            <b-alert show class="text-left">充值处理成功，处理单号:123456</b-alert>
            <b-row class="my-1">
              <b-col cols="4" class="text-right">申请人：</b-col>
              <b-col>王大大</b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="4" class="text-right">充值用户懒设计账号：</b-col>
              <b-col>123456456@qq.com</b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="4" class="text-right">充值实收总额：</b-col>
              <b-col>200</b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="4" class="text-right">充值赠送总额：</b-col>
              <b-col>30</b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="4" class="text-right">充值理由备注:</b-col>
              <b-col>导师但是发送到发送到富商大贾啥的法撒旦法撒旦法</b-col>
            </b-row>
            <b-btn  class="mt-3" block variant="success" @click="backMenu">返回首页</b-btn>
            
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'MoneyManagementNext',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
    }
  },
  methods: {
    backMenu () {
      this.$router.push('/Menu')
    }
  }
}
</script>

<style lang="scss">

</style>
