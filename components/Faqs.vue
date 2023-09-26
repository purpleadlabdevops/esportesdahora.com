<template>
  <section class="faqs">
    <div class="container">
      <h2 class="title">FAQ</h2>
      <div class="faqs__row">
        <div class="faqs__item">
          <div class="box">
            <b>Como funciona?</b>
            Ao entrar na comunidade, você terá acesso ao método desenvolvido por William e todas as informações necessárias com os gabaritos dos jogos para replicar e vencer as partidas. É bem simples. Basta copiar os sinais enviados no grupo e colar nos jogos para ganhar e retirar seu lucro.
          </div>
          <div class="box">
            <b>Como faço para começar?</b>
            Basta clicar no botão, destravar o seu acesso à comunidade e entrar no grupo. Você pode fazer isso pelo seu celular, pelo tablet ou pelo computador. Só precisa ter o aplicativo do Telegram no seu dispositivo.
          </div>
        </div>
        <div class="faqs__item">
          <div class="box">
            <b>Por que é diferente dos outros métodos?</b>
            William desenvolveu a própria estratégia para vencer e já pode testá-la inúmeras vezes, com resultados expressivos e comprovação garantida. São centenas de pessoas lucrando com o método exclusivo desenvolvido por ele, totalmente seguro e eficaz!
          </div>
          <div class="box">
            <b>Qual o passo a passo para começar a jogar?</b>
            Passo 1: Preencha seu nome e e-mail para criar a sua conta e ter acesso ao portal <br><br>
            Passo 2: Finalize o seu cadastro na plataforma <br><br>
            Passo 3: Faça o seu primeiro depósito <br><br>
            Passo 4: Acesse o grupo, pegue os gabaritos e replique no jogo para lucrar!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faqs{
  padding-top: res(50, 100);
  .title{
    margin-bottom: res(30, 60);
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
    b{
      font-size: res(20, 25);
      margin-bottom: 9px;
      display: block;
    }
  }
}
</style>