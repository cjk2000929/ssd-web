import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: true,
    USER_ID: 0,
    token: '',
    identify: 0
  },
  getters: {
    getToken(state) {
      return state.token || window.sessionStorage.getItem('token') || ''
    }
  },

  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    identifySelect(state, value) {
      state.identify = value
    },
    set_token(state, token) {
      state.token = token
    },
    del_token(state) {
      state.token = ''
    }
  },
  actions: {},
  modules: {}
})
