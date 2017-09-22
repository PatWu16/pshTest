<template>
  <div id="customer-list">
    <common-header title="客户查询"></common-header>
    <div class="header">
      <search top="46px" ref="search" v-model="keyword" @keyup.enter.native="getList"></search>
    </div>
    <div class="content">
      <div v-for="item in customerList">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="item"></form-preview>
      </div>
      <no-data :item="customerList" :load="getList"></no-data>
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
    computed: {
      ...mapState({
        customerList (state) {
          return state.customerList.customerList
        }
      })
    },
    created () {
      this.getList()
    },
    methods: {
      ...mapActions([
        'getCustomerList'
      ]),
      // 获取列表
      getList () {
        this.getCustomerList(this.keyword)
      }
    }
  }
</script>

<style lang="less">
#customer-list {
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
