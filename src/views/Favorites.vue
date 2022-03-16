<template>
    <HeroBanner
    :title="'My Favorites'"
    :height="'150px'"/>

    <div class="container">

        <h2 class="light-green-text font2">Saved Recipes</h2>

        <div id="favorite-cards" class="recipe-cards">
            <template v-if="idList.length">
                <!-- <div id="col-1" class="col s12 m6" -->
                <div class="recipe-card"
                v-for="fav in favorites"
                :key="fav.id"
                >
                    <RecipeCard
                        :recipe="fav"
                        :idList="idList"
                    />
                </div>
            </template>
            <p v-else>No Recipes saved</p>
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
    props: {
        idList: {
            type: Array,
            default: () => []
        },
        favorites: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>
    .recipe-cards {
        columns: 3;
        overflow: visible;
    }
    .recipe-card {
        padding: 8px 0;
        break-inside: avoid;
    }
    .recipe-card .card{
        margin: 0;
    }
    @media only screen and (max-width: 1200px) {
        .recipe-cards {
            columns: 2;
        }
    }
    @media only screen and (max-width: 600px) {
        .recipe-cards {
            columns: 2;
        }
    }
</style>
