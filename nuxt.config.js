export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Matteo Felici' },
      { hid: 'description', name: 'description', content: 'Laura cesaretti scrivere qui di piu...' },
      { theme_color: '#ffffff' },
      { lang: 'en' },
      { hid: 'og:type', name: 'ogType', content: 'website' },
      { hid: 'og:sitename', name: 'ogSiteName', content: 'Laura Cesaretti' },
      { hid: 'og:title', name: 'ogTitle', content: 'Laura Cesaretti - Fine Art Portrait Photography, Roma' },
      { hid: 'og:description', name: 'ogDescription', content: 'Scrivere una descrizione qui' },
      { hid: 'og:host', name: 'ogHost', content: 'https://lauracesaretti.com/' },
      { hid: 'og:image', name: 'ogImage', content: { path: '/laura-cesaretti-cover.jpg' } }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: "https://kit.fontawesome.com/ff4b066a2f.js", crossorigin: "anonymous" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/lightGallery.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    vendor: ['aos']
  },
  // Serving the 404.html page
  generate: {
    fallback: true,
    dir: 'public'
  },
  // Might need to remove it
  router: {
    base: '/public/'
  }

}
