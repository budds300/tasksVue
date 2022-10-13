<template>
  <header>
    <Button v-show="homePage" @button-click="$emit('toggle-add-task')" :class="showAddTask?'btn btn-danger':'btn btn-success'" :text="showAddTask?'Close':'Add Task'"/>
    <h1>
       {{  title }}
    </h1>
  </header>  
</template>
    
<script>
import Button from './button.vue'
export default{
    name:'HeaderOne',
    components:{
        Button
        
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