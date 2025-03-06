
<template>
  <div class="flex flex-col bg-white px-5 py-5 rounded-lg h-full">
    <slot name="prepend"></slot>
    <h3 class="text-2xl mt-2">{{ props.title }}</h3>
    <span> {{ props.subtitle }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ title: string, subtitle: string }>()
</script>

<style scoped>

img {
  height: 30px;
  width: 30px;
}
</style>
