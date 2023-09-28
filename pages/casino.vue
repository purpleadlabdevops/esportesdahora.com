<template>
  <div class="page page__casino">
    <CasinoHeader />
    <CasinoBanner />
    <CasinoBoxes />
    <CasinoContent />
    <CasinoFooter />
    <CasinoInfo />
    <CasinoCopy />
  </div>
</template>

<script>
export default{
  layout: 'casino',
  head() {
    return {
      title: 'Casino title',
    }
  },
}
</script>