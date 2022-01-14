<template>
    <div class="card">
        <span class="text-muted">{{data.Name}}</span> <br>
        <div class="card-data">
            <strong>{{data.CharCode}} {{data.Nominal}} -> {{data.Value}} RUB</strong>
            <span class="show-grow" :style="{'color' : isGrow.growed ? '#2FB345' : '#FF3B30'}">{{isGrow.growed ? `&#129045; ${isGrow.result}` : `&#129043; ${isGrow.result}`}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Object,
            required:true,
            default:()=>{}
        }
    },
    computed:{
        isGrow(){
            const {Previous,Value} = this.data
            const result = Value - Previous
            return {growed : result > 0 ? true : false,result : result.toFixed(3) }
        }
    }
}
</script>

