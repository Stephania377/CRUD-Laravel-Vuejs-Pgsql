<template>
    <div class="container">
        <h2 class="text-center">Mettre à jour un produit</h2>
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
                        <input type="text" class="form-control" v-model="affichageProduct.price">
                    </div>
                    <button type="button" class="btn btn-primary" @click="updateProduct()"> Mettre à jour </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.editProduct(this.$route.params.productId);
        },
        computed:{
            affichageProduct(){
                return this.$store.state.produit;
            }
        },
        methods: {
            async editProduct(productId) {
                let res = await this.axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
                    this.$store.commit('setProduct',res.data);
            },
           
            async updateProduct() {
                let res = await this.axios.patch(`http://127.0.0.1:8000/api/products/${this.$route.params.productId}`, this.affichageProduct);
                    this.$router.push({ name: 'ProductIndex' });
            }
         
        }
    }
</script>
