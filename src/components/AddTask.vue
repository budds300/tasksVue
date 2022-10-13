<template>
    <div class="row">
        <div class="col-md-2 col-2"></div>
        <div class="col-md-5 col-5">
            <form @submit="onSubmit" class="add-form">
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task</label>
    <input type="text" v-model="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Day and Time</label>
    <input type="text" v-model="day" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
      <div class="row">
        <div class="col-md-4 col-4"></div>
        <div class="col-md-4 col-4">
            <label class="form-check-label" for="exampleCheck1">Reminder</label>
        </div>
        <div class="col-md-4 col-4">
            <input type="checkbox" v-model="reminder" class="form-check-input" id="exampleCheck1">
        </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        <div class="col-md-4 col-4"></div>
    </div>
 
    
</template>

<script>
export default {
    name:"AddTask",
    data(){
        return{
            text:'',
            day:"",
            reminder:false
        } 
    },
    // props:{
    //     form: {
    //   type: String,
    //   required: true,
    // },
    // },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert('Please add a task')
                return  
            }

            const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }
            console.log(newTask)
            this.$emit('add-task',newTask)
            
            this.text=''
            this.day=''
            this.reminder=false
        }
    }


}
</script>

<style scoped>

.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>
