<template>
  <section class="text-neutral body-font">
    <div class="flex justify-center w-full space-x-2">
      <select class="select select-primary w-1/2 max-w-xs" v-model="libroSeleccionado" @change="cargarCapitulos">
        <option v-for="libro in libros" :key="libro.abrev" :value="libro.names[0]">
          {{ libro.names[0] }}
        </option>
      </select>
      <select class="select select-primary w-auto max-w-xs" v-model="capituloSeleccionado">
        <option disabled selected>Capitulo</option>
        <option v-for="cap in capitulos" :key="cap" :value="cap">
          {{ cap }}
        </option>
      </select>
      <button @click="navegarARuta(libroSeleccionado, capituloSeleccionado)" class="btn btn-primary">Buscar</button>
    </div>
    <div class="join grid grid-cols-2 w-5/6 py-4 mx-auto">
      <RouterLink :to="{ params: { book, capitulo: anteriorCapitulo(capitulo) } }" class="join-item btn btn-outline">Anterior capitulo</RouterLink>
      <RouterLink :to="{ params: { book, capitulo: siguienteCapitulo(capitulo, book) } }" class="join-item btn btn-outline">Siguiente capitulo</RouterLink>
    </div>
    <div class="container px-5 mx-auto">
      <div class="flex flex-col w-full mb-8">
        <h2 class="sm:text-3xl text-lg text-center font-medium mb-1">Libro: {{ book }}</h2>
        <h2 class="sm:text-3xl text-lg text-center font-medium mb-4">Capitulo {{ capitulo }}</h2>
        <span v-if="infoVersiculos.length === 0" class="loading loading-infinity text-warning w-3/5 mx-auto"></span>
        <ol class="list-decimal pl-4 space-y-4">
          <li v-for="versiculo in infoVersiculos" :key="versiculo.id" class="leading-relaxed text-lg">
            {{ versiculo.verse }}
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, watchEffect } from 'vue';
  import { useBiblia } from '../composable/useBiblia';


  const { capitulos, cargarCapitulos, libros, capituloSeleccionado, libroSeleccionado, siguienteCapitulo, anteriorCapitulo, infoVersiculos, cargarInfoVersiculos, navegarARuta } = useBiblia();

  interface Props {
    book: string;
    capitulo: number;
  }

  const { capitulo, book } = defineProps<Props>()


  watchEffect(async () => {
    if (book && capitulo) {
      await cargarInfoVersiculos(capitulo, book);
    }
  });

  onMounted(async () => {
    if (book && capitulo) {
      await cargarInfoVersiculos(capitulo, book);
    }
  });

</script>
