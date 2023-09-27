<template>
  <section class="reviews">
    <div class="container">
      <h2 class="title">
        <span>
          <span class="text-red">Comentários</span> de quem já testou:
          <svg width="219" height="168" viewBox="0 0 219 168" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128.313 138.3C86.0041 137.992 42.8632 108.925 31.6089 73.8077C20.3546 38.6908 45.0228 10.1174 87.3316 10.4255C129.641 10.7336 172.781 39.8009 184.036 74.9178C195.29 110.035 170.622 138.608 128.313 138.3Z" stroke="white" stroke-width="3.62958"/><path d="M131.288 157.081C88.9788 156.773 45.8379 127.706 34.5836 92.5885C23.3293 57.4716 47.9975 28.8982 90.3064 29.2063C132.615 29.5144 175.756 58.5817 187.01 93.6986C198.265 128.816 173.597 157.389 131.288 157.081Z" stroke="white" stroke-width="3.62958"/></svg>
        </span>
      </h2>
      <div class="reviews__row" v-if="winWidth < 768">
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div>
            <div class="box">“Entrei na comunidade descrente, mas os resultados que consegui foram além das minhas expectativas. Ganhei 367 reais e continuo ganhando todos os dias”  (Luiz P.)</div>
            <div class="box">“Nunca tinha jogado online e não sabia como fazer. O suporte 24 horas disponibilizado para os participantes do grupo é algo surreal. Eles me ajudaram com o passo a passo e consegui fazer a minha primeira jogada em poucos minutos e já vi o meu dinheiro subir. Saquei com muita facilidade. Grupo e comunidade totalmente seguros.”  (Paulo B.)</div>
          </div>
          <div>
            <div class="box">“Estava com muito medo de ser um golpe financeiro e, por isso, comecei com pouco, super desconfiado. Mas logo vi que era real e funcionava. Muito bom poder ter outros jogadores ganhando junto comigo”  (Bruno F.)</div>
            <div class="box">“Desde o momento em que entrei na comunidade, fiquei impressionado com o que encontrei. O suporte e os sinais compartilhados ali são fora da curva... Não importa se você tenha experiência ou nunca tenha jogado online, você vai conseguir lucrar. Super indico!”  (Ulisses D.)</div>
          </div>
          <div>
            <div class="box">“A comunidade é o lugar perfeito para quem ama jogos online e gosta de ganhar. Com um método excepcional, suporte de primeira classe e segurança sólida. Não hesito em recomendar a comunidade todo mundo que conheço. Dê uma chance e veja com seus próprios olhos. Ou melhor: sinta em sua própria conta bancária”  (Marcos R.)</div>
            <div class="box">“Minha vida mudou depois que eu entrei no grupo. Comecei colocando bem pouco, mas quando vi o dinheiro se multiplicando, me empolguei. Já consegui ganhar 10x o valor que coloquei só aplicando as estratégias do William e os gabaritos que ele compartilha no grupo”.  (Marcelo S.)</div>
          </div>
          <div>
            <div class="box">“Entrei na comunidade e em pouco tempo já consegui dobrar o valor que coloquei, apenas aplicando as estratégias do William. É inacreditável que esse grupo seja de graça e que os sinais compartilhados nele façam tanta gente ganhar dinheiro. Não quero sair nunca mais”  (Felipe M.)</div>
            <div class="box">"Hoje foi épico! Com o suporte incrível da comunidade e os gabaritos das partidas não tem como dar errado. Vitória inesquecível! Mais de 5x o valor investido."  (Otávio N.)</div>
          </div>
          <div>
            <div class="box">“O suporte ao cliente da comunidade é bizarro! A equipe de suporte está disponível 24 horas por dia, 7 dias por semana, e são extremamente simpáticas e prestativas. Qualquer dúvida ou problema que eu tenha, eles resolverão de maneira rápida e eficaz. Outro ponto positivo é a segurança do método. Tive resultados concretos e comprovados”  (Tulio G.)</div>
            <div class="box">“Quem curte jogar online precisa estar nesse comunidade. Na verdade, nem precisa gostar de jogar online, basta gostar de ganhar dinheiro! Já levantei uma grana alta com os gabaritos enviados lá dentro e continuo todos os dias jogando e ganhando. É impressionante”.  (Gabriel R.)</div>
          </div>
        </vue-tiny-slider>
        <button id="reviews_prev" class="tns__btn tns__btn-prev"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.83506e-07 19.5001L33.75 38.9857L33.75 0.0145497L9.83506e-07 19.5001Z" fill="#620F0E"/></svg></button>
        <button id="reviews_next" class="tns__btn tns__btn-next"><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 19.5001L0.249998 38.9857L0.25 0.0145497L34 19.5001Z" fill="#FE1313"/></svg></button>
      </div>
      <div class="reviews__row" v-else>
        <div class="reviews__item">
          <div class="box">“Entrei na comunidade descrente, mas os resultados que consegui foram além das minhas expectativas. Ganhei 367 reais e continuo ganhando todos os dias”  (Luiz P.)</div>
          <div class="box">“Nunca tinha jogado online e não sabia como fazer. O suporte 24 horas disponibilizado para os participantes do grupo é algo surreal. Eles me ajudaram com o passo a passo e consegui fazer a minha primeira jogada em poucos minutos e já vi o meu dinheiro subir. Saquei com muita facilidade. Grupo e comunidade totalmente seguros.”  (Paulo B.)</div>
          <div class="box">“Estava com muito medo de ser um golpe financeiro e, por isso, comecei com pouco, super desconfiado. Mas logo vi que era real e funcionava. Muito bom poder ter outros jogadores ganhando junto comigo”  (Bruno F.)</div>
          <div class="box">“Desde o momento em que entrei na comunidade, fiquei impressionado com o que encontrei. O suporte e os sinais compartilhados ali são fora da curva... Não importa se você tenha experiência ou nunca tenha jogado online, você vai conseguir lucrar. Super indico!”  (Ulisses D.)</div>
          <div class="box">“A comunidade é o lugar perfeito para quem ama jogos online e gosta de ganhar. Com um método excepcional, suporte de primeira classe e segurança sólida. Não hesito em recomendar a comunidade todo mundo que conheço. Dê uma chance e veja com seus próprios olhos. Ou melhor: sinta em sua própria conta bancária”  (Marcos R.)</div>
        </div>
        <div class="reviews__item">
          <div class="box">“Minha vida mudou depois que eu entrei no grupo. Comecei colocando bem pouco, mas quando vi o dinheiro se multiplicando, me empolguei. Já consegui ganhar 10x o valor que coloquei só aplicando as estratégias do William e os gabaritos que ele compartilha no grupo”.  (Marcelo S.)</div>
          <div class="box">“Entrei na comunidade e em pouco tempo já consegui dobrar o valor que coloquei, apenas aplicando as estratégias do William. É inacreditável que esse grupo seja de graça e que os sinais compartilhados nele façam tanta gente ganhar dinheiro. Não quero sair nunca mais”  (Felipe M.)</div>
          <div class="box">"Hoje foi épico! Com o suporte incrível da comunidade e os gabaritos das partidas não tem como dar errado. Vitória inesquecível! Mais de 5x o valor investido."  (Otávio N.)</div>
          <div class="box">“O suporte ao cliente da comunidade é bizarro! A equipe de suporte está disponível 24 horas por dia, 7 dias por semana, e são extremamente simpáticas e prestativas. Qualquer dúvida ou problema que eu tenha, eles resolverão de maneira rápida e eficaz. Outro ponto positivo é a segurança do método. Tive resultados concretos e comprovados”  (Tulio G.)</div>
          <div class="box">“Quem curte jogar online precisa estar nesse comunidade. Na verdade, nem precisa gostar de jogar online, basta gostar de ganhar dinheiro! Já levantei uma grana alta com os gabaritos enviados lá dentro e continuo todos os dias jogando e ganhando. É impressionante”.  (Gabriel R.)</div>
        </div>
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
      prevButton: `#reviews_prev`,
      nextButton: `#reviews_next`,
      nav: true,
      navPosition: 'bottom',
      autoHeight: true,
    }
  }),
  mounted(){
    this.winWidth = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
.reviews{
  &__row{
    @media(max-width:767px){
      padding-bottom: 17px;
    }
  }
  .title{
    margin-bottom: 65px;
    span{
      position: relative;
      display: inline;
    }
    svg{
      position: absolute;
      left: 0; top: 0;
      z-index: -1;
      transform: translate(-25%, -35%);
      width: res(110, 219);
      height: auto;
    }
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  &__item{
    @media(min-width:768px){
      width: calc(50% - 40px);
    }
    &:last-child{
      .box{
        border-color: var(--dark-red);
        &:nth-child(2n){
          border-color: var(--red);
        }
      }
    }
  }
  .box{
    &:nth-child(2n){
      border-color: var(--dark-red);
    }
  }
}
</style>