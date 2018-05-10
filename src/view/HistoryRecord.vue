<template>
  <div id="HistoryRecord">
   <b-card no-body>
       <template slot="tabs">
          <b-nav-item href="#" @click="()=>{}">Another tab</b-nav-item>
        </template>
      <b-tabs card v-model="tabIndex">
        <b-tab title="全部历史记录" active>
          <b-table responsive  :stacked="stacked" striped hover :items="lists">
            <template slot="操作" slot-scope="row">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                详情
              </b-button>
            </template>
          </b-table>
        </b-tab>
        <b-tab title="我的历史记录">
          <b-table responsive  :stacked="stacked" striped hover :items="lists">
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

export default {
  name: 'HistoryRecord',
   components: {
    InfiniteLoading,
  },
  data () {
    return {
      tabIndex: 0,
      selected: null,
      modalInfo: { title: '', content: '' },
      initcCouponState: {}
    }
  },
  computed :{
    // int pageNo(必须传递), int pageSize(必须传递),fotorToken(当前登录用户的fotorToken)
    couponState () {
      return {
        pageNo: 1,
        pageSize: 10,
        fotorToken: this.tabIndex == 0 ? "": this.$store.state.users.fotorToken,
      }
    },
    stacked() {
      return this.isMobile
    },
    lists () {
      return this.$store.getters.orderLists
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
      this.$store.dispatch('GETORDERDETAIL', {orderId:item['单号']}).then(res => {
        var detail = res.data
        const data = {
          '申请时间': detail.createTime,
          '申请人': detail.addressId,
          '充值账号': detail.userId,
          '实收总额': detail.price,
          '赠送总额': Math.abs(detail.discountPrice),
          '备注': detail.printWork,
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
      this.$store.dispatch('GETLISTORDER', this.couponState).then(res => {
        console.log(res)
        this.$store.commit('CONCATLISTORDER', res.data)
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
          this.$store.commit('CLEARLISTORDER');
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          
        }, 0)
      })
    }
  }
}
</script>
<style lang="sass">

</style>
