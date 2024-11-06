import NotFound404 from "@/modules/common/pages/NotFound404.vue";
import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [

    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/biblia',
          name: 'biblia',
          component: () => import('@/modules/landing/pages/BibliaPage.vue'),
        },
        {
          path: '/rosario',
          name: 'rosario',
          component: () => import('@/modules/landing/pages/RosarioPage.vue'),
        },
        {
          path: '/misterios-gloriosos',
          name: 'gloriosos',
          component: () => import('@/modules/rosario/pages/MisteriosGloriosos.vue'),
        },
        {
          path: '/misterios-luminosos',
          name: 'luminosos',
          component: () => import('@/modules/rosario/pages/MisteriosLuminosos.vue'),
        },
        {
          path: '/misterios-gozosos',
          name: 'gozosos',
          component: () => import('@/modules/rosario/pages/MisteriosGozosos.vue'),
        },
        {
          path: '/misterios-dolorosos',
          name: 'dolorosos',
          component: () => import('@/modules/rosario/pages/MisteriosDolorosos.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: ( route ) => {
            const id = Number(route.params.id);

            if( id < 1 ){
              return {id: 1};
            }

            return isNaN(id) ? { id: 1 } : { id }
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ]
    },

    // not found

    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    }
  ]
})

export default router;
