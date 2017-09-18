/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import {apiUrl, apiUrl1} from './../utils/subei_config'

// 获取客户统计列表
export const getCustomerStaticsList = async (time) => {
  return await axiosApi(`${apiUrl}Report/reportTotalCustomer?ym=${time}`, 'get')
}

// 获取我的信息
export const getMyInfo = async (id) => {
  return await axiosApi(`${apiUrl1}Member/MyInfo?customerid=${id}`, 'post')
}

// 获取我的订单列表
export const getMyOrderList = async (time, id) => {
  return await axiosApi(`${apiUrl1}Member/MyOrders?ym=${time}&customerid=${id}`, 'post')
}

// 获取我的产品列表
export const getMyProductList = async (time, id) => {
  // return await axiosApi(`${apiUrl1}Member/MyProduct?ym=${time}&customerid=${id}`, 'post')
  return await axiosApi(`${apiUrl1}Member/MyProduct`, 'post')
}
