<template>
    <div class="col s8ths s1 box" :class="{edit: edit}" :style="dayStyle">
        <p class="section truncate">{{title}}</p>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'CalendarDay',
    props: {
        recipe: {
            type: Object,
            default: () => {}
        },
        edit: {
            type: Boolean,
            default: false
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
                    'background-color': 'rgba(0, 0, 0, .3)',
                    'background-blend-mode': 'multiply',
                    cursor: 'pointer'
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
    .box.edit {
        border: 1px solid #ff9800;
        cursor: pointer;
    }
</style>
