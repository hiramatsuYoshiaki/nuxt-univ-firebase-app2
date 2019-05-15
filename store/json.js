import jsonData from '~/assets/json/appDatas.json'

// 状態管理
export const state = () => ({
  data: jsonData
})

// getters
export const getters = {
  getAll(state) {
    return state.data
  }
}
