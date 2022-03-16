<template>
  <Nav/>
  <router-view :idList="idList" :favorites="favorites"/>
  <div class="spacer"/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Nav from './components/Nav.vue'
import { useLoadRecipes } from './firebase'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      favorites: [],
      idList: []
    }
  },
  created() {
    const $this = this
    this.favorites = useLoadRecipes(function() {
        // console.log('this.favorites: ', $this.favorites);
        $this.getIds()
        // console.log('favsIDs:', $this.idList)
    })
  },
  methods: {
    getIds() {
      const ids = []
      this.favorites.forEach(fav => {
          ids.push(fav.id)
      })
      this.idList = ids
    }
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

.font4 {
    font-family: 'Permanent Marker', cursive;
    font-size: 150%;
}
</style>
