<template>
  <section class="content">
    <div class="container">
      <div class="content__box">
        <h4>Locais de apostas</h4>
        <p>Para fazer apostas em corridas de cavalos ou turfe, como também é conhecido, você precisa ir até um jockey club legalizado. Você também pode acessar o site de um dos Clubs e fazer a sua aposta. Estes são alguns dos principais Jockeys club do brasil:</p>
        <ul>
          <li>Jockey Club Brasileiro, no Rio de Janeiro;</li>
          <li>Hipódromo de Cidade Jardim, em São Paulo</li>
          <li>Jockey Club de Sorocaba, em Sorocaba, São Paulo</li>
          <li>Hipódromo do Tarumã, em Curitiba, Paraná</li>
          <li>Hipódromo do Cristal, em Porto Alegre, Rio de Grande do Sul</li>
          <li>Jockey Club Carazinhense, em Carazinho, no Rio Grande do Sul</li>
          <li>Hipódromo da Lagoinha, em Goiânia, Goiás</li>
        </ul>
      </div>
      <div class="content__box">
        <h4>Como apostar</h4>
        <p>Para apostar você precisa ser maior de 18 anos e fazer o cadastro no site de um Jockey Club com os seus dados. Depois basta selecionar o seu palpite e efetuar o pagamento. Nos espaços físicos basta fazer a aposta portando o seu documento.</p>
      </div>
      <div class="content__box">
        <h4>Preços</h4>
        <p>Os preços no Turfe são variados, pois existem diversos tipos de apostas. Além disso os Jockeys não são ligados. Cada local tem o seu próprio sistema, com suas respectivas competições. Desta forma cada espaço estipula um valor de cobrança.</p>
      </div>
      <div class="content__box">
        <h4>Conclusão</h4>
        <p>São muitas opções de apostas e agora com a Internet fica ainda mais fácil apostar no Turfe, pois você não precisa mais se deslocar até o Jockey.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content{
  padding-top: 50px;
  padding-bottom: 50px;
  &__box{
    &:not(:first-child){
      margin-top: 26px;
    }
  }
  h4{
    color: #212121;
    font-family: 'Titillium Web', sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    &:after{
      content:"";
      width: 35px;
      height: 3px;
      display: block;
      background: #FFEB3B;
      margin-top: 2px;
    }
  }
  p{
    color: #70727B;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.44;
    margin-bottom: 12px;
  }
  ul{
    li{
      color: #70727B;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.44;
      position: relative;
      padding-left: 20px;
      &:before{
        content: "";
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        background: #00C853;
      }
    }
  }
}
</style>