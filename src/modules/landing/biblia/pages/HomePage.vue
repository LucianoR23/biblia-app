<template>
  <div class="text-center flex flex-col items-center space-y-5">
    <div class="card bg-neutral text-neutral-content w-72">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Buscar en la biblia</h2>
        <select class="select select-primary w-1/2 max-w-xs" v-model="selectedLibro" @change="cargarCapitulos">
          <option disabled selected>Seleccione un Libro</option>
          <option v-for="libro in libros" :key="libro.abrev" :value="libro">
            {{ libro.names[0] }}
          </option>
        </select>
        <select class="select select-primary w-1/2 max-w-xs" v-model="selectedCapitulo" v-if="capitulos.length > 0">
          <option disabled selected>Capitulo</option>
          <option v-for="capitulo in capitulos" :key="capitulo" :value="capitulo">
            {{ capitulo }}
          </option>
        </select>
        <select class="select select-primary w-1/2 max-w-xs">
          <option disabled selected>Versiculos</option>
          <option>1</option>
          <option>2</option>
        </select>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buscar</button>
          <button class="btn btn-error">Borrar</button>
        </div>
      </div>
    </div>
    <div class="card bg-neutral text-neutral-content w-72">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Rezar Santo Rosario</h2>
        <div class="card-actions justify-evenly">
          <button class="btn btn-lg">Domingo</button>
          <button class="btn btn-lg">Lunes</button>
          <button class="btn btn-lg">Martes</button>
          <button class="btn btn-lg">Miercoles</button>
          <button class="btn btn-lg">Jueves</button>
          <button class="btn btn-lg">Viernes</button>
          <button class="btn btn-lg">Sabado</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBiblia } from '../composable/useBiblia';


  const { capitulos, cargarCapitulos, libros, selectedCapitulo, selectedLibro } = useBiblia();

</script>
