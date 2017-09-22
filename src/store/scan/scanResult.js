/**
 * Created by Administrator on 2017/9/15.
 */
import { getProduct } from '../../servers/scan'
import { toast } from '../../utils/base'

const state = {
  product: []
}

const mutations = {
  saveProduct (state, payload) {     // 存储商品信息
    state.product = payload
  }
}

const actions = {
  // 获取商品信息
  getProduct ({commit, state, dispatch, getters}, payload) {
    getProduct(payload).then((res) => {
      if (!res.info.length) {
        toast('该产品不存在')
        return
      }
      let result = [{
        label: '序列号',
        value: res.info[0].SN_序列号
      }, {
        label: '产品代码',
        value: res.info[0].FGNO_产品代码
      }, {
        label: '销售订单',
        value: res.info[0].SONO_销售订单
      }, {
        label: '联系电话',
        value: res.info[0].tel_电话
      }, {
        label: '客户代码',
        value: res.info[0].cusno_客户代码
      }, {
        label: '客户名称',
        value: res.info[0].cusnm_客户名称
      }, {
        label: '出厂日期',
        value: res.info[0].shipdt_出厂日期
      }]
      commit('saveProduct', result)
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
