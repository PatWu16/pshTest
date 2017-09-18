<template>
  <div id="product-list" :style="{height: height}">
    <common-header title="产品查询"></common-header>
    <div class="header">
      <search
        top="46px"
        ref="search"></search>
    </div>
    <div class="content" :style="{height: height2}">
      <div v-for="item in list">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="list"></form-preview>
      </div>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { FormPreview, Search } from 'vux'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      Search,
      WhiteSpace
    },
    data () {
      return {
        height: '',
        height2: '',
        list: [{
          label: '序列号',
          value: 'H1602770CN'
        }, {
          label: '产品代码',
          value: 'B424B100#'
        }, {
          label: '出厂日期',
          value: '2016-08-29 00:00:00'
        }]
      }
    },
    created () {
      this.height = document.body.clientHeight + 'px'
      this.height2 = document.body.clientHeight - 90 + 'px'
    },
    methods: {
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>

<style lang="less">
#product-list {
  position: relative;

  .weui-form-preview__hd {
    display: none;
  }
  .header {
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    height: 44px;
  }
  .content {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    overflow: auto;
  }
}
</style>
