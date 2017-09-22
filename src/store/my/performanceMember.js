/**
 * Created by Administrator on 2017/9/15.
 */
import { getMemberStatistics } from '../../servers/my'

const state = {
  memberStatistics: []
}

const mutations = {
  saveMemberStatistics (state, payload) {     // 存储客户统计列表数据
    state.memberStatistics = payload
  }
}

const actions = {
  // 获取业务员业绩信息
  getMemberStatistics ({commit, state, dispatch, getters}, payload) {
    getMemberStatistics(payload.time, payload.departmentId, payload.memberId).then((res) => {
      // 完善列表(少添)
      let result = [{
        month: '一月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '二月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '三月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '四月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '五月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '六月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '七月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '八月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '九月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '十月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '十一月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }, {
        month: '十二月',
        target: '-',
        sale: '-',
        diff: '-',
        invoice: '-'
      }]
      res.info.map(function (i, index) {
        switch (i.tp_类别) {
          case '1计划':
            result[0].target = Number(i.Jan).toFixed(2)
            result[1].target = Number(i.Feb).toFixed(2)
            result[2].target = Number(i.Mar).toFixed(2)
            result[3].target = Number(i.Apr).toFixed(2)
            result[4].target = Number(i.May).toFixed(2)
            result[5].target = Number(i.Jun).toFixed(2)
            result[6].target = Number(i.Jul).toFixed(2)
            result[7].target = Number(i.Aug).toFixed(2)
            result[8].target = Number(i.Sep).toFixed(2)
            result[9].target = Number(i.Oct).toFixed(2)
            result[10].target = Number(i.Nov).toFixed(2)
            result[11].target = Number(i.Dec).toFixed(2)
            break
          case '2销售':
            result[0].sale = Number(i.Jan).toFixed(2)
            result[1].sale = Number(i.Feb).toFixed(2)
            result[2].sale = Number(i.Mar).toFixed(2)
            result[3].sale = Number(i.Apr).toFixed(2)
            result[4].sale = Number(i.May).toFixed(2)
            result[5].sale = Number(i.Jun).toFixed(2)
            result[6].sale = Number(i.Jul).toFixed(2)
            result[7].sale = Number(i.Aug).toFixed(2)
            result[8].sale = Number(i.Sep).toFixed(2)
            result[9].sale = Number(i.Oct).toFixed(2)
            result[10].sale = Number(i.Nov).toFixed(2)
            result[11].sale = Number(i.Dec).toFixed(2)
            break
          case '4差异':
            result[0].diff = Number(i.Jan).toFixed(2)
            result[1].diff = Number(i.Feb).toFixed(2)
            result[2].diff = Number(i.Mar).toFixed(2)
            result[3].diff = Number(i.Apr).toFixed(2)
            result[4].diff = Number(i.May).toFixed(2)
            result[5].diff = Number(i.Jun).toFixed(2)
            result[6].diff = Number(i.Jul).toFixed(2)
            result[7].diff = Number(i.Aug).toFixed(2)
            result[8].diff = Number(i.Sep).toFixed(2)
            result[9].diff = Number(i.Oct).toFixed(2)
            result[10].diff = Number(i.Nov).toFixed(2)
            result[11].diff = Number(i.Dec).toFixed(2)
            break
          case '3发票':
            result[0].invoice = Number(i.Jan).toFixed(2)
            result[1].invoice = Number(i.Feb).toFixed(2)
            result[2].invoice = Number(i.Mar).toFixed(2)
            result[3].invoice = Number(i.Apr).toFixed(2)
            result[4].invoice = Number(i.May).toFixed(2)
            result[5].invoice = Number(i.Jun).toFixed(2)
            result[6].invoice = Number(i.Jul).toFixed(2)
            result[7].invoice = Number(i.Aug).toFixed(2)
            result[8].invoice = Number(i.Sep).toFixed(2)
            result[9].invoice = Number(i.Oct).toFixed(2)
            result[10].invoice = Number(i.Nov).toFixed(2)
            result[11].invoice = Number(i.Dec).toFixed(2)
            break
          default:
            break
        }
      })
      commit('saveMemberStatistics', result)
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
