<template>
  <div>
    <div class="flex flex-col justify-center items-center relative">
      <img
        src="https://i0.wp.com/blog.duogourmet.com.br/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-scaled-1.jpg?fit=1200%2C800&ssl=1"
        alt=""
      />
      <button
        class="px-3 py-2 rounded-md bg-indigo-600 text-white absolute top-1/2"
      >
        Alterar capa
      </button>
    </div>

    <div class="grid grid-cols-3">
      <div class="col-span-1 col-start-2">
        <div
          class="flex items-center justify-between mt-5 bg-white py-3 px-4 rounded-lg"
        >
          <input
            type="text"
            class="text-3xl outline-0"
            placeholder="Título do roadmap"
          />

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 h-10 w-10 rounded-xl"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3">
      <div class="col-span-1 col-start-2">
        <div
          class="flex flex-col items-center justify-between mt-5 bg-white py-3 px-3 rounded-lg"
        >
          <textarea
            class="outline-0 w-full"
            rows="5"
            placeholder="Descrição do roadmap"
          ></textarea>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-full rounded-xl"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3">
      <div class="col-span-1 col-start-2" v-if="optionSelected == 1">
        <div class="mt-5 flex flex-col rounded-lg items-center justify-center bg-white border border-dashed border-indigo-300 h-32 w-full" ref="dropZoneRef">
          <font-awesome-icon :icon="['fas', 'image']" class="fa-lg text-indigo-600"/>
          <h3 class="text-lg text-zinc-700">Arraste a imagem aqui</h3>
        </div>
      </div>
<!-- 
      <div class="col-span-1 col-start-2">
        <EditorContent :editor="editor" />
      </div> -->

      <div class="col-span-1 col-start-2">
        <div class="flex justify-start bg-white px-3 py-3 rounded-lg mt-5">
          <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" class="px-1 py-1 bg-indigo-600 rounded-lg text-white h-7 w-5 mr-5" />

          <div class="flex flex-col w-full">
            <span class="text-lg">Arquivo.txt</span>
            <small>3.65 mb</small>
            <small class="text-zinc-700">Resumo do conteúdo</small>


            <div class="flex justify-end">
              <button class="bg-indigo-600 shadow text-white px-2 py-2 rounded-xl mr-2">
                Baixar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 col-start-2">
        <div class="flex bg-white px-3 py-3 rounded-lg mt-5">
          <font-awesome-icon :icon="['fas', 'link']" class="px-1 py-1 bg-indigo-600 rounded-lg text-white h-7 w-5 mr-5"/>

          <div class="flex flex-col">
            <span class="text-lg"><u>https://www.4shared.com/2Ud21i</u></span>
            <small class="text-zinc-700">Link das video aulas</small>
          </div>
        </div>
      </div>

      <div class="col-span-1 col-start-2" ref="creatorMenuRef">
        <div
          class="flex items-center justify-start mt-5 bg-white py-3 px-3 rounded-lg border border-dashed border-indigo-300"
        >
          <button
            @click="onSelectImageUpload()"
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'image']" />
          </button>

          <button
            @click="onAddTable()"
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'table-list']" />
          </button>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 't']" />
          </button>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'map-location-dot']" />
          </button>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'chart-simple']" />
          </button>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" />
          </button>

          <button
            class="bg-indigo-600 shadow text-white px-2 py-2 mt-2 h-10 w-10 rounded-xl mr-2"
          >
            <font-awesome-icon :icon="['fas', 'code']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDropZone } from '@vueuse/core'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Highlight from '@tiptap/extension-highlight'

const dropZoneRef = ref<HTMLDivElement>()
const creatorMenuRef = ref<HTMLDivElement>()

const optionSelected = ref<number>(0)

const editor = useEditor({
  content: '<p>Hello <strong>world!</strong></p>',
  extensions: [StarterKit, Highlight, Text, Paragraph],
})

function onDrop(files: File[] | null) {
  console.log(files);
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg']
})

function onSelectImageUpload() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('col-span-1', 'col-start-2', 'mt-5');
  
  const image = document.createElement('img');
  image.src = 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg';
  image.classList.add('rounded-lg',)
  image.style.width = '100%';
  
  wrapper.appendChild(image);
  creatorMenuRef.value?.parentNode?.insertBefore(wrapper, creatorMenuRef.value)
}


function onAddTable() {
  const table = document.createElement('table');
  table.classList.add('border', 'border-collapse', 'w-full', 'mt-5'); 
  
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr class="bg-gray-200">
      <th class="border p-2">ID</th>
      <th class="border p-2">Nome</th>
      <th class="border p-2">Idade</th>
    </tr>
  `;
  
  const tbody = document.createElement('tbody');
  
  const data = [
    { id: 1, nome: 'Alberto Paiva', idade: 31 },
    { id: 2, nome: 'Jessica Paiva', idade: 27 },
    { id: 3, nome: 'Groot Label', idade: 2 }
  ];
  
  data.forEach(({ id, nome, idade }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="border p-2 text-center">${id}</td>
      <td class="border p-2">${nome}</td>
      <td class="border p-2 text-center">${idade}</td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  const wrapper = document.createElement('div');
  wrapper.classList.add('col-span-1', 'col-start-2', 'overflow-x-auto', 'bg-white', 'px-3', 'py-3', 'rounded-lg', 'mt-5'); 
  wrapper.appendChild(table);

  creatorMenuRef.value?.parentNode?.insertBefore(wrapper, creatorMenuRef.value);
}

</script>

<style>
img {
  height: 400px;
  object-fit: cover;
  width: 100%;
}
.cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

button {
  cursor: pointer;
}

u {
  cursor: pointer;
}
</style>
