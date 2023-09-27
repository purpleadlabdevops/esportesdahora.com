<template>
  <section class="winning">
    <div class="container">
      <h2 class="title">ESTRATÉGIA <span class="text-orange">VENCEDORA,</span> SEGURA E <span class="text-orange">COMPROVADA</span></h2>
      <div class="winning__row winning__slider" v-if="winWidth < 768">
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div class="winning__item">
            <img src="@/assets/winn-blue-1.png" alt="">
            <span>R$600</span>
          </div>
          <div class="winning__item">
            <img src="@/assets/winn-blue-2.png" alt="">
            <span>R$3.600</span>
          </div>
          <div class="winning__item">
            <img src="@/assets/winn-blue-3.png" alt="">
            <span>R$1.245</span>
          </div>
        </vue-tiny-slider>
        <button id="winning_prev" class="tns__btn tns__btn-prev"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.83506e-07 19.5001L33.75 38.9857L33.75 0.0145497L9.83506e-07 19.5001Z" fill="#620F0E"/></svg></button>
        <button id="winning_next" class="tns__btn tns__btn-next"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 19.5001L0.249998 38.9857L0.25 0.0145497L34 19.5001Z" fill="#FE1313"/></svg></button>
      </div>
      <div class="winning__row" v-else>
        <div class="winning__item">
          <img src="@/assets/winn-blue-1.png" alt="">
          <span>R$600</span>
        </div>
        <div class="winning__item">
          <img src="@/assets/winn-blue-2.png" alt="">
          <span>R$3.600</span>
        </div>
        <div class="winning__item">
          <img src="@/assets/winn-blue-3.png" alt="">
          <span>R$1.245</span>
        </div>
        <img class="winning__monets" src="@/assets/monets.png" alt="">
      </div>
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
      prevButton: `#winning_prev`,
      nextButton: `#winning_next`,
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
.winning{
  padding-top: res(70, 130);
  padding-bottom: res(70, 130);
  background: url(@/assets/winn-bg.png) no-repeat center center;
  @media(max-width:767px){
    background-size: 200% auto;
  }
  .title{
    margin-bottom: 94px;
  }
  &__row{
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  &__item{
    width: calc(100% / 3);
    padding: 0 res(10, 40);
    @media(max-width:767px){
      padding-bottom: 60px;
    }
    img{
      display: block;
      width: 100%;
    }
    span{
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      line-height: 91.5%;
      text-transform: uppercase;
      display: block;
      margin-top: 20px;
      position: relative;
      &:before{
        content: "";
        display: block;
        width: 147px;
        height: 44px;
        background: #4B69DB;
        filter: blur(25px);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    &-first{
      padding-top: 50%;
    }
  }
  &__monets{
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(5%);
  }
}
</style>

<style lang="scss">
.winning__slider{
  .tns-nav{
    margin-top: 0;
    transform: translateY(-20px);
  }
}
</style>