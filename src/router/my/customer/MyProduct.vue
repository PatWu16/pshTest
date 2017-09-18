<template>
  <div id="my-product">
    <common-header title="我的产品"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY-MM" @on-change="change" title="选择月份" year-row="{value}年" month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
      </group>
    </div>
    <div class="content">
      <div v-for="item in myProductList">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="item"></form-preview>
      </div>
      <no-data :item="myProductList" :load="getList"></no-data>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import NoData from '../../../components/NoData.vue'
  import { FormPreview, Search, Datetime, Group, dateFormat } from 'vux'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      Search,
      WhiteSpace,
      Datetime,
      Group,
      NoData
    },
    data () {
      return {
        date: '2017-09'
      }
    },
    computed: {
      ...mapState({
        myProductList (state) {
          return state.myProduct.myProductList
        }
      })
    },
    watch: {
      date () {
        this.getList()
      }
    },
    created () {
      this.date = dateFormat(new Date(), 'YYYY-MM')
      this.getList()
    },
    methods: {
      ...mapActions([
        'getMyProductList'
      ]),
      // 获取列表
      getList () {
        this.getMyProductList({time: this.date, id: '10258'})
      },
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>

<style lang="less">
#my-product {
  width: 100%;
  height: 100%;

  .weui-form-preview__hd {
    display: none;
  }

  .header {
    width: 100%;
    height: 44px;

    .weui-cells {
      margin-top: 0;
    }
  }

  .content {
    width: 100%;
    height: calc(~"100% - 90px");
    overflow: auto;
  }
}
</style>
