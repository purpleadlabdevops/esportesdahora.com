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
      },
      {
        name: "facebook-domain-verification",
        content: "skz4zqo0d1ytxn8hgp2wts2f334p42",
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  styleResources: {
    scss: ['~/styles/_functions.scss']
  },
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
