import firebase from 'firebase'
import 'firebase/firestore'
import { ref, onUnmounted } from 'vue'


// Initialize Firebase
const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: "dojeda1-meal-planner",
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore()
const recipeCollection = db.collection('recipes')
const calendarCollection = db.collection('calendar')

export const addRecipe = (id, recipe) => {
    recipeCollection.doc(id).set(recipe)
        .then(doc => {
            console.log('Data added ' + doc.id)
        }).catch(e => {
            console.log('err:', e)
        })
}

export const getRecipe = (id) => {
    const recipe = ref({})
    recipeCollection.doc(id).get()
        .then(doc => {
            console.log('Data found ' + doc.id)
            recipe.value = doc.data()
        }).catch(e => {
            console.log('err:', e)
            recipe.value = {}
        })
    return recipe
}

export const deleteRecipe = id => {
    recipeCollection.doc(id).delete()
        .then(doc => {
            console.log('Data deleted ' + doc.id)
        }).catch(e => {
            console.log('err:', e)
        })
}

export const useLoadRecipes = (cb) => {
    const recipes = ref([])
    const close = recipeCollection.onSnapshot(snapshot => {
        console.log('Snapshot Recipes')
        recipes.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
        cb()
    })
    onUnmounted(close)
    return recipes
}

export const addWeek = (id, week) => {
    calendarCollection.doc(id).set(week)
        .then(doc => {
            console.log('Data added ' + doc.id)
        }).catch(e => {
            console.log('err:', e)
        })
}

export const getWeek = (id) => {
    const week = ref({})
    calendarCollection.doc(id).get()
        .then(doc => {
            console.log('Data found ' + doc.id)
            week.value = doc.data()
        }).catch(e => {
            console.log('err:', e)
            week.value = weekStructure
        })
    return week
}

export const weekStructure = {
    sun: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    mon: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    tue: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    wed: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    thu: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    fri: {
        breakfast: {},
        lunch: {},
        dinner: {}
    },
    sat: {
        breakfast: {},
        lunch: {},
        dinner: {}
    }
}