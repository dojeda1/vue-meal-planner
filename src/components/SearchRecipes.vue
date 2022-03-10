<template>
    <!-- SearchRecipes -->
    <div class="container col">
        <h2 class="light-green-text font2">Search Recipes</h2>
        <!-- Search Bar-->
        <div class="row section">
            <form id="search-bar" action="">
                <div class="input-field">
                    <input id="food-item" type="text" v-model="search">
                    <label for="food-item">Enter Ingredient Here</label>
                    <button id="search-btn" type="submit"
                        class="btn right light-green waves-effect waves-light valign-wrapper"
                        @click="getRecipes()"
                        >Search<i
                            class="material-icons right">search</i></button>
                    <a id="refine-btn" class="btn-flat orange-text text-lighten-1" @click="toggleShowRefineOptions()">Refine</a>
                </div>

                <!-- <p>
                        <label>
                            <input type="checkbox" id="vegan">
                            <span>vegan</span>
                        </label>
                    </p>

                    <p>
                        <label>
                            <input type="checkbox">
                            <span>Paleo</span>
                        </label>
                    </p> -->

            </form>
        </div>
        <div id="more-options" class="row" v-show="showRefineOptions">
            <div class="input-field col s6 m4">
                <select class="col">
                    <option value="">None</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Dairy Free">Dairy Free</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>
                <label>Dietary Restrictions</label>
            </div>
        </div>
        <!-- End Search Bar -->

        <!-- hide -->
        <div id="results" class="row">
            <div class="row">
                <h3 class="center-align font2 orange-text text-lighten-1">Recipes</h3>
            </div>

            <!-- List of meals -->
            <div id="recipe-list" class="col s12 m12 l6">
                <div id="recipe-area" class="collection text-green">
                    <a v-for="recipe in recipes"
                    :key="recipe.id" href="#!"
                    :id="recipe.id"
                    @click="getRecipe(recipe.id)"
                    class="listed-food-recipe collection-item">
                        {{recipe.title}}
                    </a>
                </div>
            </div>
            <!-- End Meal List -->

            <RecipeCard
                v-if="currentRecipe"
                :recipe="currentRecipe"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import RecipeCard from './RecipeCard.vue'
export default {
    name: 'SearchRecipes',
    components: {
        RecipeCard
    },
    props: {
        msg: String
    },
    data() {
        return {
            showRefineOptions: false,
            search: '',
            refine: '',
            currentRecipe: null,
            recipes: []
        }
    },
    methods: {
        async getRecipes() {
            event.preventDefault()
            var queryURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${this.search}&diet=${this.refine}`;
            const config = {
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_SPOONACULAR_API_KEY
                }
            }
            try {
                var res = await axios.get(queryURL, config)
                this.recipes = res?.data?.results
                console.log('Y: ', this.recipes);
            } catch (error) {
                console.log('N: ', this.recipes);
            }
        },
        async getRecipe(id) {
            // event.preventDefault()
            var queryURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
            const config = {
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_SPOONACULAR_API_KEY
                }
            }
            try {
                var res = await axios.get(queryURL, config)
                this.currentRecipe = res?.data
                console.log('Y: ', this.currentRecipe);
            } catch (error) {
                console.log('N: ', this.currentRecipe);
            }
        },
        toggleShowRefineOptions() {
            console.log('Click')
            this.showRefineOptions = !this.showRefineOptions
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
