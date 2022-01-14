<template>
    <main>
        <h1 class="title">Конвертер валют</h1>
        <div class="convert-container">
                <div class="card">
                    <div class="text-muted">RUB</div>
                    <input v-model="userInput" type="number">
                </div>
                 <div class="card">
                    <select class="select-css" v-model="selected">
                        <option v-for="(currency,k) in currencies" :key="k" :value="currency.CharCode">{{currency.CharCode}}</option>
                    </select>
                    <h3 class="center">{{converted | fixed}} {{selected}}</h3>
                </div>
        </div>
    </main>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data:()=>({
        selected:"USD",
        converted:0,
        userInput:''
    }),
     computed:{
        ...mapState(['currencies'])
    },
    watch:{
        selected(n){
            console.log(n);
        },
        userInput(){
            const crns = this.currencies
            this.converted =+this.userInput / +crns[this.selected].Value 
        }
    },
    filters:{
      fixed(v){
            return v.toFixed(3)
      }
    },

}
</script>


<style scoped>
.convert-container{
    margin: 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    width: 95%;
}
input{
    width: 100%;
    height: 42px;
    border: none;
    outline: none;
    border-bottom: 1px solid #2E4053;
    background: transparent;
    font-style: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
.center{
    text-align: center;
    padding-top: 20px;
}
</style>