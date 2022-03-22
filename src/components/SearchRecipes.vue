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
                    <a id="refine-btn" class="btn-flat orange-text text-lighten-1" @click="toggleShowRefineOptions()">
                        <span v-if="!showRefineOptions">Refine</span>
                        <span v-else>Hide Filters</span>
                    </a>
                </div>
            </form>
        </div>
        <div id="more-options" class="row" v-show="showRefineOptions">
            <button class="btn waves-effect waves-light valign-wrapper"
                :class="activefilter('Gluten Free') ? 'orange' : 'grey'"
                @click="setRefine('Gluten Free')"
            >
                Gluten Free
            </button>
            <button class="btn waves-effect waves-light valign-wrapper"
                :class=" activefilter('Dairy Free') ? 'orange' : 'grey'"
                @click="setRefine('Dairy Free')"
            >
                Dairy Free
            </button>
            <button class="btn waves-effect waves-light valign-wrapper"
                :class="activefilter('Paleo') ? 'orange' : 'grey'"
                @click="setRefine('Paleo')"
            >
                Paleo
            </button>
            <button class="btn waves-effect waves-light valign-wrapper"
                :class="activefilter('Vegetarian') ? 'orange' : 'grey'"
                @click="setRefine('Vegetarian')"
            >
                Vegetarian
            </button>
            <button class="btn waves-effect waves-light valign-wrapper"
                :class="activefilter('Vegan') ? 'orange' : 'grey'"
                @click="setRefine('Vegan')"
            >
                Vegan
            </button>
        </div>
        <!-- End Search Bar -->

        <!-- hide -->
        <div id="results" class="row" v-show="recipes">
            <div class="row">
                <h3 class="center-align font2 orange-text text-lighten-1">Recipes</h3>
            </div>

            <!-- List of meals -->
            <template v-if="hasRecipes">
            <div id="recipe-list" class="col s12 m12 l6">
                <div id="recipe-area" class="collection text-green">
                    <a v-for="(recipe, index) in recipes"
                    :key="index"
                    :id="recipe.id"
                    :class="{active: activeItem(recipe.id)}"
                    @click="getRecipe(recipe.id)"
                    class="listed-food-recipe collection-item">
                        {{recipe.title}}
                    </a>
                </div>
            </div>
            </template>
            <p v-else>No Results</p>
            <!-- End Meal List -->
            <div class="col m12 l6" v-if="hasRecipes">
                <RecipeCard
                    v-if="currentRecipe"
                    :recipe="currentRecipe"
                    :idList="idList"
                />
            </div>
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
        msg: String,
        idList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showRefineOptions: false,
            search: '',
            refine: '',
            currentRecipe: null,
            recipes: null
        }
    },
    computed: {
        hasRecipes() {
            return this.recipes && this.recipes.length > 0
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
                this.selectFirstItem()
            } catch (e) {
                console.log('err:', e);
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
            } catch (e) {
                console.log('err:', e);
            }
        },
        toggleShowRefineOptions() {
            this.refine = ''
            this.showRefineOptions = !this.showRefineOptions
        },
        activeItem(id) {
            return this?.currentRecipe?.id == id
        },
        activefilter(diet) {
            return this?.refine == diet
        },
        setRefine(diet) {
            if (this.refine != diet) {
                this.refine = diet
            } else {
                this.refine = ''
            }
        },
        selectFirstItem() {
            const id = this?.recipes[0]?.id
            if (id) {
                this.getRecipe(id)
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #more-options {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
