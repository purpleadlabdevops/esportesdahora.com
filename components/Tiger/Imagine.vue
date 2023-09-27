<template>
  <section class="imagine">
    <div class="container">
      <div class="imagine__left">
        <div class="box">
          Imagine se você pudesse ter em mãos a senha para vencer e lucrar com os maiores e melhores jogos da atualidade? <br><br>
          Com a nossa comunidade exclusiva essa possibilidade é real! <br><br>
          Você pode, apenas agora e nesta oportunidade, entrar para o grupo fechado que está transformando pessoas comuns em milionários todos os dias… <br><br>
          Usando apenas uma estratégia única e simples desenvolvida com exclusividade pelo William. <br><br>
          E o melhor de tudo: você pode participar agora e aproveitar essa chance ainda que nunca tenha jogado online na vida! <br><br>
          Tudo o que você precisa para jogar e ganhar está a um clique de distância - diretamente no nosso grupo fechado e TOTALMENTE GRATUITO. <br><br>
          Basta seguir a estratégia secreta e o passo a passo seguro e validado compartilhado lá dentro para vencer em cada partida. <br><br>
          Se você deseja lucrar e ver o seu dinheiro se multiplicar, essa é a sua chance.
        </div>
        <a href="https://track.esportesdahora.com/click" class="btn">QUERO PARTICIPAR →</a>
      </div>
      <div class="imagine__right">
        <img class="imagine__svg" src="@/assets/imagine-img-blue.png" alt="">
        <img class="imagine__gif" src="@/assets/imagine.gif" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.imagine{
  padding-bottom: res(70, 130);
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  &__right{
    position: relative;
    @media(max-width:767px){
      margin-top: 50px;
    }
    @media(min-width:768px){
      width: 55%;
      background: url(@/assets/imagine-svg-blue.png) no-repeat top center/100% auto;
      padding-bottom: 80px;
    }
  }
  &__img{
    @media(min-width:768px){
      max-width: 722px;
    }
  }
  &__left{
    @media(min-width:768px){
      width: 45%;
    }
  }
  .btn{
    display: block;
  }
  &__svg{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    transform: translate(0, 0);
    width: res(200, 300);
    @media(min-width:768px){
      transform: translate(10%, 5%);
    }
  }
  &__gif{
    width: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -10px;
  }
}
</style>