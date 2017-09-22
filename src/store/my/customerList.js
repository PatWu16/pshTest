/**
 * Created by Administrator on 2017/9/18.
 */
import { getCustomerList } from '../../servers/my'

const state = {
  customerList: []
}

const mutations = {
  saveCustomerList (state, payload) {     // 存储客户统计列表数据
    state.customerList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getCustomerList ({commit, state, dispatch, getters}, payload) {
    getCustomerList(payload).then((res) => {
      let result = res.info.map(function (item) {
        return [{
          label: '客户代码',
          value: item.cusno_客户代码
        }, {
          label: '客户名称',
          value: item.cusnm_客户名称
        }, {
          label: '联系人',
          value: item.Contact_联系人
        }, {
          label: '电话',
          value: item.phone_电话
        },
        {
          label: '地址',
          value: item.address_地址
        }]
      })
      commit('saveCustomerList', result)
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
