<template>
  <div id="order-warn">
    <common-header title="订单预警"></common-header>
    <div class="header">
      <search
        top="46px"
        ref="search"></search>
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
        list: [{
          label: '销售订单',
          value: 'SO170811914'
        }, {
          label: '客户名称',
          value: 'ASHCROFT INC'
        }, {
          label: '输入日期',
          value: '2017-09-08'
        }, {
          label: '交期',
          value: '2017-09-19'
        }, {
          label: '预期天数',
          value: 11
        }, {
          label: '交期与到货相差天数',
          value: 3
        }]
      }
    }
  }
</script>

<style lang="less">
#order-warn {
  width: 100%;
  height: 100%;

  .weui-form-preview__hd {
    display: none;
  }

  .header {
    width: 100%;
    height: 44px;
  }
  .content {
    width: 100%;
    height: calc(~"100% - 90px");
    overflow: auto;

    .weui-form-preview__bd .weui-form-preview__item:last-child .weui-form-preview__value {
      color: red;
      font-size: 16px;
    }
  }
}
</style>
