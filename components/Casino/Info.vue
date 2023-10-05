<template>
  <section class="info">
    <div class="container">
      <p>Para usar o nosso site o usuário tem que ter mais de 18 anos. O jogo online é ilegal em alguns países. É sua responsabilidade verificar cuidadosamente os regulamentos locais. <a href="#">Jogue com responsabilidade</a>. Não assumimos qualquer responsabilidade por suas ações. Promovemos o jogo responsável e legal no Brasil.</p>
      <div class="info__images">
        <img src="@/assets/ibjr.png" alt="">
        <img src="@/assets/18.png" alt="">
        <img src="@/assets/gamble.png" alt="">
        <img src="@/assets/gov.png" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info{
  background: #000;
  .container{
    padding-top: 25px;
    padding-bottom: 25px;
  }
  p{
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  a{
    color: #FFF;
  }
  &__images{
    display: flex;
    align-items: center;
    @media(max-width:767px){
      justify-content: center;
    }
    img{
      margin-right: 5px;
      @media(max-width:767px){
        margin-right: 15px;
      }
    }
  }
}
</style>