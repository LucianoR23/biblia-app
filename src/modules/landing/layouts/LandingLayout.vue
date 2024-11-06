<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img width="40" height="40" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-bible-easter-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="external-bible-easter-vitaliy-gorbachev-lineal-color-vitaly-gorbachev"/>
        </a>
      </div>
      <nav class="ml-auto space-x-4 space-y-0.4 flex flex-col items-end h-10 sm:space-x-6">
        <div class="space-x-4">
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/biblia">Biblia</RouterLink>
          <RouterLink to="/rosario">Rosario</RouterLink>
          <RouterLink to="/pokemon/1">Pokemon</RouterLink>
        </div>
        <div class="space-x-4">
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-start justify-center py-5">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <RouterView /> -->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Luciano Rodriguez. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<style scoped>



</style>
