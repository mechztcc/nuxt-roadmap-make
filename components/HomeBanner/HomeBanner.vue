
<template>
  <div class="grid grid-cols-2 mx-10">
    <div class="sm:col-span-2 md:col-span-1">
      <div class="flex flex-col justify-center h-full">
        <template v-if="isGuided">
         <h3 class="text-5xl">Encontre o Caminho para Sua Carreira Ideal</h3>
         <subtitle class="text-xl mt-3">
           Descubra guias completos sobre profissões, aprenda os passos para empreender e tome decisões seguras para o seu futuro profissional.
         </subtitle>
        </template>

        <template v-if="!isGuided">
          <h3 class="text-5xl">Compartilhe Seu Conhecimento e Inspire Novas Carreiras</h3>
          <subtitle class="text-xl mt-3">
            Crie guias detalhados sobre sua profissão, ajude outras pessoas a trilhar o mesmo caminho e se torne referência na sua área.
          </subtitle>
         </template>
   
        <button class="text-xl flex w-fit mt-5 px-4 py-3 cursor-pointer justify-center rounded-full bg-zinc-800 shadow text-white hover:text-yellow-200"><b>COMEÇAR AGORA</b></button>
        </div>
       </div>


    <div class="sm:col-span-2 md:col-span-1">
      <img class="w-full h-full" v-if="isGuided" src="https://img.freepik.com/fotos-gratis/mulher-sorridente-com-uma-afro-posando-com-um-sueter-rosa_273609-31988.jpg" alt="">
      <img class="w-full h-full" v-if="!isGuided" src="https://media.istockphoto.com/id/1369136607/photo/positive-millennial-black-man-student-with-books-on-yellow.jpg?s=612x612&w=0&k=20&c=KkmEBqprvv39OzUniJwu401Y59ZZ-k1Crt-Fowxn2CI=" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core';

const isGuided = ref<boolean>(false)

onMounted(() => {
  useIntervalFn(() => {
    isGuided.value = !isGuided.value
  }, 5000)
})
</script>

<style scoped>

img {
  border-top-left-radius: 500px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

