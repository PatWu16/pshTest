<template>
  <div id="buy" v-cloak>
    <group-title>联系我们</group-title>
    <group>
      <cell title="客服电话">
        <div slot="value">
          <a href="tel:13764567708">13764567708</a>
        </div>
      </cell>
      <cell title="客服邮箱">
        <div slot="value">CASE@ashcroft.com</div>
      </cell>
    </group>
    <group-title>请选择您需求的产品</group-title>
    <!--<picker :data='[inquiryType]' v-model='product' @on-change='change'></picker>-->
    <group labelWidth="80px">
      <popup-picker title="选择产品" value-text-align="left" :data="inquiryType" v-model="product" :columns="1" show-name placeholder="请选择" @on-change="onChange"></popup-picker>
    </group>
    <group-title>请输入您的基本信息</group-title>
    <group label-width="80px">
      <x-input title="姓名" type="text" v-model="name"></x-input>
      <x-input title="电话" type="tel" v-model="phone"></x-input>
      <x-input title="邮箱" type="email" v-model="email"></x-input>
    </group>
    <group-title>请输入您的需求说明</group-title>
    <group>
      <x-textarea :max="200" :rows="3" autosize placeholder="例：我需求的型号为XXX" v-model="intro"></x-textarea>
    </group>
    <box gap="30px 10px 10px">
      <x-button type="primary" @click.native="submit">提交需求</x-button>
    </box>
  </div>
</template>

<script>
  import { Picker, GroupTitle, Group, XTextarea, XButton, Box, XInput, Cell, PopupPicker } from 'vux'
  import { mapActions, mapState } from 'vuex'
  import { toast } from '../../utils/base'

  export default {
    components: {
      Picker,
      GroupTitle,
      Group,
      XTextarea,
      XButton,
      Box,
      XInput,
      Cell,
      PopupPicker
    },
    data () {
      return {
        name: '',               // 客户姓名
        phone: '',              // 客户电话
        email: '',              // 客户邮件
        intro: '',              // 需求说明
        product: [''],          // 需求产品
        productName: ''
      }
    },
    computed: {
      ...mapState({
        inquiryType: (state) => {
          return state.buy.inquiryType
        }
      })
    },
    watch: {
      inquiryType () {
        this.product[0] = this.inquiryType[0].value
      }
    },
    created () {
      this.getInquiryType()
    },
    methods: {
      ...mapActions([
        'getInquiryType',
        'submitRequest'
      ]),
      // 提交需求
      submit () {
        if (!this.product[0]) {
          toast('请选择需求产品', '8rem')
          return
        }
        if (!this.phone && !this.email) {
          toast('请至少输入一种联系方式', '12rem')
          return
        }
        const submitInfo = {
          InquiryMemberId: 0,
          InquiryProductType: this.product[0],
          InquiryProductTypeName: this.productName,
          InquiryIntro: this.intro
//          InquiryManName: this.name,
//          InquiryManTel: this.phone,
//          InquiryEmail: this.email
        }
        this.submitRequest(submitInfo)
      },
      // picker选择修改
      onChange (val) {
        this.inquiryType.map((item) => {
          if (item.value === val[0]) {
            this.productName = item.name
            return
          }
        })
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

  .weui-cell__ft {
    color: #333;
  }
}
</style>
