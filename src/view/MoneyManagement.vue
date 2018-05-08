<template>
  <div id="MoneyManagement" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
          <b-form @submit="onSubmit">
            <b-form-group v-for="(item, index) in formData"
                          :key="index"
                          :label="item.label"
                          :label-for="item.inputId">
              <b-form-input :id="item.inputId"
                            :type="item.type"
                            v-model.trim="item.value"
                            :placeholder="item.placeholder"
                            required>
              </b-form-input>
            </b-form-group>
            <!-- <b-form-group id="MoneyManagementGroupMoney"
                          label="用户充值实付:"
                          label-for="MoneyManagementMoney">
              <b-form-input id="MoneyManagementMoney"
                            type="number"
                            v-model.trim="form.price"
                            placeholder="请输入用户充值实付金额"
                            required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroupGift"
                          label="用户充值赠送:"
                          label-for="MoneyManagementGift">
              <b-form-input id="MoneyManagementGift"
                            type="number"
                            v-model.trim="form.discountPrice"
                            placeholder="请输入用户充值赠送金额"
                            required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroupDesc"
                          label="用户充值理由备注:"
                          label-for="MoneyManagementDesc">
              <b-form-textarea  id="MoneyManagementDesc"
                                :rows="3"
                                max-rows="6"
                                v-model.trim="form.remark"
                                placeholder="请输入用户充值理由"
                                required>
              </b-form-textarea>
            </b-form-group> -->
            <b-form-group>
              <b-btn type="submit" block variant="primary">下一步</b-btn>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  
  </div>
</template>

<script>


export default {
  name: 'MoneyManagement',
  components: {
  },
  data () {
    return {
      
    }
  },
  computed: {
   formData () {
     return this.$store.state.moneyData
   }
  },
  methods: {
    nextStep () {
      this.$router.push('/MoneyManagementNext')
    },
    onSubmit (evt) {
      evt.preventDefault();
      this.$store.commit('SETMONEYDATA', this.formData)
      this.nextStep()
    }
  }
}
</script>

<style lang="scss">

</style>
