
<template>
  <button
    @click="onClick"
    class="bg-zinc-800 shadow text-white hover:text-yellow-200 border-zinc-900 border-2 px-2 py-2 h-10 w-10 rounded-3xl mr-2 cursor-pointer hover:rounded-full"
  >
  <div class="icon">
    <slot name="append" />
  </div>

  <slot name="prepend"></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  animated?: boolean
}>()

const emits = defineEmits(['click']);
function onClick() {
  emits('click', true)
}
</script>

<style scoped>

.animated {
  transition: 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.animated:hover {
  opacity: 0.9;
  border: 2px solid oklch(0.274 0.006 286.033);
  background-color: white;
}

.animated:hover .icon{
  opacity: 0.9;
  color: oklch(0.274 0.006 286.033);
}
</style>
