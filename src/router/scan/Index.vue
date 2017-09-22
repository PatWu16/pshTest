<template>
  <div id="scan">
    <swiper loop auto :list="bannerList"></swiper>
    <grid :rows="1">
      <grid-item label="一键追溯">
        <img slot="icon" src="../../assets/img/qr-scan.png" @click="scanCode">
      </grid-item>
      <grid-item label="技术支持">
        <img slot="icon" style="width: 87.5%;" src="../../assets/img/technical.png" @click="goPage('feedback', {})">
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Grid, GridItem } from 'vux'
  import WhiteSpace from '../../components/WhiteSpace.vue'
  import { mapState, mapActions } from 'vuex'
  import banner1 from '../../assets/img/banner_1.jpg'
  import banner2 from '../../assets/img/banner_2.jpg'
  import banner3 from '../../assets/img/banner_3.jpg'
  import banner4 from '../../assets/img/banner_4.jpg'

  const baseList = [{
    url: 'javascript:',
    img: banner1,
    title: 'Explore our Products'
  }, {
    url: 'javascript:',
    img: banner2,
    title: 'Discover 165 Years of Experience'
  }, {
    url: 'javascript:',
    img: banner3,
    title: 'Our New 8008A Pressure Gauge'
  }, {
    url: 'javascript:',
    img: banner4,
    title: 'Focused on Protection'
  }]

  export default {
    components: {
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      WhiteSpace
    },
    data () {
      return {
        bannerList1: baseList
      }
    },
    computed: {
      ...mapState({
        bannerList: (state) => {
          return state.scan.bannerList
        },
        code: (state) => {
          return state.scan.code
        }
      })
    },
    watch: {
      code () {
        if (this.code) {
          this.goPage('scanResult', {code: this.code})
        }
      }
    },
    created () {
      this.getBannerList()
    },
    methods: {
      ...mapActions([
        'getBannerList',
        'scanQRCode'
      ]),
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      // 扫描二维码
      scanCode () {
        this.scanQRCode()
      }
    }
  }
</script>

<style lang="less">
  #scan {
    width: 100%;
    height: 100%;
    overflow: auto;

    .weui-grid__icon, .img-wrapper {
      width: 100px;
      height: 100px;
    }

    .weui-grids:before{
      display: none;
    }

    .weui-grid:after {
      display: none;
    }
  }
</style>
