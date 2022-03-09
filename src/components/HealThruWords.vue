<template>
    <!-- SearchRecipes -->
    <div class="container col">
        <div class="row">
            <div class="col s0 m2"></div>
            <div class="col s12 m8 valign-wrapper">
                <div class="col s3 right-align">
                    <img id="leftLeaf" :src="leftLeaf" class="leaf"/>
                </div>
                <div class="col s6 center-align">
                    <img id="quotespace" src="" class="round-corners"/>
                </div>
                <div class="col s3 left-align">
                    <img id="rightLeaf" :src="rightLeaf" class="leaf"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HealThruWords',
    props: {
        msg: String
    },
    data() {
        return {
            leftLeaf: '/images/leaf-left.png',
            rightLeaf: '/images/leaf-right.png'
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leaf {
        width: 50%;
    }
</style>
