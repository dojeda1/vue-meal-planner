<template>
    <!-- SearchRecipes -->
    <div class="container col">
        <h2 class="light-green-text font2">Search Recipes</h2>
        <!-- Search Bar-->
        <div class="row section">
            <form id="search-bar" action="">
                <div class="input-field">
                    <input id="food-item" type="text">
                    <label for="food-item">Enter Ingredient Here</label>
                    <button id="search-btn" type="submit"
                        class="btn right light-green waves-effect waves-light valign-wrapper">Search<i
                            class="material-icons right">search</i></button>
                    <a id="refine-btn" class="btn-flat orange-text text-lighten-1">Refine</a>
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
        <div id="more-options" class="row hide">
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
        <div id="results" class="row hide">
            <div class="row">
                <h3 class="center-align font2 orange-text text-lighten-1">Recipes</h3>
            </div>

            <!-- List of meals -->
            <div id="recipe-list" class="col s12 m12 l6">

                <div id="recipe-area" class="collection text-green">
                </div>
            </div>
            <!-- End Meal List -->

            <!-- Recipe Card -->
            <!-- hide -->
            <div id="recipe-card" class="col m12 l6 hide" data-id="">
                <div class="card">
                    <div class="card-image">
                        <img id="recipe-image" class="food-image" src="" alt="">
                        <a href="#!" class="favorite-btn btn-floating halfway-fab" data-faved="false">
                            <i class="material-icons">favorite</i>
                        </a>
                    </div>
                    <div class="card-content">
                        <span class="food-title card-title light-green-text text-darken-2">Rice Pilaff</span>
                        <h6 class="orange-text text-lighten-1">Diet Info</h6>
                        <p class="food-summary grey-text"></p>
                        <div class="food-ingredients hide" data-state="hidden">
                            <h6 class="card-title light-green-text">Ingredients</h6>
                            <table class="ingredients">
                                <tr>
                                </tr>
                            </table>
                        </div>
                        <div class="food-instructions hide" data-state="hidden">
                            <h6 class="card-title light-green-text">Instructions</h6>
                            <div class="instructions"></div>
                        </div>
                    </div>
                    <div class="card-action">
                        <a href="#!" class="ingredients-btn">Ingredients</a>
                        <a href="#!" class="instructions-btn">Instructions</a>
                    </div>
                </div>
            </div>
            <!-- End recipe Card -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchRecipes',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
