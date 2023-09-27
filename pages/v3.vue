<template>
  <section class="page page__presell">
    <div class="container">
      <div class="text-center py-16 md:flex md:gap-x-7">
        <div class="md:w-1/2">
          <p id="num" class="text-accent-yellow text-7xl font-bold"></p>
          <p class="text-accent-yellow text-lg my-4 font-thin">Vagas restantes</p>
          <p class="text-2xl md:text-4xl font-medium leading-tight my-4">Acompanhe <span class="text-accent-yellow">AGORA</span> minhas jogadas ao vivo no Aviator e replique para ganhar também + Acesso liberado ao meu curso. <span class="text-accent-yellow">I Essa oferta pode fechar a qualquer momento.</span>.</p>
          <p class="text-lg md:text-xl font-medium leading-tight my-3">Receba todos os dias — em tempo real — de 10 a 15 SINAIS GRATUITOS com o gabarito dos jogos. <span class="text-accent-yellow">Você só vai precisar copiar e colar para ter resultados expressivos e ganhos exponenciais.</span></p>
          <p class="text-lg md:text-xl font-medium leading-tight my-3">Confira agora e comece a aproveitar o Grupo Exclusivo.<span class="text-accent-yellow">É só clicar no botão abaixo:</span></p>
          <a href="https://plecombotionald.com/click" target="_blank" class="flex items-center justify-center text-black bg-accent-yellow rounded-2xl py-4 px-6 pulse-scale my-7"><span class="leading-tight font-bold ml-2 text-xl">QUERO COMEÇAR A GANHAR DINHEIRO AINDA HOJE</span></a>
          <p class="font-thin mt-12">Não possui o Telegram instalado no seu celular?</p>
          <div>
            <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&amp;hl=pt_BR&amp;gl=US&amp;pli=1" target="_blank" rel="nofollow" class="mx-auto my-4 max-w-xs block">
              <img decoding="async" class="w-full" src="@/assets/android.png" title="android-300×116" alt="android-300x116" loading="lazy">
            </a>
            <a href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="nofollow" class="mx-auto my-4 max-w-xs block">
              <img decoding="async" class="w-full" src="@/assets/app-store.png" title="app-store-300×92" alt="app-store-300x92" loading="lazy">
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="@/assets/coach.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  layout: 'presell',
  head() {
    return {
      title: 'Curso Gratuito + Sala Ao Vivo – William – Galera – Esportes da Hora',
      script: [
        { src: '/js/dtpcnt.js' }
      ],
    }
  },
  mounted(){
    setTimeout(()=>{
      document.getElementById('num').classList.add('active')
    }, 500);
  },
}
</script>