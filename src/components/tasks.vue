 <template >
    <div  :key="task.id" v-for="task in tasks">
       <TasK @dblclick="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>
        <!-- <h3>{{ task.text }}</h3> -->

    </div>
 </template>

 <script>
 import TasK from './task.vue'
 export default {
    name:"TaskS",
    props:{
        tasks:Array, 
    },
    components:{
        TasK
    },
    // emits:['delete-task','toggle-reminder']

 }
 </script>