<template>
  <button
    class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2 cursor-pointer"
  >
    <font-awesome-icon :icon="data.icon" class="icon" />
  </button>
</template>

<script setup lang="ts">

interface IButton {
  name: string
  icon: string[]
}

const props = defineProps<{
  data: IButton
}>()

</script>

<style scoped>
button, .icon {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

button:hover {
  transform: rotate(45deg);
  opacity: 0.9;
}

button:hover .icon{
  transform: rotate(-45deg);
  opacity: 0.9;
}

</style>
