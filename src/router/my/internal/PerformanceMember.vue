<template>
  <div id="performance-member">
    <common-header title="蔡政雅"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY" @on-change="change" title="选择年份" year-row="{value}年" confirm-text="完成" cancel-text="取消"></datetime>
      </group>
    </div>
    <div class="content">
      <!--<scroller scrollbar-x :bounce=false :style="{height: height2}">
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead class="table-head">
          <tr style="background-color: #F7F7F7">
            <th>部门</th>
            <th>类别</th>
            <th>销售员</th>
            <th>合计</th>
            <th>一月</th>
            <th>二月</th>
            <th>三月</th>
            <th>四月</th>
            <th>五月</th>
            <th>六月</th>
            <th>七月</th>
            <th>八月</th>
            <th>九月</th>
            <th>十月</th>
            <th>十一月</th>
            <th>十二月</th>
          </tr>
          </thead>
          <tbody class="table-body">
          <tr v-for="n in 5" @click="goPage('performanceMember', {})">
            <td>销售部门</td>
            <td>销售</td>
            <td>吴鹏</td>
            <td>1651456</td>
            <td>5446</td>
            <td>2412</td>
            <td>6545</td>
            <td>454</td>
            <td>5446</td>
            <td>2412</td>
            <td>6545</td>
            <td>454</td>
            <td>5446</td>
            <td>2412</td>
            <td>6545</td>
            <td>454</td>
          </tr>
          </tbody>
        </x-table>
      </scroller>-->
      <WhiteSpace size="sm"></WhiteSpace>
      <x-table style="background: #fff;">
        <thead>
        <tr>
          <th>月份</th>
          <th>销售</th>
          <th>发票</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in itemDetail">
          <td>{{i.month}}</td>
          <td>{{i.sale}}</td>
          <td>{{i.invoice}}</td>
        </tr>
        </tbody>
      </x-table>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { XTable, Scroller, Datetime, Group } from 'vux'

  export default {
    components: {
      WhiteSpace,
      CommonHeader,
      XTable,
      Scroller,
      Datetime,
      Group
    },
    data () {
      return {
        date: '2017',
        height: '',
        height2: '',
        itemDetail: [{
          month: '一月',
          sale: 217.95,
          invoice: 122.36
        }, {
          month: '二月',
          sale: 2417.95,
          invoice: 122.36
        }, {
          month: '三月',
          sale: 202,
          invoice: 122.36
        }, {
          month: '四月',
          sale: 12120,
          invoice: 122.36
        }, {
          month: '五月',
          sale: 352.66,
          invoice: 122.36
        }, {
          month: '六月',
          sale: 5125.36,
          invoice: 122.36
        }, {
          month: '七月',
          sale: 5232.11,
          invoice: 122.36
        }, {
          month: '八月',
          sale: 3221.11,
          invoice: 122.36
        }, {
          month: '九月',
          sale: 5336.51,
          invoice: 122.36
        }, {
          month: '十月',
          sale: 6323.33,
          invoice: 122.36
        }, {
          month: '十一月',
          sale: 565.32,
          invoice: 122.36
        }, {
          month: '十二月',
          sale: 5456.25,
          invoice: 122.36
        }, {
          month: '合计',
          sale: 55656456.25,
          invoice: 115122.36
        }]
      }
    },
    created () {
      this.height = document.body.clientHeight + 'px'
      this.height2 = document.body.clientHeight - 46 + 'px'
    },
    methods: {
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>

<style lang="less">
  #performance-member {
    width: 100%;
    height: 100%;

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
