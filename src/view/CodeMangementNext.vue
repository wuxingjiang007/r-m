<template>
  <div id="CodeMangementNext" class="center-center">
    <b-row align-v="center" align-content="center" align-h="center">
      <b-col cols="11" sm="11" lg="8">
        <b-card class="text-center"
                bg-variant="Light"
                title="优惠码生成管理">
          <b-alert show class="text-left">优惠码生成确认，请确认下方信息，确认无误后点击提交执行操作</b-alert>
          <b-row class="text-left" :key="index" v-for="(item, index) in formData">
              <b-col cols="12" sm="6">
                {{item.label}}
              </b-col>
              <b-col v-if="typeof item.value === 'object'" cols="12" sm="6" class="text-info">
                {{dateFormat(item.value.start)}}/{{dateFormat(item.value.end)}}
              </b-col>
              <b-col v-else cols="12" sm="6" class="text-info">
                {{item.value}}{{item.unit}}
              </b-col>
            </b-row>
          <b-btn  class="mt-3" block variant="success" @click="onSumbit()">提交</b-btn>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {dateFormat} from '../assets/common'

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
      return this.$store.state.codeData
    }
  },
  methods: {
    onSumbit () {
      this.$store.dispatch('SAVECODE').then(res => {
        this.goSuccess()
      })
    },
    goSuccess() {
      this.$router.push('/CodeManagementSuc')
    },
    dateFormat,
  }
}
</script>

<style lang="scss">

</style>
