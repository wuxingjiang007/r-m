<template>
  <div id="MoneyManagement" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
          <b-form @submit="onSubmit">
            <b-form-group id="MoneyManagementGroupId"
                          label="用户懒设计号:"
                          label-for="MoneyManagementId">
              <b-form-input id="MoneyManagementId"
                            type="text"
                            v-model.trim="form.id"
                            placeholder="请输入用户懒设计号"
                            required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroupMoney"
                          label="用户充值实付:"
                          label-for="MoneyManagementMoney">
              <b-form-input id="MoneyManagementMoney"
                            type="number"
                            v-model.trim="form.moeny"
                            placeholder="请输入用户充值实付金额"
                            required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="MoneyManagementGroupGift"
                          label="用户充值赠送:"
                          v-model="form.gift"
                          label-for="MoneyManagementGift">
              <b-form-input id="MoneyManagementGift"
                            type="number"
                            v-model.trim="form.gift"
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
                                v-model.trim="form.desc"
                                placeholder="请输入用户充值理由"
                                required>
              </b-form-textarea>
            </b-form-group>
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
      form: {
        id: '',
        money: '',
        gift: '',
        desc: '',
      },
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/MoneyManagementNext')
    },
    onSubmit (evt) {
      evt.preventDefault();
      console.log(this.form)
      this.nextStep()
    }
  }
}
</script>

<style lang="scss">

</style>
