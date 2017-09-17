<template>
  <div id="my-product">
    <common-header title="我的商品"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY-MM" @on-change="change" title="选择月份" year-row="{value}年" month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
      </group>
    </div>
    <div class="content" :style="{height: height2}">
      <div v-for="n in 10">
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
  import { FormPreview, Search, Datetime, Group } from 'vux'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      Search,
      WhiteSpace,
      Datetime,
      Group
    },
    data () {
      return {
        date: '2017-09',
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
#my-product {
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

    .weui-cells {
      margin-top: 0;
    }
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
