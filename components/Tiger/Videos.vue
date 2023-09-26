<template>
  <section class="videos">
    <div class="container" v-if="winWidth < 768">
      <vue-tiny-slider v-bind="tinySliderOptions">
        <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948279?h=69d4113390" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948208?h=f14915c1d6" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948111?h=39d14e7687" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
        <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948054?h=985efc9f6b" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      </vue-tiny-slider>
      <button id="videos_prev" class="tns__btn tns__btn-prev"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.83506e-07 19.5001L33.75 38.9857L33.75 0.0145497L9.83506e-07 19.5001Z" fill="#620F0E"/></svg></button>
      <button id="videos_next" class="tns__btn tns__btn-next"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 19.5001L0.249998 38.9857L0.25 0.0145497L34 19.5001Z" fill="#FE1313"/></svg></button>
    </div>
    <div class="container" v-else>
      <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948279?h=69d4113390" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948208?h=f14915c1d6" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948111?h=39d14e7687" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div class="videos__item"><iframe src="https://player.vimeo.com/video/867948054?h=985efc9f6b" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
    </div>
  </section>
</template>

<script>
export default{
  data: () => ({
    winWidth: 1200,
    tinySliderOptions: {
      items: 1,
      loop: false,
      controls: true,
      controlsPosition: 'bottom',
      prevButton: `#videos_prev`,
      nextButton: `#videos_next`,
      nav: true,
      navPosition: 'bottom',
    }
  }),
  mounted(){
    this.winWidth = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
.videos{
  padding-bottom: res(70, 130);
  position: relative;
  z-index: 3;
  .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width:767px){
      padding-bottom: 15px;
    }
  }
  .tns-outer{
    width: 100%;
  }
  &__item{
    position: relative;
    display: flex;
    padding-top: 45%;
    margin-bottom: 10px;
    @media(min-width:768px){
      width: per(283);
      padding-top: 42%;
      margin-bottom: 0;
    }
    iframe{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>