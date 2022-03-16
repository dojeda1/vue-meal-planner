<template>
    <!-- HeroBanner -->
    <div ref="parallax" class="parallax-container center valign-wrapper" :style="compStyle">
        <div class="container">
            <div class="row">
                <div class="col s12 white-text">
                    <h2 class="white-text font3">{{title}}</h2>
                </div>
            </div>
        </div>
        <div class="parallax"><img :src="image"/></div>
    </div>
</template>

<script>
export default {
    name: 'HeroBanner',
    props: {
        title: String,
        height: String
    },
    data() {
        return {
            image: '/images/veggies-wallpaper.jpeg'
        }
    },
    computed: {
        compStyle() {
            return {
                    'background-image' : `url(${this.image})`,
                    height: this.height
                }
        }
    },
    mounted() {
        // this.$refs.parallax.parallax();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .parallax-container {
        height: 300px;
        background-color: gray;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
</style>
