<!--
  @author:  lzc
  @date:    2019-03-02
  @file:    xx
  @require:
-->
<template>
  <footer class="footer">{{ text }}</footer>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'AppFooter',
  
  props: {
    text: {
      type: [String, Number],
      default: new Date().getFullYear()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer{
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-top: 1px solid #efebeb;
  text-align: center;
  line-height: 60px;
}
</style>
