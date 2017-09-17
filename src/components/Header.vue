<template>
  <div id="header">
    <x-header>{{title}}<a slot="right">{{rightContent}}</a></x-header>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    props: ['title', 'rightContent'],
    components: {
      XHeader
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">

</style>
