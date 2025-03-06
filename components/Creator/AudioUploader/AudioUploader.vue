
<template>
  <div>
    <DefaultButton  animated @click="onHandleModal()">
      <template #append>
        <font-awesome-icon :icon="['fas', 'volume-low']" />
      </template>
    </DefaultButton>

    <DefaultModal v-if="showModal" @close="onCloseModal()"> 
      <template #header>
        <h3 class="text-xl">Adicionar Audio</h3>
      </template>

      <template #body>
        <div class="flex flex-col items-end"  v-if="audioUrl">
        <font-awesome-icon @click="onClearAudio()" :icon="['fas', 'trash']" class="bg-red-400 h-10 w-7 rounded-lg mb-3 text-white py-2 px-2 cursor-pointer"/>

          <audio controls class="w-full">
            <source :src="audioUrl" type="audio/mp3">
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        <div v-if="!audioUrl"  @click="inputFileRef?.click()" class="cursor-pointer border border-dashed hover:border-4 text-zinc-600 border-indigo-200 py-10 px-10 flex flex-col items-center rounded-lg" ref="dropZoneRef">
          <span class="text-lg">Selecione o arquivo</span>
          <small>
            Formatos aceitos: 
            <u class="mx-1" > audio/mp3 </u>
          </small>
          <input class="hidden" type="file" ref="inputFileRef" @change="onDropSingleFile">
        </div>
        <DefaultPositionSelector @selected="onSelectPosition" />
      </template>

      <template #footer>
        <div class="flex justify-end">
          <button @click="onSave()"  type="button" class="text-white cursor-pointer bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Salvar</button>
          <button type="button" class="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-zinc-100 rounded-lg   focus:z-10 focus:ring-4">Cancelar</button>
        </div>
      </template>
    </DefaultModal>
  </div>
</template>

<script setup lang="ts">
const store = useRoadmapStore();

const showModal = ref<boolean>()
const position = ref()
const file = reactive<{ audio: File | null }>({ audio: null });
const audioUrl = ref();
const inputFileRef = ref<HTMLInputElement>()


function onClearAudio() {
  audioUrl.value = null;
  file.audio = null;
}

function onDropSingleFile(event: Event) {
  const input = event.target as HTMLInputElement;
  file.audio = input.files ? input.files[0] : null;

  if (!file.audio) return;

  audioUrl.value = URL.createObjectURL(file.audio);
}

function onSelectPosition(e: any) {
  position.value = e;
}

function onCloseModal() {
  showModal.value = false;
}

function onHandleModal() {
  showModal.value = !showModal.value
}

function onSave() {
  if(!file.audio) { return}

  const content = {
    type: 'audio',
    file: file.audio,
    fileSrc: file.audio ? URL.createObjectURL(file.audio) : null,
    position: position.value
  }

  store.onPushNewContent(content)
  onCloseModal();  
}

</script>

<style scoped>
</style>

