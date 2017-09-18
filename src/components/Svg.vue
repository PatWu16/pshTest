<template>
  <div id="icon">
    <svg width='24' height='24'><use class="ic2" :class="{ic1: selected}" v-bind:xlink:href="'#' + name" /></svg>
  </div>
</template>

<script>
  export default {
    props: ['name', 'selected'],
    data () {
      return {}
    },
    created () {}
  }
</script>

<style lang="less">
#icon {
  use.ic2 {
    fill: #888;
  }
  use.ic1 {
    fill: #005da8;
  }
  svg path {
    fill: inherit;
  }
}
</style>
