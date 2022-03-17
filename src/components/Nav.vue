<template>
    <!-- NavBar -->
    <nav class="nav-wrapper light-green darken-1">
        <div class="container">
            <a href="./index.html" class="brand-logo"><img :src="logo" id="logo"
                    class="left valign-wrapper"><span class="hide-on-med-and-down font2">Meal Planner</span></a>
            <a class="sidenav-trigger right" data-target="mobile-links">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/favorites">Favorites</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <!-- <li><a href="#login" id="navbar-login-top" class="modal-trigger valign-wrapper">Login
                        <i class="material-icons right">person</i></a>
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        msg: String
    },
    data() {
        return {
            logo: '/images/white-logo.png'
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
</style>
