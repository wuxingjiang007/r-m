<template>
  <div id="app" class="app">
    <canvas class="background"></canvas>
    <!-- <Login ></Login> -->
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <router-view></router-view>
  </div>
</template>

<script>
import particles from 'particlesjs';
console.log(particles)
export default {
  name: 'app',
  components: {
  },
  mounted() {
    console.log(particles.init)
    particles.init({
      selector: '.background'
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  z-index: 0;
}
</style>
