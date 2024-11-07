<template>
  <div class="text-center flex flex-col items-center space-y-5">
    <div class="card bg-neutral text-neutral-content w-72">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Buscar en la biblia</h2>
        <span class="caret-slate-50 font-semibold">Seleccione un libro</span>
        <select class="select select-primary w-auto max-w-xs" v-model="libroSeleccionado" @change="cargarCapitulos">
          <option v-for="libro in libros" :key="libro.abrev" :value="libro">
            {{ libro.names[0] }}
          </option>
        </select>
        <span class="caret-slate-50 font-semibold" v-if="capitulos.length > 0">Seleccione un capitulo</span>
        <select class="select select-primary w-1/2 max-w-xs" v-model="capituloSeleccionado" v-if="capitulos.length > 0">
          <option disabled selected>Capitulo</option>
          <option v-for="capitulo in capitulos" :key="capitulo" :value="capitulo">
            {{ capitulo }}
          </option>
        </select>
        <!-- <select class="select select-primary w-1/2 max-w-xs" v-if="capitulos.length > 0">
          <option disabled selected>Versiculos</option>
          <option>1</option>
          <option>2</option>
        </select> -->
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buscar</button>
          <!-- <button class="btn btn-error">Borrar</button> -->
        </div>
      </div>
    </div>
    <div class="card bg-neutral text-neutral-content w-72">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Rezar Santo Rosario</h2>
        <div class="card-actions justify-evenly">
          <RouterLink :to="{name: 'gloriosos'}" class="btn-lg btn">Domingo</RouterLink>
          <RouterLink :to="{name: 'gozosos'}" class="btn-lg btn">Lunes</RouterLink>
          <RouterLink :to="{name: 'dolorosos'}" class="btn-lg btn">Martes</RouterLink>
          <RouterLink :to="{name: 'gloriosos'}" class="btn-lg btn">Miercoles</RouterLink>
          <RouterLink :to="{name: 'luminosos'}" class="btn-lg btn">Jueves</RouterLink>
          <RouterLink :to="{name: 'dolorosos'}" class="btn-lg btn">Viernes</RouterLink>
          <RouterLink :to="{name: 'gozosos'}" class="btn-lg btn">Sabado</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBiblia } from '../composable/useBiblia';


  const { capitulos, cargarCapitulos, libros, capituloSeleccionado, libroSeleccionado } = useBiblia();


</script>
