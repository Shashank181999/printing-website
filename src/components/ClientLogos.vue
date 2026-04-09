<template>
  <section class="client-logos">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trusted By</span>
        <h2>Our Valued Clients</h2>
        <p>Partnering with leading brands and organizations across the region</p>
      </div>
    </div>

    <div class="logos-marquee">
      <div class="marquee-wrapper">
        <div ref="marqueeTrack" class="marquee-track">
          <div class="marquee-content">
            <div v-for="(client, index) in clients" :key="'a-' + index" class="client-logo">
              <div class="logo-placeholder" :style="{ background: client.color }">
                {{ client.name }}
              </div>
            </div>
          </div>
          <div class="marquee-content">
            <div v-for="(client, index) in clients" :key="'b-' + index" class="client-logo">
              <div class="logo-placeholder" :style="{ background: client.color }">
                {{ client.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-number">500+</span>
          <span class="stat-label">Active Clients</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">15+</span>
          <span class="stat-label">Countries Served</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">98%</span>
          <span class="stat-label">Client Retention</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">24/7</span>
          <span class="stat-label">Customer Support</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const marqueeTrack = ref(null)

const clients = [
  { name: 'Emirates', color: 'linear-gradient(135deg, #C8102E, #9a0c23)' },
  { name: 'Emaar', color: 'linear-gradient(135deg, #1a1a2e, #333)' },
  { name: 'Dubai Mall', color: 'linear-gradient(135deg, #D4AF37, #b8962f)' },
  { name: 'Etisalat', color: 'linear-gradient(135deg, #00A651, #008542)' },
  { name: 'ADNOC', color: 'linear-gradient(135deg, #00A550, #008743)' },
  { name: 'Majid Al Futtaim', color: 'linear-gradient(135deg, #E31837, #c41430)' },
  { name: 'Dubai Tourism', color: 'linear-gradient(135deg, #0066B3, #005294)' },
  { name: 'DEWA', color: 'linear-gradient(135deg, #00A651, #008542)' },
  { name: 'RTA', color: 'linear-gradient(135deg, #FF6B35, #e55a2b)' },
  { name: 'Nakheel', color: 'linear-gradient(135deg, #1a1a2e, #333)' }
]

onMounted(() => {
  gsap.to(marqueeTrack.value, {
    xPercent: -50,
    duration: 30,
    repeat: -1,
    ease: 'none'
  })

  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-row',
      start: 'top 90%'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.client-logos {
  padding: 100px 0;
  background: var(--bg-secondary);
  overflow: hidden;
}

.logos-marquee {
  margin: 50px 0;
}

.marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(90deg, var(--bg-secondary), transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(-90deg, var(--bg-secondary), transparent);
}

.marquee-track {
  display: flex;
  width: fit-content;
}

.marquee-content {
  display: flex;
  gap: 40px;
  padding: 0 20px;
}

.client-logo {
  flex-shrink: 0;
}

.logo-placeholder {
  width: 160px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease;
}

.logo-placeholder:hover {
  transform: scale(1.05);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding-top: 50px;
  border-top: 1px solid var(--border-light);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .client-logos {
    padding: 60px 0;
  }

  .logo-placeholder {
    width: 130px;
    height: 65px;
    font-size: 12px;
  }

  .marquee-content {
    gap: 25px;
  }

  .stats-row {
    gap: 25px;
  }

  .stat-number {
    font-size: 32px;
  }

  .stat-label {
    font-size: 13px;
  }
}
</style>
