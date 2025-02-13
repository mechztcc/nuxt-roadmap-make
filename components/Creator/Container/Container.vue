<template>
  <div class="flex items-center justify-start mt-5 bg-white py-3 px-3 rounded-lg border border-dashed border-indigo-300">
    <CreatorButton v-for="(item, index) in options" :data="item" :key="index"/>
  </div>
</template>

<script setup lang="ts">

const options = [
  {
    name: 'Image',
    icon: ['fas', 'image']
  },
  {
    name: 'Video',
    icon: ['fas', 'play']
  },
  {
    name: 'Audio',
    icon: ['fas', 'headphones']
  },
]


</script>

<style scoped>


.vertical-line{
  height: 50px;
  width: 1px;
}

</style>
