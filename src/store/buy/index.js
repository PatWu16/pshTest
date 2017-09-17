/**
 * Created by Administrator on 2017/9/15.
 */
/**
 * Created by Administrator on 2017/9/15.
 */
/**
 * Created by Administrator on 2017/9/15.
 */
import { getInquiryType, buyProduct } from '../../servers/buy'

const state = {
  inquiryType: [[{
    name: '',
    id: null
  }]]
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
          name: item.fgtypenm_产品类别,
          value: item.fgtypeid_产品类别ID
        }
      })
      commit('saveInquiryType', [result])
    })
  },
  // 购买商品
  getProductwe ({commit, state, dispatch, getters}, payload) {
    buyProduct(payload).then((res) => {
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
