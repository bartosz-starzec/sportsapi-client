import Vue from 'vue'
import Vuex from 'vuex'

const SET_TOKEN = 'SET_TOKEN';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        jwToken: null
    },
    mutations: {
        [SET_TOKEN] (state, token) {
            state.jwToken = token;
        }
    },
    actions: {
        setToken ({commit}, token) {
            return new Promise((resolve) => {
                commit(SET_TOKEN, token);
                resolve();
            })
        }
    },
    getters: {
        getJwToken: state => state.jwToken
    }
})
