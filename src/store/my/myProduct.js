/**
 * Created by Administrator on 2017/9/18.
 */
import { getMyProductList } from '../../servers/my'
import { dateFormat } from '../../utils/base'

const state = {
  myProductList: []
}

const mutations = {
  saveMyProductList (state, payload) {     // 存储客户统计列表数据
    state.myProductList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getMyProductList ({commit, state, dispatch, getters}, payload) {
    getMyProductList(payload.time.replace('-', ''), payload.id).then((res) => {
      let result = res.info.map(function (item) {
        return [{
          label: '序列号',
          value: item.SN_序列号
        }, {
          label: '产品代码',
          value: item.FGNO_产品代码
        }, {
          label: '出厂日期',
          value: dateFormat(item.shipdt_出厂日期)
        }]
      })
      commit('saveMyProductList', result)
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
