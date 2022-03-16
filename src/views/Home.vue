<template>
    <HeroBanner
    :title="'Eat Healthy, Live Healthy'"
    :height="'300px'"/>
    <SearchRecipes
        :idList="idList"
    />
    <HealThruWords/>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import SearchRecipes from '../components/SearchRecipes.vue'
import HealThruWords from '../components/HealThruWords.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HeroBanner,
        SearchRecipes,
        HealThruWords,
    },
    props: {
        idList: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log('--&--', this.idList)
    }
}

</script>

<style>

</style>
