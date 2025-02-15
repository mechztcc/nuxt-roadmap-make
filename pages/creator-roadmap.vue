<template>
  <div class="grid grid-cols-6">
    <div class="col-span-4 col-start-2">
      <CreatorContainer />
    </div>
  </div>

  <div class="grid grid-cols-6">
    <div :class="['mt-5', `col-start-${item.position.start} col-span-${item.position.size}`]"  v-for="(item, index) in store.content">
      <img :class="[`w-full h-auto rounded-${item.border}`]" :src="item.fileSrc" alt="" :key="index" v-if="item.type == 'img'">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoadmapStore } from '~/stores/roadmap'

const store = useRoadmapStore();


</script>

<style>


</style>