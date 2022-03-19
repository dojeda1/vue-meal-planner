<template>
        <!-- Modal Structure -->
        <div id="food-card" class="recipe-modal" v-show="showModal">
            <div class="recipe-modal-background" @click="hideModal"></div>
            <div id="modal-recipe-card" class="col m12" style="padding: 0px;">
                <a id="close-modal" @click="hideModal">
                    <i class="material-icons grey-text">cancel</i>
                </a>
                <RecipeCard
                    :recipe="recipe"
                    :idList="idList"
                />
            </div>
        </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'RecipeModal',
    components: {
        RecipeCard
    },
    props: {
        showModal: {
            type: Boolean,
            default: true
        },
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
            test: null
        }
    },
    methods: {
        hideModal() {
            this.$emit('hide-modal')
        }
    },
    mounted() {
        // this.getJoke()
    }
}
</script>

<style>
    .recipe-modal {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recipe-modal-background {
        background-color: rgb(51, 105, 30, 0.5);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    #modal-recipe-card {
        position: relative;
        max-height: calc(100% - 40px);
        max-width: calc(100% - 40px);
        width: 400px;
        overflow: auto;
    }
    #modal-recipe-card .card {
        margin: 0;
    }
    #close-modal{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        cursor: pointer;
        padding: 5px;
    }
</style>
