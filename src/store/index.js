import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        username: '',
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        setUserName(state, payload) {
            state.username = payload
        },
        resetState(state){
            state.user = ''
        },
        auth_request(state){
            state.status = 'loading'
          },
          auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
          },
          auth_error(state){
            state.status = 'error'
          },
          logout(state){
            state.status = ''
            state.token = ''
          },
    },
    actions: {
       login({commit} ,user){
        return new Promise((resolve,reject) => {
                commit('auth_request')
                axios({url: 'https://api-crm.basalam.dev/api/v1/login',data:user,method: 'POST'})
                .then(resp => {
                    console.log(resp);
                    localStorage.setItem('token', resp.outcome.data.token)
                    // axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success',resp.outcome.data.token, resp.outcome.data.user.name)
                    commit('setUserName',  resp.outcome.data.user.name)
                    resolve(resp)
                }).catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
       },
       logout({commit}){
           return new Promise((resolve) => {
               commit('logout')
               localStorage.removeItem('token')
            //    delete axios.defaults.headers.common['Authorization']
               resolve()
           })
       }
    },
    modules: {},
    getters: {
        getCurrentUser: state => state.username,
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }
})