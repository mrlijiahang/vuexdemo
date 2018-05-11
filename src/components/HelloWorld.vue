<template>
  <div>
    <h1>这是A</h1>
    <h1>{{acount}}</h1>
    <h2>这是B</h2>
    <h2>{{$store.state.b.Bcount}}</h2>
    <!-- <button @click="none">/</button> -->
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="get">*</button>
    <div style="border:1px solid black" v-for="(item, index) in abc" :key=item.id>{{item}}
      <button @click="$store.commit('del3',{index:index})">del</button>
      <button @click="$store.dispatch('huifu')">恢复</button>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  import {
    getapi
  } from '../api/test.js'
  export default {
    data() {
      return {
      }
    },
    computed: {
      abc(){
        return this.mapdo1
      },
      acount(){
        return this.mapdo
      },
      ...mapGetters({
        mapdo: 'do',
        mapdo1: 'do1'
      }),
      ...mapState({
        maptexta: 'texta',
        mapcount: 'count'
      })
    },
    methods: {
      ...mapMutations({
        mapadd: 'add'
      }),
      ...mapActions({
        mapdel: 'del'
      }),
      add() {
        // 调用a
        this.mapadd({
          num: 100
        })
        // 调用b
        this.$store.commit('addB')
      },
      del() {
        this.mapdel()
      },
      get() {
        console.log(this.mapdo)
      }
    },
    created() {
      // 调用异步action
      this.$store.dispatch('del2')
    },
  }

</script>
