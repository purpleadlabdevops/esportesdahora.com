<template>
  <div class="layout layout__default">
    <Nuxt />
  </div>
</template>

<script>
export default{
  head() {
    return {
      bodyAttrs: {
        class: 'body__default'
      },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        { href: "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap", rel: "stylesheet" },
      ],
      script: [
        { src: '/js/fb.js' }
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>