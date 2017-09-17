<template>
  <div id="scan-result" v-cloak>
    <common-header title="商品详情"></common-header>
    <WhiteSpace />
    <form-preview :body-items="product"></form-preview>
    <box gap="20px 10px 10px">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="goPage('buy', {})">需求反馈</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="goPage('feedback', {})">技术支持</x-button>
        </flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script>
  import CommonHeader from '../../components/Header.vue'
  import WhiteSpace from '../../components/WhiteSpace.vue'
  import { FormPreview, XButton, Box, Flexbox, FlexboxItem } from 'vux'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      WhiteSpace,
      XButton,
      Box,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        product: (state) => {
          return state.scanResult.product
        }
      })
    },
    created () {
      const code = this.$route.params.code
      this.getProduct(code)
    },
    methods: {
      ...mapActions([
        'getProduct'
      ]),
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      }
    }
  }
</script>

<style lang="less">
#scan-result {
  .weui-form-preview__hd {
    display: none;
  }
}
</style>
