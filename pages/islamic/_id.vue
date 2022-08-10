<template>
<div>
    <div v-if="product">
        <div class="category-navbar">
            <Category-nav categoryName="Fashion" />
        </div>
        <div class="main-container">
            <div class="product-content">
                <div class="img-container">
                    <img :src='product.image' alt="">
                </div>
                <div class="product-details-content">
                    <h2>{{product.title}}</h2>
                    <h1>৳ {{product.price}}</h1>
                    <p>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </p>

                    <div class="btn-container">
                        <div class="increase-decrease-container">
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </div>
                        <button @click="addToCart()" id="addToCartBtn"><i class="bi bi-bag-plus"></i> Add To Cart</button>
                    </div>
                    <div>
                        <button @click="addToWishList()" class="addWishListBtn"><i class="bi bi-heart"></i> Add to Wishlist</button>
                        <nuxt-link to="/fashion">
                            <button class="continueShoppingBtn"><i class="bi bi-cart3"></i> Continue Shopping</button>
                        </nuxt-link>
                    </div>
                    <p class="dec">{{product.description}}</p>
                </div>
            </div>

        </div>
        <ProductDesReviewMenuBar />
        <NuxtChild keep-alive />
    </div>
    <div v-else>
        <h1>product not found</h1>
    </div>

</div>
</template>

<script>
import Sidebar from '~/components/SharedComponent/sidebar.vue';
import ProductDesReviewMenuBar from '~/components/ProductDescripSpecifcReview/ProductDesReviewMenuBar.vue';

export default {
    layout: "categoryLayout",
    components: {
        Sidebar,
        ProductDesReviewMenuBar
    },

    computed: {
        product() {
            return this.$store.getters.getProductById(this.$route.params.id);
        },
    },
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
.main-container {
    width: 93%;
    margin: auto;
    padding-top: 230px;
    font-family: "Rajdhani", sans-serif;
    color: gray;
}

.product-content {
    width: 80%;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: flex;
    margin: auto;
}

.img-container img {
    width: 300px;
    margin: 0px 20px;
    border: .5px solid gainsboro;
    padding: 20px;
}

.product-details-content {
    padding: 0px 35px;
}

.product-details-content h2 {
    font-size: 25px;
}

.product-details-content h1 {
    margin-top: 10px;
    color: #ef8341;
}

.product-details-content p {
    margin-top: 10px;
}

.dec {
    margin-top: 20px;
}

.btn-container {
    margin: 30px 0px 15px 0px;
    display: flex;
}

.increase-decrease-container {
    display: flex;
    margin-right: 20px;
}

.increase-decrease-container button {
    font-size: 25px;
    font-weight: 500;
    color: #a5a5a5;
    background: none;
    padding: 5px 20px;
    cursor: pointer;
    border: 1px solid gainsboro;
}

.increase-decrease-container button:hover {
    background: #e7e7e7;
    color: #ef8341;
}

.increase-decrease-container div {
    padding: 10px 50px;
    cursor: default;
    border: 1px solid gainsboro;
    background: none;
    font-weight: 600;
    font-size: 20px;
}

#addToCartBtn {
    padding: 12px 60px;
    font-size: 15px;
    font-family: "Rajdhani", sans-serif;
    font-weight: 500;
    background: #e7e7e7;
    border: none;
    color: #7c7c7c;
    cursor: pointer;
    /* border-radius: 5px; */
}

#addToCartBtn:hover {
    color: #ef8341;
}

.addWishListBtn,
.continueShoppingBtn {
    padding: 10px;
    font-size: 17px;
    font-family: "Rajdhani", sans-serif;
    font-weight: 600;
    background: none;
    border: none;
    color: rgb(155, 155, 155);
    cursor: pointer;
}

.addWishListBtn:hover,
.continueShoppingBtn:hover {
    color: #ef8341;
}

.continueShoppingBtn {
    margin-left: 10px;
}

#addToCartBtn:hover {
    background: gainsboro;
}
</style>
