<template>
  <div id="app">
    <div class="tabs">
      <div class="tab" :class="{'active' : active === 'Cards'}" @click="active = 'Cards'">Список</div>
      <div class="tab" :class="{'active' : active === 'Converter'}" @click="active = 'Converter'">Конвертер</div>
    </div>
    <component :is="isComponent"/>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import Converter from './components/Converter.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data:()=>({
    active:'Cards'
  }),
  async mounted(){
    this.fetch()
  },
  methods:{
    ...mapActions(['fetch'])
  },
  computed:{
    isComponent(){
      return this.active
    }
  },
  components:{
    Cards,
    Converter
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
.tabs{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 95%;
  margin-bottom: 40px;
}
.tab{
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4A86C6;
  border-radius: 17px;
  color: #fff;
  opacity: 0.5;
}
.active{
  opacity: 1;
}
</style>
