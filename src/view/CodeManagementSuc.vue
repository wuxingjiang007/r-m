<template>
  <div id="CodeManagementSuc" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="11" sm="11" lg="8">
           <b-card title="优惠码生成"
                  class="text-center" 
                  bg-variant="Light" >
            <b-alert show class="text-left">充值处理成功</b-alert>
            <b-table class="text-left" stacked :items="formData"></b-table>
            <b-btn  class="mt-3" block variant="primary" @click="checkCodeRecord">查看优惠码</b-btn>
            <b-btn  class="mt-3" block variant="success" @click="backMenu">返回首页</b-btn>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'CodeManagementSuc',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    formData () {
      return this.$store.getters.codeShowData
    }
  },
  methods: {
    backMenu () {
      this.$router.push('/Menu')
    },
    checkCodeRecord () {
      this.$router.push('/CodeRecord')
    }
  }
}
</script>

<style lang="scss">

</style>
