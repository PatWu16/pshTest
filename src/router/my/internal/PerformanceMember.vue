<template>
  <div id="performance-member">
    <common-header title="蔡政雅"></common-header>
    <div class="header">
      <group>
        <datetime v-model="date" placeholder="请选择" :min-year=2000 :max-year=2050 format="YYYY" title="选择年份" year-row="{value}年" confirm-text="完成" cancel-text="取消"></datetime>
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
          <th>销售目标</th>
          <th>实际销售</th>
          <th>目标差异</th>
          <th>销售发票</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in memberStatistics">
          <td>{{i.month}}</td>
          <td>{{i.target}}</td>
          <td>{{i.sale}}</td>
          <td>{{i.diff}}</td>
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
  import { mapActions, mapState } from 'vuex'

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
        }],
        departmentId: null,
        memberName: '',
        memberId: null,
        date: ''
      }
    },
    computed: {
      ...mapState({
        memberStatistics: (state) => {
          return state.performanceMember.memberStatistics
        }
      })
    },
    watch: {
      '$route' (to, from) {
        const routeName = this.$route.name

        if (routeName === 'performanceMember') {
          const memberId = this.$route.params.memberId
          const date = this.$route.params.time
          if ((memberId !== this.memberId || date !== this.date) && memberId) {
            this.date = date
            this.departmentId = this.$route.params.departmentId
            this.memberId = memberId
            this.memberName = this.$route.params.memberName

            this.getStatistics()
          }
        }
      },
      date () {
        this.getStatistics()
      }
    },
    created () {
      this.date = this.$route.params.time
      this.departmentId = this.$route.params.departmentId
      this.memberId = this.$route.params.memberId
      this.memberName = this.$route.params.memberName

      this.getStatistics()
    },
    methods: {
      ...mapActions([
        'getMemberStatistics'
      ]),
      // 获取业务员业绩
      getStatistics () {
        this.getMemberStatistics({time: this.date, departmentId: this.departmentId, memberId: this.memberId})
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

      .vux-table {
        min-width: 600px;
      }
    }

  }
</style>
