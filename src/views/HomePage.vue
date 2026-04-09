<template>
  <div class="home">
    <!-- 1. Hero Banner -->
    <section class="hero">
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
          alt="Printing and Branding"
          class="hero-bg-img"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-float hero-float-1"><img src="/products/gold-foil-business-cards.webp" alt="" /></div>
      <div class="hero-float hero-float-2"><img src="/products/neon-signage.webp" alt="" /></div>
      <div class="hero-float hero-float-3"><img src="/products/rigid-box-packaging.webp" alt="" /></div>
      <div class="hero-content">
        <span class="hero-badge">85+ Premium Products</span>
        <h1 class="hero-title">Your One-Stop<br>Print &amp; <span class="title-accent">Brand</span> Shop</h1>
        <p class="hero-subtitle">
          Explore premium printing, packaging, signage, and branding products — all in one place.
        </p>
        <div class="hero-search">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search business cards, banners, packaging..."
            class="search-input"
            @keyup.enter="goToProducts"
          />
          <button class="search-btn" @click="goToProducts">Search</button>
        </div>
        <div class="hero-actions">
          <router-link to="/products" class="btn-primary">Shop Products</router-link>
          <button class="btn-secondary" @click="openServiceForm">Get Custom Quote</button>
        </div>
      </div>
    </section>

    <!-- Marquee Strip -->
    <section class="marquee-section">
      <div class="marquee-track">
        <div class="marquee-content" v-for="n in 2" :key="n">
          <span>Business Cards</span><span class="marquee-dot"></span>
          <span>Banners &amp; Signage</span><span class="marquee-dot"></span>
          <span>Packaging</span><span class="marquee-dot"></span>
          <span>T-Shirts &amp; Apparel</span><span class="marquee-dot"></span>
          <span>Stickers &amp; Labels</span><span class="marquee-dot"></span>
          <span>Corporate Gifts</span><span class="marquee-dot"></span>
          <span>Vehicle Branding</span><span class="marquee-dot"></span>
          <span>Neon Signs</span><span class="marquee-dot"></span>
        </div>
      </div>
    </section>

    <!-- 2. Category Strip -->
    <section class="category-strip">
      <div class="container">
        <div class="category-scroll">
          <router-link
            v-for="cat in categoryStrip"
            :key="cat.name"
            to="/products"
            class="category-chip"
          >
            <div class="category-chip-img">
              <img :src="`/products/${cat.slug}.webp`" :alt="cat.name" />
            </div>
            <span class="category-chip-name">{{ cat.name }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 3. Trending Products -->
    <section class="product-section" ref="trendingSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trending Products</h2>
          <router-link to="/products" class="view-all">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        <div class="product-grid">
          <div
            v-for="product in trendingProducts"
            :key="product.slug"
            class="product-card"
          >
            <router-link :to="`/products`" class="product-card-link">
              <div class="product-card-img">
                <img :src="`/products/${product.slug}.webp`" :alt="product.name" />
              </div>
              <div class="product-card-body">
                <span class="product-category">{{ product.category }}</span>
                <h3 class="product-name">{{ product.name }}</h3>
              </div>
            </router-link>
            <div class="product-card-footer">
              <button class="btn-quote" @click="openServiceForm">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Category Banner (2-column) -->
    <section class="category-banners" ref="categoryBannerSection">
      <div class="container">
        <div class="banner-grid">
          <router-link to="/products" class="banner-card">
            <img src="/products/gold-foil-business-cards.webp" alt="Business Cards" class="banner-card-img" />
            <div class="banner-card-overlay"></div>
            <div class="banner-card-content">
              <h3 class="banner-card-title">Business Cards</h3>
              <p class="banner-card-desc">Premium finishes, NFC-enabled, and more</p>
              <span class="banner-card-btn">Shop Now</span>
            </div>
          </router-link>
          <router-link to="/products" class="banner-card">
            <img src="/products/roll-up-banners.webp" alt="Signage & Banners" class="banner-card-img" />
            <div class="banner-card-overlay"></div>
            <div class="banner-card-content">
              <h3 class="banner-card-title">Signage &amp; Banners</h3>
              <p class="banner-card-desc">Indoor, outdoor, neon, and LED options</p>
              <span class="banner-card-btn">Shop Now</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 5. New Arrivals -->
    <section class="product-section product-section--alt" ref="arrivalsSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">New Arrivals</h2>
          <router-link to="/products" class="view-all">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        <div class="product-grid">
          <div
            v-for="product in newArrivals"
            :key="product.slug"
            class="product-card"
          >
            <router-link :to="`/products`" class="product-card-link">
              <div class="product-card-img">
                <img :src="`/products/${product.slug}.webp`" :alt="product.name" />
              </div>
              <div class="product-card-body">
                <span class="product-category">{{ product.category }}</span>
                <h3 class="product-name">{{ product.name }}</h3>
              </div>
            </router-link>
            <div class="product-card-footer">
              <button class="btn-quote" @click="openServiceForm">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Features / Trust Bar -->
    <section class="trust-bar" ref="trustSection">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item" v-for="feature in trustFeatures" :key="feature.title">
            <div class="trust-icon" v-html="feature.icon"></div>
            <h4 class="trust-title">{{ feature.title }}</h4>
            <p class="trust-desc">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Popular Categories Grid -->
    <section class="popular-categories" ref="popularCatSection">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Popular Categories</h2>
          <p class="section-subtitle">Browse our most popular product categories</p>
        </div>
        <div class="categories-grid">
          <router-link
            v-for="cat in popularCategories"
            :key="cat.name"
            to="/products"
            class="cat-card"
          >
            <img :src="`/products/${cat.slug}.webp`" :alt="cat.name" class="cat-card-img" />
            <div class="cat-card-overlay"></div>
            <div class="cat-card-content">
              <h3 class="cat-card-name">{{ cat.name }}</h3>
              <span class="cat-card-count">{{ cat.count }} Products</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 8. CTA Banner -->
    <section class="cta-banner" ref="ctaSection">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Need a Custom Quote?</h2>
          <p class="cta-desc">
            Tell us about your project and our team will get back to you within 24 hours with a tailored quote.
          </p>
          <div class="cta-actions">
            <button class="btn-cta" @click="openServiceForm">Get Quote</button>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-cta-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const openServiceForm = inject('openServiceForm')

const searchQuery = ref('')

const trendingSection = ref(null)
const arrivalsSection = ref(null)
const categoryBannerSection = ref(null)
const trustSection = ref(null)
const popularCatSection = ref(null)
const ctaSection = ref(null)

function goToProducts() {
  router.push({ path: '/products', query: searchQuery.value ? { q: searchQuery.value } : {} })
}

// Category strip data
const categoryStrip = [
  { name: 'Business Cards', slug: 'gold-foil-business-cards' },
  { name: 'Printing', slug: 'annual-report' },
  { name: 'Stationery', slug: 'customized-envelopes' },
  { name: 'Labels & Stickers', slug: 'die-cut-stickers' },
  { name: 'Packaging', slug: 'rigid-box-packaging' },
  { name: 'Signage & Banners', slug: 'roll-up-banners' },
  { name: 'Branding & Displays', slug: 'vehicle-branding' },
  { name: 'Apparel', slug: 'custom-t-shirts' },
  { name: 'Awards & Gifts', slug: 'badgesmedallions' },
  { name: 'Signage & Letters', slug: '3d-metal-letters-signage' },
]

const trendingProducts = [
  { slug: 'gold-foil-business-cards', name: 'Gold Foil Business Cards', category: 'Business Cards' },
  { slug: 'neon-signage', name: 'Custom Neon Signage', category: 'Signage' },
  { slug: 'rigid-box-packaging', name: 'Rigid Box Packaging', category: 'Packaging' },
  { slug: 'custom-t-shirts', name: 'Custom T-Shirts', category: 'Apparel' },
  { slug: 'roll-up-banners', name: 'Roll-Up Banners', category: 'Banners' },
  { slug: 'vehicle-branding', name: 'Vehicle Branding', category: 'Branding' },
  { slug: 'nfcsmart-business-card', name: 'NFC Smart Business Card', category: 'Business Cards' },
  { slug: 'exhibition-booth-setup', name: 'Exhibition Booth Setup', category: 'Displays' },
]

const newArrivals = [
  { slug: 'metal-business-cards', name: 'Metal Business Cards', category: 'Business Cards' },
  { slug: 'welcome-kits', name: 'Welcome Kits', category: 'Corporate Gifts' },
  { slug: 'paper-shopping-bags', name: 'Paper Shopping Bags', category: 'Packaging' },
  { slug: 'outdoor-feather-flags', name: 'Feather Flags', category: 'Signage' },
  { slug: 'spiral-notebooks', name: 'Spiral Notebooks', category: 'Printing' },
  { slug: 'tote-bags', name: 'Tote Bags', category: 'Merchandise' },
  { slug: 'die-cut-stickers', name: 'Die-Cut Stickers', category: 'Labels' },
  { slug: 'frostedclear-pvc-cards', name: 'Frosted PVC Cards', category: 'Business Cards' },
]

const popularCategories = [
  { name: 'Business Cards', slug: 'gold-foil-business-cards', count: 10 },
  { name: 'Printing & Publications', slug: 'annual-report', count: 7 },
  { name: 'Labels & Stickers', slug: 'die-cut-stickers', count: 8 },
  { name: 'Packaging', slug: 'rigid-box-packaging', count: 8 },
  { name: 'Signage & Banners', slug: 'roll-up-banners', count: 11 },
  { name: 'Apparel & Merchandise', slug: 'custom-t-shirts', count: 12 },
]

const trustFeatures = [
  {
    title: '85+ Products',
    desc: 'Wide range of print and branding solutions',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  },
  {
    title: 'Free Design Support',
    desc: 'Our design team helps bring your vision to life',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  },
  {
    title: 'Fast Delivery',
    desc: 'Quick turnaround on all orders across the UAE',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  },
  {
    title: 'Premium Quality',
    desc: 'Top-grade materials and precision finishing',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  },
]

// GSAP animations
let scrollTriggers = []

onMounted(() => {
  // Hero entrance animation
  const heroTl = gsap.timeline({ delay: 0.3 })
  heroTl
    .from('.hero-badge', { y: -20, opacity: 0, duration: 0.6 })
    .from('.hero-title', { y: 60, opacity: 0, duration: 0.9, ease: 'power4.out' }, '-=0.3')
    .from('.title-accent', { color: '#fff', duration: 0.6 }, '-=0.4')
    .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
    .from('.hero-search', { y: 30, opacity: 0, scale: 0.95, duration: 0.7 }, '-=0.4')
    .from('.hero-actions > *', { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.3')
    .from('.hero-float', { scale: 0, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6')

  // Hero parallax on scroll
  scrollTriggers.push(
    gsap.to('.hero-bg-img', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      y: 150, ease: 'none'
    })
  )

  // Animate category strip
  gsap.from('.category-chip', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.category-strip',
      start: 'top 85%',
      once: true,
    },
  })

  // Helper to animate sections on scroll
  const animateSection = (triggerEl, targets, opts = {}) => {
    if (!triggerEl) return
    const st = ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(triggerEl.querySelectorAll(targets), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          ...opts,
        })
      },
    })
    scrollTriggers.push(st)
  }

  animateSection(trendingSection.value, '.product-card')
  animateSection(categoryBannerSection.value, '.banner-card', { stagger: 0.15 })
  animateSection(arrivalsSection.value, '.product-card')
  animateSection(trustSection.value, '.trust-item', { stagger: 0.12 })
  animateSection(popularCatSection.value, '.cat-card', { stagger: 0.1 })

  if (ctaSection.value) {
    const st = ScrollTrigger.create({
      trigger: ctaSection.value,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.from(ctaSection.value.querySelectorAll('.cta-content > *'), {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })
      },
    })
    scrollTriggers.push(st)
  }
})

onUnmounted(() => {
  scrollTriggers.forEach(st => st.kill())
  scrollTriggers = []
})
</script>

<style scoped>
/* ========== Container ========== */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ========== 1. Hero Banner ========== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 8s ease;
}

.hero:hover .hero-bg-img {
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(46,139,192,0.3) 100%);
}

/* Floating product badges */
.hero-float {
  position: absolute;
  z-index: 2;
  width: 100px;
  height: 100px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  pointer-events: none;
}

.hero-float img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-float-1 {
  top: 20%;
  right: 8%;
  animation: floatUp 4s ease-in-out infinite;
}

.hero-float-2 {
  bottom: 25%;
  right: 12%;
  animation: floatUp 5s ease-in-out 1s infinite;
}

.hero-float-3 {
  top: 35%;
  left: 6%;
  animation: floatUp 4.5s ease-in-out 0.5s infinite;
}

@keyframes floatUp {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 780px;
  padding: 120px 24px 80px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}

.hero-title {
  font-family: var(--font-sans);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.title-accent {
  color: var(--color-blue);
  position: relative;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 36px;
  font-weight: 300;
}

/* Marquee */
.marquee-section {
  background: var(--accent-teal);
  padding: 14px 0;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 25s linear infinite;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}

.marquee-content span {
  font-size: 14px;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  padding: 0 16px;
  letter-spacing: 0.3px;
}

.marquee-dot {
  width: 5px;
  height: 5px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Hero Search */
.hero-search {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 6px 6px 6px 20px;
  max-width: 580px;
  margin: 0 auto 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}

.search-icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  padding: 12px 12px;
  background: transparent;
  color: var(--text-primary);
}

.search-input::placeholder {
  color: #aaa;
}

.search-btn {
  flex-shrink: 0;
  background: var(--accent-teal);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.search-btn:hover {
  background: var(--bg-teal-dark);
}

/* Hero Actions */
.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 13px 32px;
  background: var(--accent-teal);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.btn-primary:hover {
  background: var(--bg-teal-dark);
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 13px 32px;
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}

.btn-secondary:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* ========== 2. Category Strip ========== */
.category-strip {
  padding: 36px 0 12px;
  background: var(--bg-primary);
}

.category-scroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 8px 0 16px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.category-scroll::-webkit-scrollbar {
  display: none;
}

.category-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  min-width: 88px;
  transition: transform var(--transition-fast);
}

.category-chip:hover {
  transform: translateY(-3px);
}

.category-chip-img {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: #f2f2f2;
  overflow: hidden;
  border: 2px solid var(--border-light, rgba(0,0,0,0.08));
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.category-chip:hover .category-chip-img {
  border-color: var(--accent-teal);
  box-shadow: 0 4px 16px rgba(46, 139, 192, 0.15);
}

.category-chip-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}

.category-chip-name {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.3;
  white-space: nowrap;
}

/* ========== Section Shared ========== */
.product-section {
  padding: 56px 0;
  background: var(--bg-primary);
}

.product-section--alt {
  background: var(--bg-secondary);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-header--center {
  flex-direction: column;
  text-align: center;
  gap: 8px;
}

.section-title {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 16px;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent-teal);
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.view-all:hover {
  gap: 8px;
}

/* ========== 3 & 5. Product Grid ========== */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border-light, rgba(0,0,0,0.08));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.product-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card-img {
  aspect-ratio: 1 / 1;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}

.product-card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-base);
}

.product-card:hover .product-card-img img {
  transform: scale(1.05);
}

.product-card-body {
  padding: 16px 16px 8px;
  flex: 1;
}

.product-category {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--accent-teal);
  background: rgba(46, 139, 192, 0.08);
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.product-name {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.4;
}

.product-card-footer {
  padding: 0 16px 16px;
}

.btn-quote {
  width: 100%;
  padding: 10px 0;
  background: var(--accent-teal);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-quote:hover {
  background: var(--bg-teal-dark);
}

/* ========== 4. Category Banners ========== */
.category-banners {
  padding: 8px 0 56px;
  background: var(--bg-primary);
}

.banner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.banner-card {
  position: relative;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  min-height: 280px;
  text-decoration: none;
  color: #fff;
}

.banner-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.banner-card:hover .banner-card-img {
  transform: scale(1.05);
}

.banner-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.15) 60%);
}

.banner-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 32px;
}

.banner-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.banner-card-desc {
  font-size: 0.9rem;
  opacity: 0.85;
  margin-bottom: 16px;
  font-weight: 300;
}

.banner-card-btn {
  display: inline-block;
  padding: 10px 24px;
  background: #fff;
  color: var(--text-primary);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  width: fit-content;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.banner-card:hover .banner-card-btn {
  background: var(--accent-teal);
  color: #fff;
  transform: translateY(-1px);
}

/* ========== 6. Trust Bar ========== */
.trust-bar {
  padding: 56px 0;
  background: #fff;
  border-top: 1px solid var(--border-light, rgba(0,0,0,0.08));
  border-bottom: 1px solid var(--border-light, rgba(0,0,0,0.08));
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.trust-item {
  text-align: center;
}

.trust-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(46, 139, 192, 0.08);
  color: var(--accent-teal);
  margin-bottom: 16px;
}

.trust-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.trust-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* ========== 7. Popular Categories ========== */
.popular-categories {
  padding: 56px 0;
  background: var(--bg-primary);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.cat-card {
  position: relative;
  display: block;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  text-decoration: none;
  color: #fff;
}

.cat-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.cat-card:hover .cat-card-img {
  transform: scale(1.06);
}

.cat-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 55%);
}

.cat-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 24px;
}

.cat-card-name {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.cat-card-count {
  font-size: 0.8rem;
  opacity: 0.8;
  font-weight: 400;
}

/* ========== 8. CTA Banner ========== */
.cta-banner {
  padding: 64px 0;
  background: var(--accent-teal);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-sans);
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
}

.cta-desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 28px;
  font-weight: 300;
}

.cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  padding: 13px 36px;
  background: #fff;
  color: var(--accent-teal);
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.btn-cta-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background var(--transition-fast), border-color var(--transition-fast);
}

.btn-cta-whatsapp:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
}

/* ========== Responsive ========== */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero {
    min-height: 85vh;
  }

  .hero-float {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 480px;
  }

  .hero-content {
    padding: 64px 20px 56px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-search {
    flex-wrap: nowrap;
    padding: 4px 4px 4px 16px;
  }

  .search-input {
    font-size: 0.88rem;
    padding: 10px 8px;
    min-width: 0;
  }

  .search-btn {
    padding: 10px 20px;
    font-size: 0.85rem;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .banner-grid {
    grid-template-columns: 1fr;
  }

  .banner-card {
    min-height: 220px;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .cta-title {
    font-size: 1.6rem;
  }

  .container {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.65rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }

  .category-chip-img {
    width: 64px;
    height: 64px;
  }

  .category-chip-name {
    font-size: 0.72rem;
  }

  .category-scroll {
    gap: 16px;
  }

  .trust-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .trust-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
  }

  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-cta,
  .btn-cta-whatsapp {
    justify-content: center;
  }
}
</style>
