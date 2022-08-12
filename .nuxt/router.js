import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cdac093 = () => interopDefault(import('..\\pages\\babyCare\\index.vue' /* webpackChunkName: "pages/babyCare/index" */))
const _7f50cdd6 = () => interopDefault(import('..\\pages\\cosmetics\\index.vue' /* webpackChunkName: "pages/cosmetics/index" */))
const _cb4bfbfa = () => interopDefault(import('..\\pages\\electronics\\index.vue' /* webpackChunkName: "pages/electronics/index" */))
const _0b015722 = () => interopDefault(import('..\\pages\\fashion\\index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _3eefd8a8 = () => interopDefault(import('..\\pages\\furniture\\index.vue' /* webpackChunkName: "pages/furniture/index" */))
const _7bfe74ad = () => interopDefault(import('..\\pages\\grocery\\index.vue' /* webpackChunkName: "pages/grocery/index" */))
const _006e8512 = () => interopDefault(import('..\\pages\\islamic\\index.vue' /* webpackChunkName: "pages/islamic/index" */))
const _4daf601c = () => interopDefault(import('..\\pages\\shoes\\index.vue' /* webpackChunkName: "pages/shoes/index" */))
const _57deba0a = () => interopDefault(import('..\\pages\\fashion\\_id.vue' /* webpackChunkName: "pages/fashion/_id" */))
const _5e1a1b38 = () => interopDefault(import('..\\pages\\fashion\\_id\\index.vue' /* webpackChunkName: "pages/fashion/_id/index" */))
const _f837d9e6 = () => interopDefault(import('..\\pages\\fashion\\_id\\productReview.vue' /* webpackChunkName: "pages/fashion/_id/productReview" */))
const _2dbb571e = () => interopDefault(import('..\\pages\\fashion\\_id\\productSellerDetails.vue' /* webpackChunkName: "pages/fashion/_id/productSellerDetails" */))
const _2ce15a5e = () => interopDefault(import('..\\pages\\fashion\\_id\\productSpecification.vue' /* webpackChunkName: "pages/fashion/_id/productSpecification" */))
const _200bbe55 = () => interopDefault(import('..\\pages\\grocery\\_id.vue' /* webpackChunkName: "pages/grocery/_id" */))
const _6cf8bc8d = () => interopDefault(import('..\\pages\\grocery\\_id\\index.vue' /* webpackChunkName: "pages/grocery/_id/index" */))
const _194a8f62 = () => interopDefault(import('..\\pages\\grocery\\_id\\productReview.vue' /* webpackChunkName: "pages/grocery/_id/productReview" */))
const _69154129 = () => interopDefault(import('..\\pages\\grocery\\_id\\productSellerDetails.vue' /* webpackChunkName: "pages/grocery/_id/productSellerDetails" */))
const _683b4469 = () => interopDefault(import('..\\pages\\grocery\\_id\\productSpecification.vue' /* webpackChunkName: "pages/grocery/_id/productSpecification" */))
const _84c2b80c = () => interopDefault(import('..\\pages\\islamic\\_id.vue' /* webpackChunkName: "pages/islamic/_id" */))
const _286c2348 = () => interopDefault(import('..\\pages\\islamic\\_id\\index.vue' /* webpackChunkName: "pages/islamic/_id/index" */))
const _43f50b1d = () => interopDefault(import('..\\pages\\islamic\\_id\\productReview.vue' /* webpackChunkName: "pages/islamic/_id/productReview" */))
const _4593a5e4 = () => interopDefault(import('..\\pages\\islamic\\_id\\productSellerDetails.vue' /* webpackChunkName: "pages/islamic/_id/productSellerDetails" */))
const _47479f64 = () => interopDefault(import('..\\pages\\islamic\\_id\\productSpecification.vue' /* webpackChunkName: "pages/islamic/_id/productSpecification" */))
const _5089a37a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/babyCare",
    component: _7cdac093,
    name: "babyCare"
  }, {
    path: "/cosmetics",
    component: _7f50cdd6,
    name: "cosmetics"
  }, {
    path: "/electronics",
    component: _cb4bfbfa,
    name: "electronics"
  }, {
    path: "/fashion",
    component: _0b015722,
    name: "fashion"
  }, {
    path: "/furniture",
    component: _3eefd8a8,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _7bfe74ad,
    name: "grocery"
  }, {
    path: "/islamic",
    component: _006e8512,
    name: "islamic"
  }, {
    path: "/shoes",
    component: _4daf601c,
    name: "shoes"
  }, {
    path: "/fashion/:id",
    component: _57deba0a,
    children: [{
      path: "",
      component: _5e1a1b38,
      name: "fashion-id"
    }, {
      path: "productReview",
      component: _f837d9e6,
      name: "fashion-id-productReview"
    }, {
      path: "productSellerDetails",
      component: _2dbb571e,
      name: "fashion-id-productSellerDetails"
    }, {
      path: "productSpecification",
      component: _2ce15a5e,
      name: "fashion-id-productSpecification"
    }]
  }, {
    path: "/grocery/:id",
    component: _200bbe55,
    children: [{
      path: "",
      component: _6cf8bc8d,
      name: "grocery-id"
    }, {
      path: "productReview",
      component: _194a8f62,
      name: "grocery-id-productReview"
    }, {
      path: "productSellerDetails",
      component: _69154129,
      name: "grocery-id-productSellerDetails"
    }, {
      path: "productSpecification",
      component: _683b4469,
      name: "grocery-id-productSpecification"
    }]
  }, {
    path: "/islamic/:id",
    component: _84c2b80c,
    children: [{
      path: "",
      component: _286c2348,
      name: "islamic-id"
    }, {
      path: "productReview",
      component: _43f50b1d,
      name: "islamic-id-productReview"
    }, {
      path: "productSellerDetails",
      component: _4593a5e4,
      name: "islamic-id-productSellerDetails"
    }, {
      path: "productSpecification",
      component: _47479f64,
      name: "islamic-id-productSpecification"
    }]
  }, {
    path: "/",
    component: _5089a37a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
