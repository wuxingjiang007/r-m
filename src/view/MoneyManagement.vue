<template>
  <div id="MoneyManagement" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
          <transition name="step1">
          <b-form v-if="show == 'step1'">
            <b-form-group id="MoneyManagementGroup1"
                          label="用户懒设计号:"
                          label-for="MoneyManagementInput1">
              <b-form-input id="MoneyManagementInput1"
                            requird>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroup1"
                          label="用户充值实付:"
                          label-for="MoneyManagementInput1">
              <b-form-input id="MoneyManagementInput1"
                            requird>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroup1"
                          label="用户充值赠送:"
                          label-for="MoneyManagementInput1">
              <b-form-input id="MoneyManagementInput1"
                            requird>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroup1"
                          label="用户充值理由备注:"
                          label-for="MoneyManagementInput1">
              <b-form-textarea  id="MoneyManagementInput1"
                                :rows="3"
                                max-rows="6"
                                requird>
              </b-form-textarea>
            </b-form-group>
            <b-form-group>
              <b-btn @click="setStep('step2')" block variant="primary">下一步</b-btn>
            </b-form-group>
          </b-form>
          </transition>
          <transition name="step1">
          <b-card title="充值管理"
               
                v-if="show == 'step2'">
            <p>充值确认，请确认下方充值信息，确认无误后点击提交执行操作</p>
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
            <b-btn  class="mt-3" block variant="outline-success" @click="setStep('step3')">提交</b-btn>
            
          </b-card>
          </transition>
          <transition name="step1">
          <b-card title="充值管理"
               
                v-if="show == 'step3'">
            <p>充值处理成功，处理单号:123456</p>
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
            <b-btn  class="mt-3" block variant="outline-success" @click="backMenu">返回首页</b-btn>
            
          </b-card>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    
   
    <!-- <b-modal id="modal1" hide-footer title="充值确认" ref="modal1">
      <p class="my-1">请确认下方充值信息，确认无误后点击提交执行操作</p>
      <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
      <b-btn  class="mt-3" block variant="outline-success" @click="sumbitForm">提交</b-btn>
    </b-modal>
    <b-modal id="modal2" hide-footer hide-header ref = "modal2">
      <p class="my-1">充值处理成功， 处理单号：1234567890</p>
      <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
        <b-row>
        <b-col>优惠码金额：</b-col>
        <b-col>xxxxxxxxxx</b-col>
      </b-row>
      <b-btn  class="mt-3" block variant="outline-success" @click="backMenu">返回首页</b-btn>
    </b-modal> -->

  
  </div>
</template>

<script>


export default {
  name: 'MoneyManagement',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
      show: 'step1',
    }
  },
  methods: {
    sumbitForm () {
      this.hideModal('modal1');
      this.showModal('modal2');
      
    },
    showModal (ref) {
      this.$refs[ref].show()
    },
    hideModal (ref) {
      this.$refs[ref].hide()
    },
    backMenu () {
      this.$router.push('/Menu')
    },
    setStep (step) {
      this.show = step;
    }
  }
}
</script>

<style lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.step1-enter-active {
  transition: all .6s linear;
}
.step1-leave-active {
  transition: all .6s linear;
}
.step1-enter, .step1-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: rotateY(180deg)
  // opacity: 0;
}
</style>
