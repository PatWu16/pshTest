<template>
  <div id="buy" v-cloak>
    <group-title>请选择您需求的产品</group-title>
    <picker :data='inquiryType' v-model='product' @on-change='change'></picker>
    <group-title>请输入您的基本信息</group-title>
    <group label-width="80px">
      <x-input title="姓名" type="text" v-model="name"></x-input>
      <x-input title="电话" type="tel" v-model="phone"></x-input>
      <x-input title="邮箱" type="email" v-model="email"></x-input>
    </group>
    <group-title>请输入您的需求说明</group-title>
    <group>
      <x-textarea :max="200" :rows="3" autosize placeholder="例：我需求的型号为XXX" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <box gap="30px 10px 10px">
      <x-button type="primary">提交需求</x-button>
    </box>
  </div>
</template>

<script>
  import { Picker, GroupTitle, Group, XTextarea, XButton, Box, XInput } from 'vux'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      Picker,
      GroupTitle,
      Group,
      XTextarea,
      XButton,
      Box,
      XInput
    },
    data () {
      return {
        name: '',
        phone: '',
        email: '',
        product: ['']
      }
    },
    computed: {
      ...mapState({
        inquiryType: (state) => {
          return state.buy.inquiryType
        }
      })
    },
    created () {
      this.getInquiryType()
    },
    methods: {
      ...mapActions([
        'getInquiryType'
      ]),
      change (value) {
        console.log('new Value', value)
      },
      onEvent (event) {
        console.log('on', event)
      }
    }
  }
</script>

<style lang="less">
#buy {
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }

  .weui-cells {
    margin-top: 0;
  }
}
</style>
