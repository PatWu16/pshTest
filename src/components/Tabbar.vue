<template>
  <div id="tabbar">
    <tabbar>
      <tabbar-item :selected="tabData[0] === tabStatus" @click.native="goPages('scan')">
        <svg-icon slot="icon" :selected="tabData[0] === tabStatus" :name="'scan'" />
        <span slot="label">一键扫码</span>
      </tabbar-item>
      <tabbar-item :selected="tabData[1] === tabStatus" @click.native="goPages('buy')">
        <svg-icon slot="icon":selected="tabData[1] === tabStatus" :name="'buy'" />
        <span slot="label">一键需求</span>
      </tabbar-item>
      <tabbar-item :selected="tabData[2] === tabStatus" @click.native="goPages('my')">
        <svg-icon slot="icon":selected="tabData[2] === tabStatus" :name="'my'" />
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  import SvgIcon from './Svg.vue'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      SvgIcon
    },
    data () {
      return {
        tabPath: ['', 'buy', 'my'],
        tabData: [0, 1, 2],
        tabStatus: 0
      }
    },
    computed: {},
    watch: {
      '$route' (to, from) {
        const path = this.$route.path.split('/')[1]
        if (this.tabPath.indexOf(path) !== -1) {
          this.tabStatus = this.tabPath.indexOf(path)
        }
      }
    },
    mounted () {
      const path = this.$route.path.split('/')[1]
      if (this.tabPath.indexOf(path) !== -1) {
        this.tabStatus = this.tabPath.indexOf(path)
      }
    },
    methods: {
      goPages (name) {
        this.$router.push({name: name})
      }
    }
  }
</script>
<style lang="less">

</style>
