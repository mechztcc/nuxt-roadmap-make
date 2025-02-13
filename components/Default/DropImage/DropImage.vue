
<template>
    <div class="flex flex-col items-end" v-if="imageUrl">
      <font-awesome-icon @click="onClearImage()" :icon="['fas', 'trash']" class="bg-red-400 h-10 w-7 rounded-lg text-white py-2 px-2 cursor-pointer"/>
      <img class="uploaded" :src="imageUrl" alt="">
    </div>
  
    <div v-if="!imageUrl" class="border border-dashed hover:border-4 text-zinc-600 border-indigo-200 py-10 px-10 flex flex-col items-center rounded-lg" ref="dropZoneRef">
      <span class="text-lg">{{ props.data.title }}</span>
      <small>
        Formatos aceitos: 
        <u class="mx-1" v-for="(item, index) in props.data.dataTypes" :key="index">{{ item }} </u>
      </small>
    </div>

    <div class="flex flex-col">
      <span class="mt-10 text-xl">Tamanho da imagem</span>
      <small class="text-zinc-600">Selecione o tamanho no qual a imagem deve ocupar em tela</small>
    </div>

    <div class="flex justify-between mt-2">
      <div class="flex flex-col rounded-lg cursor-pointer" @click="onHandleAlignType('half')">
        <img src="https://www.figma.com/community/resource/eda6e333-6ad7-4c50-affb-2b9c75a99ef4/thumbnail" class="rounded-lg align" :class="alignType == 'half' ? 'border-4 border-indigo-600' : ''" alt="">

        <div class="flex justify-between mt-2">
          <span class="text-zinc-600">Ocupar metade do espaço</span>
          <font-awesome-icon v-if="alignType == 'half'" :icon="['fas', 'circle-check']" class="text-indigo-600 fa-xl" />
        </div>
      </div>


      <div class="flex flex-col rounded-lg cursor-pointer" @click="onHandleAlignType('complete')">
        <img src="https://www.figma.com/community/resource/eda6e333-6ad7-4c50-affb-2b9c75a99ef4/thumbnail" class="rounded-lg align" :class="alignType == 'complete' ? 'border-4 border-indigo-600' : ''" alt="">
        <div class="flex justify-between mt-2">
          <span class="text-zinc-600">Ocupar todo espaço</span>
          <font-awesome-icon v-if="alignType == 'complete'" :icon="['fas', 'circle-check']" class="text-indigo-600 fa-xl" />
        </div>

      </div>
    </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const alignType = ref('half')
function onHandleAlignType(type: 'half' | 'complete') {
  alignType.value = type
}

const imageUrl = ref();
const dropZoneRef = ref<HTMLDivElement>()
function onDrop(files: File[] | null) {
  if(files?.length == 0) { return }

  const file = files![0]
  imageUrl.value = URL.createObjectURL(file);
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg'],
  multiple: false,
  preventDefaultForUnhandled: false,
})

function onClearImage() {
  imageUrl.value = null;
}

const props = defineProps<{
  data: { title: string, dataTypes: string[] }
}>()

</script>

<style scoped>

img.uploaded {
  height: 300px;
  width: 100%;
}

img.align {
  width: 100%;
  height: 150px;
}
</style>
