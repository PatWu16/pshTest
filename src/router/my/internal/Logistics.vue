<template>
  <div id="logistics">
    <common-header title="订单快递"></common-header>
<!--    <div class="header">
    <search
      top="46px"
      ref="search"></search>
  </div>-->
    <div class="content">
      <!--<flow orientation="vertical">
        <flow-state  title="深圳中转站已接收" is-done></flow-state>
        <flow-line is-done :line-span="25"></flow-line>

        <flow-state  title="深圳中转站已发货" is-done></flow-state>
        <flow-line is-done :line-span="25"></flow-line>

        <flow-state  title="杭州中转站已接收" is-done></flow-state>
        <flow-line tip="进行中" :line-span="25"></flow-line>

        <flow-state  title="快递员派送中"></flow-state>
        <flow-line :line-span="25"></flow-line>

        <flow-state  title="已签收"></flow-state>
      </flow>-->
      <iframe class="iframe" src="https://m.kuaidi100.com/result.jsp?com=shunfeng&nu=420463967416"></iframe>
    </div>
  </div>
</template>

<script>
  import { Flow, FlowState, FlowLine, Search } from 'vux'
  import CommonHeader from '../../../components/Header.vue'
  import WhiteSpace from '../../../components/WhiteSpace.vue'

  export default {
    components: {
      Flow,
      FlowState,
      FlowLine,
      CommonHeader,
      Search,
      WhiteSpace
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
#logistics {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: 44px;
  }

  .content {
    width: 100%;
    height: calc(~"100% - 46px");
    overflow: auto;

    .weui-wepay-flow {
      height: calc(~"100% - 102px");
      overflow: auto;
    }
  }

  .iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
