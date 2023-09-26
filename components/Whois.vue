<template>
  <section class="whois">
    <div class="container">
      <img class="whois__img" src="@/assets/whois-img.png" alt="">
      <div class="whois__right">
        <h2 class="title">QUEM É <span class="text-red">WILLIAM?</span></h2>
        <div class="box">
          William trabalhava em um cassino e, ali, teve a oportunidade de conhecer um grande analista de dados, que ensinou boa parte do que ele sabe e aplica hoje na sua estratégia. <br><br>
          Como jogador profissional, já perdeu ao todo quase 500 mil reais. Mas os ganhos até aqui são incalculáveis. <br><br>
          Sua paixão e dedicação o impulsionaram a estudar a fundo as casas de jogos e identificar uma forma de ganhar na maioria das partidas. <br><br>
          Só após extensivas pesquisas e estudos aprofundados, William começou a identificar padrões ocultos nos jogos de cassino e a entender as nuances das apostas online.
        </div>
      </div>
      <div class="whois__bot">
        <div class="box">
          Essa descoberta revolucionária permitiu que ele desenvolvesse estratégias eficazes, baseadas em estatísticas e análise de dados, que aumentam significativamente as chances de sucesso em apostas. <br><br>
          Determinado a compartilhar seu conhecimento com outras pessoas que também desejam obter lucros nesses ambientes, William criou um espaço exclusivo para troca de informações e aprendizado mútuo.
        </div>
        <div class="box">
          Lá dentro, os participantes e jogadores têm acesso ao conhecimento aprofundado sobre as brechas que ele observou nos jogos online. <br><br>
          É por meio dessas brechas e colocando em prática o método desenvolvido pelo William que os jogadores conseguem conquistar bons resultados em suas partidas. <br><br>
          Agora, essa oportunidade está disponível para você também!
        </div>
      </div>
      <a href="https://track.esportesdahora.com/click" class="btn">>> ENTRAR NO GRUPO AGORA <<</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.whois{
  padding-bottom: res(70, 185);
  .title{
    margin-bottom: 30px;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
  &__img{
    @media(min-width:768px){
      width: calc(50% - 30px);
    }
  }
  &__right{
    padding-top: res(50, 70);
    @media(min-width:768px){
      width: calc(50% - 30px);
    }
  }
  &__bot{
    width: 100%;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    .box{
      @media(min-width:768px){
        width: calc(50% - 30px);
      }
    }
  }
  .btn{
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media(min-width:768px){
      max-width: per(670);
    }
  }
}
</style>