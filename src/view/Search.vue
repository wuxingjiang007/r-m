<template>
  <div id="Search" class="center-center">
    <b-container class="bv-example-row">
      <b-row class="justify-content-center">
        <b-col cols="10" sm="8" lg="6">
          <b-list-group >
            <router-link to="/CodeRecord">
              <b-list-group-item button type="button" class="btn btn-block btn-outline-success text-center">
                优惠码
              </b-list-group-item>
            </router-link>
          
            <router-link to="/HistoryRecord">
              <b-list-group-item button type="button" class="btn btn-block btn-outline-success text-center">
                全部历史记录
              </b-list-group-item>
            </router-link>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>  
    
  </div>
</template>

<script>


export default {
  name: 'Search',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Search'
    }
  }
}
</script>

<style lang="scss">

</style>
