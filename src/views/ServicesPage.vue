<template>
  <div class="services-page">
    <!-- HERO -->
    <section class="services-hero">
      <div class="services-hero-bg" aria-hidden="true">
        <span class="hero-blob hero-blob--c"></span>
        <span class="hero-blob hero-blob--m"></span>
        <span class="hero-blob hero-blob--y"></span>
      </div>
      <div class="services-hero-inner">
        <span class="services-eyebrow">EXPERTISE</span>
        <h1 class="services-title">
          Our <em>Services</em>
        </h1>
        <p class="services-lede">
          A complete suite of printing, branding and advertising solutions —
          delivered by 5 years of Middle East expertise. From a single business card
          to a full brand activation, AFME is your end-to-end partner.
        </p>
        <div class="services-actions">
          <button class="btn-cta-primary" @click="openServiceForm">Get a Quote</button>
          <a href="#services-grid" class="btn-cta-outline">Explore Services</a>
        </div>
      </div>
    </section>

    <!-- 8 SERVICES GRID -->
    <section id="services-grid" class="services-section" ref="gridSection">
      <div class="container">
        <div class="services-section-header">
          <span class="section-eyebrow">WHAT WE DO</span>
          <h2 class="section-title">Eight Pillars of <em>AFME</em></h2>
          <p class="section-desc">
            Eight specialised verticals, one trusted partner. Hover any card to explore
            in 3D and discover how we can elevate your brand.
          </p>
        </div>

        <div class="services-grid">
          <div
            v-for="(svc, idx) in services"
            :key="svc.title"
            class="svc-card"
            @click="openServiceForm"
          >
            <div class="svc-card-inner">
              <h3 class="svc-card-title">{{ svc.title }}</h3>
              <p class="svc-card-desc">{{ svc.desc }}</p>
              <ul class="svc-card-features">
                <li v-for="f in svc.features" :key="f">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  {{ f }}
                </li>
              </ul>
              <button class="svc-card-cta" @click="openServiceForm">
                Request Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <div class="svc-card-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO GALLERY -->
    <section class="portfolio-section" ref="portfolioSection">
      <div class="container">
        <div class="services-section-header">
          <span class="section-eyebrow">OUR WORK</span>
          <h2 class="section-title">Latest <em>Portfolio</em></h2>
          <p class="section-desc">
            A glimpse of recent projects across design, printing, branding and beyond.
            Filter by category to see what we've been creating.
          </p>
        </div>

        <div class="portfolio-tabs">
          <button
            v-for="cat in portfolioCategories"
            :key="cat"
            class="portfolio-tab"
            :class="{ active: activePortfolio === cat }"
            @click="setPortfolioFilter(cat)"
          >
            {{ cat }}
          </button>
        </div>

        <div class="portfolio-grid" ref="portfolioGrid">
          <div
            v-for="project in filteredPortfolio"
            :key="project.slug + project.title"
            class="portfolio-card"
            @click="openPortfolioModal(project)"
          >
            <div class="portfolio-card-inner">
              <div class="portfolio-image">
                <img :src="`/products/${project.slug}.webp`" :alt="project.title" />
                <div class="portfolio-image-overlay">
                  <span class="portfolio-cat">{{ project.category }}</span>
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.desc }}</p>
                  <button class="portfolio-btn" @click.stop="openPortfolioModal(project)">
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="what-section" ref="whatSection">
      <div class="container what-grid">
        <div class="what-text">
          <span class="section-eyebrow">EXPERTISE</span>
          <h2 class="section-title">Printing <em>Excellence</em></h2>
          <p class="what-desc">
            Our cutting-edge printing solutions combine innovation and craftsmanship to bring
            your ideas to life. Whether it's stunning business collateral, eye-catching banners,
            or intricate packaging, we harness the power of modern printing technologies to
            deliver quality that speaks for itself.
          </p>
          <div class="what-stats">
            <div class="what-stat"><strong>5</strong><span>Years of Experience</span></div>
            <div class="what-stat"><strong>4</strong><span>Service Verticals</span></div>
            <div class="what-stat"><strong>1000+</strong><span>Happy Clients</span></div>
          </div>
        </div>
        <div class="what-image">
          <img src="/hero/pomelli_photoshoot-1.png" alt="Professional offset printing press line" />
          <div class="what-image-card">
            <div>
              <strong>Premium Print</strong>
              <span>Foil, embossing, die-cut and more</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA -->
    <section class="services-cta">
      <div class="container">
        <h2 class="cta-heading">Let's Build Something <em>Memorable</em></h2>
        <p class="cta-sub">
          Tell us about your project and our team will get back to you within 24 hours
          with ideas, a timeline and a tailored quote.
        </p>
        <div class="cta-buttons">
          <button class="btn-cta-primary" @click="openServiceForm">Start a Project</button>
          <a href="https://wa.me/971567268735" target="_blank" rel="noopener" class="btn-cta-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    <!-- Portfolio Modal -->
    <Teleport to="body">
      <transition name="smodal">
        <div v-if="selectedProject" class="smodal-overlay" @click.self="closeModal">
          <div class="smodal">
            <button class="smodal-close" @click="closeModal">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div class="smodal-img">
              <img :src="`/products/${selectedProject.slug}.webp`" :alt="selectedProject.title" />
            </div>
            <div class="smodal-info">
              <span class="smodal-cat">{{ selectedProject.category }}</span>
              <h2 class="smodal-title">{{ selectedProject.title }}</h2>
              <p class="smodal-desc">{{ selectedProject.desc }}</p>
              <div class="smodal-features">
                <div class="smodal-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Premium Quality</div>
                <div class="smodal-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Custom Sizes</div>
                <div class="smodal-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Fast Turnaround</div>
              </div>
              <div class="smodal-actions">
                <button class="smodal-btn smodal-btn--primary" @click="closeModal(); openServiceForm()">Get Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
                <a href="https://wa.me/971567268735" target="_blank" class="smodal-btn smodal-btn--outline">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const openServiceForm = inject('openServiceForm')
const selectedProject = ref(null)
const gridSection = ref(null)

function openPortfolioModal(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}
function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
}
const whatSection = ref(null)
const portfolioSection = ref(null)
const portfolioGrid = ref(null)

// Portfolio data — categories from alfalah-me.com plus extras
const portfolioCategories = ['All', 'Design', '3D Printing', 'Card Printing', 'Flyer', 'Pamphlet', 'Branding', 'Signage', 'Packaging']
const activePortfolio = ref('All')

const portfolioProjects = [
  { slug: 'die-cut-business-cards', title: 'Die-Cut Business Cards', category: 'Card Printing', desc: 'Custom-shaped cards that stand out with unique die-cut designs.' },
  { slug: 'metal-business-cards', title: 'Metal Business Cards', category: 'Card Printing', desc: 'Sleek brushed-metal cards for a luxury client.' },
  { slug: 'nfcsmart-business-card', title: 'NFC Smart Business Cards', category: '3D Printing', desc: 'Embedded NFC chips for instant digital sharing.' },
  { slug: 'rigid-box-packaging', title: 'Rigid Gift Boxes', category: 'Packaging', desc: 'Premium rigid boxes for a luxury retail brand.' },
  { slug: 'custom-t-shirts', title: 'Custom Branded Apparel', category: 'Branding', desc: 'Screen-printed corporate uniforms for a UAE client.' },
  { slug: 'vehicle-branding', title: 'Fleet Vehicle Wraps', category: 'Branding', desc: 'Full vehicle wraps turning a fleet into mobile billboards.' },
  { slug: 'roll-up-banners', title: 'Roll-Up Banners', category: 'Signage', desc: 'Portable retractable banners for a regional roadshow.' },
  { slug: 'neon-signage', title: 'Custom Neon Signage', category: 'Signage', desc: 'Eye-catching custom neon for a flagship store.' },
  { slug: 'annual-report', title: 'Corporate Annual Report', category: 'Design', desc: 'Multi-section annual report with premium binding.' },
  { slug: 'magazine', title: 'Lifestyle Magazine', category: 'Flyer', desc: 'Vibrant 80-page lifestyle magazine for a hospitality brand.' },
  { slug: 'company-profile', title: 'Company Profile Booklet', category: 'Pamphlet', desc: 'Elegant company profile showcasing services.' },
  { slug: 'exhibition-booth-setup', title: 'Exhibition Booth', category: 'Design', desc: 'Custom-designed exhibition booth at a trade show.' },
]

const filteredPortfolio = computed(() => {
  if (activePortfolio.value === 'All') return portfolioProjects
  return portfolioProjects.filter(p => p.category === activePortfolio.value)
})

function setPortfolioFilter(cat) {
  activePortfolio.value = cat
  nextTick(() => {
    if (portfolioGrid.value) {
      gsap.fromTo(portfolioGrid.value.querySelectorAll('.portfolio-card'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      )
    }
  })
}

const services = [
  {
    title: 'Printing — Offset / Digital',
    desc: 'Printing services encompass a diverse range of essential promotional materials. From offset for high volumes to digital for sharp short runs, we deliver every job at premium quality.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    features: ['Offset & Digital Press', '4-Color CMYK + Spot', 'Premium finishes', 'Same-day proofs']
  },
  {
    title: 'Labels Production',
    desc: 'These various label types serve a multitude of purposes across industries. From product and pharma labels to roll labels and tin packaging — durable, vibrant and accurate.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    features: ['Product & pharma labels', 'Roll & sheet labels', 'Tin packaging labels', 'Custom die-cuts']
  },
  {
    title: 'Brand Activation',
    desc: 'Brand activation in the UAE involves strategically planned campaigns that bring your brand to life — connecting with audiences through immersive on-ground experiences.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></svg>',
    features: ['Sampling campaigns', 'Pop-up activations', 'Mall & retail promotions', 'Experiential events']
  },
  {
    title: 'Stand Production',
    desc: 'Display stand production in the UAE involves the design & fabrication of custom stands and exhibition booths that showcase your brand at events and trade shows.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    features: ['Custom exhibition booths', 'Modular display systems', 'POP & retail stands', 'On-site setup']
  },
  {
    title: 'Event Management',
    desc: 'Pop-up stands and roll-up banners are widely used promotional tools in the UAE. AFME provides full event management — from concept to execution — keeping your brand front and centre.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    features: ['Conference setup', 'Launch events', 'Roll-ups & feather flags', 'Full logistics']
  },
  {
    title: 'Creative & Design',
    desc: 'AFME specializes in creative & design, offering comprehensive expertise. Our in-house design team turns briefs into beautiful brand assets — print, digital and beyond.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>',
    features: ['Brand identity design', 'Print collateral', 'Packaging design', 'Concept artwork']
  },
  {
    title: 'Promotions / Corporate Gifts',
    desc: 'AFME specialises in promotions and corporate gifts to a wide industry. From welcome kits to branded merchandise, we help you delight your clients and employees.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    features: ['Welcome kits', 'Branded merchandise', 'Premium gift boxes', 'Apparel & accessories']
  },
  {
    title: 'Vehicle Graphics',
    desc: 'AFME specialises in vehicle graphics, offering comprehensive expertise in full and partial vehicle wraps — turning fleets into mobile billboards across the UAE.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>',
    features: ['Full vehicle wraps', 'Partial fleet branding', 'Cut vinyl graphics', 'On-site application']
  },
]

// 3D mouse-tilt
function onTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  const rotateY = (px - 0.5) * 16
  const rotateX = (0.5 - py) * 16
  const inner = card.querySelector('.svc-card-inner')
  if (inner) inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  const glow = card.querySelector('.svc-card-glow')
  if (glow) {
    glow.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(46,139,192,0.25) 0%, transparent 60%)`
    glow.style.opacity = '1'
  }
}

function resetTilt(e) {
  const card = e.currentTarget
  const inner = card.querySelector('.svc-card-inner')
  if (inner) inner.style.transform = 'rotateX(0) rotateY(0) translateZ(0)'
  const glow = card.querySelector('.svc-card-glow')
  if (glow) glow.style.opacity = '0'
}

let scrollTriggers = []

onMounted(() => {
  // Hero entrance
  gsap.fromTo('.services-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
  gsap.fromTo('.services-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: 'power2.out' })
  gsap.fromTo('.services-lede', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' })
  gsap.fromTo('.services-actions > *', { y: 15, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.3, ease: 'power2.out' })

  // Blind reveal helper
  const blindReveal = (trigger, targets, opts = {}) => {
    const triggerEl = typeof trigger === 'string' ? document.querySelector(trigger) : trigger
    if (!triggerEl) return
    const els = triggerEl.querySelectorAll(targets)
    if (!els.length) return
    els.forEach(el => { el.style.transition = 'none'; el.style.clipPath = 'inset(0 0 100% 0)' })
    const st = ScrollTrigger.create({
      trigger: triggerEl, start: opts.start || 'top 88%', once: true,
      onEnter: () => {
        gsap.to(els, {
          clipPath: 'inset(0 0 0% 0)', duration: opts.duration ?? 1.2,
          stagger: opts.stagger ?? 0.1, ease: 'power3.inOut', delay: opts.delay ?? 0,
          onComplete: () => els.forEach(el => { el.style.clipPath = ''; el.style.transition = '' }),
        })
      },
    })
    scrollTriggers.push(st)
  }

  const reveal = (trigger, targets, opts = {}) => {
    const triggerEl = typeof trigger === 'string' ? document.querySelector(trigger) : trigger
    if (!triggerEl) return
    const els = triggerEl.querySelectorAll(targets)
    if (!els.length) return
    els.forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = `translateY(${opts.y ?? 30}px)` })
    const st = ScrollTrigger.create({
      trigger: triggerEl, start: opts.start || 'top 88%', once: true,
      onEnter: () => {
        gsap.to(els, {
          y: 0, opacity: 1, duration: opts.duration ?? 0.9, stagger: opts.stagger ?? 0.08,
          ease: 'power2.out', delay: opts.delay ?? 0,
          onComplete: () => els.forEach(el => { el.style.transition = '' }),
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Service cards — fade up
  if (gridSection.value) {
    reveal(gridSection.value, '.services-section-header > *', { stagger: 0.08 })
    reveal(gridSection.value, '.svc-card', { y: 40, stagger: 0.06, delay: 0.15 })
  }

  // Portfolio — blind only on image cards
  if (portfolioSection.value) {
    reveal(portfolioSection.value, '.services-section-header > *', { stagger: 0.08 })
    reveal(portfolioSection.value, '.portfolio-tab', { y: 15, stagger: 0.04, delay: 0.2 })
    blindReveal(portfolioSection.value, '.portfolio-card', { stagger: 0.08, delay: 0.3 })
  }

  // What section — blind only on image
  if (whatSection.value) {
    reveal(whatSection.value, '.what-text > *', { stagger: 0.08 })
    blindReveal(whatSection.value, '.what-image', { duration: 1.4, delay: 0.1 })
  }
})

onUnmounted(() => {
  scrollTriggers.forEach(st => st.kill())
  scrollTriggers = []
})
</script>

<style scoped>
.services-page {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ========== HERO ========== */
.services-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px 100px;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #f0f5fa 100%);
  overflow: hidden;
}

.services-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-blob {
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
}

.hero-blob--c {
  background: var(--accent-teal);
  top: 10%;
  left: -80px;
}

.hero-blob--m {
  background: var(--accent-teal);
  bottom: 5%;
  right: -80px;
}

.hero-blob--y {
  background: var(--color-blue);
  top: 40%;
  right: 25%;
}

.services-hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 820px;
}

.services-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal);
  background: rgba(46, 139, 192, 0.1);
  padding: 8px 18px;
  border-radius: 50px;
  margin-bottom: 24px;
}

.services-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 100px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 22px;
  color: var(--text-primary);
  text-transform: uppercase;
}

.services-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.services-lede {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0 auto 36px;
  max-width: 640px;
}

.services-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta-primary,
.btn-cta-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  border: none;
}

.btn-cta-primary {
  background: var(--accent-teal);
  color: #fff;
}

.btn-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(46, 139, 192, 0.35);
}

.btn-cta-outline {
  background: transparent;
  border: 1.5px solid var(--text-primary);
  color: var(--text-primary);
}

.btn-cta-outline:hover {
  background: var(--text-primary);
  color: #fff;
  transform: translateY(-2px);
}

/* ========== Services Grid ========== */
.services-section {
  padding: 100px 0;
  background: var(--bg-primary);
}

.services-section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
}

.section-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: var(--accent-teal);
  margin-bottom: 14px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 5vw, 70px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.01em;
  margin-bottom: 18px;
  color: var(--text-primary);
  text-transform: uppercase;
}

.section-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.section-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  perspective: 1500px;
}

.svc-card {
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
}

.svc-card-inner {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 28px 26px;
  border-left: 3px solid rgba(46, 139, 192, 0.25);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.svc-card:hover .svc-card-inner {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(46, 139, 192, 0.14);
  border-left-color: var(--accent-teal);
  border-left-width: 4px;
}

.svc-card-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.svc-card-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
  flex: 1;
}

.svc-card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.svc-card-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.svc-card-features svg {
  flex-shrink: 0;
  color: var(--accent-teal);
}

.svc-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: var(--accent-teal);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  transition: gap 0.25s ease;
  transform: translateZ(20px);
}

.svc-card-cta:hover {
  gap: 12px;
}

.svc-card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 20px;
}

/* ========== Portfolio Gallery ========== */
.portfolio-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f5f9fc 0%, var(--bg-primary) 100%);
  position: relative;
  overflow: hidden;
}

.portfolio-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(46, 139, 192, 0.06) 1px, transparent 0);
  background-size: 28px 28px;
  pointer-events: none;
}

.portfolio-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
}

.portfolio-tab {
  background: #fff;
  border: 1.5px solid var(--border-light);
  color: var(--text-secondary);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.portfolio-tab:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  transform: translateY(-2px);
}

.portfolio-tab.active {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: #fff;
  box-shadow: 0 8px 24px rgba(46, 139, 192, 0.25);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  perspective: 1500px;
  position: relative;
  z-index: 2;
}

.portfolio-card {
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  height: 320px;
}

.portfolio-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
              box-shadow 0.4s ease;
}

.portfolio-card:hover .portfolio-card-inner {
  box-shadow: 0 24px 60px rgba(46, 139, 192, 0.25);
}

.portfolio-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(15, 25, 35, 0.4) 50%,
    rgba(15, 25, 35, 0.95) 100%);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  opacity: 1;
  transition: background 0.4s ease;
}

.portfolio-card:hover .portfolio-image-overlay {
  background: linear-gradient(180deg,
    rgba(15, 25, 35, 0.2) 0%,
    rgba(15, 25, 35, 0.7) 40%,
    rgba(15, 25, 35, 0.98) 100%);
}

.portfolio-cat {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: rgba(46, 139, 192, 0.85);
  padding: 4px 10px;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 10px;
  align-self: flex-start;
  transform: translateZ(40px);
}

.portfolio-image-overlay h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.3;
  transform: translateZ(50px);
}

.portfolio-image-overlay p {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
  margin-bottom: 14px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.4s ease, margin 0.4s ease;
}

.portfolio-card:hover .portfolio-image-overlay p {
  max-height: 60px;
  opacity: 1;
}

.portfolio-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--accent-teal);
  border: none;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  font-family: inherit;
  transform: translateY(15px);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease, background 0.3s ease;
}

.portfolio-card:hover .portfolio-btn {
  transform: translateY(0);
  opacity: 1;
}

.portfolio-btn:hover {
  background: var(--color-yellow, #FDD835);
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-card { height: 280px; }
  .portfolio-section { padding: 64px 0; }
}

/* ========== What We Do ========== */
.what-section {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #f5f9fc 100%);
  overflow: hidden;
}

.what-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.what-text { padding-right: 20px; }

.what-desc {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin: 22px 0 32px;
  max-width: 480px;
}

.what-stats {
  display: flex;
  gap: 36px;
}

.what-stat strong {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(36px, 3.5vw, 52px);
  font-weight: 400;
  color: var(--accent-teal);
  line-height: 1;
}

.what-stat span {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.what-image {
  position: relative;
  perspective: 1400px;
}

.what-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
  display: block;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.what-image:hover img {
  transform: scale(1.03);
}

.what-image-card {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: #fff;
  padding: 18px 22px;
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 260px;
}

.what-image-card-num {
  display: none;
}

.what-image-card strong {
  display: block;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.what-image-card span {
  display: block;
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* ========== Bottom CTA ========== */
.services-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--accent-teal) 0%, #1a6fa0 100%);
  color: #fff;
  text-align: center;
}

.cta-heading {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 400;
  margin-bottom: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.cta-heading em {
  font-style: normal;
  color: #fff200;
}

.cta-sub {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 auto 32px;
  max-width: 580px;
}

.cta-buttons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.services-cta .btn-cta-primary {
  background: #fff;
  color: var(--accent-teal);
}

.services-cta .btn-cta-primary:hover {
  background: #fff200;
  color: var(--text-primary);
}

.services-cta .btn-cta-outline {
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
}

.services-cta .btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
  color: #fff;
}

/* ========== Responsive ========== */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .what-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .what-text { padding-right: 0; text-align: center; }
  .what-stats { justify-content: center; }
}

@media (max-width: 768px) {
  .services-hero {
    padding: 130px 24px 70px;
    min-height: auto;
  }
  .services-section {
    padding: 72px 0;
  }
  .services-cta {
    padding: 72px 0;
  }
  .what-section {
    padding: 72px 0;
  }
  .what-desc {
    margin-left: auto;
    margin-right: auto;
  }
  .what-stats {
    gap: 24px;
    flex-wrap: wrap;
  }
  .portfolio-tabs {
    gap: 8px;
    margin-bottom: 36px;
  }
  .portfolio-tab {
    padding: 8px 14px;
    font-size: 0.78rem;
  }
}

@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
  .services-section { padding: 56px 0; }
  .services-hero { padding: 120px 20px 56px; }
  .services-cta { padding: 56px 0; }
}

@media (max-width: 480px) {
  .services-hero {
    padding: 100px 16px 48px;
  }
  .services-lede {
    font-size: 0.95rem;
  }
  .svc-card-inner {
    padding: 22px 18px;
  }
  .svc-card-title {
    font-size: 18px;
  }
  .what-section {
    padding: 56px 0;
  }
  .what-stats {
    gap: 18px;
  }
  .what-image-card {
    bottom: -10px;
    left: -10px;
    padding: 12px 16px;
  }
  .portfolio-section {
    padding: 56px 0;
  }
  .portfolio-tab {
    padding: 6px 12px;
    font-size: 0.72rem;
  }
  .cta-heading {
    font-size: clamp(28px, 7vw, 40px);
  }
}

/* ========== Portfolio Modal ========== */
.smodal-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.6); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
.smodal {
  background: #fff; border-radius: 20px; max-width: 780px; width: 100%;
  display: grid; grid-template-columns: 1fr 1fr; position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.25); overflow: hidden;
}
.smodal-close {
  position: absolute; top: 14px; right: 14px; z-index: 10;
  width: 38px; height: 38px; border-radius: 50%; border: none;
  background: rgba(0,0,0,0.05); color: var(--text-secondary);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.3s ease;
}
.smodal-close:hover { background: rgba(0,0,0,0.1); }
.smodal-img {
  background: #f5f5f5; padding: 28px;
  display: flex; align-items: center; justify-content: center;
}
.smodal-img img { width: 100%; max-height: 360px; object-fit: contain; }
.smodal-info { padding: 36px 32px; display: flex; flex-direction: column; }
.smodal-cat {
  font-size: 10px; font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--accent-teal); margin-bottom: 6px;
}
.smodal-title {
  font-family: var(--font-display); font-size: clamp(24px,3vw,34px);
  font-weight: 400; text-transform: uppercase; letter-spacing: 0.01em;
  line-height: 1; margin-bottom: 14px;
}
.smodal-desc { font-size: 14px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px; }
.smodal-features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
.smodal-feature { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-secondary); }
.smodal-feature svg { color: var(--accent-teal); flex-shrink: 0; }
.smodal-actions { display: flex; gap: 10px; margin-top: auto; }
.smodal-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 22px; border-radius: 10px;
  font-family: var(--font-display); font-size: 13px;
  letter-spacing: 0.08em; text-transform: uppercase;
  cursor: pointer; border: none; text-decoration: none; transition: all 0.3s ease;
}
.smodal-btn--primary { background: var(--accent-teal); color: #fff; }
.smodal-btn--primary:hover { background: #1a6fa0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(46,139,192,0.3); }
.smodal-btn--outline { background: transparent; border: 1.5px solid var(--border-medium); color: var(--text-primary); }
.smodal-btn--outline:hover { border-color: var(--text-primary); background: var(--text-primary); color: #fff; }
.smodal-enter-active { transition: opacity 0.3s ease; }
.smodal-enter-active .smodal { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease; }
.smodal-leave-active { transition: opacity 0.2s ease; }
.smodal-enter-from { opacity: 0; }
.smodal-enter-from .smodal { transform: translateY(24px) scale(0.96); opacity: 0; }
.smodal-leave-to { opacity: 0; }
.smodal-leave-to .smodal { transform: scale(0.98); opacity: 0; }
@media (max-width: 768px) {
  .smodal { grid-template-columns: 1fr; }
  .smodal-info { padding: 24px 20px; }
}

@media (max-width: 480px) {
  .smodal-overlay { padding: 16px; }
  .smodal-img { padding: 16px; }
  .smodal-info { padding: 20px 16px; }
  .smodal-actions { flex-direction: column; }
  .smodal-btn { justify-content: center; }
}
</style>