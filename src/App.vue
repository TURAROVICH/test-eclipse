<template>
  <div id="app">
    <Cards />
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  async mounted(){
    this.fetch()
  },
  methods:{
    ...mapActions(['fetch'])
  },
  components:{
    Cards
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  width: 90%;
}
</style>
