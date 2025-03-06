
<template>
  <div class="flex flex-col bg-zinc-800 px-6 py-5 rounded-lg h-full">
    <slot name="prepend"></slot>
    <h3 class="text-2xl mt-2 text-zinc-50">{{ props.title }}</h3>
    <span class="opacity-90 mt-5 text-zinc-50"> {{ props.subtitle }}</span>
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
