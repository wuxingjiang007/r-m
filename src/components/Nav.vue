<template>
  <b-navbar>
    <b-nav>
      <b-nav-item v-if="backShow" @click="back">返回</b-nav-item>
    </b-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-text >用户名：<span class="text-info">{{nickName}}</span></b-nav-text>
    </b-navbar-nav>
    <b-nav>
      <b-nav-item @click="signOut">退出</b-nav-item>
    </b-nav>
  </b-navbar>
</template>
<script>
export default {
  name: "Nav",
  props: ["backShow"],
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    nickName () {
      return this.$store.state.users.nickName
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    signOut() {
      this.$store.dispatch("SIGNOUT").then(() => {
        this.$router.go("/Login");
      });
    }
  }
};
</script>
<style lang="sass">

</style>


