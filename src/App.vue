<template>
  <Nav/>
  <HeroBanner/>
  <SearchRecipes/>
  <HealThruWords/>
  <div class="spacer"/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Nav from './components/Nav.vue'
import HeroBanner from './components/HeroBanner.vue'
import SearchRecipes from './components/SearchRecipes.vue'
import HealThruWords from './components/HealThruWords.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Nav,
    HeroBanner,
    SearchRecipes,
    HealThruWords,
    // HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Leckerli+One|Permanent+Marker|Rock+Salt|Sedgwick+Ave+Display');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.spacer {
    height: 200px;
}
.font2 {
  font-family: 'Leckerli One', cursive;
}

.font3 {
  font-family: 'Rock Salt', cursive;
}
</style>
