<template>
  <div class="layout layout__casino">
    <Nuxt />
  </div>
</template>

<script>
export default{
  name: 'casino',
  head() {
    return {
      bodyAttrs: {
        class: 'body__casino'
      },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        { href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,300&display=swap", rel: "stylesheet" },
      ],
      script: [
        { src: '/js/fb_casino.js' }
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/casino.scss';
</style>