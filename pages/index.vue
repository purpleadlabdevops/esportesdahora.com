<template>
  <section class="page page__presell">
    <div class="container">
      <div class="text-center py-16 md:flex md:gap-x-7">
        <div>
          <p id="num" class="text-accent-yellow text-7xl font-bold"></p>
          <p class="text-accent-yellow text-lg my-4 font-thin">Vagas restantes</p>
          <p class="text-2xl md:text-3xl font-medium leading-tight my-4">Curso <span class="text-accent-yellow">Gratuito</span> + Sala de sinais com operações ao vivo <span class="text-accent-yellow">LIBERADO</span>.</p>
          <p class="text-lg font-medium leading-tight my-3">Lá você terá SINAIS enviados por mim todos os dias, e vai precisar <span class="text-accent-yellow">apenas copiar e colar</span>. Sem precisar saber nada sobre o mercado.</p>
          <p class="text-lg font-medium leading-tight my-3">Todos os dias serão enviados de 10 a 15 sinais <span class="text-accent-yellow">GRATUITOS</span>.</p>
          <p class="text-lg font-medium leading-tight my-3">Receba seu acesso usando o aplicativo <span class="text-accent-yellow">Telegram</span>. É só clicar no botão abaixo:</p>
          <a data-fb-event="lead" href="https://t.me/+szgrJRnPNnpmMzE9" target="_blank" class="flex items-center text-black bg-accent-yellow rounded-2xl py-4 px-6 pulse-scale my-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50" width="50px" height="50px"><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path></svg>
            <span class="leading-tight font-bold ml-2">GARANTA SEU ACESSO AO CURSO GRÁTIS + SALA VIP DE SINAIS.</span>
          </a>
          <p class="font-thin mt-12">Não possui o Telegram instalado no seu celular?</p>
          <div>
            <a data-fb-event="lead" href="https://play.google.com/store/apps/details?id=org.telegram.messenger&amp;hl=pt_BR&amp;gl=US&amp;pli=1" target="_blank" rel="nofollow" class="mx-auto my-4 max-w-xs block">
              <img decoding="async" class="w-full" src="@/assets/android.png" title="android-300×116" alt="android-300x116" loading="lazy">
            </a>
            <a data-fb-event="lead" href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="nofollow" class="mx-auto my-4 max-w-xs block">
              <img decoding="async" class="w-full" src="@/assets/app-store.png" title="app-store-300×92" alt="app-store-300x92" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <img src="@/assets/main.jpeg" alt="">
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
    }
  },
  mounted(){
    setTimeout(()=>{
      document.getElementById('num').classList.add('active')
    }, 500);
  },
}
</script>