<template>
  <div id="my-info" v-cloak>
    <common-header title="我的信息"></common-header>
    <group label-width="4.5em" label-margin-right="0.5em">
      <x-input title="代码" readonly placeholder="代码" v-model="myInfo.customerCode"></x-input>
      <x-input title="名称" placeholder="名称" v-model="myInfo.customerName"></x-input>
      <x-input title="联系人" placeholder="联系人" v-model="myInfo.name"></x-input>
      <x-input title="电话号码" placeholder="电话号码" v-model="myInfo.phone"></x-input>
      <!--<x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>-->
      <x-input title="所在地址" placeholder="所在地址" v-model="myInfo.customerAddress"></x-input>
    </group>
    <box gap="30px 10px 10px">
      <x-button type="primary" @click.native="submit">保存资料</x-button>
    </box>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import { Group, XInput, ChinaAddressData, XAddress, XButton, Box } from 'vux'
  import { mapState, mapActions } from 'vuex'
  import { objectClone } from '../../../utils/base'

  export default {
    components: {
      CommonHeader,
      Group,
      XInput,
      ChinaAddressData,
      XAddress,
      XButton,
      Box
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        myInfo: {
          id: null,
          customerCode: null,
          customerName: '',
          customerAddress: '',
          phone: null,
          name: ''
        }
      }
    },
    computed: {
      ...mapState({})
    },
    watch: {
      '$store.state.myInfo.myInfo' () {
        const newMyInfo = objectClone(this.$store.state.myInfo.myInfo)
        this.myInfo = newMyInfo
      },
      '$route' (to, from) {
        const routeName = this.$route.name
        if (routeName === 'myInfo') {
          const newMyInfo = objectClone(this.$store.state.myInfo.myInfo)
          this.myInfo = newMyInfo
        }
      }
    },
    created () {
      this.getMyInfo('10258')
    },
    methods: {
      ...mapActions([
        'getMyInfo',
        'changeMyInfo'
      ]),
      // 保存信息
      submit () {
        const submitInfo = {
          ID: this.myInfo.id,
          cusno_客户代码: this.myInfo.customerCode,
          cusnm_客户名称: this.myInfo.customerName,
          address_地址: this.myInfo.customerAddress,
          phone_电话: this.myInfo.phone,
          Contact_联系人: this.myInfo.name
        }
        this.changeMyInfo(submitInfo)
      }
    }
  }
</script>

<style lang="less">
#my-info {

}
</style>
