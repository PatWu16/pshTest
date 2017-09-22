<template>
  <div id="my" v-cloak>
    <blur :blur-amount=40 :url="memberAvatar">
      <p class="center">
        <img :src="memberAvatar">
      </p>
      <p class="name">{{memberName}}</p>
    </blur>
    <group v-if="memberType === 0">
      <cell title="我的信息" is-link @click.native="goPage('myInfo', {})">
        <img slot="icon" width="20" class="icon" src="../../assets/img/my-info.png">
      </cell>
      <cell title="我的订单" is-link @click.native="goPage('myOrder', {})">
        <img slot="icon" width="20" class="icon" src="../../assets/img/my-order.png">
      </cell>
      <cell title="我的产品" is-link @click.native="goPage('myProduct', {})">
        <img slot="icon" width="20" class="icon" src="../../assets/img/product.png">
      </cell>
    </group>
    <WhiteSpace size="lg"></WhiteSpace>
    <grid class="grid-wrapper" v-if="memberType !== 0">
      <grid-item label="产品查询" @on-item-click="goPage('productList', {})">
        <img slot="icon" src="../../assets/img/selectionguides.png">
      </grid-item>
      <grid-item label="客户查询" @on-item-click="goPage('customerList', {})">
        <img slot="icon" src="../../assets/img/selectionguides.png">
      </grid-item>
      <grid-item label="订单预警" @on-item-click="goPage('orderWarn', {})">
        <img slot="icon" src="../../assets/img/drawingsmodels.png">
      </grid-item>
      <grid-item label="订单快递" @on-item-click="goPage('logistics', {})">
        <img slot="icon" src="../../assets/img/data.png">
      </grid-item>
      <grid-item label="客户统计" @on-item-click="goPage('customerStatistics', {})">
        <img slot="icon" src="../../assets/img/data.png">
      </grid-item>
      <grid-item label="业绩统计" @on-item-click="goPage('performanceStatistics', {})">
        <img slot="icon" src="../../assets/img/data.png">
      </grid-item>
      <grid-item label="防伪管理" @on-item-click="toastDevelopment">
        <img slot="icon" src="../../assets/img/installationmaint.png">
      </grid-item>
      <grid-item label="保修管理" @on-item-click="toastDevelopment">
        <img slot="icon" src="../../assets/img/technical.png">
      </grid-item>
      <grid-item label="询价管理" @on-item-click="toastDevelopment">
        <img slot="icon" src="../../assets/img/selectionguides.png">
      </grid-item>
    </grid>
    <toast v-model="isToastShow" is-show-mask position="middle" type="cancel">开发中...</toast>
    <WhiteSpace></WhiteSpace>
  </div>
</template>

<script>
  import { Blur, Cell, Group, Grid, GridItem, Toast } from 'vux'
  import WhiteSpace from '../../components/WhiteSpace.vue'
  import logo from '../../assets/img/logo.jpg'

  export default {
    components: {
      Blur,
      Cell,
      Group,
      WhiteSpace,
      Grid,
      GridItem,
      Toast
    },
    data () {
      return {
        url: logo,
        isToastShow: false,
        memberName: '',
        memberType: null,
        memberAvatar: ''
      }
    },
    created () {
      this.memberName = sessionStorage.getItem('memberName')
      this.memberType = Number(sessionStorage.getItem('memberType'))
      this.memberAvatar = sessionStorage.getItem('memberAvatar')
    },
    methods: {
      // 页面跳转
      goPage (name, params) {
        params = (JSON.stringify(params) === '{}' ? {} : params)
        this.$router.push({name: name, params: params})
      },
      // 开发中弹窗
      toastDevelopment () {
        this.isToastShow = true
        setTimeout(() => (this.isToastShow = false), 1000)
      }
    }
  }
</script>

<style lang="less">
#my {
  overflow: auto;
  width: 100%;
  height: calc(~"100% - 50px");

  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #ececec;
    }
  }

  .name {
    color: #fff;
    font-size: large;
    text-align: center;
  }

  .icon {
    display:block;
    margin-right:5px;
  }

  .grid-wrapper {
    background: #fff;
  }

  .weui-grid__icon img {
    width: 87.5%;
  }
}
</style>
