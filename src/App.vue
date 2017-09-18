<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import {Loading} from 'vux'
import {mapState} from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  },
  components: {
    Loading
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

[v-cloak]{ display: none;}
body {
  background-color: #fbf9fe;
}
  #app {
    width: 100%;
    height: 100%;
  }
</style>
