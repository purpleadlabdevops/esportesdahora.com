<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/aposta.png" alt="">
      <img src="@/assets/18.png" alt="">
      <img src="@/assets/bga.png" alt="">
      <img class="header__jr" src="@/assets/jr.png" alt="">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  background: #000;
  padding: 10px 0;
  .container{
    display: flex;
    align-items: center;
  }
  &__jr{
    margin-left: auto;
  }
  img{
    display: block;
    &:not(:last-child){
      margin-right: 15px;
    }
  }
}
</style>