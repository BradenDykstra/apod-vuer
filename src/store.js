import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})

let urlParams = 'apod?api_key=dz5G0L6SFethrYWbWbBlhNxbg9URz0akWzGrX9nv&date='

export default new Vuex.Store({
  state: {
    activeApod: {}
  },
  mutations: {
    setApod(state, apod) {
      state.activeApod = apod
    }
  },
  actions: {
    async getApod({ commit }, query) {
      try {
        let res = await api.get(urlParams + query)
        commit('setApod', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
