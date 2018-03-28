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
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetail,
      props: (route) => ({id: parseInt(route.params.id)})
    }
  ]
});

router.afterEach(() => {
    EventBus.$emit('after-route');
});

export default router;
