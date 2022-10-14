<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HeadeR @toggle-add-task="showButton" :showAddTask="showTask" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->   
  <router-view :showTask="showTask"></router-view>
  <FooterS/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import HeadeR from './components/triesx.vue'

import FooterS from './components/footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeadeR,
    FooterS
  },
  data(){
    return{
      showTask:true,
 
    }
  },

  methods:{ 
    showButton(){
      this.showTask=!this.showTask
    },
  }
    

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
