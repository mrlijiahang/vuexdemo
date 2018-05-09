import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const moduleB = {
  state: {
    Bcount: 110
  },
  mutations: {
    addB(state) {
      state.Bcount = state.Bcount + 10
    }
  }
}

const moduleA = {
  state: {
    count: 10,
    texta: {
      id: 1,
      desc: '...'
    }
  },
  mutations: {
    add(state, payload) {
      state.count = state.count + payload.num
    }
  },
  getters: {
    do: state => {
      return state.texta.id
    }
  },
  actions: {
    del(context, payload) {
      setInterval(() => {
        context.state.count = context.state.count - payload.delnum
      }, 1000)
    }
  }
}

const store1 = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store1
