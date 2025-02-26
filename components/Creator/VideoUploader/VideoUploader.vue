
<template>
  <div>
    <DefaultButton @click="onClick($event)"  animated>
      <template #append>
        <font-awesome-icon :icon="['fas', 'video']" />
      </template>
    </DefaultButton>
  
    <DefaultModal v-if="showModal" @close="onCloseModal()"> 
      <template #header>
        <h3 class="text-xl">Adicionar Video</h3>
      </template>
      <template #body>
        <DefaultDropVideo :data="{ title: 'Selecionar Video', dataTypes: ['video/3gpp'] }" @close="onCloseModal"/>
      </template>
    </DefaultModal>
  </div>
</template>

<script setup lang="ts">
const showModal = ref<boolean>(false)

function onClick(e: any) {
  showModal.value = !showModal.value
}

function onCloseModal() {
  showModal.value = false;
}
</script>

<style scoped>
</style>
