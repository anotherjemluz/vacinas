import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIdade: null,
    faixaEtaria: null
  },
  mutations: {
    setUserIdade(state, userIdade) {
      state.userIdade = userIdade
    },
    setFaixaEtaria(state, faixaEtaria) {
      state.faixaEtaria = faixaEtaria
    }
  },
  actions: {
  },
  modules: {
  }
})
