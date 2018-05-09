<template>
  <div>
    <h1>{{$store.state.a.count}}</h1>
    <h2>{{$store.state.b.Bcount}}</h2>
    <button @click="none">/</button>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="get">*</button>
    <div style="border:1px solid black" v-for="item in this.mapdo1" :key=item.id >{{item}}</div>

  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
import { getapi } from '../api/test.js'
export default {
  data() {
    return {
      
    }
  },
  computed: {
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
    none() {
      console.log(this.maptexta)
      console.log(this.mapcount)
    },
    add() {
      this.mapadd({ num: 100 })
      this.$store.commit('addB')
    },
    del() {
      // this.mapdel({ delnum: 0.1 })
      
    },
    get() {
      console.log(this.mapdo)
    }
  },
  created() {
    this.$store.dispatch('del2')
  },
  mounted(){
     console.log(this.mapdo1)
  }
}
</script>
