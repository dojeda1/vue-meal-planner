<template>
    <div class="row">
        <div class="col s12 center-align">
            <div>
                <h5 class="light-green-text text-darken-2">Food Trivia</h5>
                <p class="light-green-text font4" id="randomFoodTrivia">{{trivia}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'FoodTrivia',
    data() {
        return {
            trivia: null
        }
    },
    methods: {
        async getTrivia() {
            var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random';
            const config = {
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_SPOONACULAR_API_KEY
                }
            }
            try {
                var res = await axios.get(queryURL, config)
                console.log('res: ', res);
                this.trivia = res?.data?.text
                console.log('Y: ', this.trivia);
            } catch (error) {
                console.log('N: ', this.trivia);
            }
        }
    },
    mounted() {
        // this.getTrivia()
    }
}
</script>

<style>

</style>
