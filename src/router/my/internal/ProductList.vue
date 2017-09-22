<template>
  <div id="product-list">
    <common-header title="产品查询"></common-header>
    <div class="header">
      <search top="46px" ref="search" v-model="keyword" @keyup.enter.native="getList"></search>
    </div>
    <div class="content">
      <div v-for="item in productList">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="list"></form-preview>
      </div>
      <no-data :item="productList" :load="getList"></no-data>
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
        keyword: '',
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
    computed: {
      ...mapState({
        productList (state) {
          return state.productList.productList
        }
      })
    },
    created () {},
    methods: {
      ...mapActions([
        'queryProductList'
      ]),
      // 获取列表
      getList () {
        this.queryProductList(this.keyword)
      },
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>

<style lang="less">
#product-list {
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

    .nodata-refresh {
      display: none !important;
    }
  }
}
</style>
