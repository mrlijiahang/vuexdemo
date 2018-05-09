<template>
  <div>
    <h1>{{$store.state.a.count}}</h1>
    <h2>{{$store.state.b.Bcount}}</h2>
    <button @click="none">/</button>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="get">*</button>

  </div>
</template>
<script>
  import {
    mapGetters,
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        mapdo:'do'
      }
      ),
      ...mapState({
        maptexta: 'texta',
        mapcount:'count'
      }),
    },
    methods: {
      ...mapMutations({
        mapadd: 'add'
      }),
      ...mapActions({
        mapdel:'del'
      }),
      none() {
        console.log(this.maptexta)
        console.log(this.mapcount)
      },
      add() {
        this.mapadd({num:100})
        this.$store.commit('addB')
      },
      del() {
        this.mapdel({delnum:0.1})
      },
      get() {
        console.log(this.mapdo)
      }
    },
    created(){
      console.log(this.$store.state.b)
    }
  }

</script>
