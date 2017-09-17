/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import {apiUrl} from './../utils/subei_config'

// 扫码查询
export const getProduct = async (qrcode) => {
  return await axiosApi(`${apiUrl}Report/reportProduct?qrcode=${qrcode}`, 'get')
}
