import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
Vue.use(Vuex);

export default new Vuex.Store({ 
    state: {
        produits: {},
        produit: {},
        produitc: {}
    },
    getters: {

    },
    mutations: {
        setProducts(state, valeur){
            state.produits = valeur;
        },
        setProduct(state, valeur){
            state.produit = valeur;
        },
        setProductc(state, valeur){
            state.produitc = valeur;
        }
    },
    actions: {

    },
    modules: {
        
    }
});