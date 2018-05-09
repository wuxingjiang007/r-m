<template>
   <div id="Lgoin" class="center-center">
     <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="10" sm="8" lg="8">
          <b-form  @submit="onSubmit">
            <b-form-group id="exampleInputGroup1"
                          label="账号:"
                          label-for="exampleInput1"
                          description="">
              <b-form-input id="exampleInput1"
                            type="text"
                            v-model="form.account"
                            required
                            placeholder="请输入账户">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="密码:"
                          label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="请输入密码">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-alert :show="dangerShow" variant="danger">{{errorMsg}}</b-alert>
            </b-form-group>
            <b-form-group>
                <b-button type="submit" block variant="primary">登陆</b-button>
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
        account: '',
        password: '',
      },
      dangerShow: false,
      errorMsg: '',
    }
  },
  computed: {
   
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.dangerShow = false
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$store.dispatch('SIGNIN').then(res => { 
      }, res => {
        this.errorInfo(res)
      })
      // this.checkMenu()
    },
    errorInfo(data) {
      if(data.code == '119') {
        this.errorMsg = '账号或者密码错误'
      } else {
        this.errorMsg = data.msg
      }

      this.dangerShow = true
    }
  },
 
}
</script>

<style lang="scss">
 
</style>
