<template>
  <div>
    <b-form-group
      v-if="formData.inputType == 'input'"
      :label="formData.label"
      :description="formData.description"
      :label-for="formData.inputId"
    >
      <b-form-input
        :id="formData.inputId"
        :type="formData.type"
        v-model.trim="formData.value"
        :placeholder="formData.placeholder"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      v-else-if="formData.inputType == 'inputGroup'"
      :label="formData.label"
      :description="formData.description"
      :label-for="formData.inputId"
    >
      <b-input-group :append="formData.unit">
        <b-form-input
          :id="formData.inputId"
          :type="formData.type"
          v-model.trim="formData.value"
          :placeholder="formData.placeholder"
          required
        ></b-form-input>
      </b-input-group>
    </b-form-group>
    <b-form-group
      v-else-if="formData.inputType == 'datepicker'"
      :label="formData.label"
      :description="formData.description"
      :label-for="formData.inputId"
    >
      <b-row>
        <b-col cols="5">
          <datepicker
            v-model="formData.value.start"
            :placeholder="'开始时间'"
            :language="zh"
            :format="format"
            :bootstrap-styling="true"
            class="datepicker"
            required
            name="datepickerStart"
          ></datepicker>
        </b-col>
        <b-col class="text-center" cols="2">至</b-col>
        <b-col cols="5">
          <datepicker
            class="datepicker"
            :placeholder="'结束时间'"
            :language="zh"
            :bootstrap-styling="true"
            :format="format"
            required
            v-model="formData.value.end"
            name="datepickerEnd"
          ></datepicker>
        </b-col>
      </b-row>
    </b-form-group>
    <b-form-group
      v-else-if="formData.inputType == 'textarea'"
      :label="formData.label"
      :description="formData.description"
      :label-for="formData.inputId"
    >
      <b-form-textarea
        :id="formData.inputId"
        :rows="3"
        max-rows="6"
        v-model.trim="formData.value"
        :placeholder="formData.placeholder"
        required
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker"; // 日期选择插件x
import { zh } from "vuejs-datepicker/dist/locale"; // 日期插件语言设置x2
export default {
  name: "Form",
  props: ["formData"],
  components: {
    Datepicker
  },
  data() {
    return {
      format: "yyyy-MM-dd",
      zh
    };
  },
  created() {}
};
</script>
<style lang="scss">
</style>
