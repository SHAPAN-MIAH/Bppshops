<template>
<div class="container">
    <div class="category-navbar">
        <Category-nav categoryName="Islamic" />
    </div>
    <div class="main-container">
            <Sidebar />
        <div class="product-content">
            <FashionProductDisplay v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '~/components/SharedComponent/sidebar.vue';
import FashionProductDisplay from '~/components/ProductsCollection/FashionProductDisplay.vue';

export default {
    layout: "categoryLayout",
    components: {
    Sidebar,
    FashionProductDisplay
},

    mounted() {
        this.$store.dispatch("getProducts");
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },

};
</script>

<style scoped>

.main-container {
    display: flex;
    width: 93%;
    margin: auto;
    padding-top: 230px;
    font-family: "Rajdhani", sans-serif;
    color: gray;
}

.product-content {
    width: 79%;
    margin-left: auto;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
}
</style>

