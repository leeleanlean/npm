module.exports = {
  vue (name) {
    name = name.replace(/\//g, '')
    console.log('name', name)
    return `<template>
  <section class='${name}'>${name}</section>
</template>
<script>
export default {
  name: '${name}',
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='' scoped>
</style>
` 
  }
}