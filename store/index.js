import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    count: 0,
    visits: [],
    locales: ['en', 'fr'],
    locale: 'fr'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    ADD_VISIT(state, path) {
      state.visits.push({
        path,
        date: new Date().toJSON()
      })
    },
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }
})

export default store
