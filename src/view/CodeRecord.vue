<template>
  <div id="CodeRecord">
    <b-card no-body>
       <template slot="tabs">
          <b-nav-item href="#" @click="()=>{}">Another tab</b-nav-item>
        </template>
      <b-tabs card v-model="tabIndex">
        <b-tab title="全部优惠码" active>
          <b-form-select v-model="useStatus" :options="options" class="mb-3" />
          <b-table responsive  :stacked="stacked" striped hover :items="lists">
            <template slot="操作" slot-scope="row">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                详情
              </b-button>
            </template>
            <template slot="Id" v-show="false" slot-scope="row">
              dsds
            </template>
          </b-table>
        </b-tab>
        <b-tab title="我的优惠码">
           <b-form-select  v-model="useStatus" :options="options" class="mb-3" />
          <b-table responsive  :stacked="stacked" striped hover :clicked="toDetail" :items="lists">
            <template slot="操作" slot-scope="row">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                详情
              </b-button>
            </template>
          </b-table>
        </b-tab>
      </b-tabs>
    </b-card>
    <infinite-loading @infinite="infiniteHandler"  ref="infiniteLoading">
      <span slot="no-more">
       老铁~到底啦！
      </span>
    </infinite-loading>
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
        <pre>{{ modalInfo.content }}</pre>
    </b-modal>

  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import {dateFormat} from '../assets/common.js'
// const items = [
//   {'单号': '1234560', '类型': '优惠码1', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
//   {'单号': '1234560', '类型': '优惠码2', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
//   {'单号': '1234560', '类型': '优惠码1', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
//   {'单号': '1234560', '类型': '优惠码2', '申请人': '张三', '申请日期': '20180322', '申请理由备注': 'xiiosihfiosfhsodihfisohdf'},
// ]

export default {
  name: 'CodeRecord',
  components: {
    InfiniteLoading,
  },
  data () {
    return {
      tabIndex: 0,
      selected: null,
      useStatus: '-1',
      options: [
        { value: '-1', text: '全部' },
        { value: '0', text: '未使用' },
        { value: '1', text: '已使用' }
      ],
      initcCouponState: {},
      modalInfo: { title: '', content: '' }
    }
  },
  computed :{
    couponState () {
      return {
        status: this.useStatus,
        pageNo: 1,
        pageSize: 10,
        fotorToken: this.tabIndex == 0 ? "": this.$store.state.users.fotorToken,
      }
    },
    stacked() {
      return this.isMobile
    },
    lists () {
      return this.$store.getters.couponLists
    },
  },
  watch: {
    tabIndex () {
      this.checkList()
    },
    useStatus () {
      this.checkList()
    }
  },
  created() {
    
  },
  mounted () {
    console.log(this.$refs.infiniteLoading)
  },
  methods: {
    info (item, index, button) {
      
      console.log(item)
      this.$store.dispatch('GETCOUPONDETAIL', {id:item.id}).then(res => {
        console.log(res);
        var detail = res.data
        const data = {
          '申请时间': dateFormat(new Date(detail.createTime)),
          '申请人': detail.creator,
          '金额': detail.subscriptPackages,
          // '数量': '',
          // '总额': '',
          '有效日期': dateFormat(new Date(detail.createTime)) + '/' + dateFormat(new Date(detail.createTime)),
          '备注': detail.comment,
        }
      this.modalInfo.title = `详情`
      this.modalInfo.content = JSON.stringify(data, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
      })
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    getList(infinite) {      
      this.$store.dispatch('GETLISTCOUPON', this.couponState).then(res => {
        this.$store.commit('CONCATLISTCOUPON', res.data)
          infinite.loaded()
          if(this.lists.length % 10 != 0 || this.lists.length == 0) {
           infinite.complete();
          }
          
      })
    },
    infiniteHandler($state) {
      this.getList($state)
    },
    checkList () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$store.commit('CLEARLISTCOUPON');
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        }, 0)
      })
    },
    toDetail (item) {
      console.log(item)
    }
  }
}
</script>
<style lang="sass">

</style>
