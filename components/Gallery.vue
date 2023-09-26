<template>
  <section class="gallery">
    <div class="container">
      <img src="@/assets/gal-1.png" alt="">
      <img src="@/assets/gal-2.png" alt="">
      <img src="@/assets/gal-3.png" alt="">
      <img src="@/assets/gal-4.png" alt="">
    </div>
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
}
</style>