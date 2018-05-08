<template>
  <div id="HistoryRecord">
    <b-row>
      <b-col>
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input placeholder="Type to Search" />
           
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table :items="items">
      <template slot="单号" slot-scope="data">
        <a href="#">{{data.value}}</a>
      </template>
    </b-table>
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
  name: 'HistoryRecord',
  data () {
    return {
      items
    }
  }
}
</script>
<style lang="sass">

</style>
