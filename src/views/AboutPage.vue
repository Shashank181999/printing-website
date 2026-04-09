<template>
  <div class="about-page">
    <!-- Hero Section - Dark with Image -->
    <section class="about-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80" alt="Printing Press" class="hero-bg-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-label">— Established 1974 —</span>
        <h1 class="hero-title">
          The Soul of the<br>
          <em>Printed Word.</em>
        </h1>
        <div class="hero-scroll">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Chronicle of Craft Section -->
    <section class="chronicle-section">
      <div class="container">
        <div class="chronicle-header">
          <span class="section-label">Our Journey</span>
          <h2 class="chronicle-title">Chronicle of Craft</h2>
        </div>

        <!-- Timeline Items -->
        <div class="timeline">
          <!-- Item 1 - Text Left, Image Right -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h3 class="timeline-heading">The Foundation</h3>
              <p class="timeline-text">
                Al Falah opens its first atelier in Dubai, dedicated to the art of traditional letterpress printing. A single Heidelberg Windmill and a commitment to perfection.
              </p>
              <span class="timeline-year">1974</span>
            </div>
            <div class="timeline-image">
              <img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?w=600&q=85" alt="The Foundation" />
            </div>
          </div>

          <!-- Item 2 - Image Left, Text Right -->
          <div class="timeline-item timeline-item-reverse">
            <div class="timeline-content">
              <h3 class="timeline-heading">The Digital Era</h3>
              <p class="timeline-text">
                Embracing the proprietary "Perfect Print" digital process, revolutionizing luxury stationery while preserving our heritage craftsmanship.
              </p>
              <span class="timeline-year">1998</span>
            </div>
            <div class="timeline-image">
              <img src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80" alt="Digital Era" />
            </div>
          </div>

          <!-- Item 3 - Text Left, Image Right -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h3 class="timeline-heading">Digital Integration</h3>
              <p class="timeline-text">
                Merging centuries-old techniques with cutting-edge precision, creating laser etching for an iconic finish that defines modern excellence.
              </p>
              <span class="timeline-year">2015</span>
            </div>
            <div class="timeline-image">
              <img src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?w=600&q=80" alt="Digital Integration" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Master's Workshop Section -->
    <section class="workshop-section">
      <div class="workshop-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
      <div class="container">
        <div class="workshop-content">
          <span class="workshop-label">◆ The Pressroom ◆</span>
          <h2 class="workshop-title">The Master's Workshop</h2>
          <p class="workshop-desc">
            Every pull of the lever is a conversation between history and the present. We don't just print; we impress.
          </p>
        </div>
        <div class="workshop-image">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80" alt="Workshop" />
        </div>
      </div>
    </section>

    <!-- Materials Section - Ink & Paper -->
    <section class="materials-section">
      <div class="container">
        <div class="materials-grid">
          <!-- Ink Card -->
          <div class="material-card">
            <div class="material-image">
              <img src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=600&q=85" alt="Printing Ink" />
            </div>
            <div class="material-content">
              <h3 class="material-title">Ink</h3>
              <p class="material-desc">
                Our signature pigments are custom-blended for intensity, longevity and an archaic tactile beauty that's felt in every impression.
              </p>
              <ul class="material-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Archival-Quality Pigment
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  100-Year UV Stability
                </li>
              </ul>
            </div>
          </div>

          <!-- Paper Card -->
          <div class="material-card">
            <div class="material-image">
              <img src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=600&q=85" alt="Premium Paper" />
            </div>
            <div class="material-content">
              <h3 class="material-title">Paper</h3>
              <p class="material-desc">
                Sourced from the best mills scattered across Europe, our 400gsm stock offers a tactile luxury that is rare in this digital age.
              </p>
              <ul class="material-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  400GSM Cotton Rag
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Premium Matte Vellum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="container">
        <div class="quote-content">
          <div class="quote-icon">"</div>
          <blockquote class="quote-text">
            In an age of ephemeral digital scrolls, we craft objects that command a physical presence. We don't just print messages, we give them weight and permanence.
          </blockquote>
          <div class="quote-author">
            <span class="author-name">Mohammed Al Falah</span>
            <span class="author-title">Founder & Master Printer</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="values-header">
          <span class="section-label">Our Philosophy</span>
          <h2 class="section-title">What <em>Drives</em> Us</h2>
        </div>
        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <span class="value-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <span class="cta-label">Ready to create something</span>
          <h2 class="cta-title"><em>extraordinary?</em></h2>
          <div class="cta-actions">
            <button class="btn-cta-primary" @click="openServiceForm">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <router-link to="/contact" class="btn-cta-secondary">
              Contact Us
            </router-link>
          </div>
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

const values = [
  {
    title: 'Heritage',
    description: 'Five decades of mastery, passed down through generations of master printers who understand the soul of ink on paper.'
  },
  {
    title: 'Precision',
    description: 'Every project is calibrated to perfection. We measure in microns because excellence lies in the details.'
  },
  {
    title: 'Innovation',
    description: 'Bridging centuries-old techniques with cutting-edge technology to create prints that transcend time.'
  },
  {
    title: 'Integrity',
    description: 'We stand behind every impression. Our reputation is built on trust and unwavering quality standards.'
  }
]

let scrollTriggers = []

onMounted(() => {
  // Hero animations - More dramatic entrance
  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  // Set initial states
  gsap.set('.hero-bg-img', { scale: 1.2 })

  heroTl
    .to('.hero-bg-img', { scale: 1, duration: 2, ease: 'power2.out' })
    .from('.hero-label', {
      y: 40,
      opacity: 0,
      duration: 1,
      letterSpacing: '0.5em'
    }, '-=1')
    .from('.hero-title', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      rotationX: 15,
      transformOrigin: 'bottom center'
    }, '-=0.7')
    .from('.hero-title em', {
      opacity: 0,
      x: -30,
      duration: 0.8
    }, '-=0.5')
    .from('.hero-scroll', {
      y: -30,
      opacity: 0,
      duration: 0.8
    }, '-=0.3')

  // Hero parallax with zoom
  scrollTriggers.push(
    gsap.to('.hero-bg-img', {
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 200,
      scale: 1.15
    })
  )


  // Chronicle header with scale
  scrollTriggers.push(
    gsap.fromTo('.chronicle-header .section-label',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.chronicle-section', start: 'top 85%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.chronicle-title',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.chronicle-section', start: 'top 80%' },
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out'
      }
    )
  )

  // Timeline items with enhanced animations
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    const isReverse = item.classList.contains('timeline-item-reverse')
    const content = item.querySelector('.timeline-content')
    const image = item.querySelector('.timeline-image')
    const heading = item.querySelector('.timeline-heading')
    const text = item.querySelector('.timeline-text')
    const year = item.querySelector('.timeline-year')

    // Image with clip-path reveal
    scrollTriggers.push(
      gsap.fromTo(image,
        {
          clipPath: isReverse ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
          opacity: 0
        },
        {
          scrollTrigger: { trigger: item, start: 'top 80%' },
          clipPath: 'inset(0 0% 0 0%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power4.inOut'
        }
      )
    )

    // Content elements stagger
    scrollTriggers.push(
      gsap.fromTo(heading,
        { x: isReverse ? 60 : -60, opacity: 0 },
        {
          scrollTrigger: { trigger: item, start: 'top 80%' },
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3
        }
      )
    )

    scrollTriggers.push(
      gsap.fromTo(text,
        { x: isReverse ? 40 : -40, opacity: 0 },
        {
          scrollTrigger: { trigger: item, start: 'top 80%' },
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5
        }
      )
    )

    scrollTriggers.push(
      gsap.fromTo(year,
        { scale: 0.8, opacity: 0 },
        {
          scrollTrigger: { trigger: item, start: 'top 80%' },
          scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', delay: 0.7
        }
      )
    )
  })

  // Workshop section - Enhanced
  scrollTriggers.push(
    gsap.fromTo('.workshop-label',
      { y: 20, opacity: 0, letterSpacing: '0.5em' },
      {
        scrollTrigger: { trigger: '.workshop-section', start: 'top 75%' },
        y: 0, opacity: 1, letterSpacing: '0.3em', duration: 0.8, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.workshop-title',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.workshop-section', start: 'top 70%' },
        y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.workshop-desc',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: '.workshop-section', start: 'top 65%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
      }
    )
  )

  // Workshop image with reveal
  scrollTriggers.push(
    gsap.fromTo('.workshop-image',
      { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
      {
        scrollTrigger: { trigger: '.workshop-image', start: 'top 85%' },
        clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 1.5, ease: 'power4.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.workshop-image img',
      { scale: 1.3 },
      {
        scrollTrigger: { trigger: '.workshop-image', start: 'top 85%' },
        scale: 1, duration: 1.8, ease: 'power3.out'
      }
    )
  )

  // Materials cards with stagger and rotation
  document.querySelectorAll('.material-card').forEach((card, index) => {
    scrollTriggers.push(
      gsap.fromTo(card,
        { y: 80, opacity: 0, rotationY: index === 0 ? -10 : 10 },
        {
          scrollTrigger: { trigger: '.materials-section', start: 'top 80%' },
          y: 0, opacity: 1, rotationY: 0, duration: 1, ease: 'power3.out', delay: index * 0.2
        }
      )
    )

    // Image scale effect
    const img = card.querySelector('.material-image img')
    scrollTriggers.push(
      gsap.fromTo(img,
        { scale: 1.2 },
        {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          scale: 1, duration: 1.2, ease: 'power3.out'
        }
      )
    )
  })

  // Quote section - Enhanced dramatic entrance
  scrollTriggers.push(
    gsap.fromTo('.quote-icon',
      { scale: 0, rotation: -45, opacity: 0 },
      {
        scrollTrigger: { trigger: '.quote-section', start: 'top 80%' },
        scale: 1, rotation: 0, opacity: 0.4, duration: 1, ease: 'elastic.out(1, 0.5)'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.quote-text',
      { y: 60, opacity: 0, scale: 0.98 },
      {
        scrollTrigger: { trigger: '.quote-section', start: 'top 75%' },
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.quote-author',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.quote-section', start: 'top 70%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
      }
    )
  )

  // Values section - Staggered cards with pop effect
  scrollTriggers.push(
    gsap.fromTo('.values-header .section-label',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.values-section', start: 'top 85%' },
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.values-header .section-title',
      { y: 50, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.values-section', start: 'top 85%' },
        y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.1
      }
    )
  )

  // Value cards with staggered pop animation
  document.querySelectorAll('.value-card').forEach((card, index) => {
    const number = card.querySelector('.value-number')

    scrollTriggers.push(
      gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: { trigger: '.values-grid', start: 'top 85%' },
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)', delay: index * 0.1
        }
      )
    )

    // Number counter effect
    scrollTriggers.push(
      gsap.fromTo(number,
        { scale: 0, rotation: -10 },
        {
          scrollTrigger: { trigger: '.values-grid', start: 'top 85%' },
          scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)', delay: index * 0.1 + 0.2
        }
      )
    )
  })

  // CTA section - Split animation
  scrollTriggers.push(
    gsap.fromTo('.cta-label',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.cta-title',
      { y: 50, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
        y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.15
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.cta-actions',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.cta-actions > *',
      { y: 20, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.4
      }
    )
  )

  // Hover effects for material cards
  document.querySelectorAll('.material-card').forEach(card => {
    const img = card.querySelector('img')
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: 0.4, ease: 'power2.out' })
      gsap.to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
      gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.out' })
    })
  })

  // Hover effects for value cards
  document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)', duration: 0.3, ease: 'power2.out' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', duration: 0.3, ease: 'power2.out' })
    })
  })
})

onUnmounted(() => {
  scrollTriggers.forEach(trigger => {
    if (trigger && trigger.kill) trigger.kill()
  })
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* Hero Section */
.about-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
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
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 115, 119, 0.85) 0%,
    rgba(10, 92, 95, 0.8) 30%,
    rgba(26, 26, 26, 0.9) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 24px;
}

.hero-label {
  display: block;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: 0.8;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(42px, 8vw, 80px);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 60px;
}

.hero-title em {
  font-style: normal;
  font-weight: 200;
}

.hero-scroll {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.6;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* Chronicle Section */
.chronicle-section {
  padding: 140px 0;
  background: var(--bg-primary);
}

.chronicle-header {
  text-align: center;
  margin-bottom: 100px;
}

.chronicle-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 300;
  color: var(--text-primary);
  margin-top: 16px;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.timeline-item-reverse {
  direction: rtl;
}

.timeline-item-reverse > * {
  direction: ltr;
}

.timeline-content {
  padding: 40px 0;
}

.timeline-heading {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.timeline-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.timeline-year {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent-teal);
  padding: 8px 16px;
  border: 1px solid var(--accent-teal);
  border-radius: 4px;
}

.timeline-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  will-change: clip-path;
}

.timeline-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

/* Workshop Section */
.workshop-section {
  position: relative;
  padding: 160px 0 120px;
  background: var(--bg-dark);
  color: white;
}

.workshop-curve {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
}

.workshop-curve svg {
  width: 100%;
  height: 80px;
  display: block;
}

.workshop-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
}

.workshop-label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 20px;
}

.workshop-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 300;
  margin-bottom: 24px;
}

.workshop-desc {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
}

.workshop-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  will-change: clip-path;
}

.workshop-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

/* Materials Section */
.materials-section {
  padding: 140px 0;
  background: var(--bg-secondary);
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.material-card {
  background: var(--bg-primary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.material-image {
  height: 220px;
  overflow: hidden;
}

.material-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.material-content {
  padding: 36px;
}

.material-title {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.material-desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.material-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.material-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.material-features svg {
  color: var(--accent-teal);
  flex-shrink: 0;
}

/* Quote Section */
.quote-section {
  padding: 140px 0;
  background: var(--bg-dark);
  color: white;
}

.quote-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.quote-icon {
  font-family: var(--font-serif);
  font-size: 120px;
  line-height: 0.6;
  color: var(--accent-teal);
  opacity: 0.4;
  margin-bottom: 20px;
}

.quote-text {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 200;
  font-style: normal;
  line-height: 1.6;
  margin-bottom: 48px;
}

.quote-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.author-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

/* Values Section */
.values-section {
  padding: 140px 0;
  background: var(--bg-primary);
}

.values-header {
  text-align: center;
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 36px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.value-number {
  display: block;
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 300;
  color: var(--accent-teal);
  opacity: 0.5;
  margin-bottom: 16px;
}

.value-card h3 {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.value-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: var(--accent-teal);
}

.cta-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.cta-label {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  display: block;
}

.cta-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 300;
  color: white;
  margin-bottom: 36px;
}

.cta-title em {
  font-style: normal;
  font-weight: 200;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: white;
  color: var(--accent-teal);
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 16px 28px;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* Common */
.section-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-teal);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 300;
  color: var(--text-primary);
  margin-top: 12px;
}

.section-title em {
  font-style: normal;
  font-weight: 200;
  color: var(--accent-teal);
}

/* Responsive */
@media (max-width: 1024px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .timeline-item-reverse {
    direction: ltr;
  }

  .timeline-image {
    order: -1;
  }

  .materials-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .workshop-curve {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-hero {
    min-height: 500px;
  }

  .chronicle-section,
  .materials-section,
  .quote-section,
  .values-section {
    padding: 100px 0;
  }

  .timeline {
    gap: 80px;
  }

  .timeline-image img {
    height: 280px;
  }

  .workshop-image img {
    height: 350px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .cta-actions {
    flex-direction: column;
  }
}
</style>
