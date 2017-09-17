<template>
  <div id="my-info">
    <common-header title="我的资料"></common-header>
    <group label-width="4.5em" label-margin-right="0.5em">
      <x-input title="代码" placeholder="代码"></x-input>
      <x-input title="名称" placeholder="名称"></x-input>
      <x-input title="联系人" placeholder="联系人"></x-input>
      <x-input title="电话号码" placeholder="电话号码"></x-input>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>
      <x-input title="详细地址" placeholder="详细地址"></x-input>
    </group>
    <box gap="30px 10px 10px">
      <x-button type="primary">保存资料</x-button>
    </box>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import { Group, XInput, ChinaAddressData, XAddress, XButton, Box } from 'vux'

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
        addressValue: ['广东省', '深圳市', '南山区']
      }
    }
  }
</script>

<style lang="less">
#my-info {

}
</style>
