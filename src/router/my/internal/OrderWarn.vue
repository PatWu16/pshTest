<template>
  <div id="order-warn">
    <common-header title="订单预警"></common-header>
    <div class="header">
      <search top="46px" ref="search" v-model="keyword" @keyup.enter.native="getList"></search>
    </div>
    <div class="content">
      <div v-for="item in orderWarnList">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="item"></form-preview>
      </div>
      <no-data :item="orderWarnList" :load="getList"></no-data>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { FormPreview, Search } from 'vux'
  import { mapActions, mapState } from 'vuex'
  import NoData from '../../../components/NoData.vue'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      Search,
      WhiteSpace,
      NoData
    },
    data () {
      return {
        keyword: ''
      }
    },
    created () {
      this.getList()
    },
    computed: {
      ...mapState({
        orderWarnList (state) {
          return state.orderWarn.orderWarnList
        }
      })
    },
    methods: {
      ...mapActions([
        'getOrderWarnList'
      ]),
      // 获取列表
      getList () {
        this.getOrderWarnList(this.keyword)
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

    .nodata-refresh {
      display: none !important;
    }
  }
}
</style>
