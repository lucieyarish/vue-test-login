import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.baseURL = 'https://localhost8080';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const store = createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  //login action will authenticate a user with the server and commit user credentials to the Vuex store
  //login action also passes Vuex commit heleper that is used to trigger mutations (those make changes to Vuex store)
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8080/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
  
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token: token, user: user })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  //mutations are used to change the stat of a Vuex
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  //getters are used to get the value of the attributes of Vuex state
  getters: {
    isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  },
  modules: {

  }
})
