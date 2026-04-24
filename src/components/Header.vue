<template>
  <header ref="headerRef" class="header" :class="{ scrolled: isScrolled, hidden: isHidden, 'menu-open': isMobileMenuOpen, 'dark-page': isDarkPage }">
    <div class="header-inner">
      <div class="header-container">
        <!-- Logo with Image -->
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <div class="logo-img-wrapper">
            <img src="/logo-08.png" alt="Al Falah Middle East" class="logo-image" />
            <span class="logo-shine" aria-hidden="true"></span>
          </div>
        </router-link>

        <!-- Navigation -->
        <nav ref="navRef" class="nav" :class="{ open: isMobileMenuOpen }">
          <div class="nav-inner">
            <ul class="nav-links">
              <li v-for="(link, index) in navLinks" :key="link.path" :style="{ '--delay': index * 0.1 + 's' }">
                <router-link
                  v-if="link.route"
                  :to="link.path"
                  @click="closeMobileMenu"
                  :class="{ active: $route.path === link.path }"
                >
                  {{ link.name }}
                </router-link>
                <a v-else :href="link.path" @click="(e) => handleNavClick(e, link)">
                  {{ link.name }}
                </a>
              </li>
            </ul>
            <div class="nav-footer">
              <p>Est. 2020 — Dubai, UAE</p>
              <div class="nav-social">
                <a href="https://facebook.com/alfalahmiddleeast" target="_blank" aria-label="Facebook">FB</a>
                <a href="https://instagram.com/alfalahme" target="_blank" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <a href="tel:+971567268735" class="header-phone" aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <button class="btn-quote" @click="openQuoteForm">
            <span>Get Quote</span>
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMobileMenuOpen }" aria-label="Menu">
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="header-progress">
      <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
const route = useRoute()
const headerRef = ref(null)
const navRef = ref(null)
const isScrolled = ref(false)
const isHidden = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const scrollY = ref(0)
let lastScrollY = 0

const openServiceForm = inject('openServiceForm')

// On the home page, a cinematic dark scene covers the first ~700vh.
// Keep the header in dark-page (light text) mode while it's over the cinematic.
const isDarkPage = computed(() => {
  if (route.path !== '/') return false
  if (typeof window === 'undefined') return true
  // Switch to light-mode header once user has scrolled past the cinematic zone.
  return scrollY.value < window.innerHeight * 6.2
})

const navLinks = [
  { name: 'Home', path: '/', route: true },
  { name: 'About', path: '/about', route: true },
  { name: 'Services', path: '/services', route: true },
  { name: 'Products', path: '/products', route: true },
  { name: 'Contact', path: '/contact', route: true }
]

// Handle smooth scroll for hash links
const handleNavClick = (e, link) => {
  if (!link.route && link.path.includes('#')) {
    e.preventDefault()
    const hash = link.path.split('#')[1]
    const element = document.getElementById(hash)

    if (element) {
      closeMobileMenu()
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If element not found, navigate to home first then scroll
      window.location.href = link.path
    }
  }
}

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''

  if (isMobileMenuOpen.value) {
    gsap.fromTo('.nav-links li',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
    )
    gsap.fromTo('.nav-footer',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.5 }
    )
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const openQuoteForm = () => {
  closeMobileMenu()
  openServiceForm()
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  scrollY.value = currentScrollY
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight

  scrollProgress.value = (currentScrollY / documentHeight) * 100
  isScrolled.value = currentScrollY > 50
  isHidden.value = false

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // Only animate header on first visit, not on every page navigation
  if (!window.__headerAnimated) {
    window.__headerAnimated = true
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Logo: slides down from above + fades in with a slight scale bounce
    tl.fromTo('.logo-image',
      { y: -30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.6)' }
    )
    // Nav links: cascade in from top
    .fromTo('.nav-links li',
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 },
      '-=0.55'
    )
    // Actions (phone + button): slide in from top
    .fromTo('.header-actions > *',
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      '-=0.5'
    )
    .add(() => startLogoIdle(), '+=0.1')
  } else {
    startLogoIdle()
  }
})

// Continuous subtle idle animation on the logo after the intro completes.
// Gentle "breathing" float + a periodic shine sweep.
function startLogoIdle() {
  const img = document.querySelector('.logo-image')
  const shine = document.querySelector('.logo-shine')
  if (!img || !shine) return

  // Breathing float: small Y bob + tiny scale pulse. Loops forever.
  gsap.to(img, {
    y: -3,
    scale: 1.03,
    duration: 2.2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })

  // Shine sweep: runs every ~5s.
  const shineTl = gsap.timeline({ repeat: -1, repeatDelay: 4 })
  shineTl
    .set(shine, { xPercent: -120, opacity: 0 })
    .to(shine, { opacity: 1, duration: 0.15 })
    .to(shine, { xPercent: 120, duration: 1.1, ease: 'power2.inOut' }, '<')
    .to(shine, { opacity: 0, duration: 0.2 }, '-=0.25')
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header.hidden:not(.menu-open) {
  transform: translateY(-100%);
}

.header-inner {
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 10px rgba(0,0,0,0.05);
}

.header.scrolled .header-inner {
  background: rgba(255, 255, 255, 0.99);
  backdrop-filter: blur(20px);
  padding: 8px 0;
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

/* On dark cinematic pages, let the canvas show through */
.header.dark-page .header-inner {
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}
.header.dark-page.scrolled .header-inner {
  background: rgba(4, 8, 15, 0.55);
  backdrop-filter: blur(18px);
  box-shadow: 0 1px 0 rgba(201, 162, 39, 0.15);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
}

.progress-bar {
  height: 100%;
  background: var(--accent-teal);
  transition: width 0.1s linear;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  position: relative;
  z-index: 1001;
}

.logo-img-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: visible;
}

.logo-image {
  height: 64px;
  width: auto;
  display: block;
  will-change: transform;
}

.logo-shine {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 0;
  width: 45%;
  background: linear-gradient(
    110deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.55) 50%,
    rgba(255, 255, 255, 0) 70%,
    transparent 100%
  );
  filter: blur(1px);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}

.logo-name {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.1;
  display: inline-flex;
}

.logo-name .char-mask {
  display: inline-block;
  overflow: hidden;
  line-height: 1.1;
}

.logo-name .char {
  display: inline-block;
  will-change: transform, opacity;
}

.logo-tagline {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-light);
  white-space: nowrap;
}

/* Navigation */
.nav {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 36px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4a90e2, #3fb8af, #5fc85c, #d4e04a, #f2a23c, #ed4c34);
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-footer {
  display: none;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-phone {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.header-phone:hover {
  color: var(--accent-teal);
  border-color: var(--accent-teal);
  transform: scale(1.05);
}

.btn-quote {
  padding: 12px 24px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-quote:hover {
  background: var(--bg-teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 139, 192, 0.3);
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  gap: 5px;
  z-index: 1001;
  transition: all 0.3s ease;
}

.menu-line {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-toggle.active .menu-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active .menu-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.active .menu-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Navigation */
@media (max-width: 1024px) {
  .header-container {
    padding: 0 24px;
  }

  .logo-text {
    display: none;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    background: var(--bg-primary);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav.open {
    opacity: 1;
    visibility: visible;
  }

  .nav-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 40px 60px;
  }

  .nav-links {
    flex-direction: column;
    gap: 0;
  }

  .nav-links li {
    border-bottom: 1px solid var(--border-light);
  }

  .nav-links a {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 400;
    padding: 20px 0;
    display: block;
  }

  .nav-links a::after {
    display: none;
  }

  .nav-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 40px;
    border-top: 1px solid var(--border-light);
  }

  .nav-footer p {
    font-size: 13px;
    color: var(--text-light);
  }

  .nav-social {
    display: flex;
    gap: 20px;
  }

  .nav-social a {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .header-actions {
    display: flex;
  }

  .header-actions .header-phone,
  .header-actions .btn-quote {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .logo-image {
    height: 48px;
  }
}

@media (max-width: 480px) {
  .nav-links a {
    font-size: 26px;
  }

  .logo-image {
    height: 44px;
  }
}

/* Dark Page Header (About, Contact) */
.header.dark-page .logo-name,
.header.dark-page .logo-tagline {
  color: white;
}

.header.dark-page .logo-image {
  filter: none;
}

.header.dark-page .nav-links a {
  color: rgba(255, 255, 255, 0.85);
}

.header.dark-page .nav-links a:hover,
.header.dark-page .nav-links a.active {
  color: white;
}

.header.dark-page .nav-links a::after {
  background: linear-gradient(90deg, #4a90e2, #3fb8af, #5fc85c, #d4e04a, #f2a23c, #ed4c34);
}

.header.dark-page .header-phone {
  color: rgba(255, 255, 255, 0.8);
  border-color: rgba(255, 255, 255, 0.3);
}

.header.dark-page .header-phone:hover {
  color: white;
  border-color: white;
}

.header.dark-page .menu-line {
  background: white;
}

.header.dark-page .progress-bar {
  background: white;
}

/* When mobile menu is open on dark page, reset to normal colors */
@media (max-width: 1024px) {
  .header.dark-page.menu-open .nav-links a {
    color: var(--text-secondary);
  }
  .header.dark-page.menu-open .nav-links a:hover,
  .header.dark-page.menu-open .nav-links a.active {
    color: var(--text-primary);
  }
  .header.dark-page.menu-open .menu-line {
    background: var(--text-primary);
  }
}
</style>
