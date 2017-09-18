/**
 * Created by Administrator on 2017/9/15.
 */
import { getInquiryType, submitRequest } from '../../servers/buy'
import { toast } from '../../utils/base'

const state = {
  inquiryType: [{
    name: '',
    value: null
  }]
}

const mutations = {
  saveInquiryType (state, payload) {     // 存储商品信息
    state.inquiryType = payload
  }
}

const actions = {
  // 获得询价类型
  getInquiryType ({commit, state, dispatch, getters}, payload) {
    getInquiryType().then((res) => {
      let result = res.info.map(function (item) {
        return {
          name: item.fgtypenm_产品类别.toString(),
          value: item.fgtypeid_产品类别ID.toString()
        }
      })
      commit('saveInquiryType', result)
    })
  },
  // 购买商品
  submitRequest ({commit, state, dispatch, getters}, payload) {
    submitRequest(payload).then((res) => {
      if (res.all.status) {
        toast(res.all.info)
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
