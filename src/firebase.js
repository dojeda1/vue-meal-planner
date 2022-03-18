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

export const addRecipe = (id, recipe) => {
    recipeCollection.doc(id).set(recipe)
        .then(doc => {
            alert('Data added ' + doc.id)
        }).catch(e => {
            console.log('err:', e)
        })
}

export const getRecipe = (id) => {
    const recipe = ref({})
    recipeCollection.doc(id).get()
        .then(doc => {
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
            alert('Data deleted ' + doc.id)
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