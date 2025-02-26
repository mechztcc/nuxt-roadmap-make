
<template>
  <div>
    <DefaultButton @click="onClick($event)"  animated>
      <template #append>
        <font-awesome-icon :icon="['fas', 'image']" />
      </template>
    </DefaultButton>

    <DefaultModal v-if="showModal" @close="onCloseModal()"> 
      <template #header>
        <h3 class="text-xl">Adicionar Imagem</h3>
      </template>
      <template #body>
        <DefaultDropImage :data="{ dataTypes: ['image/jpeg', 'image/jpg', 'image/webp', 'image/png'], title: 'Selecionar imagem' }" @close="onCloseModal()"/>
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
