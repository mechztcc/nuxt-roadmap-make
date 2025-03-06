
<template>
  <div class="flex">
    <div class="flex">
      <input type="checkbox" v-model="checked" @change="onChange">
      <span class="text-lg mb-0 mx-2">Remover background</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const checked = defineModel({ default: false })
const emits = defineEmits(['change'])

function onChange() {
  emits('change', checked.value)
}
</script>

<style scoped>
</style>
