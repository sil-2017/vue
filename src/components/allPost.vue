<template>
  <div>
    <router-link to="/pages"> Create Post </router-link> 
    <hr>
   <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>

      <button @click="removePost">See comments</button>
       <button @click="removePost">View</button>
        <button @click="removePost">Update</button>
        <button @click="removePost">delete</button>
      
    </div> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  computed: mapGetters(["validPosts"]),
  methods: mapActions(["fetchPosts",'removePost']),
  // components: {inerPost},
 
  async mounted() {
    this.fetchPosts();
  }

};
</script>

<style>
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post button{
  widows: 200px;
  height: 30px;
  color: black;
}
</style>
