<template>
  <div id="customer-list" :style="{height: height}">
    <common-header title="客户查询"></common-header>
    <div class="header">
      <search
        top="46px"
        ref="search"></search>
    </div>
    <div class="content" :style="{height: height2}">
      <div v-for="n in 10">
        <WhiteSpace size="sm"></WhiteSpace>
        <form-preview :body-items="list"></form-preview>
      </div>
      <WhiteSpace size="sm"></WhiteSpace>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'
  import { FormPreview, Search } from 'vux'

  export default {
    components: {
      CommonHeader,
      FormPreview,
      Search,
      WhiteSpace
    },
    data () {
      return {
        height: '',
        height2: '',
        list: [{
          label: '客户名称',
          value: '深圳市安特高科实业有限公司'
        }, {
          label: '联系人',
          value: '马云'
        }, {
          label: '电话',
          value: '0755-86060992'
        },
        {
          label: '地址',
          value: '深圳市南山区兴海大道荔山工业园11栋'
        }]
      }
    },
    created () {
      this.height = document.body.clientHeight + 'px'
      this.height2 = document.body.clientHeight - 90 + 'px'
    }
  }
</script>

<style lang="less">
#customer-list {
  position: relative;

  .weui-form-preview__hd {
    display: none;
  }
  .header {
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    height: 44px;
  }
  .content {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    overflow: auto;
  }
}
</style>
