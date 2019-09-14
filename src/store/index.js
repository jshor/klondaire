import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards'
import deck from './modules/deck'

Vue.use(Vuex)

const state = {
  promotions: [],
  deckIndex: -1
}

const actions = {
  newGame ({ commit, state }) {
    commit('INIT_DECK')
    commit('REGISTER_CARDS', state.deck.cards)
    commit('INIT_TABLEAU', state.deck.cards)
    commit('INIT_FOUNDATIONS')
    commit('REVEAL_CARDS')
  },

  moveCard ({ commit }, { cardId, targetId }) {
    commit('REMOVE_FROM_DECK', cardId)
    commit('MOVE_CARD', { cardId, targetId })
  }
}

const mutations = {
  REVEAL_CARDS (state) {
    Object
      .values(state.cards)
      .forEach(({ id, child }) => {
        if (!child) {
          Vue.set(state.cards[id], 'revealed', true)
        }
      })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    cards,
    deck
  }
})
