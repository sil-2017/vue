<template>
  <div id="app">
    <h1>News</h1>
    <!-- <router-link to="/"> Home </router-link> -->
    <hr>
    <router-view />
     <allPost />
    
  </div>
</template>

<script>

import allPost from "@/components/allPost.vue";

export default {
  components: {
    allPost
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
