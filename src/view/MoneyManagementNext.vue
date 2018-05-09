<template>
  <div id="MoneyManagementNext" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="11" sm="11" lg="8">
          <b-card title="充值管理"
                  class="text-center"
                  bg-variant="Light">
            <b-alert show class="text-left">充值确认，请确认下方充值信息，确认无误后点击提交执行操作</b-alert>
            <!-- <b-table class="text-left" stacked :items="formData"></b-table> -->
            <b-row class="text-left" v-for="item in formData">
              <b-col cols="12">
                {{item.label}}
              </b-col>
              <b-col cols="12" class="text-info">
                {{item.value}}
              </b-col>
            </b-row>
            <b-btn  class="mt-3" block variant="success" @click="onSumbit()">提交</b-btn>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'MoneyManagementNext',
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
    }
  },
  computed: {
    formData () {
      return this.$store.state.moneyData
    }
  },
  methods: {
    onSumbit () {
      this.$store.dispatch('SAVEORDER').then(res => {
        this.$store.commit('SETORDERNO', res.data)
        this.goSuccess();
      }, res => {
        console.log(res)
      })
      // this.goSuccess()
    },
    goSuccess() {
      this.$router.push('/MoneyManagementSuc')
    }
  }
}
</script>

<style lang="scss">

</style>
