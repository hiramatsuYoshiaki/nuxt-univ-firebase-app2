// export const state = () => ({
//   counter: 0
// })

// export const mutations = {
//   increment(state) {
//     state.counter++
//   }
// }

/**
 * store/counter.js
 * このファイル名がcounter.jsなので、モジュール名はcounterになる。
 */
export const state = () => ({
//   count: 123,
  page: 'home'
})

export const mutations = {
//   increment(state, v) {
//     state.count += v
//   },
  pagePathSet(state, payload) {
    state.page = payload
  },
  home: (state) => { state.page = 'home' },
  works: (state) => { state.page = 'works' },
  projects: (state) => { state.page = 'projects' },
  about: (state) => { state.page = 'about' },
  contact: (state) => { state.page = 'contact' },
  service: (state) => { state.page = 'service' }

}
