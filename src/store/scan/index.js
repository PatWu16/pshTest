/**
 * Created by Administrator on 2017/9/15.
 */
import { getBannerList, uploadLocation, getServiceInfo } from '../../servers/scan'
import { baseUrl } from '../../utils/subei_config'
import { wxScanQRCodes, wxGetLocation } from '../../utils/weixin'

const state = {
  bannerList: [],        // banner列表
  code: '',               // 二维码
  serviceTel: '',         // 客服电话
  serviceEmail: ''         // 客服邮箱
}

const mutations = {
  saveBannerList (state, payload) {     // 存储商品信息
    state.bannerList = payload
  },
  saveCode (state, payload) {
    state.code = payload
  },
  saveServiceInfo (state, payload) {
    state.serviceEmail = payload.serviceEmail
    state.serviceTel = payload.serviceTel
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
  },
  // 上传地理定位
  uploadLocation ({commit, state, dispatch, getters}, payload) {
    // 获取定位
    wxGetLocation(function (lat, lon) {
      const memberId = Number(sessionStorage.getItem('memberId'))
      uploadLocation(lat, lon, memberId).then((res) => {})
    })
  },
  // 获取客服邮箱和电话
  getServiceInfo ({commit, state, dispatch, getters}, payload) {
    getServiceInfo().then((res) => {
      if (res.all.status) {
        commit('saveServiceInfo', {serviceEmail: res.info.setting_OfficianEMail, serviceTel: res.info.setting_OfficianTel})
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
