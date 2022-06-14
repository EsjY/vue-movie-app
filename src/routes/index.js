import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'


export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0}
  },
  // page
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      // ':' 동적으로 변경할 수 있음
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})