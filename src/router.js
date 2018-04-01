import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects'
import ProjectDetail from './views/ProjectDetail'
import {EventBus} from "./main";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        order: 1
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
          order: 0
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
          order: 3
      }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetail,
      meta: {
          order: 4
      },
      props: (route) => ({id: parseInt(route.params.id)})
    }
  ]
});

router.afterEach((to, from, next) => {
    EventBus.$emit('after-route', to, from);
});

router.beforeEach((to, from, next) => {
    EventBus.$emit('before-route', to, from);
    next()
});


export default router;
