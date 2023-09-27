<template>
  <div class="layout layout__presell">
    <Nuxt />
    <PresellFooter />
  </div>
</template>

<script>
export default{
  name: 'presell',
  head() {
    return {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap", rel: "stylesheet" },
      ],
      script: [
        { src: '/js/fb_presell.js' }
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/presell.scss';
</style>