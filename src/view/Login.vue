<template>
   <div id="Lgoin" class="center-center">
     <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="10" sm="8" lg="8">
          <b-form  @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup1"
                          label="账号:"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="exampleInput1"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="密码:"
                          label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-alert show variant="danger">error</b-alert>
            </b-form-group>
            <b-form-group>
                <b-button @click="checkMenu" block variant="primary">登陆</b-button>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      console.log('//')
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    checkMenu () {
      console.log(this.$route);
      this.$router.push('/Menu')
    }
  }
}
</script>

<style lang="scss">
 
</style>
