
<template>
  <div>
    <DefaultButton  @click="onHandleModal()" animated>
      <template #append>
        <font-awesome-icon :icon="['fas', 'chart-simple']" />
      </template>
    </DefaultButton>


    <DefaultModal v-if="showModal" @close="onCloseModal()"> 
      <template #header>
        <h3 class="text-xl">Adicionar Gráfico</h3>
      </template>
      <template #body>
        <div class="flex flex-col">
          <h3 class="">Selecione o tipo de gráfico</h3>
        </div>

        <div class="grid grid-cols-4 gap-5">
          <div class="col-span-2" v-for="(item, index) in 2" :key="index">
            <div class="bg-zinc-50 px-3 py-3 border border-zinc-600 rounded-lg">
                <apexchart
                class="w-full"
                type="bar"
                height="150"
                :options="chartOptions"
                :series="chartSeries"
                ></apexchart>
            </div>
          </div>
        </div>
      </template>
    </DefaultModal>
  </div>
</template>

<script setup lang="ts">
const showModal = ref<boolean>(false)

const chartOptions = ref({
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: true
    }
  },
  xaxis: {
    categories: ['Janeiro', 'Fevereiro', 'Março'],
  },
  yaxis: {
    title: {
      text: 'Vendas'
    }
  },
})

const chartSeries = ref([
  {
    name: 'Vendas',
    data: [10, 20, 15]
  }
])


function onCloseModal() {
  showModal.value = !showModal.value
}

function onHandleModal() {
  showModal.value = true
}

</script>

<style scoped>

.chart-preview {
  height: 200px;
}
</style>
