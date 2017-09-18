/**
 * Created by Administrator on 2017/9/18.
 */
import Vue from 'vue'
import { ToastPlugin, ConfirmPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

// 底部文字提示
export const toast = (info, width, posttion) => {
  Vue.$vux.toast.show({
    text: info,
    type: 'text',
    position: !posttion ? 'bottom' : posttion,
    width: !width ? '7.6rem' : width,
    time: 1000
  })
}

// 弹出确认框
export const openConfirm = (discription, callback) => {
  Vue.$vux.confirm.show({
    title: '提示',
    content: discription,
    onCancel () {
      console.log('点击取消')
    },
    onConfirm () {
      if (typeof (callback) === 'function') {
        callback()
      }
    }
  })
}

// 对象的深度复制
export const objectClone = (object) => {
  let newobj = {}
  for (var i in object) {
    newobj[i] = object[i]
  }
  return newobj
}

// 数组的深复制
export const arrayClone = (array) => {
  const len = array.lenght
  let newArray = []

  for (let i = 0; i < len; i++) {
    if (typeof array[i] !== 'object') {
      newArray.push(array[i])
    } else {
      newArray.push(array[i].clone())
    }
  }
  return newArray
}

// 日期转化
export const dateFormat = (date) => {
  date = date.toString().substring(0, 10)
  date = date.split('/').join('-')
  return date
}
