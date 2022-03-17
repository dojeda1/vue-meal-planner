import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: {
            idList: {
                type: Array,
                default: () => []
            }
        },
    },
    {
        path: '/favorites',
        name: 'About',
        component: () => import('../views/Favorites.vue'),
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
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../views/Calendar.vue'),
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router