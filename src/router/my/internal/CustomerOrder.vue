<template>
  <div id="customer-order">
    <common-header title="Ashcroft Instruments GmbH"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY-MM" @on-change="change" title="选择月份" year-row="{value}年" month-row="{value}月" confirm-text="完成" cancel-text="取消"></datetime>
      </group>
    </div>
    <div class="content">
      <!--<scroller scrollbar-x :bounce=false :style="{height: height2}">
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead class="table-head">
          <tr style="background-color: #F7F7F7">
            <th>日期</th>
            <th>客户代码</th>
            <th>客户名称</th>
            <th>业务员</th>
            <th>终端客户代码</th>
            <th>终端客户</th>
            <th>行业代码</th>
            <th>行业名称</th>
            <th>业务员</th>
            <th>团队</th>
            <th>销售额</th>
            <th>含税销售额</th>
            <th>开票额</th>
            <th>标准毛利</th>
            <th>收款</th>
            <th>应收</th>
            <th>订单号</th>
            <th>输入日期</th>
            <th>交货日期</th>
            <th>支付日期</th>
            <th>订单状态</th>
          </tr>
          </thead>
          <tbody class="table-body">
          <tr v-for="n in 8" @click="goPage('customerOrderDetail', {})">
            <td>201708</td>
            <td>10806</td>
            <td>Ashcroft Instruments GmbH</td>
            <td>蔡婷娴/Cassie Cai</td>
            <td>212</td>
            <td>集团公司</td>
            <td>152</td>
            <td>电子行业</td>
            <td>陈春战/Rex Chen</td>
            <td>PCP</td>
            <td>20245.46</td>
            <td>20245.46</td>
            <td>0</td>
            <td>20245.46</td>
            <td>20245.46</td>
            <td>20245.46</td>
            <th>SO170811826</th>
            <th>08/08/2017 00:00:00</th>
            <th>08/24/2016 00:00:00</th>
            <th>08/24/2016 00:00:00</th>
            <th>已审核</th>
          </tr>
          </tbody>
        </x-table>
      </scroller>-->
      <div v-for="(item, index) in list">
        <div class="item-wrapper">
          <WhiteSpace size="md"></WhiteSpace>
          <div class="item-content"  @click="goPage('customerOrderDetail', {})">
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
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { XTable, Scroller, Datetime, Group, FormPreview } from 'vux'

  export default {
    components: {
      WhiteSpace,
      CommonHeader,
      XTable,
      Scroller,
      Datetime,
      Group,
      FormPreview
    },
    data () {
      return {
        date: '2017-09',
        height: '',
        height2: '',
        list: [{
          itemHeader: [{
            label: '订单号',
            value: 'SO170811857'
          }, {
            label: '销售额',
            value: '18529.74'
          }, {
            label: '收款',
            value: '0'
          }, {
            label: '订单状态',
            value: '已审核'
          }],
          itemDetail: [{
            label: '输入日期',
            value: '2017-09-08'
          }, {
            label: '交货日期',
            value: '2017-09-17'
          }, {
            label: '含税销售额',
            value: '217.95'
          }, {
            label: '开票额',
            value: '27.95'
          }, {
            label: '标准毛利',
            value: '121.68'
          }, {
            label: '团队',
            value: 'OEM'
          }, {
            label: '业务员',
            value: '蔡婷娴/Cassie Cai'
          }],
          isShowDetail: false
        }]
      }
    },
    created () {
    },
    methods: {
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      change (value) {
        console.log('change', value)
      },
      // 点击底部切换是否显示详情
      switchDetail (index) {
        this.list[index].isShowDetail = !this.list[index].isShowDetail
      }
    }
  }
</script>

<style lang="less">
  #customer-order {
    position: relative;
    width: 100%;
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
      top: 90px;
      left: 0;
      width: 100%;
      height: calc(~"100% - 90px");
      overflow: auto;
    }

    .vux-table {
      width: 2600px;
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
