<template>
  <div id="MoneyManagement" class="center-center">
    <b-row align-v="center" align-content="center" align-h="center">
      <b-col cols="11" sm="8" lg="6">
        <b-form @submit="onSubmit">
            <Form v-for="(item, index) in formData" :key="index" :formData="item"></Form>
          <b-form-group>
            <b-btn type="submit" block variant="primary">下一步</b-btn>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import Form from '../components/Form.vue'

export default {
  name: 'MoneyManagement',
  components: {
    Form,
  },
  data () {
    return {

    }
  },
  computed: {
   formData () {
     return this.$store.state.moneyData
   }
  },
  methods: {
    nextStep () {
      this.$router.push('/MoneyManagementNext')
    },
    onSubmit (evt) {
      evt.preventDefault();
      this.$store.commit('SETMONEYDATA', this.formData)
      this.nextStep()
    }
  }
}
</script>

<style lang="scss">

</style>
