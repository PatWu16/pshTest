/**
 * Created by Administrator on 2017/9/18.
 */
import { submitFeedback, postUploadPhoto } from '../../servers/scan'
import { toast } from '../../utils/base'

const state = {}

const mutations = {}

const actions = {
  // 提交反馈
  submitFeedback ({commit, state, dispatch, getters}, payload) {
    submitFeedback(payload).then((res) => {
      if (res.all.status) {
        toast(res.all.info)
        setTimeout(() => {
          window.history.back()
        }, 1000)
      }
    })
  },
  // 上传图片
  postUploadPhoto: async ({commit, dispatch, getters, state}, payload) => {
    return await postUploadPhoto(payload)
  }
}

const getters = {}

export default {
  state,
  mutations,
  getters,
  actions
}
