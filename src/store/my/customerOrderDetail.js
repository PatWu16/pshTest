/**
 * Created by Administrator on 2017/9/15.
 */
import { getCustomerOrderDetail } from '../../servers/my'

const state = {
  customerOrderDetail: []
}

const mutations = {
  saveCustomerOrderDetail (state, payload) {     // 存储客户统计列表数据
    console.log(payload)
    state.customerOrderDetail = payload
  }
}

const actions = {
  // 获取客户统计列表
  getCustomerOrderDetail ({commit, state, dispatch, getters}, payload) {
    getCustomerOrderDetail(payload.time.replace('-', ''), payload.orderNumber).then((res) => {
      let result = res.info.map(function (item) {
        return [{
          label: '订单号',
          value: item.sono_销售订单
        }, {
          label: '产品名称',
          value: item.fgnm_产品名称
        }, {
          label: '产品代码',
          value: item.fgno_产品代码
        }, {
          label: '客户名称',
          value: item.csno_客户名称
        }, {
          label: '终端客户',
          value: item.encsnm_终端客户名
        }, {
          label: '下单日期',
          value: item.indate_输入日期
        }, {
          label: '交货日期',
          value: item.jqdate_交货日期
        }, {
          label: '销售额',
          value: item.sov_销售额
        }, {
          label: '含税销售额',
          value: item.sovintax_含税销售额
        }, {
          label: '开票额',
          value: item.inv_开票额
        }, {
          label: '标准毛利',
          value: item.gp_标准毛利
        }, {
          label: '收款',
          value: item.rcv_收款额
        }, {
          label: '应收',
          value: item.ar_应收
        }, {
          label: '订单数',
          value: item.soqty_订单数
        }, {
          label: '团队名称',
          value: item.grnm_团队名称
        }, {
          label: '订单状态',
          value: item.stas_订单行状态
        }]
      })
      commit('saveCustomerOrderDetail', result)
    })
  }
}

const getters = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
