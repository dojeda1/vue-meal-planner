<template>
    <HeroBanner
    :title="'My Favorites'"
    :height="'150px'"/>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'Favorites',
    components: {
        HeroBanner
    },
}
</script>

<style>

</style>
