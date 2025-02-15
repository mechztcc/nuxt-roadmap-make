
<template>
  <button
    @click="onClick"
    :class="animated ? 'animated' : ''"
    class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2 cursor-pointer"
  >
  <div class="icon">
    <slot name="append" />
  </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  animated: boolean
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
  transform: rotate(45deg);
  opacity: 0.9;
  border: 3px solid oklch(0.511 0.262 276.966);
  background-color: white;
}

.animated:hover .icon{
  transform: rotate(-45deg);
  opacity: 0.9;
  color: oklch(0.511 0.262 276.966);
}
</style>
