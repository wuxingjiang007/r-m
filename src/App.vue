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
      <router-view></router-view>
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
    return this.$store.getters.isSign
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
  html, body, #app {
    min-height: 100%;
  } 
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
</style>
