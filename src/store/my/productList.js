/**
 * Created by Administrator on 2017/9/15.
 */
import { getProduct } from '../../servers/scan'

const state = {
  productList: []
}

const mutations = {
  saveProductList (state, payload) {     // 存储商品信息
    state.productList = payload
  }
}

const actions = {
  // 获取商品信息
  queryProductList ({commit, state, dispatch, getters}, payload) {
    getProduct(payload).then((res) => {
      let result = res.info.map(function (item) {
        return [{
          label: '序列号',
          value: item.SN_序列号
        }, {
          label: '产品代码',
          value: item.FGNO_产品代码
        }, {
          label: '销售订单',
          value: item.SONO_销售订单
        }, {
          label: '联系电话',
          value: item.tel_电话
        }, {
          label: '客户代码',
          value: item.cusno_客户代码
        }, {
          label: '客户名称',
          value: item.cusnm_客户名称
        }, {
          label: '出厂日期',
          value: item.shipdt_出厂日期
        }]
      })
      commit('saveProductList', result)
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
