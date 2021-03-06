import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: '',
    },
    mutations: {
        setUserName(state, payload) {
            state.user = payload
        },
        resetState(state){
            state.user = ''
        }
    },
    actions: {},
    modules: {},
    getters: {
        getCurrentUser: state => state.user
    }
})