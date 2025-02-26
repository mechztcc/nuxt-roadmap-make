
<template>
  <DefaultButton @click="onClick($event)"  animated>
    <template #append>
      <font-awesome-icon :icon="['fas', 'pen-nib']" />
    </template>
  </DefaultButton>

  <DefaultModal v-if="showModal" @close="showModal = !showModal"> 
    <template #header>
      <h3 class="text-xl">Adicionar Texto</h3>
    </template>
    <template #body>
      <div class="flex flex-col">
        <div class="flex mb-5">
          <button class="px-3 py-2 rounded-lg bg-indigo-200 mr-2" v-for="(item, index) in textOptions" :key="index" @click="item.action">
            <font-awesome-icon :icon="item.icon" />
          </button>

          <button class="px-3 py-2 rounded-lg bg-indigo-200 mr-2" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
            h1
          </button>

          <button class="px-3 py-2 rounded-lg bg-indigo-200 mr-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
            h2
          </button>
          <button class="px-3 py-2 rounded-lg bg-indigo-200 mr-2" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
            h3
          </button>
          <button class="px-3 py-2 rounded-lg bg-indigo-200 mr-2" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()">
            h4
          </button>

        </div>
      </div>

      <div class="flex flex-col editor-container">
        <editor-content :editor="editor" :style="{ height: '300px', width: '1250px' }" :class="'bg-zinc-100 rounded-lg px-5 py-5'"/>
      </div>

      <div class="flex flex-col">
        <DefaultPositionSelector @selected="onSelectPosition"/>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button @click="onSave()"  type="button" class="text-white cursor-pointer bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Salvar</button>
        <button type="button" class="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-zinc-100 rounded-lg   focus:z-10 focus:ring-4">Cancelar</button>
      </div>
    </template>
    
  </DefaultModal>
</template>

<script setup lang="ts">
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { useRoadmapStore } from '~/stores/roadmap'

const store = useRoadmapStore();
const position = ref<{ start: number, size: number }>()

onMounted(() => {
  editor.value = new Editor({
    extensions: [
    StarterKit, 
    ListItem, 
    TextStyle, 
    Highlight,
    TextAlign,
    ],
    content: '<p>Edite este texto!</p>',
  })
})

const textOptions = [
  { 
    type: 'button',
    icon: ['fas', 'italic'],
    action: () => {
      editor.value.chain().focus().toggleItalic().run()
    }
  },
  { 
    icon: ['fas', 'bold'],
    type: 'button',
    action: () => {
      editor.value.chain().focus().toggleBold().run()
    }
  },
  { 
    icon: ['fas', 'align-left'],
    type: 'button',
    action: () => {
      editor.value.chain().focus().setTextAlign('left').run()
    }
  },
  { 
    icon: ['fas', 'align-justify'],
    type: 'button',
    action: () => {
      editor.value.chain().focus().setTextAlign('justify').run()
    }
  },
  { 
    icon: ['fas', 'align-center'],
    type: 'button',
    action: () => {
      editor.value.chain().focus().setTextAlign('center').run()
    }
  },
  { 
    icon: ['fas', 'align-right'],
    type: 'button',
    action: () => {
      editor.value.chain().focus().setTextAlign('right').run()
    }
  },
  { 
    icon: ['fas', 'paintbrush'],
    type: 'button',
  },
  { 
    icon: ['fas', 'paintbrush'],
    type: 'button',
  },

]

const editor = ref()

function onSave() {
  const html = editor.value.getHTML()

  const content = {
    type: 'text',
    position: {
      start: position.value?.start,
      size: position.value?.size 
    },
    html
  }
  store.content.push(content)
  showModal.value = false;
}

const showModal = ref<boolean>(false)
function onClick(e: any) {
  showModal.value = !showModal.value
}

function onSelectPosition(e: any) {
  position.value = e;
}
</script>

<style scoped>

.ProseMirror {
  outline: none !important;
}

.ProseMirror-focused {
  outline: none !important;
}

.editor-container {
  overflow: auto;
}

p { outline: none !important }


h1 {
  font-size: 1.875rem !important;
}

h2 {
  font-size: 1.125rem !important;
}

h3 {
  font-size: 0.875rem !important;
}

h6 {
  font-size: 0.875rem !important;
}

</style>