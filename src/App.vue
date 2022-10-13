<template>
  <div class="container">
    <Header @toggle-add-task="showButton" :showAddTask="showTask" />
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->   
  <router-view :showAddTask="showTask"></router-view>
  <FooterS/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/triesx.vue'

import FooterS from './components/footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    FooterS
  },
  data(){
    return{
      tasks:[],
      showTask:false,
 
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
