import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// Lazy imports — stored so we can prefetch them after first load
const lazyServices = () => import('../views/ServicesPage.vue')
const lazyProducts = () => import('../views/ProductsPage.vue')
const lazyAbout = () => import('../views/AboutPage.vue')
const lazyContact = () => import('../views/ContactPage.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/services',
    name: 'Services',
    component: lazyServices
  },
  {
    path: '/products',
    name: 'Products',
    component: lazyProducts
  },
  {
    path: '/about',
    name: 'About',
    component: lazyAbout
  },
  {
    path: '/contact',
    name: 'Contact',
    component: lazyContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'instant' }
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'instant' }
  }
})

// Prefetch all lazy routes once the page is idle so nav clicks are instant
if (typeof window !== 'undefined') {
  const prefetch = () => {
    lazyServices()
    lazyProducts()
    lazyAbout()
    lazyContact()
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(prefetch)
  } else {
    setTimeout(prefetch, 2000)
  }
}

export default router
