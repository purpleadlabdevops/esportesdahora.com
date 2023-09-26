export default {
  ssr: false,
  head: {
    title: 'Brazil LP',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Brazil LP'
      },
      {
        name: 'author',
        content: 'Max Globa',
      },
      {
        name: 'author-link',
        content: 'https://t.me/maxgloba_dev',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap", rel: "stylesheet" },
    ],
  },
  styleResources: {
    scss: ['~/styles/_functions.scss']
  },
  css: ['~/styles/global.scss'],
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js' }
  ],
  components: true,
  modules: ['@nuxtjs/style-resources'],
  router: {
    base: '/',
    mode: 'history'
  },
  generate: {
    dir: './dist'
  },
  build: {
    target: 'static'
  }
}
