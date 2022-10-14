<template>
  <header>
    <!-- <ButtoN/> -->
    <ButtoN v-show="homePage" @button-click="$emit('toggle-add-task')"  :btn="showAddTask?'btn btn-danger':'btn btn-success'" :text="showAddTask?'Close':'Add Task'"/>
  </header>  
</template>
    
<script>
import ButtoN from './button.vue'


export default{
  name:'HeadeR',
    components:{
    ButtoN,  
},
    props:{
        title:String,
        showAddTask:Boolean,

    },
    computed:{
      hompage(){
        if(this.$route.path === '/'){
          return true
        }
        else return false
      }
    }

}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>