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
      <img class="imagine__img" src="@/assets/imagine.gif" alt="">
      <img class="imagine__svg" src="@/assets/imagine-svg.svg" alt="">
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
    }
  }
  &__img{
    display: block;
    width: 70%;
    height: auto;
    @media(max-width:767px){
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
    @media(min-width:768px){
      width: per(400);
      transform: rotate(5deg);
    }
  }
  &__left{
    @media(min-width:768px){
      width: per(587);
    }
  }
  .btn{
    display: block;
  }
  &__svg{
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateY(25%);
  }
}
</style>