<template>
    <HeroBanner
    :title="'My Favorites'"
    :height="'150px'"/>

    <div class="container">

        <h2 class="light-green-text font2">Saved Recipes</h2>

        <div id="favorite-cards" class="row section">
            <div id="col-1" class="col s12 m6">
                <RecipeCard/>
            </div>
            <div id="col-2" class="col s12 m6">
                <RecipeCard/>
            </div>
        </div>

    </div>
    <FoodTrivia/>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import RecipeCard from '../components/RecipeCard.vue'
import FoodTrivia from '../components/FoodTrivia.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'Favorites',
    components: {
        HeroBanner,
        RecipeCard,
        FoodTrivia
    },
}
</script>

<style>

</style>
