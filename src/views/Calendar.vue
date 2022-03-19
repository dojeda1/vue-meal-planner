<template>
    <HeroBanner
    :title="'My Calendar'"
    :height="'150px'"/>

    <div class="container">

        <h2 class="light-green-text font2">Weekly Plan</h2>

        <div class="section">

            <div class="row light-green darken-2 white-text">
                <div class="xtra-info">
                    <div class="col s8ths s1 box-title">
                        <h5>Meal</h5>
                    </div>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>S<span class="xtra-info">un</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>M<span class="xtra-info">on</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>T<span class="xtra-info">ue</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>W<span class="xtra-info">ed</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>T<span class="xtra-info">hu</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>F<span class="xtra-info">ri</span></h5>
                </div>
                <div class="col s8ths s1 box-title">
                    <h5>S<span class="xtra-info">at</span></h5>
                </div>
            </div>
            <div class="meal-row row light-green lighten-5">
                <div class="xtra-info">
                    <div class=" col s8ths s1 box-side"><b>Breakfast</b></div>
                </div>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sun','breakfast')" @click="clickDayRecipe('sun','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('mon','breakfast')" @click="clickDayRecipe('mon','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('tue','breakfast')" @click="clickDayRecipe('tue','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('wed','breakfast')" @click="clickDayRecipe('wed','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('thu','breakfast')" @click="clickDayRecipe('thu','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('fri','breakfast')" @click="clickDayRecipe('fri','breakfast')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sat','breakfast')" @click="clickDayRecipe('sat','breakfast')"/>
            </div>
            <div class="meal-row row light-green lighten-4">
                <div class="xtra-info">
                    <div class=" col s8ths s1 box-side"><b>Lunch</b></div>
                </div>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sun','lunch')" @click="clickDayRecipe('sun','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('mon','lunch')" @click="clickDayRecipe('mon','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('tue','lunch')" @click="clickDayRecipe('tue','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('wed','lunch')" @click="clickDayRecipe('wed','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('thu','lunch')" @click="clickDayRecipe('thu','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('fri','lunch')" @click="clickDayRecipe('fri','lunch')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sat','lunch')" @click="clickDayRecipe('sat','lunch')"/>
            </div>
            <div class="meal-row row light-green lighten-5">
                <div class="xtra-info">
                    <div class=" col s8ths s1 box-side"><b>Dinner</b></div>
                </div>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sun','dinner')" @click="clickDayRecipe('sun','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('mon','dinner')" @click="clickDayRecipe('mon','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('tue','dinner')" @click="clickDayRecipe('tue','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('wed','dinner')" @click="clickDayRecipe('wed','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('thu','dinner')" @click="clickDayRecipe('thu','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('fri','dinner')" @click="clickDayRecipe('fri','dinner')"/>
                <CalendarDay :edit="showRecipes" :recipe="validDay('sat','dinner')" @click="clickDayRecipe('sat','dinner')"/>
            </div>
            <div class="right-align">
                <a id="searchFavs" class="waves-effect waves-light btn orange section"
                @click="toggleShowRecipes"
                >
                    <span v-if="!showRecipes">Edit Meal Plan</span>
                    <span v-else>Close</span>
                </a>
                <a id="savePlan" class="waves-effect waves-light btn light-green section"
                @click="saveCalendar"
                >Save Plan</a>
            </div>

            <div id="recipe-list" class="col s12 m12 l6" v-show="showRecipes">
                <h3 class="font2 orange-text text-lighten-1">Recipes</h3>
                <div id="recipe-collection" class="collection">
                    <a id="empty" class="listed-food-recipe collection-item"
                    :class="{active: noRecipe()}"
                    @click="selectRecipe('empty')"
                    >
                        - Empty -
                    </a>
                    <span id="recipe-area">
                        <a class="listed-food-recipe collection-item"
                        v-for="(recipe, index) in favorites"
                        :key="index"
                        :class="{active: activeItem(recipe.id)}"
                        @click="selectRecipe(recipe.id)"
                        >
                            {{recipe.title}}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <FoodJoke/>
    <RecipeModal 
        @hide-modal="toggleShowModal"
        :showModal="showModal" 
        :recipe="modalRecipe"
        :idList="idList"
    />
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import CalendarDay from '../components/CalendarDay.vue'
import RecipeModal from '../components/RecipeModal.vue'
import FoodJoke from '../components/FoodJoke.vue'
import { getRecipe, addWeek, getWeek, weekStructure } from '../firebase'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'Calendar',
    components: {
        HeroBanner,
        CalendarDay,
        RecipeModal,
        FoodJoke
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
    },
    data() {
        return {
            showRecipes: false,
            showModal: false,
            currentRecipe: {},
            modalRecipe: {},
            calendar: weekStructure        }
    },
    methods: {
        toggleShowRecipes() {
            this.selectRecipe('empty')
            this.showRecipes = !this.showRecipes
        },
        activeItem(id) {
            return this?.currentRecipe?.id == id
        },
        noRecipe() {
            return !this?.currentRecipe?.id
        },
        selectRecipe(id) {
            if (id == 'empty') {
                this.currentRecipe = {}
            } else {
                this.currentRecipe = getRecipe(id.toString())
            }
        },
        selectModalRecipe(id) {
            if (id == 'empty') {
                this.modalRecipe = {}
            } else {
                this.modalRecipe = getRecipe(id.toString())
            }
        },
        validDay(day, meal) {
            if (this.calendar[day] && this.calendar[day][meal]) {
                return this.calendar[day][meal]
            } else {
                return {}
            }
        },
        clickDayRecipe(day, meal) {
            if (this.showRecipes) {
                this.calendar[day][meal] = this.currentRecipe
            } else if (this.validDay(day, meal)) {
                if (this.calendar[day][meal]?.id) {
                    this.selectModalRecipe(this.calendar[day][meal].id)
                    this.toggleShowModal()
                } else {
                    this.selectModalRecipe('empty')
                }
            } else {
                //do nothing
            }
        },
        saveCalendar() {
            addWeek('week',this.calendar)
        },
        toggleShowModal() {
            this.showModal = !this.showModal
        }
    },
    mounted() {
        this.calendar = getWeek('week')
    }
}
</script>

<style>
    .food-pic {
        width: 100%;
        height: 80%;
    }


    .box-title {
        height: 60px;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box-title>h5 {
        margin: 0px;
    }

    .box,
    .box-side {
        height: 120px;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .box-side {
        align-items: center;
    }

    .box {
        color: white;
        font-weight: bold;
        padding: 2px !important;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
    .meal-row {
        margin: 5px 0px 5px 0px;
        min-height: 100px;
    }

    #recipe-collection {
        height: 200px;
        overflow: hidden;
        overflow-y: scroll;
    }

    #savePlan,
    #searchFavs {
        margin: 10px;
    }

    /* splits calendar into even 8ths normally or 7ths when small */
    .s8ths {
        margin-left: auto;
        left: auto;
        right: auto;
    }

    .row .col.s8ths {
        width: calc(100%/7);
    }

    .xtra-info {
        display: none;
    }


    @media only screen and (min-width: 720px) {
        .row .col.s8ths {
            width: 12.5%;
        }

        .xtra-info {
            display: inline;
        }

        .box {
            padding: 8px !important;
        }
    }
</style>
