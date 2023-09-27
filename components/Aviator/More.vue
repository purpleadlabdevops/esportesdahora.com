<template>
  <section class="more">
    <div class="container">
      <h3 class="subtitle">MAIS DE</h3>
      <h2 class="title">R$464.567,37</h2>
      <h3 class="subtitle">PELOS JOGADORES</h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.more{
  background: var(--red);
  padding: 30px 0;
  &:before{
    display: none;
  }
  .title{
    margin-top: res(5, 10);
    margin-bottom: res(5, 10);
    @media(min-width:1200px){
      font-size: 50px;
    }
  }
}
</style>