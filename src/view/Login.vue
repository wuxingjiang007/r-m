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
                            placeholder="请输入手机号或者邮箱登陆">
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
      if(this.form.account != '13980706066') {
        this.errorShow('该账号无权限登陆！')
        return false;
      }
      this.$store.dispatch('SIGNIN', this.form).then(res => {
      }, res => {
        this.errorInfo(res)
      })
    },
    errorInfo(data) {
      let msg = ''
      if(data.code == '119') {
        msg = '账号或者密码错误'
      } else {
        msg = data.msg
      }

      this.errorShow(msg)
    },
    errorShow(msg) {
      this.dangerShow = true
      this.errorMsg = msg
    }
  },

}
</script>

<style lang="scss">

</style>
