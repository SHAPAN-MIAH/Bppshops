<template>
<div class="product-card">
    <div class="img-container">
        <nuxt-link :to="`/fashion/${product.id}`">
            <div class="image">
                <img :src="product.image" alt="">
            </div>
        </nuxt-link>
        <div class="quickView">
            <span class="tooltip"><i class="bi bi-eye"></i>
                <span class="tooltiptext">View</span>
            </span>
            <span @click="addToWishList()" class="tooltip"><i class="bi bi-heart"></i>
                <span class="tooltiptext">WishList</span>
            </span>
            <span class="tooltip" @click="addToCart()"><i class="bi bi-bag-plus"></i>
                <span class="tooltiptext">Add To Cart</span>
            </span>
        </div>
    </div>
    <p>{{product.title.toString().substring(0, 25)}}...</p>
    <p>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
    </p>
    <p class="price">৳ {{product.price}}</p>
</div>
</template>

<script>
export default {
    props: ['product'],

    methods: {
        addToCart() {
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: 1
            });
        },

        addToWishList(){
            this.$store.dispatch('addProductToWishList', {
                product: this.product,
                quantity: 1
            })
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #757575;
}

.product-card {
    height: 330px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    align-items: center;
    text-align: center;
    border-radius: 4px;
    transition: all .100ms;
    overflow: hidden;
}

.image {
    width: 100%;
}

.product-card p {
    margin-top: 5px;
    text-align: left;
}

.price {
    color: #EF8341;
}

.product-card:hover {
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */

}

.img-container {
    overflow: hidden;
    background: #f5f5f5f5;
}

.product-card img {
    margin-top: 20px;
    height: 160px;
    width: 115px;
    overflow: hidden;
}

.quickView {
    background: #a3a3a3;
    opacity: 0;
    padding: 15px 0px;
    transform: translateY(50px);
    transition: transform 500ms ease-in-out;
}

.quickView span {
    font-size: 20px;
    margin: 0px 15px;
    color: rgb(255, 255, 255);
    cursor: pointer;
}

.quickView span:hover {
    color: #EF8341;
}

.product-card:hover .quickView {
    opacity: 1;
    transform: translateY(0);
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 80px;
    background-color: rgba(49, 49, 49, 0.87);
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -38px;
    margin-bottom: 10px;
    font-size: 14px;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>
