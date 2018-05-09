<template>
  <div id="CodeManagement" class="center-center">
    <b-row align-v="center" align-content="center" align-h="center">
        <b-col cols="11" sm="8" lg="6">
          <b-form @submit="sumbit" >
            <Form v-for="(item, index) in formData" :key="index" :formData="item"></Form>
            <b-form-group>
              <b-btn type="sumbit"  block variant="primary">下一步</b-btn>
            </b-form-group>
          </b-form>
        </b-col>
    </b-row>
  </div>

</template>

<script>

import Form from '../components/Form.vue'

export default {
  name: 'CodeManagement',
  components: {
    Form
  },
  data () {
    return {

    }
  },
  computed: {
    formData () {
      return this.$store.state.codeData
    }
  },
  methods: {
    sumbit (evt) {
      evt.preventDefault(); // 阻默认事件
      this.gotoNext()
    },
    gotoNext () {
      this.$store.commit('SETCODEDATA', this.formData)
      this.$router.push('/CodeMangementNext')
    }
  }
}
</script>

<style lang="scss">
  .datepicker {
    input {
      width: 100%;
    }
  }
</style>
