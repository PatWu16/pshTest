/**
 * Created by Administrator on 2017/9/15.
 */
import { getCustomerOrderList } from '../../servers/my'
import { dateFormat } from '../../utils/base'

const state = {
  customerOrderList: []
}

const mutations = {
  saveCustomerOrderList (state, payload) {     // 存储客户统计列表数据
    state.customerOrderList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getCustomerOrderList ({commit, state, dispatch, getters}, payload) {
    getCustomerOrderList(payload.time.replace('-', ''), payload.id).then((res) => {
      let result = res.info.map(function (item) {
        return {
          itemHeader: [{
            label: '订单号',
            value: item.sono_订单号
          }, {
            label: '销售额',
            value: item.sov_销售额
          }, {
            label: '收款',
            value: item.rcv_收款
          }, {
            label: '订单状态',
            value: item.stas_订单状态
          }],
          itemDetail: [{
            label: '输入日期',
            value: dateFormat(item.indate_输入日期)
          }, {
            label: '交货日期',
            value: dateFormat(item.jqdate_交货日期)
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
            label: '团队',
            value: item.grnm_团队名称
          }, {
            label: '业务员',
            value: item.emnm_业务员
          }],
          isShowDetail: false,
          customerCode: item.csno_客户代码,
          orderNumber: item.sono_订单号
        }
      })
      commit('saveCustomerOrderList', result)
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
