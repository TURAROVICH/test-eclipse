<template>
<main>
        <h1 class="title">Список валют</h1>
        <div class="cards-container">
            <Card v-for="(currency,k) in currencies" :key="k" :data="currency" />
        </div>
</main>
</template>

<script>
import Card from './Card.vue'
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['currencies'])
    },
    components:{
        Card
    },
}
</script>

<style scoped>
.cards-container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,30%));
    grid-gap: 25px;
    margin-top: 40px;
}
</style>