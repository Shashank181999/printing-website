<template>
  <div class="about-page">

    <!-- Section 1: Hero - Split Layout -->
    <section class="hero-split">
      <div class="hero-container">
        <div class="hero-text">
          <span class="hero-label">About Al Falah</span>
          <h1 class="hero-heading">50 Years of<br>Printing Excellence</h1>
          <p class="hero-description">
            Since 1974, Al Falah Middle East has been at the forefront of premium printing
            and branding solutions in Dubai. From humble beginnings with a single press to
            becoming the region's most trusted name in print, our journey has been defined
            by an unwavering commitment to quality and innovation.
          </p>
        </div>
        <div class="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=85"
            alt="Al Falah printing press workshop"
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
                <span class="milestone-year">{{ milestone.year }}</span>
                <h3 class="milestone-title">{{ milestone.title }}</h3>
                <p class="milestone-desc">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: What Sets Us Apart - Icon Grid -->
    <section class="features-section">
      <div class="section-container">
        <span class="section-label">What Sets Us Apart</span>
        <h2 class="section-heading">Why Clients Choose Al Falah</h2>
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
          Let us bring your vision to life with five decades of printing expertise.
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
  { number: '50+', label: 'Years of Experience' },
  { number: '1000+', label: 'Projects Delivered' },
  { number: '15+', label: 'Countries Served' }
]

const milestones = [
  {
    year: '1974',
    title: 'The Beginning',
    description: 'Al Falah opens its first printing press in Dubai, laying the foundation for what would become a regional leader in the printing industry.'
  },
  {
    year: '1998',
    title: 'Digital Transformation',
    description: 'Embracing digital printing technology while preserving our commitment to craftsmanship, expanding our capacity and capabilities tenfold.'
  },
  {
    year: '2015',
    title: 'Regional Expansion',
    description: 'Establishing partnerships across 15 countries and launching our state-of-the-art production facility with the latest in sustainable printing technology.'
  }
]

const features = [
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    title: 'Premium Quality',
    description: 'Industry-leading print resolution with meticulous quality control at every stage of production.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Fast Turnaround',
    description: 'Streamlined workflows and dedicated teams ensure your projects are delivered on time, every time.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    title: 'Custom Design',
    description: 'Our in-house design team works closely with you to create bespoke solutions tailored to your brand.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    title: '50+ Years Experience',
    description: 'Half a century of expertise means we have seen it all and can handle projects of any scale or complexity.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    title: 'Eco-Friendly Options',
    description: 'Sustainable inks, recycled stocks, and energy-efficient processes that reduce environmental impact.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    title: 'Global Shipping',
    description: 'Reliable worldwide delivery with secure packaging to ensure your prints arrive in perfect condition.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and objectives to understand exactly what you need.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our creative team develops concepts and mock-ups for your review and approval.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Using premium materials and state-of-the-art equipment, we bring your project to life.'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Quality-checked and carefully packaged, your order is delivered on time, wherever you are.'
  }
]

const companyValues = [
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    title: 'Innovation',
    description: 'We continuously invest in the latest technologies and techniques to push the boundaries of what print can achieve, keeping our clients ahead of the curve.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    title: 'Integrity',
    description: 'Transparency, honesty, and accountability guide every interaction. We build lasting relationships founded on trust and mutual respect with every client we serve.'
  },
  {
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do. From material selection to final delivery, excellence is not a goal but a habit embedded in our culture.'
  }
]

let scrollTriggers = []

onMounted(() => {
  // Hero animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  heroTl
    .from('.hero-label', { y: 20, opacity: 0, duration: 0.6 })
    .from('.hero-heading', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
    .from('.hero-description', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
    .from('.hero-image-wrapper', { x: 60, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
    .from('.stat-item', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15
    }, '-=0.4')

  // Timeline section
  scrollTriggers.push(
    gsap.from('.timeline-section .section-label', {
      scrollTrigger: { trigger: '.timeline-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6
    })
  )
  scrollTriggers.push(
    gsap.from('.timeline-section .section-heading', {
      scrollTrigger: { trigger: '.timeline-section', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.1
    })
  )
  scrollTriggers.push(
    gsap.from('.timeline-line', {
      scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
      scaleX: 0, duration: 1, ease: 'power2.inOut', transformOrigin: 'left center'
    })
  )
  document.querySelectorAll('.milestone').forEach((el, i) => {
    scrollTriggers.push(
      gsap.from(el, {
        scrollTrigger: { trigger: '.timeline', start: 'top 75%' },
        y: 40, opacity: 0, duration: 0.7, delay: 0.3 + i * 0.2, ease: 'power3.out'
      })
    )
  })

  // Features section
  scrollTriggers.push(
    gsap.from('.features-section .section-label', {
      scrollTrigger: { trigger: '.features-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6
    })
  )
  scrollTriggers.push(
    gsap.from('.features-section .section-heading', {
      scrollTrigger: { trigger: '.features-section', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.1
    })
  )
  document.querySelectorAll('.feature-card').forEach((el, i) => {
    scrollTriggers.push(
      gsap.from(el, {
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
        y: 50, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out'
      })
    )
  })

  // Process section
  scrollTriggers.push(
    gsap.from('.process-section .section-label', {
      scrollTrigger: { trigger: '.process-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6
    })
  )
  scrollTriggers.push(
    gsap.from('.process-section .section-heading', {
      scrollTrigger: { trigger: '.process-section', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.1
    })
  )
  document.querySelectorAll('.process-step').forEach((el, i) => {
    scrollTriggers.push(
      gsap.from(el, {
        scrollTrigger: { trigger: '.process-steps', start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.6, delay: i * 0.15, ease: 'power3.out'
      })
    )
  })

  // Values section
  scrollTriggers.push(
    gsap.from('.values-section .section-label', {
      scrollTrigger: { trigger: '.values-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6
    })
  )
  scrollTriggers.push(
    gsap.from('.values-section .section-heading', {
      scrollTrigger: { trigger: '.values-section', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.1
    })
  )
  document.querySelectorAll('.value-card').forEach((el, i) => {
    scrollTriggers.push(
      gsap.from(el, {
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
        y: 50, opacity: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out'
      })
    )
  })

  // CTA section
  scrollTriggers.push(
    gsap.from('.cta-heading', {
      scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.7
    })
  )
  scrollTriggers.push(
    gsap.from('.cta-subtext', {
      scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6, delay: 0.15
    })
  )
  scrollTriggers.push(
    gsap.from('.cta-buttons', {
      scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.6, delay: 0.3
    })
  )
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
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 56px;
  line-height: 1.2;
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
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 600;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 24px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.stat-item {
  text-align: center;
  padding: 32px 16px;
  border-radius: 12px;
  background: var(--bg-secondary);
}

.stat-number {
  display: block;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
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
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
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
  background: rgba(74, 140, 63, 0.08);
  color: var(--accent-teal);
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 600;
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
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--accent-teal);
  opacity: 0.2;
  margin-bottom: 12px;
  line-height: 1;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 600;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
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
  font-size: 1.2rem;
  font-weight: 600;
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
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
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
    grid-template-columns: 1fr;
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
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .values-grid {
    grid-template-columns: 1fr;
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
