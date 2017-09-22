/**
 * Created by Administrator on 2017/9/18.
 */
import { getOrderWarnList } from '../../servers/my'

const state = {
  orderWarnList: []
}

const mutations = {
  saveOrderWarnList (state, payload) {     // 存储客户统计列表数据
    state.orderWarnList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getOrderWarnList ({commit, state, dispatch, getters}, payload) {
    getOrderWarnList(payload).then((res) => {
      let result = res.info.map(function (item) {
        return [{
          label: '销售订单',
          value: item.sono_销售订单
        }, {
          label: '客户名称',
          value: item.csnm_客户名称
        }, {
          label: '输入日期',
          value: item.indate_输入日期
        }, {
          label: '交期',
          value: item.jqdate_交期
        }, {
          label: '逾期天数',
          value: item.duedate_预期天数
        }, {
          label: '交期与到货相差天数',
          value: item.vd_交期与到货相差天
        }]
      })
      commit('saveOrderWarnList', result)
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
