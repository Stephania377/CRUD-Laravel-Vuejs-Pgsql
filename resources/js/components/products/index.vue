<template>
    <div class="container">
        <h2 class="text-center">Liste des produits</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ProductCreate' }" class="btn btn-primary btn-sm float-right mb-2">Ajouter Produit</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, key) of affichageProducts">
                            <td>{{ key+1 }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <router-link class="btn btn-success btn-sm" :to="{ name: 'ProductEdit', params: { productId: product.id }}">Modifier</router-link>
                                <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Supprimer</button>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                products: {},
            }
        },
        created() {
            this.getProducts();
        },
        computed:{
            affichageProducts(){
                return this.$store.state.produits;
            }
        },
        
        methods: {
            async getProducts() {
              let response = await this.axios.get('http://127.0.0.1:8000/api/products'); 
              this.$store.commit('setProducts',response.data);
              console.log(this.affichageProducts); 
            },

            async deleteProduct(productId) {
                let response = await this.axios.delete(`http://127.0.0.1:8000/api/products/${productId}`);
                let i = this.affichageProducts.map(data => data.id).indexOf(productId);
                        this.affichageProducts.splice(i, 1)
            }
        }
    }
</script>

