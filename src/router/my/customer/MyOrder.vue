<template>
  <div id="my-order">
    <common-header title="我的订单"></common-header>
    <div class="header">
      <group>
        <datetime v-model="data" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY-MM" @on-change="change" title="选择月份" year-row="{value}年" month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
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
        data: '2017-09',
        list: [{
          label: '订单号',
          value: 'SO170811818S'
        }, {
          label: '订单金额',
          value: 54313.011
        }, {
          label: '下单日期',
          value: '2017-08-08 00:00:00'
        }, {
          label: '付款日期',
          value: '2017-09-12 00:00:00'
        }, {
          label: '交货日期',
          value: '2017-09-12 00:00:00'
        }, {
          label: '订单状态',
          value: '已交货'
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
#my-order {
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
  .weui-form-preview__bd .weui-form-preview__item:last-child .weui-form-preview__value {
    color: #f63;
    font-size: 16px;
  }
}
</style>
