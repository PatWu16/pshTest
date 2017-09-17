<template>
  <div id="white-space" :style="{height: height}">

  </div>
</template>

<script>
  export default {
    props: ['size'],
    data () {
      return {
        height: ''
      }
    },
    created () {
      switch (this.size) {
        case 'sm':
          this.height = '6px'
          break
        case 'md':
          this.height = '9px'
          break
        case 'lg':
          this.height = '15px'
          break
        default:
          this.height = '9px'
          break
      }
    }
  }
</script>

<style lang="less">

</style>
