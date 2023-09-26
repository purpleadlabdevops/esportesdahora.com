<template>
  <section class="banner">
    <div class="container">
      <h1 class="title">CONHEÇA A ESTRATÉGIA DE JOGO QUE TRANSFORMOU A VIDA DE <span class="text-orange">WILLIAM</span></h1>
      <h3 class="subtitle">(e que pode transformar a sua também).</h3>
      <div class="banner__row">
        <div class="banner__left">
          <img src="@/assets/banner-img-blue.png" alt="">
          <img class="banner__moneta" src="@/assets/banner-moneta.png" alt="">
        </div>
        <div class="banner__right">
          <div class="box">
            Garanta o seu acesso GRATUITO ao método secreto, antes que as vagas acabem… <br><br>
            E receba como BÔNUS de 10 a 15 transações diárias infalíveis para você jogar (e ganhar) ainda hoje! <br><br>
            Ainda que você nunca tenha jogado online, você poderá replicar o sistema desenvolvido com exclusividade por William para ter ganhos exponenciais.
          </div>
          <div class="box">
            <p>✅SIMPLES, RÁPIDO, FÁCIL & GRATUITO</p>
            <p>✅GABARITOS VENCEDORES</p>
            <p>✅MÉTODO SEGURO</p>
            <p>✅QUALQUER PESSOA PODE GANHAR</p>
          </div>
          <a href="https://track.esportesdahora.com/click" class="btn">DESTRAVAR MEU ACESSO AGORA →</a>
        </div>
      </div>
      <img class="banner__rocket" src="@/assets/banner-rocket.png" alt="">
    </div>
    <svg class="banner__svg" width="1920" height="1557" viewBox="0 0 1920 1557" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_58_5648)"><path d="M1674.04 744.948C1098.84 690.312 718.156 377.254 599.712 227.555C-352.468 -240.168 -452.405 312.408 544.191 995.366C1540.79 1678.33 2393.03 813.244 1674.04 744.948Z" fill="#1A42D6"/></g><defs><filter id="filter0_f_58_5648" x="-460" y="-246" width="2701.28" height="1802.43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_58_5648"/></filter></defs></svg>
  </section>
</template>

<style lang="scss" scoped>
.banner{
  padding-top: 50px;
  position: relative;
  .title{
    text-align: center;
    span{
      position: relative;
      display: inline;
    }
    svg{
      position: absolute;
      left: 0; top: 0;
      z-index: -1;
      transform: translate(-15%, -35%);
      width: res(117, 248);
      height: auto;
    }
  }
  .subtitle{
    margin-bottom: res(20, 50);
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__left{
    position: relative;
    @media(max-width:767px){
      padding-left: 45px;
      margin-bottom: 60px;
    }
    @media(min-width:768px){
      width: per(575);
    }
  }
  &__right{
    @media(min-width:768px){
      width: per(531);
    }
  }
  &__svg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    max-width: 150%;
  }
  .btn{
    display: block;
  }
  &__moneta{
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(-15%, 40%);
    width: res(140, 323);
    @media(min-width:768px){
      transform: translate(-25%, 25%);
    }
  }
  &__rocket{
    position: absolute;
    left: 100%;
    top: 0;
    transform: translate(-25%, 0);
  }
}
</style>