/**
 * Created by Administrator on 2017/9/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import customerStatistics from './my/customerStatistics'
import scanResult from './scan/scanResult'
import buy from './buy/index'

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
    buy
  }
})
