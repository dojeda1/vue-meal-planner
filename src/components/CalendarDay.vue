<template>
    <div class="col s8ths s1 box modal-trigger" :style="dayStyle">
        <p class="section truncate">{{title}}</p>
    </div>
    <!-- <div id="bMon" data-target="food-card" class="col s8ths s1 box modal-trigger" data-filled="true" style="background-image: url('https://spoonacular.com/recipeImages/563403-556x370.jpg'); background-color: rgb(191, 191, 191); background-blend-mode: multiply;">
        <p class="section truncate">Peach Coconut Milk Smoothie</p>
    </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'CalendarDay',
    props: {
        recipe: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            filled: true
        }
    },
    computed: {
        title() {
            return this.recipe?.title || null
        },
        image() {
            return this.recipe?.image || null
        },
        dayStyle() {
            var style
            if (this.title) {
                style = {
                    'background-image': `url('${this.image}')`,
                    'background-color': 'rgb(191, 191, 191)',
                    'background-blend-mode': 'multiply'
                }
            } else {
                style = {}
            }
            return style
        }
    },
    mounted() {
        // this.getJoke()
    }
}
</script>

<style>

</style>
