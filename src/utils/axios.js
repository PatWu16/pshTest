import axios from 'axios'
import qs from 'qs'
// import {store} from './../store/index'
import Vue from 'vue'
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

export default (url, type, param) => {
  let isLoading = true
  axios.defaults.withCredentials = false
  axios.defaults.timeout = 5000
  const goBack = () => {
    // setTimeout(() => {
    //   history.go(((history.length * -1) + 1))
    // }, 1500)
  }
  const timeOut = () => {
    Vue.$vux.loading.show({
      text: 'Loading'
    })
    setTimeout(function () {
      Vue.$vux.loading.hide()
      if (isLoading) {
        Vue.$vux.toast.show({
          text: '请求超时',
          type: 'text',
          position: 'bottom'
        })
      }
    }, 5000)
  }
  /* eslint-disable */
  switch (type) {
    case 'get':
      const getApi = new Promise((resolve, reject) => {
        timeOut()
        axios.get(url, param).then((res) => {
          isLoading = false
          Vue.$vux.loading.hide()

          if (res.status >= 200 && res.status < 300) {
            if (res.data.status) {
              resolve({info: res.data.info, all: res.data})
            } else {
              Vue.$vux.toast.show({
                text: res.data.info,
                type: 'text',
                position: 'bottom'
              })
              if (res.data.infocode === -3000 || res.data.infocode === '-3000' || res.data.infocode === '-1') {
                goBack()
              }
            }
          } else {
            isLoading = false
            Vue.$vux.loading.hide()

            Vue.$vux.toast.show({
              text: '请求失败',
              type: 'text',
              position: 'bottom'
            })
          }
        }).catch((res) => {
          isLoading = false
          Vue.$vux.loading.hide()
          Vue.$vux.toast.show({
            text: '请求出错',
            type: 'text',
            position: 'bottom'
          })
          reject(res)
        })
      })
      return getApi
      break
    case 'post':
      const postApi = new Promise((resolve, reject) => {
        timeOut()
        axios.post(url, qs.stringify(param)).then((res) => {
          isLoading = false
          Vue.$vux.loading.hide()

          if (res.status >= 200 && res.status < 300) {
            if (res.data.status) {
              resolve({info: res.data.info, all: res.data})
            } else {
              Vue.$vux.toast.show({
                text: res.data.info,
                type: 'text',
                position: 'bottom'
              })
              if (res.data.infocode === -3000 || res.data.infocode === '-3000' || res.data.infocode === '-1') {
                goBack()
              }
            }
          } else {
            isLoading = false
            Vue.$vux.loading.hide()

            Vue.$vux.toast.show({
              text: '请求失败',
              type: 'text',
              position: 'bottom'
            })
          }
        }).catch((res) => {
          isLoading = false
          Vue.$vux.loading.hide()
          Vue.$vux.toast.show({
            text: '请求出错',
            type: 'text',
            position: 'bottom'
          })
          reject(res)
        })
      })
      return postApi
      break
    case 'postFile':
      const postFileApi = new Promise((resolve, reject) => {
        axios.defaults.withCredentials = false
        timeOut()
        axios.post(url, param).then((res) => {
          isLoading = false
          Vue.$vux.loading.hide()

          if (res.status >= 200 && res.status < 300) {
            if (res.data.status) {
              resolve({info: res.data.info, all: res.data})
            } else {
              Vue.$vux.toast.show({
                text: res.data.info,
                type: 'text',
                position: 'bottom'
              })
              if (res.data.infocode === -3000 || res.data.infocode === '-3000' || res.data.infocode === '-1') {
                goBack()
              }
            }
          } else {
            isLoading = false
            Vue.$vux.loading.hide()

            Vue.$vux.toast.show({
              text: '请求失败',
              type: 'text',
              position: 'bottom'
            })
          }
        }).catch((res) => {
          isLoading = false
          Vue.$vux.loading.hide()
          Vue.$vux.toast.show({
            text: '请求出错',
            type: 'text',
            position: 'bottom'
          })
          reject(res)
        })
      })
      return postFileApi
      break
    default:
      console.log('缺少传输类型参数！（get or post）')
  }
}
