<template>
<ul>
    <nuxt-link :to="`/fashion/${$route.params.id}`">
        <li>
            Descriptions
        </li>
    </nuxt-link>

    <nuxt-link :to="`/fashion/${$route.params.id}/productSpecification`">
        <li>
            Specifications
        </li>
    </nuxt-link>

    <nuxt-link :to="`/fashion/${$route.params.id}/productSellerDetails`">
        <li>
            Seller
        </li>
    </nuxt-link>

    <nuxt-link :to="`/fashion/${$route.params.id}/productReview`">
        <li>
            Review <span class="review-count">{{commentItemCount}}</span>
        </li>
    </nuxt-link>
</ul>
</template>

<script>
export default {
    computed: {
        commentItemCount() {
            return this.$store.getters.commentItemCount
        }
    },
}
</script>

<style scoped>

a,a:visited {
  text-decoration: none;
  color: inherit;
}
a.nuxt-link-exact-active li{
  color: #ff6e14;
  background: rgb(206, 206, 206);
}

ul {
    width: 75%;
    margin: auto;
    display: flex;
    font-family: "Rajdhani", sans-serif;
    border-bottom: 1px solid gainsboro;
}

ul li {
    list-style: none;
    margin: 10px;
    margin-left: 0px;
    background: rgb(238, 238, 238);
    color: gray;
    padding: 10px 30px;
    cursor: pointer;
}

ul li:hover {
    color: #EF8341;
    background: rgb(224, 224, 224);
}

.review-count {
    background: #EF8341;
    border-radius: 50px;
    padding: 0px 6px;
    color: #f1f1f1;
    font-size: 14px;
}
</style>
