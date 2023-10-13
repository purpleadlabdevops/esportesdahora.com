<template>
  <section class="page page__presell">
    <div class="container">
      <div class="md:flex md:gap-x-7 py-16 text-center">
        <div>
          <p id="num" class="font-bold text-7xl text-accent-yellow"></p>
          <p class="font-thin my-4 text-accent-yellow text-lg">Vagas restantes</p>
          <p class="font-medium leading-tight md:text-3xl my-4 text-2xl">Curso <span class="text-accent-yellow">Gratuito</span> + Sala de sinais com operações ao vivo <span class="text-accent-yellow">LIBERADO</span>.</p>
          <p class="font-medium leading-tight my-3 text-lg">Lá você terá SINAIS enviados por mim todos os dias, e vai precisar <span class="text-accent-yellow">apenas copiar e colar</span>. Sem precisar saber nada sobre o mercado.</p>
          <p class="font-medium leading-tight my-3 text-lg">Todos os dias serão enviados de 10 a 15 sinais <span class="text-accent-yellow">GRATUITOS</span>.</p>
          <p class="font-medium leading-tight my-3 text-lg">Receba seu acesso usando o aplicativo <span class="text-accent-yellow">Telegram</span>. É só clicar no botão abaixo:</p>
          <a href="https://track.esportesdahora.com/click" target="_blank" class="bg-accent-yellow flex items-center my-7 pulse-scale px-6 py-4 rounded-2xl text-black">
            <div>
              <svg width="50" height="50" style="display: block"><path d="M25 2c12.703 0 23 10.297 23 23S37.703 48 25 48 2 37.703 2 25 12.297 2 25 2zm7.934 32.375c.423-1.298 2.405-14.234 2.65-16.783.074-.772-.17-1.285-.648-1.514-.578-.278-1.434-.139-2.427.219-1.362.491-18.774 7.884-19.78 8.312-.954.405-1.856.847-1.856 1.487 0 .45.267.703 1.003.966.766.273 2.695.858 3.834 1.172 1.097.303 2.346.04 3.046-.395.742-.461 9.305-6.191 9.92-6.693.614-.502 1.104.141.602.644-.502.502-6.38 6.207-7.155 6.997-.941.959-.273 1.953.358 2.351.721.454 5.906 3.932 6.687 4.49.781.558 1.573.811 2.298.811.725 0 1.107-.955 1.468-2.064z"></path></svg>
            </div>
            <span class="font-bold leading-tight ml-2">GARANTA SEU ACESSO AO CURSO GRÁTIS + SALA VIP DE SINAIS.</span>
          </a>
          <p class="font-thin mt-12">Não possui o Telegram instalado no seu celular?</p>
          <div>
            <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&amp;hl=pt_BR&amp;gl=US&amp;pli=1" target="_blank" rel="nofollow" class="block max-w-xs mx-auto my-4">
              <img decoding="async" class="w-full" src="@/assets/android.png" title="android-300×116" alt="android-300x116" loading="lazy">
            </a>
            <a href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="nofollow" class="block max-w-xs mx-auto my-4">
              <img decoding="async" class="w-full" src="@/assets/app-store.png" title="app-store-300×92" alt="app-store-300x92" loading="lazy">
            </a>
          </div>
        </div>
        <div><img src="@/assets/main.jpeg" alt=""></div>
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
