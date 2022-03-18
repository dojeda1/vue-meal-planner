<template>
    <!-- Recipe Card -->
    <div class="card">
        <div class="card-image">
            <img id="recipe-image" class="food-image" :src="image" alt="">
            <a 
            class="favorite-btn btn-floating halfway-fab" 
            :class="favedClass"
            @click="toggleFaved">
                <i class="material-icons">favorite</i>
            </a>
        </div>
        <div class="card-content">
            <span class="food-title card-title light-green-text text-darken-2">{{title}}</span>
            <h6 class="orange-text text-lighten-1">Diet Info</h6>
            <p class="food-summary grey-text">{{diets}}</p>
            <div class="food-ingredients" v-show="showIngredients">
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
            <div class="food-instructions" v-show="showInstructions">
                <h6 class="card-title light-green-text">Instructions</h6>
                <div class="instructions">
                    <!-- <p>TYPE:{{typeof instructions}}</p> -->
                    <ol v-if="typeof instructions == 'object'">
                        <li v-for="(step, index) in instructions" :key="index">
                            {{step.step}}
                        </li>
                    </ol>
                    <p v-else-if="instructions">{{instructions}}</p>
                </div>
            </div>
        </div>
        <div class="card-action">
            <a class="ingredients-btn" @click="toggleShowIngredients">Ingredients</a>
            <a class="instructions-btn" @click="toggleShowInstructions">Instructions</a>
        </div>
    </div>
    <!-- End recipe Card -->
</template>

<script>
import { addRecipe, deleteRecipe } from '../firebase.js'

export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object,
            default: () => {}
        },
        idList: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            showIngredients: false,
            showInstructions: false
        }
    },
    computed: {
        id() {
            return this.recipe?.id || null
        },
        title() {
            return this.recipe?.title || null
        },
        image() {
            return this.recipe?.image || null
        },
        diets() {
            const diet = this.recipe?.diets || null
            return diet ? diet.join(', ') : 'N/A'
        },
        ingredients() {
            return this.recipe?.extendedIngredients || null
        },
        instructions() {
            return this.recipe?.analyzedInstructions[0]?.steps || this.recipe?.instructions || 'N/A'
        },
        faved() {
            return this.idList.includes(this.id)
        },
        favedClass() {
            if (this.faved) {
                return {
                    pink: true
                }
            } else {
                return {
                    grey: true,
                    pulse: true
                }
            }
        }
    },
    methods: {
        toggleShowInstructions() {
            this.showInstructions = !this.showInstructions
        },
        toggleShowIngredients() {
            this.showIngredients = !this.showIngredients
        },
        toggleFaved() {
            const id = this.id.toString()
            if (!this.faved) {
                addRecipe(id, this.recipe)
            } else {
                deleteRecipe(id)
            }
        }
    },
    mounted() {
        // console.log('Rec:', this.recipe)
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