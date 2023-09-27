<template>
  <section class="banner">
    <div class="container">
      <h1 class="title">
        <span>
          CONHEÇA A ESTRATÉGIA DE JOGO QUE TRANSFORMOU A VIDA DE <span class="text-red">WILLIAM</span>
          <svg width="248" height="133" viewBox="0 0 248 133" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M231.255 50.6726C232.152 56.9878 230.165 63.5599 225.508 70.1124C220.843 76.6767 213.563 83.1187 204.125 89.0466C185.253 100.9 158.077 110.492 127.073 114.91C96.0702 119.329 67.301 117.709 45.8772 111.599C35.1628 108.543 26.3782 104.39 20.0704 99.3897C13.7738 94.3981 10.0354 88.642 9.13826 82.3268C8.24115 76.0116 10.2283 69.4395 14.885 62.8869C19.5499 56.3227 26.8295 49.8806 36.2678 43.9527C55.1398 32.0998 82.3162 22.5074 113.319 18.0891C144.323 13.6708 173.092 15.2902 194.516 21.4005C205.23 24.4564 214.015 28.6091 220.322 33.6096C226.619 38.6012 230.358 44.3573 231.255 50.6726Z" stroke="#FE1313" stroke-width="4"/><path d="M238.862 50.6726C239.759 56.9878 237.772 63.5599 233.115 70.1124C228.45 76.6767 221.171 83.1187 211.732 89.0466C192.86 100.9 165.684 110.492 134.681 114.91C103.677 119.329 74.9082 117.709 53.4844 111.599C42.7699 108.543 33.9853 104.39 27.6775 99.3897C21.381 94.3981 17.6425 88.642 16.7454 82.3268C15.8483 76.0116 17.8355 69.4395 22.4921 62.8869C27.1571 56.3227 34.4367 49.8806 43.8749 43.9527C62.7469 32.0998 89.9234 22.5074 120.927 18.0891C151.93 13.6708 180.699 15.2902 202.123 21.4005C212.837 24.4564 221.622 28.6091 227.93 33.6096C234.226 38.6012 237.965 44.3573 238.862 50.6726Z" stroke="#FE1313" stroke-width="4"/></svg>
        </span>
      </h1>
      <h3 class="subtitle">(e que pode transformar a sua também).</h3>
      <div class="banner__row">
        <div class="banner__left">
          <img src="@/assets/banner-img.png" alt="">
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
     <img class="banner__svg" src="@/assets/banner-svg.svg" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner{
  padding-top: 50px;
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
    right: 0;
    bottom: 0;
    transform: translate(75%, 0);
    z-index: -1;
  }
  .btn{
    display: block;
  }
}
</style>