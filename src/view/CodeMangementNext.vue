<template>
  <div id="CodeMangementNext" class="center-center">
    <b-row align-v="center" align-content="center" align-h="center">
      <b-col cols="11" sm="11" lg="8">
        <b-card class="text-center"
                bg-variant="Light"
                title="优惠码生成管理">
          <b-alert show class="text-left">优惠码生成确认，请确认下方信息，确认无误后点击提交执行操作</b-alert>
          <b-table class="text-left" stacked :items="formData"></b-table>
          <b-btn  class="mt-3" block variant="success" @click="onSumbit()">提交</b-btn>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>


export default {
  name: 'CodeMangementNext',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
    }
  },
  computed: {
    formData () {
      return this.$store.getters.codeShowData
    }
  },
  methods: {
    onSumbit () {
      console.log('dsd')
      // this.goSuccess()
      this.$store.dispatch('SAVECODE').then(res => {
        this.goSuccess()
      })
    },
    goSuccess() {
      this.$router.push('/CodeManagementSuc')
    }
  }
}
</script>

<style lang="scss">

</style>
