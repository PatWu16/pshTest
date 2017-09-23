/**
 * Created by Administrator on 2017/9/15.
 */
import axiosApi from './../utils/axios.js'
import { apiUrl, apiUrl1, baseUrl } from './../utils/subei_config'

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
  return await axiosApi(`${baseUrl}/Common/UploadPhoto?type=OrderSupport`, 'postFile', param.formData)
}

// 获取banner
export const getBannerList = async () => {
  return await axiosApi(`${apiUrl1}Banner`, 'post')
}

// 上传地理定位
export const uploadLocation = async (lat, lon, id) => {
  return await axiosApi(`${apiUrl}Weixin/GetWxUserLocation?lat=${lat}&lon=${lon}&id=${id}`, 'get')
}

// 获取客服信息
export const getServiceInfo = async () => {
  return await axiosApi(`${baseUrl}/System/GetSysSetInfo`, 'get')
}
