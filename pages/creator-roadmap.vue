<template>
  <div class="grid grid-cols-6">
    <div class="col-span-4 col-start-2">
      <CreatorContainer />
    </div>
  </div>

  <div class="grid grid-cols-6 gap-5 mb-20">
    <div :class="['mt-5', `col-start-${item.position?.start} col-span-${item.position?.size}`]"  v-for="(item, index) in store.content">
      <div class="flex my-2 justify-end">
        <font-awesome-icon :icon="['fas', 'trash']" class="bg-red-400 h-10 w-7 rounded-lg mb-3 text-white py-2 px-2 cursor-pointer"/>
        <font-awesome-icon :icon="['fas', 'pen-nib']" class="bg-yellow-400 h-10 w-7 mx-2 rounded-lg mb-3 text-white py-2 px-2 cursor-pointer"/>
      </div>

      <img :class="[`w-full h-auto rounded-${item.border}`]" :src="item.fileSrc" alt="" :key="index" v-if="item.type == 'img'">

      <div 
        :class="{
          'flex rounded-lg w-full h-full px-5 py-5': true,
          'bg-white': !item.removeBg
        }"  v-if="item.type == 'text'">
        <p class="w-full" v-html="item.html"></p>
      </div>

      <div class="flex px-5 py-5 bg-white rounded-lg w-full " v-if="item.type == 'audio'">
        <audio controls class="w-full" v-if="item.fileSrc">
          <source :src="item.fileSrc" type="audio/mp3">
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>

      <div class="flex px-5 py-5 bg-white rounded-lg w-full" v-if="item.type == 'video'">
        <video :src="item.videoSrc" controls v-if="!item.embed"></video>
        <iframe width="100%" height="550px" v-if="item.embed" :src="item.videoSrc" frameborder="0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoadmapStore } from '~/stores/roadmap'

const store = useRoadmapStore();

const { data, status } = useFetch('/api/create-page')
console.log(data.value);



</script>

<style>


</style>
