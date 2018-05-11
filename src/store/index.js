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
  // a作用于state
  state: {
    count: 100,
    data: '',
    texta: {
      id: 1,
      desc: '...'
    }
  },
  mutations: {
    // a作用域的数字加
    add(state, payload) {
      state.count = state.count + payload.num
    },

    del1(state) {
      getapi({ pid: 0 }).then(res => {
        state.data = res.data.data
      })
    },
    del3(state, payload) {
      state.data.splice(payload.index, 1)
      console.log(state.data)
    }
  },
  getters: {
    // ab作用域相加
    do: (state, getters, rootState) => {
      return state.count + rootState.b.Bcount
    },
    do1: state => {
      return state.data
    }
  },
  actions: {
    del(context, rootState) {
      console.log(rootState)
      // context.state.count =
      //   context.state.count - payload.delnum - rootState.b.Bcount
    },

    // del2 dispatch del1
    del2(context) {
      context.commit('del1')
    },
    // 调用del1 请求接口
    huifu(context) {
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
