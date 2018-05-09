<template>
  <div id="MoneyManagementNext" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="11" sm="8" lg="6">
           <b-card title="充值管理"
                  class="text-center"
                  bg-variant="Light" >
            <b-alert show class="text-left">充值处理成功，处理单号:<br/>{{orderNo}}</b-alert>
            <b-table class="text-left" stacked :items="formData"></b-table>
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
  computed: {
    formData () {
      return this.$store.getters.moneyShowData
    },
    orderNo () {
      return this.$store.state.orderNo
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
