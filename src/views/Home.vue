<template>
   
    <div class="" v-show="showTask" >
      <AddTask @add-task="addTask"/>
    </div>
    <TaskS @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    
</template>

<script>
import TaskS from '../components/tasks.vue'

import AddTask from '../components/AddTask.vue'

export default {
  name: 'HomE',
  components: {
    // HelloWorld,
   
    TaskS,
    AddTask,
   
  },
  props:{
    showTask:Boolean
  },
  data(){
    return{
      tasks:[],
      
 
    }
  },
 async created(){
   this.tasks= await this.fetchTasks()
  },
  methods:{ 
   
    async addTask(task){
      const res = await fetch("http://localhost:5000/tasks",{
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      this.tasks=[...this.tasks,data]
    },
    async deleteTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'DELETE'
      })
      res.status === 200 ? this.tasks= this.tasks.filter((task)=>task.id !==id) :alert('Error deletin task')
    }, 
   async toggleReminder(id){
    const taskToToggle= await this.fetchTask(id)
    const updateTask ={...taskToToggle,reminder:!taskToToggle.reminder}
    
    const res =await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json',  
    },
    body:JSON.stringify(updateTask)
   })
   const data = await res.json()
      this.tasks=this.tasks.map((task)=>task.id===id?{...task, reminder: data.reminder }:task)
    }, 

    async fetchTasks(){
      const res = await fetch("http://localhost:5000/tasks/")
      const data = await res.json()
      return data
    } ,
    async fetchTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
      return data
    } 

}
}


</script>
