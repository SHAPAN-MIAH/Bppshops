export default {
  target: 'static',
  ssr: false,
  generate:{
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BppShops',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/bpp_icon.png' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap", rel: "stylesheet" },
      { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css", rel: "stylesheet",
      integrity:"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin:"anonymous",
      referrerpolicy:"no-referrer"},

    ],

    script: [
      {
        src: 'js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      }
    ]
 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/global_components.js',
    { src: "~/plugins/vue-product-zoomer.js", ssr: false },
    // { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    // '@nuxtjs/vuetify',
    
    // With options
  //  ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // fontawesome: {
  //   icons:
  //   {
  //   }

  // },


// Modules: https://go.nuxtjs.dev/config-modules
modules: [
  // https://go.nuxtjs.dev/axios
  '@nuxtjs/axios',
  // https://go.nuxtjs.dev/pwa
  '@nuxtjs/pwa',
],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  baseURL: '/',
  },

// PWA module configuration: https://go.nuxtjs.dev/pwa
pwa: {
  manifest: {
    lang: 'en'
  }
},

// Build Configuration: https://go.nuxtjs.dev/config-build
build: {
  command: 'npm run build',
  commandOrigin: 'ui',
  publish: '~/build/repo/dist',
  publishOrigin: 'ui'
}
}
