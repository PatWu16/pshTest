/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import { apiUrl, apiUrl1 } from './../utils/subei_config'

// 扫码查询
export const getProduct = async (qrcode) => {
  return await axiosApi(`${apiUrl}Report/reportProduct?qrcode=${qrcode}`, 'get')
}

// 提交反馈
export const submitFeedback = async (feedbackInfo) => {
  return await axiosApi(`${apiUrl1}Orders/SupportAdd`, 'post', feedbackInfo)
}

// 获取图片链接
export const postUploadPhoto = async (param) => {
  console.log('在api文件')
  console.log(param.formData)
  return await axiosApi(`${apiUrl}Common/UploadPhoto?type=${param.type}`, 'postFile', param.formData)
}
