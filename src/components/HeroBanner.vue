<template>
    <!-- HeroBanner -->
    <div ref="parallax" class="parallax-container center valign-wrapper" :style="{'background-image' : `url(${image})`}">
        <div class="container">
            <div class="row">
                <div class="col s12 white-text">
                    <h2 class="white-text font3">Eat Healthy, Live Healthy</h2>
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
        msg: String
    },
    data() {
        return {
            image: '/images/veggies-wallpaper.jpeg'
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
