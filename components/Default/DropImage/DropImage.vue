
<template>
    <div class="flex flex-col items-end" v-if="imageUrl">
      <font-awesome-icon @click="onClearImage()" :icon="['fas', 'trash']" class="bg-red-400 h-10 w-7 rounded-lg mb-3 text-white py-2 px-2 cursor-pointer"/>
      <img class="uploaded rounded-lg" :src="imageUrl" alt="">
    </div>
  
    <div v-if="!imageUrl" @click="inputFileRef?.click()" class="cursor-pointer border border-dashed hover:border-4 text-zinc-600 border-indigo-200 py-10 px-10 flex flex-col items-center rounded-lg" ref="dropZoneRef">
      <span class="text-lg">{{ props.data.title }}</span>
      <small>
        Formatos aceitos: 
        <u class="mx-1" v-for="(item, index) in props.data.dataTypes" :key="index">{{ item }} </u>
      </small>
      <input class="hidden" type="file" ref="inputFileRef" @change="onDropSingleFile">
    </div>

    <div class="flex flex-col">
      <span class="mt-10 text-xl">Posicionamento da imagem</span>
      <small class="text-zinc-600">Selecione o tamanho no qual a imagem deve ocupar em tela</small>
    </div>

    <div class="grid grid-cols-6 gap-1">
      <div class="col-span-1" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">
        <div class="flex rounded-lg h-20 w-full" :class="hasSelected(item) ? 'bg-zinc-900' : 'bg-indigo-100'"  @click="onSelectSize(item)"></div>
      </div>
    </div>

    <div class="flex flex-col">
      <span class="mt-5 text-xl">Bordas</span>
      <small class="text-zinc-600">Selecione qual tipo de borda você deseja</small>
    </div>

    <div class="grid grid-cols-6 gap-1">
      <div class="col-span-1" v-for="(item, index) in borders" :key="index" @click="onSelectBorderType(item)">
        <div :class="[`flex h-20 w-full cursor-pointer rounded-${item}`, selectedBorder == item ? 'bg-zinc-900' : 'bg-indigo-200']"></div>
      </div>
    </div>

    <div class="flex justify-end mt-10 mb-5">
      <button @click="onSave()"  type="button" class="text-white cursor-pointer bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Salvar</button>
      <button type="button" class="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-zinc-100 rounded-lg   focus:z-10 focus:ring-4">Cancelar</button>
    </div>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { useRoadmapStore } from '~/stores/roadmap'
import { ref, reactive } from 'vue' 

const store = useRoadmapStore();

const emits = defineEmits(['close'])

const props = defineProps<{
  data: { title: string, dataTypes: string[] }
}>()

const size = ref<number[]>([])
function onSelectSize(item: number) {
  const index = size.value.indexOf(item);

  if(size.value.includes(item)) {
    size.value.splice(index)
    onFillEmptyValues()
    return
  }

  if(!size.value.includes(item)) {
    if(size.value.length >= 2) { return }
    size.value.push(item)
    onFillEmptyValues()
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

const borders = ref<string[]>(['none', 'lg', '2xl', '4xl', 'full'])
const selectedBorder = ref<string>()

function onSelectBorderType(type: string) {
  if(selectedBorder.value == type) {
    selectedBorder.value = '';
    return;
  }

  selectedBorder.value = type
}

const file = reactive<{ image: File | null}>({ image: null });

const imageUrl = ref();
const dropZoneRef = ref<HTMLDivElement>()
const inputFileRef = ref<HTMLInputElement>()

function onDrop(files: File[] | null) {
  if(files?.length == 0) { return }

  file.image = files![0]
  imageUrl.value = URL.createObjectURL(file.image);
}

function onDropSingleFile(event: Event) {
  const input = event.target as HTMLInputElement;
  file.image  = input.files ? input.files[0] : null;
  const acceptedFileTypes = props.data.dataTypes;

  if (!file) { return }
  if (!acceptedFileTypes.includes(file.image!.type)) { return } 

  file.image ? imageUrl.value = URL.createObjectURL(file.image) : null;
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

function onSave() {
  if(!file.image || size.value.length == 0) { return }

  const content = {
    type: 'img',
    file: file.image,
    fileSrc: file.image ? URL.createObjectURL(file.image) : null,
    border: selectedBorder.value,
    position: {
      start: size.value[0],
      size: size.value.length
    }
  }
  store.onPushNewContent(content)
  emits('close', true)
}
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
