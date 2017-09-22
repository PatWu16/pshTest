/**
 * Created by Administrator on 2017/9/15.
 */
import { getPerformanceStatisticsList } from '../../servers/my'

const state = {
  performanceStatisticsList: []
}

const mutations = {
  savePerformanceStatisticsList (state, payload) {     // 存储客户统计列表数据
    state.performanceStatisticsList = payload
  }
}

const actions = {
  // 获取客户统计列表
  getPerformanceStatisticsList ({commit, state, dispatch, getters}, payload) {
    getPerformanceStatisticsList(payload).then((res) => {
      // 过滤整合列表
      let filterList = []
      res.info.map(function (item) {
        let len = filterList.length
        if (len) {
          filterList.map(function (i, index) {
            if (i.groupId === item.grpid_团队ID) {
              i.statisticsList.push(item)
              return
            }
            if (index === (filterList.length - 1)) {
              filterList.push({
                groupId: item.grpid_团队ID,
                statisticsList: [item]
              })
            }
          })
        } else {
          filterList.push({
            groupId: item.grpid_团队ID,
            statisticsList: [item]
          })
        }
      })
      // 完善列表（多添少补）
      const result = filterList.map(function (item, index) {
        let resultItem = {
          itemHeader: [{
            label: '部门',
            value: item.statisticsList[0].grpnm_团队
          }, {
            label: '销售目标',
            value: '-'
          }, {
            label: '实际销售',
            value: '-'
          }, {
            label: '目标差异',
            value: '-'
          }, {
            label: '销售发票',
            value: '-'
          }],
          itemDetail: [{
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
          }],
          isShowDetail: false,
          departmentName: item.statisticsList[0].grpnm_团队,
          departmentId: item.groupId
        }
        item.statisticsList.map(function (i) {
          switch (i.tp_类别) {
            case '1计划':
              resultItem.itemHeader[1].value = Number(i.total_合计).toFixed(2)
              resultItem.itemDetail[0].target = Number(i.Jan).toFixed(2)
              resultItem.itemDetail[1].target = Number(i.Feb).toFixed(2)
              resultItem.itemDetail[2].target = Number(i.Mar).toFixed(2)
              resultItem.itemDetail[3].target = Number(i.Apr).toFixed(2)
              resultItem.itemDetail[4].target = Number(i.May).toFixed(2)
              resultItem.itemDetail[5].target = Number(i.Jun).toFixed(2)
              resultItem.itemDetail[6].target = Number(i.Jul).toFixed(2)
              resultItem.itemDetail[7].target = Number(i.Aug).toFixed(2)
              resultItem.itemDetail[8].target = Number(i.Sep).toFixed(2)
              resultItem.itemDetail[9].target = Number(i.Oct).toFixed(2)
              resultItem.itemDetail[10].target = Number(i.Nov).toFixed(2)
              resultItem.itemDetail[11].target = Number(i.Dec).toFixed(2)
              break
            case '2销售':
              resultItem.itemHeader[2].value = Number(i.total_合计).toFixed(2)
              resultItem.itemDetail[0].sale = Number(i.Jan).toFixed(2)
              resultItem.itemDetail[1].sale = Number(i.Feb).toFixed(2)
              resultItem.itemDetail[2].sale = Number(i.Mar).toFixed(2)
              resultItem.itemDetail[3].sale = Number(i.Apr).toFixed(2)
              resultItem.itemDetail[4].sale = Number(i.May).toFixed(2)
              resultItem.itemDetail[5].sale = Number(i.Jun).toFixed(2)
              resultItem.itemDetail[6].sale = Number(i.Jul).toFixed(2)
              resultItem.itemDetail[7].sale = Number(i.Aug).toFixed(2)
              resultItem.itemDetail[8].sale = Number(i.Sep).toFixed(2)
              resultItem.itemDetail[9].sale = Number(i.Oct).toFixed(2)
              resultItem.itemDetail[10].sale = Number(i.Nov).toFixed(2)
              resultItem.itemDetail[11].sale = Number(i.Dec).toFixed(2)
              break
            case '4差异':
              resultItem.itemHeader[3].value = Number(i.total_合计).toFixed(2)
              resultItem.itemDetail[0].diff = Number(i.Jan).toFixed(2)
              resultItem.itemDetail[1].diff = Number(i.Feb).toFixed(2)
              resultItem.itemDetail[2].diff = Number(i.Mar).toFixed(2)
              resultItem.itemDetail[3].diff = Number(i.Apr).toFixed(2)
              resultItem.itemDetail[4].diff = Number(i.May).toFixed(2)
              resultItem.itemDetail[5].diff = Number(i.Jun).toFixed(2)
              resultItem.itemDetail[6].diff = Number(i.Jul).toFixed(2)
              resultItem.itemDetail[7].diff = Number(i.Aug).toFixed(2)
              resultItem.itemDetail[8].diff = Number(i.Sep).toFixed(2)
              resultItem.itemDetail[9].diff = Number(i.Oct).toFixed(2)
              resultItem.itemDetail[10].diff = Number(i.Nov).toFixed(2)
              resultItem.itemDetail[11].diff = Number(i.Dec).toFixed(2)
              break
            case '3发票':
              resultItem.itemHeader[4].value = Number(i.total_合计).toFixed(2)
              resultItem.itemDetail[0].invoice = Number(i.Jan).toFixed(2)
              resultItem.itemDetail[1].invoice = Number(i.Feb).toFixed(2)
              resultItem.itemDetail[2].invoice = Number(i.Mar).toFixed(2)
              resultItem.itemDetail[3].invoice = Number(i.Apr).toFixed(2)
              resultItem.itemDetail[4].invoice = Number(i.May).toFixed(2)
              resultItem.itemDetail[5].invoice = Number(i.Jun).toFixed(2)
              resultItem.itemDetail[6].invoice = Number(i.Jul).toFixed(2)
              resultItem.itemDetail[7].invoice = Number(i.Aug).toFixed(2)
              resultItem.itemDetail[8].invoice = Number(i.Sep).toFixed(2)
              resultItem.itemDetail[9].invoice = Number(i.Oct).toFixed(2)
              resultItem.itemDetail[10].invoice = Number(i.Nov).toFixed(2)
              resultItem.itemDetail[11].invoice = Number(i.Dec).toFixed(2)
              break
            default:
              break
          }
        })
        return resultItem
      })
      commit('savePerformanceStatisticsList', result)
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
