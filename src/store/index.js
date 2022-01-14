import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
    state: {
      currencies:[]
    },
    mutations: {
     setCurencies(state,data) {
        state.currencies = data.data.Valute
      }
    },
    actions:{
        async fetch({commit}){
          const data = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
          commit('setCurencies',data)
        }
    }
  })
  