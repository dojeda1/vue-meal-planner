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
                    <img id="quotespace" :src="inspireBlock" class="round-corners"/>
                </div>
                <div class="col s3 left-align">
                    <img id="rightLeaf" :src="rightLeaf" class="leaf"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HealThruWords',
    props: {
        msg: String
    },
    data() {
        return {
            inspireBlock: null,
            secret: process.env.VUE_APP_SECRET,
            test: process.env.VUE_APP_TEST,
            leftLeaf: '/images/leaf-left.png',
            rightLeaf: '/images/leaf-right.png'
        }
    },
    methods: {
        async getQuote() {
            console.log('Hi')
            const queryURL = "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Motivational&maxR=1&size=medium"
            const config = {
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_HEALTHRUWORDS_API_KEY
                }
            }
            try {
                var res = await axios.get(queryURL, config)
                this.inspireBlock = res?.data[0]?.media
                console.log('Y: ', this.inspireBlock);
            } catch (error) {
                console.log('N: ', this.inspireBlock);
            }
        }
    },
    mounted() {
        this.getQuote()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #quotespace {
        width: 100%;
    }

    .round-corners {
        border-radius: 30px;
    }

    .leaf {
        width: 50%;
    }
</style>
