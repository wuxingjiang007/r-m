<template>
  <div id="CodeRecord">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="全部优惠码" active>
          <b-table striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="未使用优惠码">
          <b-table striped hover :items="items"></b-table>
        </b-tab>
        <b-tab title="已使用优惠码">
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
      msg: 'CodeRecord',
      items
    }
  }
}
</script>
<style lang="sass">

</style>
