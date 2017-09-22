/**
 * Created by Administrator on 2017/9/15.
 */
import { getBannerList } from '../../servers/scan'
import { baseUrl } from '../../utils/subei_config'
import { wxScanQRCodes } from '../../utils/weixin'

const state = {
  bannerList: [],        // banner列表
  code: ''               // 二维码
}

const mutations = {
  saveBannerList (state, payload) {     // 存储商品信息
    state.bannerList = payload
  },
  saveCode (state, payload) {
    state.code = payload
  }
}

const actions = {
  // 获取商品信息
  getBannerList ({commit, state, dispatch, getters}, payload) {
    getBannerList(payload).then((res) => {
      let result = res.info.map(function (item) {
        return {
          url: 'javascript:',
          img: baseUrl + item.BannerPathPath[0].url,
          title: ''
        }
      })
      commit('saveBannerList', result)
    })
  },
  // 扫描二维码
  scanQRCode ({commit, state, dispatch, getters}, payload) {
    wxScanQRCodes(function (code) {
      commit('saveCode', code)
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
