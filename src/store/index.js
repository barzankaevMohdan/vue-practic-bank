import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import request from './modules/request'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state() {
    return {
      message: null
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    }
  },
  actions: {
    setMessage({commit}, {message, time}) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, time)
    }
  },
  modules: {
    auth,
    request
  }
})
