<template>
  <section class="copy">
    <div class="container">
      <p>ApostaFacil.org © 2021-2023. Todos os direitos reservados.</p>
      <!-- <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.30624 12C2.30624 17.3537 6.64629 21.6938 12 21.6938C17.3537 21.6938 21.6938 17.3537 21.6938 12C21.6938 6.64629 17.3537 2.30624 12 2.30624C6.64629 2.30624 2.30624 6.64629 2.30624 12Z" fill="white"/><path d="M12 8.5L8 13H16L12 8.5Z" fill="white"/></svg></button> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.copy{
  background: #212121;
  .container{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p{
    color: #FFF;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
  }
  button{
    padding: 0;
    background: none;
    border: none;
  }
  svg{
    display: block;
  }
}
</style>