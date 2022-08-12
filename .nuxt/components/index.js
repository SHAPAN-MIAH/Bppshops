export { default as Home } from '../..\\components\\Home\\Home.vue'
export { default as HomeCart } from '../..\\components\\Home\\HomeCart.vue'
export { default as HomeFooter } from '../..\\components\\Home\\HomeFooter.vue'
export { default as ProductDescription } from '../..\\components\\ProductDescripSpecifcReview\\ProductDescription.vue'
export { default as ProductDesReviewMenuBar } from '../..\\components\\ProductDescripSpecifcReview\\ProductDesReviewMenuBar.vue'
export { default as ProductReview } from '../..\\components\\ProductDescripSpecifcReview\\ProductReview.vue'
export { default as ProductSellerDetails } from '../..\\components\\ProductDescripSpecifcReview\\ProductSellerDetails.vue'
export { default as ProductSpecification } from '../..\\components\\ProductDescripSpecifcReview\\ProductSpecification.vue'
export { default as ProductsCollectionFashionProductDisplay } from '../..\\components\\ProductsCollection\\FashionProductDisplay.vue'
export { default as ProductsCollectionProductCard } from '../..\\components\\ProductsCollection\\ProductCard.vue'
export { default as ProductsDisplay } from '../..\\components\\ProductsCollection\\ProductsDisplay.vue'
export { default as SharedComponentCartView } from '../..\\components\\SharedComponent\\cartView.vue'
export { default as SharedComponentCategoryNav } from '../..\\components\\SharedComponent\\categoryNav.vue'
export { default as SharedComponentCategorySlider } from '../..\\components\\SharedComponent\\categorySlider.vue'
export { default as SharedComponentFooter } from '../..\\components\\SharedComponent\\footer.vue'
export { default as SharedComponentNav } from '../..\\components\\SharedComponent\\Nav.vue'
export { default as SharedComponentSidebar } from '../..\\components\\SharedComponent\\sidebar.vue'
export { default as SharedComponentWishList } from '../..\\components\\SharedComponent\\wishList.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
