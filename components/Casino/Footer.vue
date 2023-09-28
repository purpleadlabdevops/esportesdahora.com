<template>
  <footer class="footer">
    <div class="container">
      <img src="@/assets/aposta.png" alt="">
      <ul>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Jogo Responsável</a></li>
        <li><a href="#">Termos e Condições</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  background: #212121;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  a{
    text-decoration: none;
    color: #FFF;
    font-family: 'Titillium Web', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
  ul{
    display: flex;
  }
  li{
    &:not(:first-child){
      margin-left: 30px;
    }
  }
}
</style>