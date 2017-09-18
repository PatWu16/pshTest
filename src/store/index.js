/**
 * Created by Administrator on 2017/9/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import customerStatistics from './my/customerStatistics'
import scanResult from './scan/scanResult'
import buy from './buy/index'
import feedback from './scan/feedback'
import myInfo from './my/myInfo'
import myOrder from './my/myOrder'
import myProduct from './my/myProduct'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  actions: {},
  mutations: {
    // 全局改变loading状态
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  modules: {
    customerStatistics,
    scanResult,
    buy,
    feedback,
    myInfo,
    myOrder,
    myProduct
  }
})
