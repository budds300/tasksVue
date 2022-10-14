<template>
 <button @click="$emit('button-click')" :class="btn" :style="{background:color}">
       {{ text }}
    </button>  
<p></p>   
</template>

<script>
export default{
    name:'ButtoN',
    props:{
        text:String,
        color:String,
         btn:String

    },
    methods:{
       
    }
}
</script>

<style scoped> 

</style>