<template>
  <section class="gallery">
    <div class="container">
      <img src="@/assets/gal-1.png" alt="">
      <img src="@/assets/gal-2.png" alt="">
      <img src="@/assets/gal-3.png" alt="">
      <img src="@/assets/gal-4.png" alt="">
    </div>
    <svg class="gallery__bg" xmlns="http://www.w3.org/2000/svg" width="1920" height="1641" viewBox="0 0 1920 1641" fill="none"><g filter="url(#filter0_f_58_5647)"><path d="M2215.93 402.829C1665 703.874 828 1084.5 828 1084.5C828 1084.5 -971 1340.49 903.897 1340.48C2368.81 1340.48 3113.88 -87.8352 2215.93 402.829Z" fill="#1A42D6"/></g><defs><filter id="filter0_f_58_5647" x="-249.533" y="0.214844" width="3154.94" height="1640.27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_58_5647"/></filter></defs></svg>
  </section>
</template>

<style lang="scss" scoped>
.gallery{
  padding: res(70, 130) 0;
  .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img{
      width: calc(50% - 10px);
      margin-bottom: 20px;
      @media(min-width:768px){
        width: calc(25% - 10px);
        margin-bottom: 0;
      }
    }
  }
  &__bg{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>