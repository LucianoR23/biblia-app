import NotFound404 from "@/modules/common/pages/NotFound404.vue";
import HomePage from "@/modules/landing/biblia/pages/HomePage.vue";

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
          component: () => import('@/modules/landing/biblia/pages/BibliaPage.vue'),
        },
        {
          path: '/rosario',
          name: 'rosario',
          component: () => import('@/modules/landing/biblia/pages/RosarioPage.vue'),
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
          path: '/biblia/:book/:capitulo',
          name: 'biblia',
          props: ( route ) => {
            const book = route.params.book
            const capitulo = Number(route.params.capitulo);

            if( capitulo < 1 ){
              return {
                capitulo: 1,
                book
              };
            }

            if(isNaN(capitulo)){
              return {
                capitulo: 1,
                book
              };
            } else {
              return { capitulo, book }
            }
          },
          component: () => import('@/modules/landing/biblia/pages/BibliaPage.vue'),
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

/*

*/
