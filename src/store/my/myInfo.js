/**
 * Created by Administrator on 2017/9/18.
 */
import { getMyInfo, changeMyInfo } from '../../servers/my'
import { toast } from '../../utils/base'

const state = {
  myInfo: {
    id: null,
    customerCode: null,
    customerName: '',
    customerAddress: '',
    phone: null,
    name: ''
  }
}

const mutations = {
  saveMyInfo (state, payload) {     // 存储客户统计列表数据
    state.myInfo = payload
  }
}

const actions = {
  // 获取客户信息
  getMyInfo ({commit, state, dispatch, getters}, payload) {
    getMyInfo(payload).then((res) => {
      const myInfo = {
        id: res.info[0].ID,
        customerCode: res.info[0].cusno_客户代码,
        customerName: res.info[0].cusnm_客户名称,
        customerAddress: res.info[0].address_地址,
        phone: res.info[0].phone_电话,
        name: res.info[0].Contact_联系人
      }
      commit('saveMyInfo', myInfo)
    })
  },
  // 修改客户信息
  changeMyInfo ({commit, state, dispatch, getters}, payload) {
    changeMyInfo(payload).then((res) => {
      if (res.all.status) {
        toast('修改成功')
        commit('saveMyInfo', {
          id: payload.ID,
          customerCode: payload.cusno_客户代码,
          customerName: payload.cusnm_客户名称,
          customerAddress: payload.address_地址,
          phone: payload.phone_电话,
          name: payload.Contact_联系人
        })
        setTimeout(() => {
          window.history.back()
        }, 1000)
      }
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
