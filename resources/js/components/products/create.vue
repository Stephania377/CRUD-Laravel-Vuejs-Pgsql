<template>
    <div class="container">
        <h2 class="text-center">Créer un produit</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ProductIndex' }" class="btn btn-primary btn-sm float-right mb-2">Retour</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" v-model="affichageProduct.name">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" rows="5" class="form-control" v-model="affichageProduct.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Prix</label>
                        <input type="number" class="form-control" v-model="affichageProduct.price">
                    </div>
                    <button type="button" class="btn btn-primary" @click="createProduct()">Créer le produit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            affichageProduct(){
                return this.$store.state.produitc;
            }
        },
        methods: {
            async createProduct() {
                let response = await this.axios.post('http://127.0.0.1:8000/api/products', this.affichageProduct);
                        this.$router.push({ name: 'ProductIndex' });
                        this.$store.commit('setProductc',{});
                        console.log(err);
                        this.loading = false;
            }
           
        }
    }
</script>
