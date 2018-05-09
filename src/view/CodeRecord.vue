<template>
  <div id="CodeRecord">
    <b-card no-body>
       <template slot="tabs">
          <b-nav-item href="#" @click="()=>{}">Another tab</b-nav-item>
        </template>
      <b-tabs card>
        <b-tab title="全部优惠码" active>
          <b-form-select v-model="selected" :options="options" class="mb-3" />

          <b-table :stacked="stacked" striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="我的优惠码">
           <b-form-select v-model="selected" :options="options" class="mb-3" />
          <b-table :stacked="stacked" striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="已使用优惠码">
           <b-form-select v-model="selected" :options="options" class="mb-3" />
          <b-table :stacked="stacked" striped hover :items="items"></b-table>
        </b-tab>
      </b-tabs>
    </b-card>


  </div>
</template>
<script>
const items = [
  {'单号': '1234560', '类型': '优惠码1', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
  {'单号': '1234560', '类型': '优惠码2', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
  {'单号': '1234560', '类型': '优惠码1', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
  {'单号': '1234560', '类型': '优惠码2', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
]

export default {
  name: 'CodeRecord',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      items
    }
  },
  created() {
    console.log(this)
  },
  computed: {
    stacked() {
      return this.isMobile
    }
  }
}
</script>
<style lang="sass">

</style>
