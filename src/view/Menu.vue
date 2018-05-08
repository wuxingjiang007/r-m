<template>
  <div id="Menu" class="center-center">
    <b-container >
      <b-row class="justify-content-center">
        <b-col cols="10" sm="8" lg="6">
          <b-list-group >
            <router-link to="/MoneyManagement">
              <b-list-group-item button type="button" class="btn btn-block btn-outline-success text-center">
                充值管理
              </b-list-group-item>
            </router-link>
          
            <router-link to="/CodeManagement">
              <b-list-group-item button type="button" class="btn btn-block btn-outline-success text-center">
                优惠码生成管理
              </b-list-group-item>
            </router-link>
            <router-link to="/Search">
              <b-list-group-item button type="button" class="btn btn-block btn-outline-success text-center">
                查询
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
  name: 'Menu',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js Menu'
    }
  }
}
</script>

<style lang="scss">

</style>
