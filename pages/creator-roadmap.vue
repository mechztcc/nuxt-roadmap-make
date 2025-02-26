<template>
  <div class="grid grid-cols-6">
    <div class="col-span-4 col-start-2">
      <CreatorContainer />
    </div>
  </div>

  <div class="grid grid-cols-6 gap-5">
    <div :class="['mt-5', `col-start-${item.position?.start} col-span-${item.position?.size}`]"  v-for="(item, index) in store.content">
      <img :class="[`w-full h-auto rounded-${item.border}`]" :src="item.fileSrc" alt="" :key="index" v-if="item.type == 'img'">

      <div class="flex px-5 py-5 bg-white rounded-lg w-full " v-if="item.type == 'text'">
        <p class="w-full" v-html="item.html"></p>
      </div>

      <video :src="item.videoSrc" v-if="item.type == 'video'"></video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoadmapStore } from '~/stores/roadmap'

const store = useRoadmapStore();


</script>

<style>


</style>