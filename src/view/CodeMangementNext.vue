<template>
  <div id="CodeMangementNext" class="center-center">
    <b-container fluid >
      <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="10" sm="8" lg="6">
          <b-card class="text-center" 
                  bg-variant="Light"
                  title="优惠码生成管理">
            <b-alert show class="text-left">优惠码生成确认，请确认下方信息，确认无误后点击提交执行操作</b-alert>
            <b-row
              v-for="(item, index) in lists"
              :key = index
              class="my-1">
              <b-col cols="4" class="text-right">{{item.title}}</b-col>
              <b-col class="text-left">{{item.value}}</b-col>
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
  name: 'CodeMangementNext',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js MoneyManagement',
    }
  },
  computed: {
    lists () {
      return [
        {
          title: '申请人',
          value: '黄晶'
        },
        {
          title: '优惠码金额',
          value: '200元'
        },
        {
          title: '优惠码数量',
          value: '200个'
        },
        {
          title: '优惠码总额',
          value: '3000元'
        },
        {
          title: '优惠码有效日期',
          value: '2008-5-5'
        },
        {
          title: '备注',
          value: '推广优惠码申请'
        }
      ]
    }
  },
  methods: {
    onSumbit () {
      console.log('dsd')
      this.goSuccess()
    },
    goSuccess() {
      this.$router.push('/CodeManagementSuc')
    }
  }
}
</script>

<style lang="scss">

</style>
