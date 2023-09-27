<template>
  <section class="winning">
    <div class="container">
      <h2 class="title">
        <span>
          ESTRATÉGIA <span class="text-red">VENCEDORA,</span> <br>SEGURA E <span class="text-red">COMPROVADA</span>
          <svg width="323" height="145" viewBox="0 0 323 145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M298.187 73.6376C298.723 78.7392 295.797 83.8804 289.249 88.7787C282.741 93.6475 272.939 98.0472 260.494 101.714C235.624 109.042 200.557 113.34 161.201 112.825C121.845 112.31 85.7773 107.081 59.298 99.0813C46.0475 95.0782 35.2936 90.4095 27.7433 85.3567C20.1475 80.2734 16.1321 75.0413 15.5964 69.9397C15.0607 64.8382 17.9868 59.6969 24.5344 54.7987C31.0428 49.9298 40.8445 45.5302 53.2894 41.8632C78.1592 34.5354 113.226 30.237 152.583 30.752C191.939 31.267 228.006 36.4962 254.486 44.496C267.736 48.4992 278.49 53.1678 286.04 58.2206C293.636 63.3039 297.652 68.5361 298.187 73.6376Z" stroke="white" stroke-width="3.27526"/><path d="M307.71 74.6606C308.246 79.7621 305.32 84.9034 298.772 89.8016C292.263 94.6705 282.462 99.0701 270.017 102.737C245.147 110.065 210.08 114.363 170.724 113.848C131.367 113.333 95.2999 108.104 68.8205 100.104C55.5701 96.1011 44.8162 91.4324 37.2659 86.3796C29.6701 81.2963 25.6547 76.0642 25.119 70.9627C24.5833 65.8611 27.5093 60.7198 34.057 55.8216C40.5654 50.9528 50.367 46.5531 62.812 42.8862C87.6818 35.5583 122.749 31.2599 162.105 31.7749C201.461 32.2899 237.529 37.5192 264.008 45.519C277.259 49.5221 288.013 54.1908 295.563 59.2436C303.159 64.3269 307.174 69.559 307.71 74.6606Z" stroke="white" stroke-width="3.27526"/></svg>
        </span>
      </h2>
      <div class="winning__right">
        <div class="winning__item winning__item-first">
          <img src="@/assets/winn-1.png" alt="">
          <span>R$600</span>
          <img src="@/assets/winn-4.png" alt="">
          <span>R$1.245</span>
        </div>
        <div class="winning__item">
          <img src="@/assets/winn-2.png" alt="">
          <span>R$3.600</span>
          <img src="@/assets/winn-3.png" alt="">
          <span>R$1.640</span>
        </div>
      </div>
      <img class="winning__svg" src="@/assets/winning-svg.svg" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.winning{
  padding-top: res(70, 130);
  padding-bottom: res(70, 130);
  .title{
    text-align: left;
    margin-bottom: 50px;
    @media(min-width:768px){
      margin-bottom: 0;
      width: 50%;
      position: sticky;
      top: 100px;
    }
    @media(min-width:1200px){
      font-size: 40px;
      margin-top: 70px;
    }
    span{
      display: inline;
      position: relative;
    }
    svg{
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(20%, -36%);
      z-index: -1;
      width: res(217, 323);
      height: auto;
      @media(min-width:768px){
        transform: translate(15%, -34%);
      }
    }
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  &__right{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 30px;
    @media(min-width:768px){
      width: 50%;
      padding-left: 0;
    }
  }
  &__item{
    width: 50%;
    padding: 0 res(10, 20);
    img{
      display: block;
      width: 100%;
    }
    span{
      color: var(--red);
      text-align: center;
      font-size: res(12, 25);
      font-weight: 700;
      line-height: 91.5%;
      text-transform: uppercase;
      display: block;
      margin-top: 18px;
      & + img{
        margin-top: 37px;
      }
    }
    &-first{
      padding-top: 50%;
    }
  }
  &__svg{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: -1;
  }
}
</style>