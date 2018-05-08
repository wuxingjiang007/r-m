<template>
  <div>
    <canvas class="background"></canvas>
    <div id="app" class="app">
    
      <Nav v-if="loginState" :backShow="backShow"/>
      <!-- <vue-particles color="#dedede"></vue-particles> -->
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
    }
  },
   watch: {
    loginState(val) {
      if(val) {
        this.checkMenu()
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    checkMenu () {
      this.$router.push('/Menu')
      
    }
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
</style>
