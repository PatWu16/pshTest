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
import customerList from './my/customerList'
import orderWarn from './my/orderWarn'
import productList from './my/productList'
import customerOrder from './my/customerOrder'
import customerOrderDetail from './my/customerOrderDetail'
import performanceStatistics from './my/performanceStatistics'
import performanceDepartment from './my/performanceDepartment'
import performanceMember from './my/performanceMember'
import scan from './scan/index'

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
    myProduct,
    customerList,
    orderWarn,
    productList,
    customerOrder,
    customerOrderDetail,
    performanceStatistics,
    performanceDepartment,
    performanceMember,
    scan
  }
})
