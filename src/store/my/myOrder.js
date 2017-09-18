/**
 * Created by Administrator on 2017/9/18.
 */
import { getMyOrderList } from '../../servers/my'
import { dateFormat } from '../../utils/base'

const state = {
  myOrderList: []
}

const mutations = {
  saveMyOrderList (state, payload) {     // 存储客户统计列表数据
    state.myOrderList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getMyOrderList ({commit, state, dispatch, getters}, payload) {
    getMyOrderList(payload.time.replace('-', ''), payload.id).then((res) => {
      console.log(res)
      let result = res.info.map(function (item) {
        return [{
          label: '订单号',
          value: item.sono_订单号
        }, {
          label: '订单金额',
          value: item.sovintax_含税销售额
        }, {
          label: '下单日期',
          value: dateFormat(item.indate_输入日期)
        }, {
          label: '交货日期',
          value: dateFormat(item.jqdate_交货日期)
        }, {
          label: '付款日期',
          value: dateFormat(item.DownPaymentDate)
        }, {
          label: '业务员',
          value: item.emnm_业务员
        }, {
          label: '订单状态',
          value: item.stas_订单状态
        }]
      })
      commit('saveMyOrderList', result)
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
