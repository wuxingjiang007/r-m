<template>
  <div id="CodeManagement" class="center-center">
    <b-form class="col-xs-12 col-sm-8 col-md-6">
      <b-form-group id="MoneyManagementGroup1"
                    label="优惠码优惠额度及数量:"
                    label-for="MoneyManagementInput1">
        <b-form-input id="MoneyManagementInput1"
                      requird>
        </b-form-input>
      </b-form-group>
      <b-form-group id="MoneyManagementGroup1"
                    label="优惠码有效起止日期选择:"
                    label-for="MoneyManagementInput1">
        <b-form-input id="MoneyManagementInput1"
                      requird>
        </b-form-input>
      </b-form-group>
  
      <b-form-group id="MoneyManagementGroup1"
                    label="优惠码申请备注:"
                    label-for="MoneyManagementInput1">
        <b-form-textarea  id="MoneyManagementInput1"
                          :rows="3"
                          max-rows="6"
                          requird>
        </b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-btn v-b-modal.modal1 block variant="primary">下一步</b-btn>
      </b-form-group>
    </b-form>
    <b-modal id="modal1" hide-footer title="优惠码生成管理器" ref="modal1">
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
    <b-modal id="modal2" hide-footer title="优惠码生成管理器" ref = "modal2">
      <p class="my-1">优惠码已生成， 处理单号：1234567890</p>
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
      <b-btn  class="mt-3" block variant="outline-success" @click="backMenu">查看优惠码</b-btn>
      <b-btn  class="mt-3" block variant="outline-success" @click="backMenu">返回首页</b-btn>
    </b-modal>
  </div>
  
</template>

<script>


export default {
  name: 'CodeManagement',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js CodeManagement'
    }
  },
  methods: {
    sumbitForm () {
      this.hideModal('modal1');
      this.showModal('modal2')
    },
    showModal (ref) {
      this.$refs[ref].show()
    },
    hideModal (ref) {
      this.$refs[ref].hide()
    },
    backMenu () {
      this.$router.push('/Menu')
    }
  }
}
</script>

<style lang="scss">

</style>
