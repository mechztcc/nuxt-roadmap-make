<template>
  <button
    @click="showModal = !showModal"
    class="bg-zinc-900 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2 cursor-pointer"
  >
    <font-awesome-icon :icon="data.icon" class="icon" />
  </button>

  <DefaultModal v-if="showModal" @close="showModal = !showModal"> 
    <template #header>
      <h3 class="text-xl">Adicionar Imagem</h3>
    </template>
    <template #body>
      <h1 class="">teste</h1>
    </template>
  </DefaultModal>
</template>

<script setup lang="ts">
import { useModalStore } from '~/stores/modal';

interface IButton {
  name: string
  icon: string[]
}

const props = defineProps<{
  data: IButton
}>()

const showModal = ref<boolean>(false)
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
