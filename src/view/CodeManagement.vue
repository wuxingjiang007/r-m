<template>
  <div id="CodeManagement" class="center-center">
    <b-form @submit="sumbit" class="col-xs-12 col-sm-8 col-md-6">
      <template v-for="(item, index) in formData">
        <b-form-group v-if="item.inputType == 'input'"
                      :key="index"
                      :label="item.label"
                      :description="item.description"
                      :label-for="item.inputId">
          <b-form-input :id="item.inputId"
                        :type="item.type"
                        v-model.trim="item.value"
                        :placeholder="item.placeholder"
                        required>
          </b-form-input>
          
        </b-form-group>
        <b-form-group v-else-if="item.inputType == 'inputGroup'"
                      :key="index"
                      :label="item.label"
                      :description="item.description"
                      :label-for="item.inputId">
          <b-input-group :append="item.unit">
            <b-form-input :id="item.inputId"
                        :type="item.type"
                        v-model.trim="item.value"
                        :placeholder="item.placeholder"
                        required>
            </b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group v-else-if="item.inputType == 'datepicker'"
                      :key="index"
                      :label="item.label"
                      :description="item.description"
                      :label-for="item.inputId">
            <b-row>
              <b-col cols="5" >
                <datepicker v-model="item.value.start"
                            :placeholder="'开始时间'"
                            :language="zh"
                            :format="format" 
                            :bootstrap-styling="true"
                            class="datepicker"
                            required
                            name="datepickerStart"></datepicker>
              </b-col>
              <b-col class="text-center" cols="2">
                至
              </b-col>
              <b-col cols="5" >
                <datepicker class="datepicker"
                            :placeholder="'结束时间'"
                            :language="zh"
                            :bootstrap-styling="true"
                            :format="format"
                            required
                            v-model="item.value.end" 
                            name="datepickerEnd"></datepicker>
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group v-else-if="item.inputType == 'textarea'"
                        :key="index"
                        :label="item.label"
                        :description="item.description"
                        :label-for="item.inputId">
            <b-form-textarea  :id="item.inputId"
                              :rows="3"
                              max-rows="6"
                              v-model.trim="item.value"
                              :placeholder="item.placeholder"
                              required>
            </b-form-textarea>
          </b-form-group>
        </template>
      <b-form-group>
        <b-btn type="sumbit"  block variant="primary">下一步</b-btn>
      </b-form-group>
    </b-form>
  </div>
  
</template>

<script>
import Datepicker from 'vuejs-datepicker' // 日期选择插件
import {zh} from 'vuejs-datepicker/dist/locale' // 日期插件语言设置

export default {
  name: 'CodeManagement',
  components: {
    Datepicker,
  },
  data () {
    return {
      format: 'yyyy-MM-dd',
      zh,
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
