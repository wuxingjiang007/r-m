<template>
  <div id="CodeRecord">
    <b-card no-body>
       <template slot="tabs">
          <b-nav-item href="#" @click="()=>{}">Another tab</b-nav-item>
        </template>
      <b-tabs card>
        <b-tab title="全部优惠码" active>
          <b-form-select v-model="selected" :options="options" class="mb-3" />

          <b-table striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="我的优惠码">
           <b-form-select v-model="selected" :options="options" class="mb-3" />
          <b-table striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="已使用优惠码">
           <b-form-select v-model="selected" :options="options" class="mb-3" />
          <b-table striped hover :items="items"></b-table>
        </b-tab>
      </b-tabs>
    </b-card>


  </div>
</template>
<script>
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

export default {
  name: 'CodeRecord',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      items
    }
  }
}
</script>
<style lang="sass">

</style>
