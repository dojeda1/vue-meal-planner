<template>
    <HeroBanner/>
    <SearchRecipes/>
    <HealThruWords/>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import SearchRecipes from '../components/SearchRecipes.vue'
import HealThruWords from '../components/HealThruWords.vue'
// import HelloWorld from './components/HelloWorld.vue'
import { useLoadRecipes } from '../firebase'

export default {
    name: 'Home',
    components: {
        HeroBanner,
        SearchRecipes,
        HealThruWords,
    },
    mounted() {
        console.log(useLoadRecipes())
    }
}

</script>

<style>

</style>
