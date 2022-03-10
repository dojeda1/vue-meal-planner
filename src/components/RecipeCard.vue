<template>
    <!-- Recipe Card -->
    <div class="col m12 l6" data-id="">
        <div class="card">
            <div class="card-image">
                <img id="recipe-image" class="food-image" :src="recipe.image" alt="">
                <a href="#!" class="favorite-btn btn-floating halfway-fab" data-faved="false">
                    <i class="material-icons">favorite</i>
                </a>
            </div>
            <div class="card-content">
                <span class="food-title card-title light-green-text text-darken-2">{{recipe.title}}</span>
                <h6 class="orange-text text-lighten-1">Diet Info</h6>
                <p class="food-summary grey-text">{{recipe.diets.join(', ')}}</p>
                <div class="food-ingredients">
                    <h6 class="card-title light-green-text">Ingredients</h6>
                    <table class="ingredients">
                        <tr v-for="ing in ingredients" :key="ing.id">
                            <td>{{ing.original}}</td>
                            <!-- <td>{{ing.name}}</td>
                            <td>{{ing.measures.us.amount}}</td>
                            <td>{{ing.measures.us.unitLong}}</td> -->
                        </tr>
                    </table>
                </div>
                <div class="food-instructions">
                    <h6 class="card-title light-green-text">Instructions</h6>
                    <div class="instructions">
                        <ol>
                            <li v-for="step in instructions" :key="step.number">
                                {{step.step}}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <a href="#!" class="ingredients-btn">Ingredients</a>
                <a href="#!" class="instructions-btn">Instructions</a>
            </div>
        </div>

    </div>
    <!-- End recipe Card -->
</template>

<script>
export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            logo: '/images/white-logo.png'
        }
    },
    computed: {
        ingredients() {
            return this.recipe?.extendedIngredients || null
        },
        instructions() {
            return this.recipe?.analyzedInstructions[0]?.steps || null
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #logo {
        height: 40px;
        margin: 10px;
    }

    nav {
        height: 60px;
    }
</style>
