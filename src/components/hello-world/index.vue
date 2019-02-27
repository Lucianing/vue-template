<!--
  @author:  lzc
  @date:    2019-02-27
  @file:    xx
  @require:
-->
<template>
  <div>Hello World! {{ msg }}</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HelloWorld',
  
  components: {},
  
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  
  data() {
    return {}
  },
  
  computed: {},
  
  watch: {},
  
  created() {},
  
  mounted() {},
  
  destroyed() {},
  
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
