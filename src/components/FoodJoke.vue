<template>
    <div class="row">
        <div class="col s12 center-align">
            <div>
                <h5 class="light-green-text text-darken-2">Food Joke</h5>
                <p class="light-green-text font4" id="randomFoodJoke">{{joke}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'FoodJoke',
    data() {
        return {
            joke: null
        }
    },
    methods: {
        async getJoke() {
            var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random';
            const config = {
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_SPOONACULAR_API_KEY
                }
            }
            try {
                var res = await axios.get(queryURL, config)
                console.log('res: ', res);
                this.joke = res?.data?.text
                console.log('Y: ', this.joke);
            } catch (error) {
                console.log('N: ', this.joke);
            }
        }
    },
    mounted() {
        // this.getJoke()
    }
}
</script>

<style>

</style>
