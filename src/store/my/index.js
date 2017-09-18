/**
 * Created by Administrator on 2017/9/15.
 */
/**
 * Created by Administrator on 2017/9/15.
 */
import { getCustomerStaticsList } from '../../servers/my'

const state = {
  customerStatisticsList: []
}

const mutations = {
  saveCustomerStatisticsList (state, payload) {     // 存储客户统计列表数据
    state.customerStatisticsList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getCustomerStaticsList ({commit, state, dispatch, getters}, payload) {
    getCustomerStaticsList(payload.replace('-', '')).then((res) => {
      let result = res.info.map(function (item) {
        return {
          itemHeader: [{
            label: '客户名称',
            value: item.csnm_客户名称
          }, {
            label: '销售额',
            value: item.sov_销售额
          }, {
            label: '收款',
            value: item.rcv_收款
          }],
          itemDetail: [{
            label: '团队',
            value: item.grnm_团队
          }, {
            label: '业务员',
            value: item.emnm_业务员
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
            label: 'ar',
            value: item.ar
          }],
          isShowDetail: false
        }
      })
      commit('saveCustomerStatisticsList', result)
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
