<template>
  <section class="text-black body-font space-y-20">
    <div class="text-center">
      <h2 class="text-3xl">Santo Rosario</h2>
    </div>
    <div class="card bg-neutral text-neutral-content w-72 h-[600px]">
      <div class="card-body items-center text-center space-y-4">
        <h2 class="card-title">Rezar Santo Rosario</h2>
        <div class="text-blue-400 card-actions flex flex-col items-center">
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
  </section>
</template>
