<template>
  <div id="performance-department">
    <common-header :title="departmentName"></common-header>
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
            <th>销售员</th>
            <th>类别</th>
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
          <tr v-for="n in 8" @click="goPage('performanceMember', {})">
            <td>销售部门</td>
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
      <div v-for="(item, index) in departmentStatisticsList">
        <div class="item-wrapper">
          <WhiteSpace size="md"></WhiteSpace>
          <div class="item-content" @click="goPage('performanceMember', {time: date, departmentId: departmentId, memberId: item.memberId, memberName: item.memberName})">
            <form-preview :body-items="item.itemHeader"></form-preview>
            <span class="arrow-right"></span>
          </div>
          <div class="item-footer" @click="switchDetail(index)">
            <span class="arrow-down" v-show="!item.isShowDetail"></span>
            <span class="arrow-up" v-show="item.isShowDetail"></span>
          </div>
          <div class="item-detail" :class="item.isShowDetail ? 'animate' : ''">
            <WhiteSpace size="sm"></WhiteSpace>
            <!--<form-preview :body-items="item.itemDetail"></form-preview>-->
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
              <tr v-for="i in item.itemDetail">
                <td>{{i.month}}</td>
                <td>{{i.target}}</td>
                <td>{{i.sale}}</td>
                <td>{{i.diff}}</td>
                <td>{{i.invoice}}</td>
              </tr>
              </tbody>
            </x-table>
          </div>
        </div>
      </div>
      <no-data :item="departmentStatisticsList" :load="getList"></no-data>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { XTable, Scroller, Datetime, Group, FormPreview } from 'vux'
  import NoData from '../../../components/NoData.vue'
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
      NoData
    },
    data () {
      return {
        date: '2017',
        departmentName: '',
        departmentId: ''
      }
    },
    computed: {
      ...mapState({
        departmentStatisticsList: (state) => {
          return state.performanceDepartment.departmentStatisticsList
        }
      })
    },
    watch: {
      '$route' (to, from) {
        const routeName = this.$route.name

        if (routeName === 'performanceDepartment') {
          const departmentId = this.$route.params.departmentId
          const date = this.$route.params.time
          if ((departmentId !== this.departmentId || date !== this.date) && departmentId) {
            this.departmentName = this.$route.params.departmentName
            this.departmentId = departmentId
            this.date = date

            this.getList()
          }
        }
      },
      date () {
        this.getList()
      }
    },
    created () {
      this.departmentName = this.$route.params.departmentName
      this.departmentId = this.$route.params.departmentId
      this.date = this.$route.params.time

      this.getList()
    },
    methods: {
      ...mapActions([
        'getDepartmentStatisticsList'
      ]),
      // 获取列表
      getList () {
        this.getDepartmentStatisticsList({time: this.date, id: this.departmentId})
      },
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      // 点击底部切换是否显示详情
      switchDetail (index) {
        this.departmentStatisticsList[index].isShowDetail = !this.departmentStatisticsList[index].isShowDetail
      }
    }
  }
</script>

<style lang="less">
  #performance-department {
    width: 100%;
    height: 100%;

    .vux-header {
      width: 100%;
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

      .vux-table {
        min-width: 600px;
      }

      .vux-table td, .vux-table th {
        font-size: 0.9rem;
      }
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
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
        width: 100%;
        overflow: auto;

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
