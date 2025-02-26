
<template>
  <template v-if="!format">
    <h3>Adicione um video usando um arquivo do seu dispositivo</h3>

    <div class="flex flex-col items-end">
      <font-awesome-icon @click="onClearVideo()" :icon="['fas', 'trash']" class="bg-red-400 h-10 w-7 rounded-lg mb-3 text-white py-2 px-2 cursor-pointer"/>
      <video v-if="videoUrl" :src="videoUrl" controls></video>
    </div>

    <div v-if="!videoUrl" @click="inputFileRef?.click()" class="cursor-pointer border border-dashed hover:border-4 text-zinc-600 border-indigo-200 py-10 px-10 flex flex-col items-center rounded-lg" ref="dropZoneRef">
      <span class="text-lg">{{ props.data.title }}</span>
      <small>
        Formatos aceitos: 
        <u class="mx-1" v-for="(item, index) in props.data.dataTypes" :key="index">{{ item }} </u>
      </small>
      <input class="hidden" type="file" ref="inputFileRef" @change="onDropSingleFile">
    </div>
  </template>

  <template v-if="format"> 
    <h3>Adicione um video usando o link do youtube</h3>

    <div class="flex justify-center">
      <input type="text" class="border rounded-lg py-3 px-3 w-full border-indigo-100 outline-indigo-200" v-model="url">

      <button class="px-3 py-2 ml-4 bg-indigo-600 rounded-lg text-white h-full">
        <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      </button>
    </div>
  </template>

  <div class="flex">
    <button class="px-3 py-2 bg-indigo-100 rounded-lg text-indigo-600 mr-2 cursor-pointer" @click="onHandleFormat" :disabled="format">
      <font-awesome-icon :icon="['fas', 'video']" />
    </button>

    <button class="px-3 py-2 bg-indigo-100 rounded-lg text-indigo-600 mr-2 cursor-pointer" @click="onHandleFormat" :disabled="!format">
      <font-awesome-icon :icon="['fab', 'youtube']" />
    </button>
  </div>

  <DefaultPositionSelector @selected="onSelectPosition"/>

  <div class="flex justify-end mt-10">
    <button @click="onSave()"  type="button" class="text-white cursor-pointer bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Salvar</button>
    <button type="button" class="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-zinc-100 rounded-lg   focus:z-10 focus:ring-4">Cancelar</button>
  </div>

</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const props = defineProps<{
  data: { title: string, dataTypes: string[] }
}>() 

const url = ref<string>()

const store = useRoadmapStore();
const emits = defineEmits(['close'])

const format = ref<boolean>(false)

function onHandleFormat() {
  format.value = !format.value
}

const position = ref()
function onSelectPosition(e: any) {
  position.value = e;
}

const file = reactive<{ media: File | null }>({ media: null });
const videoUrl = ref<string | null>(null);
const inputFileRef = ref<HTMLInputElement>()


function onDropSingleFile(event: Event) {
  const input = event.target as HTMLInputElement;
  file.media = input.files ? input.files[0] : null;

  if (!file.media) return;

  const acceptedFileTypes = props.data.dataTypes; // Lista de tipos aceitos (ex: ["image/png", "image/jpeg", "video/mp4"])

  // if (!acceptedFileTypes.includes(file.media.type)) return;

  videoUrl.value = URL.createObjectURL(file.media);
}

function onClearVideo() {
  videoUrl.value = null;
  file.media = null;
}

function onSave() {
  if(!videoUrl) { return }

  const content = {
    type: 'video',
    file: file.media,
    videoSrc: file.media ? videoUrl : url.value,
    embed: file.media ? false : true,
    position: position.value
  }

  store.onPushNewContent(content)

  console.log(store.content);
  
  emits('close', true)
}
</script>

<style scoped>

</style>
