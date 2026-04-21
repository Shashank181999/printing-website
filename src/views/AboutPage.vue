<template>
  <div class="about-page">

    <!-- Section 1: Hero - Split Layout -->
    <section class="hero-split">
      <div class="hero-container">
        <div class="hero-text">
          <h1 class="hero-heading">More Than a Company —<br><em>Your Partners</em> in Print</h1>
          <p class="hero-description">
            At AFME, we are more than just a printing company — we are your partners in
            transforming ideas into tangible realities. With 5 years of expertise across
            printing, branding, and advertising, we help businesses communicate effectively,
            stand out in the market, and build meaningful connections with their audiences.
          </p>
        </div>
        <div class="hero-image-wrapper">
          <img
            src="/hero/about-hero.jpeg"
            alt="AFME printing production"
            class="hero-image"
          />
        </div>
      </div>
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Section 2: Our Story - Horizontal Timeline -->
    <section class="timeline-section">
      <div class="section-container">
        <span class="section-label">Our Story</span>
        <h2 class="section-heading">Milestones That Shaped Us</h2>
        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-items">
            <div v-for="(milestone, index) in milestones" :key="index" class="milestone">
              <div class="milestone-dot"></div>
              <div class="milestone-content">
                <h3 class="milestone-title">{{ milestone.title }}</h3>
                <p class="milestone-desc">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Why Choose Us -->
    <section class="features-section">
      <div class="section-container">
        <span class="section-label">About Company</span>
        <h2 class="section-heading">Why Choose Us</h2>
        <p class="section-intro">
          With a blend of expertise, dedication, and a client-centric approach, AFME is the
          partner of choice for businesses seeking to amplify their presence in the market.
          Our holistic approach — rooted in the fusion of printing, branding, and advertising —
          positions us as trailblazers in the industry, ready to propel your business toward success.
        </p>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Our Process - 4 Steps -->
    <section class="process-section">
      <div class="section-container">
        <span class="section-label">Our Process</span>
        <h2 class="section-heading">From Concept to Completion</h2>
        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <span class="step-number">{{ step.number }}</span>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
            <div v-if="index < processSteps.length - 1" class="step-connector">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 6h32M28 1l6 5-6 5" stroke="var(--accent-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Company Values -->
    <section class="values-section">
      <div class="section-container">
        <span class="section-label">Our Values</span>
        <h2 class="section-heading">The Principles We Stand By</h2>
        <div class="values-grid">
          <div v-for="(value, index) in companyValues" :key="index" class="value-card">
            <div class="value-icon" v-html="value.icon"></div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: CTA -->
    <section class="cta-section">
      <div class="section-container">
        <h2 class="cta-heading">Ready to Start Your Project?</h2>
        <p class="cta-subtext">
          Let us bring your vision to life with 5 years of printing expertise.
        </p>
        <div class="cta-buttons">
          <button class="btn-cta-primary" @click="openServiceForm">Get Quote</button>
          <router-link to="/products" class="btn-cta-outline">Browse Products</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const openServiceForm = inject('openServiceForm')

const stats = [
  { number: '5', label: 'Years of Experience' },
  { number: '4', label: 'Service Verticals' },
  { number: '1000+', label: 'Projects Delivered' },
  { number: '24/7', label: 'Production Support' }
]

const milestones = [
  {
    title: 'Founded in the UAE',
    description: 'AFME launches in Dubai as a dedicated printing and creative solutions partner — built from day one to deliver premium quality and fast turnaround across the Middle East.'
  },
  {
    title: 'Digital & Large-Format',
    description: 'We expand into digital and large-format printing, serving agencies and brands with same-day proofs, vibrant colour accuracy and production at scale.'
  },
  {
    title: 'Branding & Activation',
    description: 'New verticals — signage, stand production, vehicle wraps and brand activations — bring a full campaign lifecycle under one roof.'
  },
  {
    title: 'Today',
    description: 'A full-service partner spanning printing, branding, signage, events and corporate gifting — helping brands amplify their presence across the UAE.'
  }
]

const features = [
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    title: 'Printing Excellence',
    description: 'Cutting-edge offset and digital printing solutions that combine innovation and craftsmanship to bring your ideas to life — from collateral and banners to intricate packaging.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Trusted Partner',
    description: '5 years of expertise across printing, branding and advertising — one of the most reliable end-to-end print partners in the UAE.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    title: 'Holistic Approach',
    description: 'A unique fusion of printing, branding and advertising under one roof — so your brand story stays consistent from concept to execution.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    title: 'Client-Centric Team',
    description: 'Creative professionals, strategists, and technical experts working closely with you to deliver solutions that align seamlessly with your vision.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    title: 'End-to-End Service',
    description: 'From design and pre-press to production, finishing and delivery — we handle every step so you can focus on growing your business.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    title: 'UAE-Wide Reach',
    description: 'Headquartered in Dubai with reliable delivery and on-site project execution across the UAE for printing, signage and event activations.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We sit down with you to understand your goals, challenges and unique offerings before we put pen to paper.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our creative team develops concepts, mock-ups and prototypes — infusing innovation into every detail.'
  },
  {
    number: '03',
    title: 'Produce',
    description: 'State-of-the-art presses and finishing equipment bring your project to life with precision and quality.'
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Quality-checked and carefully packed, your order is delivered on time across the UAE — ready to make an impact.'
  }
]

const companyValues = [
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>',
    title: 'Collaboration',
    description: 'We believe the best results are born from collaboration. We work closely with you to understand your goals, challenges and unique offerings, ensuring our solutions align seamlessly with your vision.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    title: 'Creativity',
    description: 'Creativity is at the core of everything we do. Our team thinks outside the box to bring fresh ideas to the table, infusing innovation into every project to set you apart from the competition.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    title: 'Quality',
    description: 'Our commitment to excellence is unwavering. We take pride in delivering materials, branding assets, and advertising campaigns that reflect the highest standards of quality and professionalism.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    title: 'Results-Driven',
    description: 'We measure our success by the impact we make on your business. From increased brand recognition to enhanced engagement, we focus on achieving tangible results that drive growth.'
  }
]

let scrollTriggers = []

onMounted(() => {
  // Smooth reveal: hide elements, then fade up on scroll.
  // Disables CSS transitions during entrance to avoid jank.
  const reveal = (trigger, targets, opts = {}) => {
    const els = document.querySelectorAll(targets)
    if (!els.length) return
    // Hide immediately + kill CSS transitions so they don't fight GSAP
    els.forEach(el => {
      el.style.transition = 'none'
      el.style.opacity = '0'
      el.style.transform = `translateY(${opts.y ?? 30}px)`
    })
    const st = ScrollTrigger.create({
      trigger: typeof trigger === 'string' ? document.querySelector(trigger) : trigger,
      start: opts.start || 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(els, {
          y: 0, opacity: 1,
          duration: opts.duration ?? 1,
          stagger: opts.stagger ?? 0.1,
          ease: 'power2.out',
          delay: opts.delay ?? 0,
          onComplete: () => {
            // Re-enable CSS transitions for hover effects
            els.forEach(el => el.style.transition = '')
          },
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Hero - quick fade up so page feels instant
  gsap.set(['.hero-label', '.hero-heading', '.hero-description', '.hero-image-wrapper', '.stat-item'], { opacity: 0, y: 12 })
  gsap.to('.hero-label', { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
  gsap.to('.hero-heading', { y: 0, opacity: 1, duration: 0.35, delay: 0.05, ease: 'power2.out' })
  gsap.to('.hero-description', { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: 'power2.out' })
  gsap.to('.hero-image-wrapper', { y: 0, opacity: 1, duration: 0.4, delay: 0.05, ease: 'power2.out' })
  gsap.to('.stat-item', { y: 0, opacity: 1, duration: 0.3, stagger: 0.06, delay: 0.15, ease: 'power2.out' })

  // Blind reveal helper
  const blindReveal = (trigger, targets, opts = {}) => {
    const els = document.querySelectorAll(targets)
    if (!els.length) return
    els.forEach(el => { el.style.transition = 'none'; el.style.clipPath = 'inset(0 0 100% 0)' })
    const st = ScrollTrigger.create({
      trigger: document.querySelector(trigger),
      start: opts.start || 'top 88%',
      once: true,
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

  // Timeline — fade up milestones
  reveal('.timeline-section', '.timeline-section .section-label, .timeline-section .section-heading')
  reveal('.timeline', '.milestone', { y: 35, stagger: 0.12, delay: 0.1 })

  // Features — fade up cards
  reveal('.features-section', '.features-section .section-label, .features-section .section-heading, .features-section .section-intro')
  reveal('.features-grid', '.feature-card', { y: 40, stagger: 0.08, delay: 0.1 })

  // Process — fade up
  reveal('.process-section', '.process-section .section-label, .process-section .section-heading')
  reveal('.process-steps', '.process-step', { y: 30, stagger: 0.12, delay: 0.1 })

  // Values — blind on cards (keeps variety)
  reveal('.values-section', '.values-section .section-label, .values-section .section-heading')
  blindReveal('.values-grid', '.value-card', { stagger: 0.1, delay: 0.1 })

  // CTA — fade up
  reveal('.cta-section', '.cta-heading, .cta-subtext, .cta-buttons', { y: 25, stagger: 0.08 })
})

onUnmounted(() => {
  scrollTriggers.forEach(trigger => {
    if (trigger && trigger.scrollTrigger) {
      trigger.scrollTrigger.kill()
    }
  })
  ScrollTrigger.getAll().forEach(st => st.kill())
  scrollTriggers = []
})
</script>

<style scoped>
/* ============================================
   ABOUT PAGE - Modern Corporate Design
   ============================================ */

.about-page {
  background: var(--bg-primary);
  font-family: var(--font-sans);
  color: var(--text-primary);
}

/* ---------- Shared ---------- */

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 12px;
}

.section-heading {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 68px);
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.section-heading + .section-intro {
  margin-top: -8px;
  margin-bottom: 56px;
}

.section-intro {
  max-width: 760px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 56px;
}

/* ============================================
   1. HERO - Split Layout
   ============================================ */

.hero-split {
  padding: 100px 24px 80px;
  background: var(--bg-primary);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 20px;
}

.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(40px, 5.5vw, 80px);
  font-weight: 400;
  line-height: 0.95;
  color: var(--text-primary);
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}
.hero-heading em {
  font-style: normal;
  color: var(--accent-teal);
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
  max-width: 520px;
}

.hero-image-wrapper {
  position: relative;
}

.hero-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.hero-stats {
  max-width: 1200px;
  margin: 64px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-item {
  text-align: center;
  padding: 32px 16px;
  border-radius: 12px;
  background: var(--bg-secondary);
}

.stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 400;
  color: var(--accent-teal);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 400;
}

/* ============================================
   2. TIMELINE - Horizontal
   ============================================ */

.timeline-section {
  padding: 100px 24px;
  background: var(--bg-primary);
}

.timeline {
  position: relative;
  padding-top: 32px;
}

.timeline-line {
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-teal);
  opacity: 0.25;
}

.timeline-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  position: relative;
}

.milestone {
  position: relative;
  padding-top: 32px;
}

.milestone-dot {
  position: absolute;
  top: 0;
  left: 24px;
  width: 14px;
  height: 14px;
  background: var(--accent-teal);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 2px var(--accent-teal);
}

.milestone-content {
  padding-top: 16px;
}

.milestone-year {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  color: var(--accent-teal);
  margin-bottom: 8px;
}

.milestone-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.milestone-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ============================================
   3. FEATURES - Icon Grid
   ============================================ */

.features-section {
  padding: 100px 24px;
  background: var(--bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.feature-card {
  background: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 36px 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(46, 139, 192, 0.08);
  color: var(--accent-teal);
  margin-bottom: 20px;
}

.feature-title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.feature-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ============================================
   4. PROCESS - 4 Steps
   ============================================ */

.process-section {
  padding: 100px 24px;
  background: var(--bg-primary);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  position: relative;
}

.process-step {
  text-align: center;
  position: relative;
  padding: 0 12px;
}

.step-number {
  display: inline-block;
  font-family: var(--font-display);
  font-size: clamp(32px, 3vw, 48px);
  font-weight: 400;
  color: var(--accent-teal);
  opacity: 0.2;
  margin-bottom: 12px;
  line-height: 1;
}

.step-title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.step-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.step-connector {
  position: absolute;
  right: -28px;
  top: 20px;
  display: flex;
  align-items: center;
  opacity: 0.4;
}

/* ============================================
   5. VALUES - 3 Column Grid
   ============================================ */

.values-section {
  padding: 100px 24px;
  background: var(--bg-secondary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 40px 32px;
  border: 1px solid var(--border-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-teal);
  margin-bottom: 20px;
}

.value-title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.value-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* ============================================
   6. CTA Section
   ============================================ */

.cta-section {
  padding: 100px 24px;
  background: var(--accent-teal);
  text-align: center;
}

.cta-heading {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 16px;
}

.cta-subtext {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  background: #ffffff;
  color: var(--accent-teal);
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}

.btn-cta-primary:hover {
  background: transparent;
  color: #ffffff;
}

.btn-cta-outline {
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .hero-container {
    gap: 40px;
  }

  .hero-image {
    height: 400px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-split {
    padding: 80px 20px 60px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-text {
    text-align: center;
  }

  .hero-description {
    margin: 0 auto;
  }

  .hero-image {
    height: 320px;
    border-radius: 12px;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 48px;
  }

  .stat-item {
    padding: 24px 16px;
  }

  .timeline-section,
  .features-section,
  .process-section,
  .values-section {
    padding: 72px 20px;
  }

  .section-heading {
    margin-bottom: 40px;
  }

  .timeline-items {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .timeline-line {
    display: none;
  }

  .milestone-dot {
    left: 0;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-section {
    padding: 72px 20px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-cta-primary,
  .btn-cta-outline {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-heading {
    font-size: 1.8rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-image {
    height: 260px;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .feature-card,
  .value-card {
    padding: 28px 20px;
  }
}
</style>
