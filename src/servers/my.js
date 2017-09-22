/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import {apiUrl, apiUrl1} from './../utils/subei_config'

// 获取我的信息
export const getMyInfo = async (id) => {
  return await axiosApi(`${apiUrl1}Member/MyInfo?customerid=${id}`, 'post')
}

// 修改我的信息
export const changeMyInfo = async (myInfo) => {
  return await axiosApi(`${apiUrl1}Member/Edit`, 'post', myInfo)
}

// 获取我的订单列表
export const getMyOrderList = async (time, id) => {
  return await axiosApi(`${apiUrl1}Member/MyOrders?ym=${time}&customerid=${id}`, 'post')
}

// 获取我的产品列表
export const getMyProductList = async (time, id) => {
  return await axiosApi(`${apiUrl1}Member/MyProduct?ym=${time}&customerid=${id}`, 'post')
}

// 客户查询
export const getCustomerList = async (keyword) => {
  return await axiosApi(`${apiUrl}Report/reportCustomer?keyword=${keyword}`, 'get')
}

// 获取订单预警列表
export const getOrderWarnList = async (keyword) => {
  return await axiosApi(`${apiUrl}Report/reportOrderWarn?keyword=${keyword}`, 'get')
}

// 获取客户统计列表
export const getCustomerStaticsList = async (time) => {
  return await axiosApi(`${apiUrl}Report/reportTotalCustomer?ym=${time}`, 'get')
}

// 获取客户订单列表
export const getCustomerOrderList = async (time, id) => {
  return await axiosApi(`${apiUrl}Report/reportTotalCustomerOrders?ym=${time}&customerid=${id}`, 'get')
}

// 获取客户订单详情
export const getCustomerOrderDetail = async (time, orderNumber) => {
  return await axiosApi(`${apiUrl}Report/reportTotalCustomerOrdersItem?ym=${time}&orderid=${orderNumber}`, 'get')
}

// 获取业绩统计
export const getPerformanceStatisticsList = async (time) => {
  return await axiosApi(`${apiUrl}Report/reportTotalSaleDept?year=${time}`, 'get')
}

// 获取部门业绩统计
export const getDepartmentStatisticsList = async (time, id) => {
  return await axiosApi(`${apiUrl}Report/reportTotalSaleDeptMember?year=${time}&deptid=${id}`, 'get')
}

// 获取业务员统计
export const getMemberStatistics = async (time, groupid, memberid) => {
  return await axiosApi(`${apiUrl}Report/reportTotalSaleDeptMemberItem?year=${time}&deptid=${groupid}&=${memberid}`, 'get')
}
