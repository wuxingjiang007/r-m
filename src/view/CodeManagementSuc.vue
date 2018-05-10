<template>
  <div id="CodeManagementSuc" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="11" sm="11" lg="8">
           <b-card title="优惠码生成"
                  class="text-center" 
                  bg-variant="Light" >
            <b-alert show class="text-left">充值处理成功</b-alert>
            <b-row class="text-left" :key="index" v-for="(item, index) in formData">
              <b-col cols="12" sm="6">
                {{item.label}}
              </b-col> 
              <b-col v-if="typeof item.value === 'object'" cols="12" sm="6" class="text-info">
                {{item.value.start}}-{{item.value.end}}
              </b-col>
              <b-col cols="12" sm="6" class="text-info">
                {{item.value}}{{item.unit}}
              </b-col>
            </b-row>
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
      return this.$store.state.codeData
    }
  },
  methods: {
    backMenu () {
      this.$store.commit('RESETCODEDATA')
      this.$router.push('/Menu')
    },
    checkCodeRecord () {
      this.$store.commit('RESETCODEDATA')
      this.$router.push('/CodeRecord')
    }
  }
}
</script>

<style lang="scss">

</style>
