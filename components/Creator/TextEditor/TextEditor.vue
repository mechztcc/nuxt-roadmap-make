
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

          <select class="px-3 py-2 rounded-lg bg-indigo-200 outline-none" @change="onChangeFontSize($event.target)">
            <option value="10">h1</option>
            <option value="12">h2</option>
            <option value="15">h3</option>
            <option value="18">h4</option>
            <option value="20">h5</option>
            <option value="24">h6</option>
          </select>
        </div>

        <editor-content :editor="editor" />
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
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Editor, EditorContent } from '@tiptap/vue-3'
import type { RefSymbol } from '@vue/reactivity'

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
function onChangeFontSize(level: any) {
  const value = level['value']
  console.log(value);
  
  editor.value?.chain().focus().setMark('textStyle', { fontSize: value }).run()
}

onMounted(() => {
  editor.value = new Editor({
    extensions: [
    StarterKit, 
    ListItem, 
    TextStyle, 
    Highlight,
    TextAlign.configure(
      {
       types: ['heading', 'paragraph'], 
      }
    ),
    ],
    content: '<p>Edite este texto!</p>',
  })
})

function onSave() {
  const html = editor.value.getHTML()

  const content = {
    type: 'text',
    html
  }
}

const showModal = ref<boolean>(false)
function onClick(e: any) {
  showModal.value = !showModal.value
}
</script>

<style scoped>

.ProseMirror {
  height: 300px;
}

.ProseMirror-focused {
  outline: none;
  height: 300px;
}
</style>