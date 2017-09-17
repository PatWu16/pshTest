/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import {apiUrl} from './../utils/subei_config'

// 获取客户统计列表
export const getCustomerStaticsList = async (time) => {
  return await axiosApi(`${apiUrl}Report/reportTotalCustomer?ym=${time}`, 'get')
}
