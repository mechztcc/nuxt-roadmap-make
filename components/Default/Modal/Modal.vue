
<template>
    <div  id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow-sm ">
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-indigo-200">
                  <slot name="header" />
                  
                  <button type="button" @click="onClose()" class="bg-zinc-100 cursor-pointer rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5 space-y-4">
                <slot name="body"/>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center p-4 md:p-5 border-t border-indigo-200">
                  <button data-modal-hide="default-modal" type="button" class="text-white cursor-pointer bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                  <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-zinc-100 rounded-lg   focus:z-10 focus:ring-4">Decline</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

function onClose() {
  emit('close', true)
}

</script>

<style scoped>
</style>
