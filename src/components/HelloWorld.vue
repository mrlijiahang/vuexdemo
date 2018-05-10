<template>
  <div>
    <h1>{{$store.state.a.count}}</h1>
    <h2>{{$store.state.b.Bcount}}</h2>
    <button @click="none">/</button>
    <button @click="add">+</button>
    <button @click="del">-</button>
    <button @click="get">*</button>
    <div style="border:1px solid black" v-for="(item, index) in this.mapdo1" :key=item.id>{{item}}
      <button @click="$store.commit('del3',{index:index})">del</button>
      <button @click="$store.dispatch('huifu')">恢复</button>
    </div>
    <!-- <el-table border :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="date" label="日期1" width="180">
      </el-table-column> -->

    </el-table>
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
        this.mapadd({
          num: 100
        })
        this.$store.commit('addB')
      },
      del() {},
      get() {
        console.log(this.mapdo)
      }
    },
    created() {
      this.$store.dispatch('del2')
    },
    mounted() {
      console.log(this.mapdo1)
    }
  }

</script>
