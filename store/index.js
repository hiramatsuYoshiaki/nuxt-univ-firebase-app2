export const state = () => ({
  page: 'home'
})

export const mutations = {
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
