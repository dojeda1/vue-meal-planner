<template>
    <!-- NavBar -->
    <nav class="nav-wrapper light-green darken-1">
        <div class="container">
            <a href="/" class="brand-logo"><img :src="logo" id="logo"
                    class="left valign-wrapper"><span class="hide-on-med-and-down font2">Meal Planner</span></a>
            <a class="sidenav-trigger right" data-target="mobile-links" @click="toggleShowSidenav">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/favorites">Favorites</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </div>
    </nav>
    <div class="side-nav" v-show="showSidenav">
        <div class="sidenav-background" @click="toggleShowSidenav"></div>
        <div class="light-green darken-1 grey-text" id="mobile-links">
            <a class="close" @click="toggleShowSidenav">
                <i class="material-icons">close</i>
            </a>
            <li><a href="/">Home</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/calendar">Calendar</a></li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        msg: String
    },
    data() {
        return {
            logo: '/images/white-logo.png',
            showSidenav: false
        }
    },
    methods: {
        toggleShowSidenav() {
            this.showSidenav = !this.showSidenav
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #logo {
        height: 40px;
        margin: 10px;
    }

    nav {
        height: 60px;
    }

    .side-nav {
        z-index: 2;
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }

    #mobile-links {
        position: absolute;
        height: 100%;
        width: 150px;
        right: 0;
        top: 0;
    }

    #mobile-links a{
        color: white;
        display: block;
        width: 100;
        text-align: right;
        padding: 10px 20px;
        /* border-bottom: 1px solid white; */
    }

    #mobile-links .close{
        margin-top: 10px;
        cursor: pointer;
    }    
    .sidenav-background {
        background-color: rgb(51, 105, 30, 0.5);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>
