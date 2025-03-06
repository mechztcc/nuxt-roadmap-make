
<template>
  <div class="flex flex-col">
    <span class="mt-10 text-xl">Posicionamento do elemento</span>
    <small class="text-zinc-600">Selecione o tamanho no qual o elemento deve ocupar em tela</small>
  </div>

  <div class="grid grid-cols-6 gap-1">
    <div class="col-span-1" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">
      <div class="flex rounded-lg h-20 w-full" :class="hasSelected(item) ? 'bg-zinc-900' : 'bg-indigo-100'"  @click="onSelectSize(item)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['selected'])

const size = ref<number[]>([])
function onSelectSize(item: number) {
  const index = size.value.indexOf(item);

  if(size.value.includes(item)) {
    size.value.splice(index)
    onFillEmptyValues()
    emits('selected', { start: size.value[0], size: size.value.length })
    return
  }

  if(!size.value.includes(item)) {
    if(size.value.length >= 2) { return }
    size.value.push(item)
    onFillEmptyValues()
    emits('selected', { start: size.value[0], size: size.value.length })
    return
  }

}

function onFillEmptyValues() {
  if(size.value.length < 2) { return }
  const [first, second] = size.value.sort((a, b) => a - b);

  for (let i = first + 1; i < second; i++) {
    if (!size.value.includes(i)) {
      size.value.push(i);
    }
  }

  size.value.sort((a, b) => a - b);
}

function hasSelected(item: number) {
  return size.value.includes(item)
}
</script>

<style scoped>
</style>
