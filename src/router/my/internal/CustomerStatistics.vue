<template>
  <div id="customer-statistics">
    <common-header title="客户统计"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY-MM" title="选择月份" year-row="{value}年" month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
      </group>
      <WhiteSpace></WhiteSpace>
    </div>
    <div class="content">
      <div v-for="(item, index) in customerStatisticsList">
        <div class="item-wrapper">
          <WhiteSpace size="md"></WhiteSpace>
          <div class="item-content" @click="goPage('customerOrder', { customerName: item.customerName, customerCode: item.customerCode, time: date })">
            <form-preview :body-items="item.itemHeader"></form-preview>
            <span class="arrow-right"></span>
          </div>
          <div class="item-footer" @click="switchDetail(index)">
            <span class="arrow-down" v-show="!item.isShowDetail"></span>
            <span class="arrow-up" v-show="item.isShowDetail"></span>
          </div>
          <div class="item-detail" :class="item.isShowDetail ? 'animate' : ''">
            <WhiteSpace size="sm"></WhiteSpace>
            <form-preview :body-items="item.itemDetail"></form-preview>
          </div>
        </div>
      </div>
      <no-data :item="customerStatisticsList" :load="getList"></no-data>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import SvgIcon from '../../../components/Svg.vue'
  import NoData from '../../../components/NoData.vue'
  import { XTable, Scroller, Datetime, Group, FormPreview, dateFormat } from 'vux'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      WhiteSpace,
      CommonHeader,
      XTable,
      Scroller,
      Datetime,
      Group,
      FormPreview,
      SvgIcon,
      NoData
    },
    data () {
      return {
        date: '2017-08',
        scrollX: 0,
        scrollY: 0
      }
    },
    computed: {
      ...mapState({
        customerStatisticsList: (state) => {
          return state.customerStatistics.customerStatisticsList
        }
      })
    },
    watch: {
      '$route' (to, from) {
        const routeName = this.$route.name

        if (routeName === 'CustomerStatistics') {

        }
      },
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
        'getCustomerStaticsList'
      ]),
      // 获取列表
      getList () {
        this.getCustomerStaticsList(this.date)
      },
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      // 点击底部切换是否显示详情
      switchDetail (index) {
        this.customerStatisticsList[index].isShowDetail = !this.customerStatisticsList[index].isShowDetail
      }
    }
  }
</script>

<style lang="less">
#customer-statistics {
  position: relative;
  height: 100%;

  .vux-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
    top: 99px;
    left: 0;
    width: 100%;
    height: calc(~"100% - 99px");
    overflow: auto;
  }

  .vux-table {
    width: 1800px;
    height: 100%;
  }

  /*列表样式*/
  .weui-form-preview__hd {
    display: none;
  }

  .weui-form-preview__bd {
    padding-right: 25px;
    color: #333;
  }

  .weui-form-preview__bd:active {
    background: #E5E5E5;
  }

  .weui-form-preview__label {
    color: #333;
  }

  .item-wrapper {
    position: relative;

    .item-content {
      position: relative;

      .arrow-right {
        content: " ";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -5px;
        right: 10px;
      }
    }

    .item-footer {
      position: relative;
      height: 28px;
      text-align: center;
      background: #fff;

      .arrow-down {
        content: " ";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
        transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: 50%;
      }

      .arrow-up {
        content: " ";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
        transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -2px;
        right: 50%;
      }
    }

    .item-footer:active {
      background: #E5E5E5;
    }

    .item-detail {
      overflow: hidden;
      max-height: 0;
      transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;

      .weui-form-preview__bd {
        color: #999;
      }

      .weui-form-preview__bd:active {
        background: #E5E5E5;
      }

      .weui-form-preview__label {
        color: #999;
      }
    }

    .animate {
      max-height: 9999px;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
      transition-delay: 0s;
    }
  }

}
</style>
