<template>
  <div id="app">
    <!-- Gold page-transition curtain (Barba-style wipe, driven by GSAP) -->
    <div class="page-curtain" ref="curtainEl" aria-hidden="true">
      <span class="page-curtain-label">Al Falah</span>
    </div>

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
    <WhatsAppButton />
    <ChatBot />
    <ServiceRequestForm
      v-if="showServiceForm"
      @close="showServiceForm = false"
    />
  </div>
</template>

<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import ChatBot from './components/ChatBot.vue'
import ServiceRequestForm from './components/ServiceRequestForm.vue'

gsap.registerPlugin(ScrollTrigger)

const showServiceForm = ref(false)
const curtainEl = ref(null)

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

// ---------- GSAP-driven page transitions (Barba-style) ----------
const onBeforeEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 40 })
}

const onEnter = (el, done) => {
  // Wipe the gold curtain away, reveal the new page
  const tl = gsap.timeline({ onComplete: done })
  tl.to(curtainEl.value, {
    scaleY: 0,
    duration: 0.75,
    ease: 'power4.inOut',
    transformOrigin: 'top center',
  })
    .fromTo(
      el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.35'
    )
    .call(() => {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
      ScrollTrigger.refresh()
    })
}

const onLeave = (el, done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.set(curtainEl.value, { scaleY: 0, transformOrigin: 'bottom center' })
    .to(curtainEl.value, {
      scaleY: 1,
      duration: 0.7,
      ease: 'power4.inOut',
    })
    .to(
      el,
      { opacity: 0, y: -20, duration: 0.45, ease: 'power2.in' },
      '-=0.55'
    )
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

  /* Typography */
  --font-serif: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;

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

/* Typography */
h1, h2, h3, h4 {
  font-family: var(--font-serif);
  font-weight: 300;
  line-height: 1.2;
}

/* Page transition curtain (GSAP-driven, Barba-style wipe) */
.page-curtain {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background:
    radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.08), transparent 60%),
    linear-gradient(135deg, #0a1230 0%, #0052cc 50%, #c9a227 100%);
  transform: scaleY(0);
  transform-origin: bottom center;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}
.page-curtain-label {
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: clamp(36px, 6vw, 80px);
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  mix-blend-mode: overlay;
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
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 16px;
}

/* Section Title */
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 300;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.15;
}

.section-title em,
.section-title i {
  font-style: normal;
  font-weight: 200;
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
