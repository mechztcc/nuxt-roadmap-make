<template>
  <div class="flex flex-col justify-between">
    <HomeHeader />
    <HomeBanner />



    <div class="grid grid-cols-3 gap-5 px-10 md:px-60 bg-zinc-900 mt-20 pt-10">
      <div class="col-span-3 mb-10">
        <div class="flex flex-col">
          <h1 class="text-4xl text-center text-zinc-50">
            Para quem consome os guias
          </h1>
        </div>
      </div>
      <div class="col-span-1">
        <HomeAdvantagesCards title="Descubra sua profissão ideal" subtitle="Explore guias completos e encontre a carreira que combina com você.">
          <template #prepend>
            <img class="bg-red-400 px-2 logo rounded-lg" src="~/assets/undraw_heart.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>

      <div class="col-span-1">
        <HomeAdvantagesCards title="Passo a passo para o sucesso" subtitle="Saiba exatamente o que fazer para se tornar um profissional qualificado.">
          <template #prepend>
            <img class="bg-purple-400 px-2 logo rounded-lg" src="~/assets/undraw_dashed-arrow.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>

      <div class="col-span-1">
        <HomeAdvantagesCards title="Aprenda com especialistas" subtitle="Tenha acesso a conteúdos criados por quem vive a profissão no dia a dia.">
          <template #prepend>
            <img class="bg-indigo-400 px-2 logo rounded-lg" src="~/assets/undraw_fun-star.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>
    </div>


    <div class="grid grid-cols-3 gap-5 px-10 md:px-60 bg-zinc-900 pt-30">
      <div class="col-span-3 mb-10">
        <div class="flex flex-col">
          <h1 class="text-4xl text-center text-zinc-50">
            Para quem cria os guias
          </h1>
        </div>
      </div>
      <div class="col-span-1">
        <HomeAdvantagesCards title="Transforme sua experiência em um guia" subtitle="Compartilhe seu conhecimento e ajude outras pessoas a seguirem seu caminho.">
          <template #prepend>
            <img class="bg-red-400 px-2 logo rounded-lg" src="~/assets/undraw_rocket.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>

      <div class="col-span-1">
        <HomeAdvantagesCards title="Construa sua autoridade no mercado" subtitle="Torne-se referência na sua área ao ensinar e inspirar novos profissionais.">
          <template #prepend>
            <img class="bg-purple-400 px-2 logo rounded-lg" src="~/assets/undraw_star.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>

      <div class="col-span-1">
        <HomeAdvantagesCards title="Monetize seu conhecimento" subtitle="Gere valor com seus guias e seja recompensado pelo seu conteúdo.">
          <template #prepend>
            <img class="bg-indigo-400 px-2 logo rounded-lg" src="~/assets/undraw_coffee.svg" alt="">
          </template>
        </HomeAdvantagesCards>
      </div>
    </div>

    <div class="flex">
      <img src="~/assets/wave.svg" fill="#1b1718" alt="" style="margin-top: -1px;">
    </div>
    <HomeFooter />
  </div>
</template>

<script lang="ts" setup>



</script>

<style>
.logo {
  height: 30px;
  width: 30px;
}

h1 {
}
</style>