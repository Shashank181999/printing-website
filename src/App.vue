<template>
  <div id="app">
    <Header />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition
          :css="false"
          mode="out-in"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <SocialSidebar />
    <ChatBot />
    <ServiceRequestForm
      v-if="showServiceForm"
      @close="showServiceForm = false"
    />
  </div>
</template>

<script setup>
import { ref, provide, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SocialSidebar from './components/SocialSidebar.vue'
import ChatBot from './components/ChatBot.vue'
import ServiceRequestForm from './components/ServiceRequestForm.vue'

gsap.registerPlugin(ScrollTrigger)

const showServiceForm = ref(false)

const openServiceForm = () => {
  showServiceForm.value = true
}

provide('openServiceForm', openServiceForm)

// ---------- Global Lenis smooth scroll ----------
let lenis = null
let rafTicker = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })
  lenis.on('scroll', ScrollTrigger.update)
  rafTicker = (time) => lenis && lenis.raf(time * 1000)
  gsap.ticker.add(rafTicker)
  gsap.ticker.lagSmoothing(0)
  // Expose globally so routing / nav clicks can scrollTo
  window.__lenis = lenis
})

onBeforeUnmount(() => {
  if (rafTicker) gsap.ticker.remove(rafTicker)
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
  window.__lenis = null
})

// ---------- Smooth page transitions ----------
let isFirstLoad = true

const onBeforeEnter = (el) => {
  if (isFirstLoad) {
    // First load / reload — don't animate, just show instantly
    gsap.set(el, { opacity: 1, y: 0 })
    isFirstLoad = false
    return
  }
  gsap.set(el, { opacity: 0, y: 16 })
}

const router = useRouter()

const onEnter = (el, done) => {
  if (el.style.opacity === '1') {
    ScrollTrigger.refresh()
    done()
    return
  }
  // Scroll to top first
  window.scrollTo(0, 0)
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
    onComplete: () => {
      ScrollTrigger.refresh()
      // After page renders, scroll to hash if present
      const hash = router.currentRoute.value.hash
      if (hash) {
        nextTick(() => {
          setTimeout(() => {
            const target = document.querySelector(hash)
            if (target) {
              const top = target.getBoundingClientRect().top + window.scrollY - 80
              if (lenis) {
                lenis.scrollTo(top, { duration: 1 })
              } else {
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }
          }, 100)
        })
      }
      done()
    },
  })
}

const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: done,
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');

:root {
  /* Colors - from logo */
  --bg-primary: #faf9f7;
  --bg-secondary: #f5f4f0;
  --bg-cream: #f0ebe3;
  --bg-dark: #2d2d2d;
  --bg-teal: #2E8BC0;
  --bg-teal-dark: #1a6fa0;

  --text-primary: #2d2d2d;
  --text-secondary: #666666;
  --text-light: #999999;
  --text-white: #ffffff;

  /* Logo colors */
  --accent-teal: #2E8BC0;
  --accent-teal-light: #4AABDE;
  --color-green: #7CB342;
  --color-blue: #4AABDE;
  --color-yellow: #FDD835;
  --color-red: #D32F2F;

  --border-light: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.12);

  /* Typography
     --font-sans:    body copy (Poppins)
     --font-display: page/section headings (Bebas Neue, condensed display)
     --font-serif:   alias of --font-display so legacy classes pick it up
     --font-accent:  small caps / kickers / labels (Oswald) */
  --font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Bebas Neue', 'Anton', 'Oswald', -apple-system, sans-serif;
  --font-serif: 'Bebas Neue', 'Anton', 'Oswald', -apple-system, sans-serif;
  --font-accent: 'Oswald', 'Bebas Neue', sans-serif;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
}

/* Typography — display headings use Bebas Neue */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.005em;
  text-transform: uppercase;
}

/* When Lenis is active, it manages scroll — keep html/body friendly */
html.lenis,
html.lenis body {
  height: auto;
}
html.lenis-smooth {
  scroll-behavior: auto !important;
}

/* Section Label */
.section-label {
  font-family: var(--font-accent);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 16px;
}

/* Section Title */
.section-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 78px);
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 0.95;
  letter-spacing: 0.005em;
  text-transform: uppercase;
}

.section-title em,
.section-title i {
  font-style: normal;
  font-weight: 400;
  color: var(--accent-teal);
}

/* Section Description */
.section-desc {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 540px;
}

/* Primary Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--accent-teal);
  color: var(--text-white);
  border: none;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--accent-teal-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(46, 139, 192, 0.25);
}

/* Secondary Button */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  background: var(--text-primary);
  color: var(--text-white);
}

/* Text Link */
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  transition: all var(--transition-base);
}

.text-link:hover {
  gap: 12px;
  color: var(--accent-teal);
}

.text-link svg {
  transition: transform var(--transition-base);
}

.text-link:hover svg {
  transform: translateX(4px);
}

/* Tags */
.tag {
  display: inline-block;
  padding: 6px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* Form inputs */
input, textarea, select {
  font-family: var(--font-sans);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-medium);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-light);
}

/* Selection */
::selection {
  background: var(--accent-teal);
  color: var(--text-white);
}

</style>
