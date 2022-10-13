<template>
    <button @click="$emit('button-click')" :style="{background:color}">
       {{ text }}
    </button>
</template>

<script>
export default{
    name:'ButtonS',
    props:{
        text:String,
        color:String,

    },
    methods:{
       
    }
}
</script>

<style scoped> 
button{
    padding: 10px;
    color: white;
    
}
</style>