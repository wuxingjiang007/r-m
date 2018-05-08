<template>
  <div id="MoneyManagementNext" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
          <b-card title="充值管理"
                  class="text-center" 
                  bg-variant="Light">
            <b-alert show class="text-left">充值确认，请确认下方充值信息，确认无误后点击提交执行操作</b-alert>
            <b-table class="text-left" stacked :items="moneyForm"></b-table>
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
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
    }
  },
  computed: {
    moneyForm () {
      return this.$store.getters.moneyForm
    }
  },
  methods: {
    onSumbit () {
      console.log('dsd');
      this.$store.dispatch('SAVEDATA')
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
