/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import {apiUrl1} from './../utils/subei_config'

// 获得询价类型
export const getInquiryType = async () => {
  return await axiosApi(`${apiUrl1}Orders/InquiryType`, 'get')
}

// 购买商品
export const buyProduct = async (time) => {
  return await axiosApi(`${apiUrl1}Report/reportTotalCustomer?ym=${time}`, 'get')
}
