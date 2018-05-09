import Vuex from 'vuex'
import Vue from 'vue'
import { getapi } from '../api/test.js'

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
    data: '',
    texta: {
      id: 1,
      desc: '...'
    }
  },
  mutations: {
    add(state, payload) {
      state.count = state.count + payload.num
    },
    del1(state) {
      getapi({ pid: 0 }).then(res => {
        state.data = res.data.data
      })
    }
  },
  getters: {
    do: state => {
      return state.texta.id
    },
    do1: state => {
      return state.data
    }
  },
  actions: {
    del(context, payload) {
      setInterval(() => {
        context.state.count = context.state.count - payload.delnum
      }, 1000)
    },
    del2(context) {
      context.commit('del1')
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
