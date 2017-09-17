<template>
  <div id="customer-order-detail">
    <common-header title="订单详情"></common-header>
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
          <tr v-for="n in 5" @click="goPage('customerOrder', {})">
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
      <WhiteSpace size="sm"></WhiteSpace>
      <form-preview :body-items="list"></form-preview>
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
        list: [{
          label: '订单号',
          value: 'SO170811818S'
        }, {
          label: '客户名称',
          value: 'Ashcroft Instruments GmbH'
        }, {
          label: '终端客户',
          value: 'Ashcroft Instruments GmbH'
        }, {
          label: '下单日期',
          value: '2017-08-08'
        }, {
          label: '交货日期',
          value: '2017-09-12'
        }, {
          label: '付款日期',
          value: '2017-09-12'
        }, {
          label: '销售额',
          value: 54313.01
        }, {
          label: '含税销售额',
          value: 55313.01
        }, {
          label: '开票额',
          value: 51321.33
        }, {
          label: '标准毛利',
          value: 25122
        }, {
          label: '收款',
          value: 1212
        }, {
          label: '应收',
          value: 11212
        }, {
          label: '团队名称',
          value: 'OEM'
        }, {
          label: '业务员',
          value: '蔡婷娴/Cassie Cai'
        }, {
          label: '订单状态',
          value: '已交货'
        }]
      }
    },
    created () {
    },
    methods: {
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
  #customer-order-detail {
    position: relative;
    width: 100%;
    height: 100%;

    .vux-header {
      position: absolute;
      top: 0;
      left: 0;
      height: 46px;
      width: 100%;
    }
    .content {
      position: absolute;
      top: 46px;
      left: 0;
      width: 100%;
      height: calc(~"100% - 46px");
      overflow: auto;
    }

    .vux-table {
      width: 2600px;
      height: 100%;
    }

    .weui-form-preview__hd {
      display: none;
    }

    .weui-form-preview__bd:active {
      background: #E5E5E5;
    }

    .weui-form-preview__label {
      color: #333;
    }

    .weui-form-preview__bd .weui-form-preview__item:last-child .weui-form-preview__value {
      color: #f63;
      font-size: 16px;
    }

  }
</style>
