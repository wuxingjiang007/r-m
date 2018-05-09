<template>
  <div>

    <canvas class="background"></canvas>
    <div id="app" class="app">
      <div class="alert-group">
          <b-alert
                  v-for="(item,index) in appError"
                  :key="index"
                  :show="show"
                  dismissible
                  variant="warning"
                  @dismissed="item.dismissed"
                  @dismiss-count-down="countDownChanged(item, index)">
                {{item.msg}}
                <b-progress variant="warning"
                    :max="item.pTime"
                    :value="item.time"
                    height="2px">
                  </b-progress>
        </b-alert>
      </div>
      <Nav v-if="loginState" :backShow="backShow"/>
      <b-container class="justify-content-center">
        <router-view></router-view>
      </b-container>
    </div>
  </div>

</template>

<script>
import Nav from './components/Nav.vue'
import particles from 'particlesjs';
console.log(particles)
export default {
  name: 'app',
  components: {
    Nav
  },
  computed: {
    backShow () {
      const noBackUrl = ['Menu', 'MoneyManagementSuc', 'Login', 'CodeManagementSuc']
      const name = this.$route.name
      return !noBackUrl.includes(name)
    },
    loginState() {
    // return this.$store.getters.isSign
    return true
    },
    show () {
      return !!this.appError ? 10 : 0;
    },
    appError () {
      return this.$store.state.appError
    }
  },
   watch: {
    loginState(val) {
      if(val) {
        this.checkMenu()
      }
    },
    dismissCountDown (val) {
      if(val == 0) {
        this.$store.commit('SETAPPERROR', '')
      }
    }
  },
  created() {
    this.$store.dispatch('CHECKSIGN').then(() => {

    }, () => {
       this.$router.push('/Login')
    });
    this.checkMenu()
  },
  mounted() {
    particles.init({
      selector: '.background',
      maxParticles: 200,
      color:['red', 'blue'],
      // connectParticles: true
    })
  },
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  methods: {
    checkMenu () {
      this.$router.push('/Menu')
    },
    countDownChanged (item, index) {
      item.time = item.time -1;
      if(item.time <= 0) {
        this.$store.commit('DELAPPERROR', item);
        item.dismissed = true;
      }
    },
  }
}
</script>

<style lang="scss">
  .background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .alert-group {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .vdp-datepicker__calendar {
      position: fixed !important;
      top: 0;
      left: 0;
      margin: auto;
    }
   }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {

  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: 992px) {  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: 1200px) {  }

</style>
