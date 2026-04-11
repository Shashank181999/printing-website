<template>
  <div class="home">
    <!-- 1. Cinematic 3D Hero -->
    <CinematicScene />

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

    <!-- Welcome / About AFME -->
    <section class="welcome-section" ref="welcomeSection">
      <div class="container welcome-container">
        <div class="welcome-text">
          <span class="welcome-eyebrow">welcome to AFME</span>
          <h2 class="welcome-title">More Than a Company —<br><em>Your Partners</em> in Print</h2>
          <p class="welcome-desc">
            At AFME, we are more than just a printing company — we are your partners in
            transforming ideas into tangible realities. With 50 years of expertise across
            printing, branding and advertising, we help businesses communicate effectively,
            stand out in the market and build meaningful connections with their audiences.
          </p>
          <div class="welcome-cta">
            <router-link to="/about" class="btn-welcome-primary">About AFME</router-link>
            <router-link to="/services" class="btn-welcome-outline">Our Services</router-link>
          </div>
          <div class="welcome-stats">
            <div class="welcome-stat"><strong>50</strong><span>Years of<br>Experience</span></div>
            <div class="welcome-stat"><strong>8</strong><span>Service<br>Verticals</span></div>
            <div class="welcome-stat"><strong>1000+</strong><span>Projects<br>Delivered</span></div>
          </div>
        </div>
        <div class="welcome-visual">
          <div class="welcome-image-stack">
            <div class="welcome-img welcome-img--back">
              <img src="/products/annual-report.webp" alt="Annual Report" />
            </div>
            <div class="welcome-img welcome-img--front">
              <img src="/products/gold-foil-business-cards.webp" alt="Premium printing" />
            </div>
            <div class="welcome-floating-card">
              <div class="welcome-floating-num">50+</div>
              <div>
                <strong>Years</strong>
                <span>Trusted in UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D Coverflow Carousel -->
    <section class="coverflow-section" ref="coverflowSection">
      <div class="container">
        <div class="section-header section-header--center">
          <span class="coverflow-eyebrow">FEATURED SHOWCASE</span>
          <h2 class="section-title">Explore in <em>3D</em></h2>
          <p class="section-subtitle">Drag, swipe or use the arrows — every product spins into focus.</p>
        </div>

        <div
          class="coverflow"
          ref="coverflowEl"
          @pointerdown="onCoverflowDown"
          @pointermove="onCoverflowMove"
          @pointerup="onCoverflowUp"
          @pointerleave="onCoverflowUp"
          @pointercancel="onCoverflowUp"
        >
          <div class="coverflow-stage">
            <div
              v-for="(item, idx) in coverflowItems"
              :key="item.slug"
              class="coverflow-card"
              :class="{ 'is-active': idx === activeIndex }"
              :style="getCoverflowStyle(idx)"
              @click="setActive(idx)"
            >
              <img :src="`/products/${item.slug}.webp`" :alt="item.name" />
              <div class="coverflow-shine"></div>
              <div class="coverflow-card-info">
                <span class="coverflow-card-cat">{{ item.category }}</span>
                <h3>{{ item.name }}</h3>
              </div>
              <div class="coverflow-card-reflection"></div>
            </div>
          </div>

          <button class="coverflow-nav coverflow-nav--prev" @click="prevSlide" aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="coverflow-nav coverflow-nav--next" @click="nextSlide" aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div class="coverflow-dots">
          <button
            v-for="(item, idx) in coverflowItems"
            :key="'dot-' + item.slug"
            class="coverflow-dot"
            :class="{ active: idx === activeIndex }"
            @click="setActive(idx)"
            :aria-label="`Go to ${item.name}`"
          ></button>
        </div>
      </div>
    </section>

    <!-- Scroll-pinned 3D Cube Section -->
    <section class="cube-section" ref="cubeSection">
      <div class="cube-pin">
        <div class="container cube-container">
          <!-- LEFT: Rotating Cube -->
          <div class="cube-stage">
            <div class="cube" ref="cubeEl" :data-face="cubeActiveFace">
              <div class="cube-face cube-face--front">
                <img src="/products/gold-foil-business-cards.webp" alt="Business Cards" />
                <div class="cube-face-label">01 / Business Cards</div>
              </div>
              <div class="cube-face cube-face--right">
                <img src="/products/rigid-box-packaging.webp" alt="Packaging" />
                <div class="cube-face-label">02 / Packaging</div>
              </div>
              <div class="cube-face cube-face--back">
                <img src="/products/neon-signage.webp" alt="Signage" />
                <div class="cube-face-label">03 / Signage</div>
              </div>
              <div class="cube-face cube-face--left">
                <img src="/products/custom-t-shirts.webp" alt="Apparel" />
                <div class="cube-face-label">04 / Apparel</div>
              </div>
            </div>
            <div class="cube-shadow"></div>
          </div>

          <!-- RIGHT: Text content that changes per face -->
          <div class="cube-content">
            <span class="cube-eyebrow">SCROLL TO EXPLORE</span>
            <div class="cube-slides">
              <div
                class="cube-slide"
                v-for="(slide, i) in cubeSlides"
                :key="i"
                :class="{
                  active: cubeActiveFace === i,
                  past: i < cubeActiveFace,
                  future: i > cubeActiveFace,
                }"
              >
                <div class="cube-slide-num">0{{ i + 1 }}</div>
                <h2 class="cube-slide-title">{{ slide.title }}</h2>
                <p class="cube-slide-desc">{{ slide.desc }}</p>
                <ul class="cube-slide-features">
                  <li v-for="f in slide.features" :key="f">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="cube-progress">
              <div
                v-for="(_, i) in cubeSlides"
                :key="'p-' + i"
                class="cube-progress-dot"
                :class="{ active: cubeActiveFace === i }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CMYK Color Magic Section -->
    <section class="cmyk-section" ref="cmykSection">
      <div class="container cmyk-container">
        <div class="cmyk-text">
          <span class="cmyk-eyebrow">CMYK COLOR PROCESS</span>
          <h2 class="cmyk-title">Where Every <em>Color</em><br>Begins</h2>
          <p class="cmyk-desc">
            Cyan, Magenta, Yellow, and Black — four inks layered with precision to bring
            your designs to life in vibrant detail. Watch them converge into the perfect print.
          </p>
          <div class="cmyk-stats">
            <div class="cmyk-stat"><strong>4</strong><span>Color Channels</span></div>
            <div class="cmyk-stat"><strong>2400</strong><span>DPI Resolution</span></div>
            <div class="cmyk-stat"><strong>100%</strong><span>Color Accuracy</span></div>
          </div>
        </div>

        <div class="cmyk-stage">
          <div class="cmyk-orbit">
            <div class="cmyk-blob cmyk-blob--c"></div>
            <div class="cmyk-blob cmyk-blob--m"></div>
            <div class="cmyk-blob cmyk-blob--y"></div>
            <div class="cmyk-blob cmyk-blob--k"></div>
          </div>
          <div class="cmyk-paper">
            <div class="cmyk-paper-content">
              <div class="cmyk-paper-line cmyk-paper-line--1"></div>
              <div class="cmyk-paper-line cmyk-paper-line--2"></div>
              <div class="cmyk-paper-line cmyk-paper-line--3"></div>
              <div class="cmyk-paper-image"></div>
              <div class="cmyk-paper-line cmyk-paper-line--4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section" ref="whySection">
      <div class="container why-container">
        <div class="why-text">
          <span class="why-eyebrow">ABOUT COMPANY</span>
          <h2 class="why-title">Why Choose <em>Us</em></h2>
          <p class="why-desc">
            With a blend of expertise, dedication, and a client-centric approach, AFME is
            the partner of choice for businesses seeking to amplify their presence in the
            market. Our holistic approach — rooted in the fusion of printing, branding and
            advertising — positions us as trailblazers in the industry, ready to propel your
            business toward success.
          </p>
          <p class="why-desc">
            Elevate your brand, captivate your audience, and make a statement that lasts —
            partner with AFME today and embark on a journey of innovation, creativity and growth.
          </p>
          <router-link to="/about" class="btn-why">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
        <div class="why-points">
          <div class="why-point" v-for="(point, i) in whyPoints" :key="point.title">
            <div class="why-point-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="why-point-icon" v-html="point.icon"></div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.desc }}</p>
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

    <!-- 3D Animated Printing Press Section -->
    <section class="press-section" ref="pressSection">
      <!-- Floating ink drops background -->
      <div class="ink-drops" aria-hidden="true">
        <span class="ink-drop ink-drop--c" style="--delay:0s;  --left:8%;  --size:18px"></span>
        <span class="ink-drop ink-drop--m" style="--delay:1.2s;--left:22%; --size:14px"></span>
        <span class="ink-drop ink-drop--y" style="--delay:2.4s;--left:38%; --size:22px"></span>
        <span class="ink-drop ink-drop--k" style="--delay:0.6s;--left:54%; --size:12px"></span>
        <span class="ink-drop ink-drop--c" style="--delay:1.8s;--left:68%; --size:20px"></span>
        <span class="ink-drop ink-drop--m" style="--delay:3s;  --left:82%; --size:16px"></span>
        <span class="ink-drop ink-drop--y" style="--delay:0.4s;--left:92%; --size:14px"></span>
      </div>

      <div class="container press-container">
        <div class="press-text">
          <span class="press-eyebrow">PRECISION TECHNOLOGY</span>
          <h2 class="press-title">Our <em>Press</em><br>In Action</h2>
          <p class="press-desc">
            State-of-the-art offset and digital presses, calibrated to deliver razor-sharp
            details and consistent color from the first sheet to the millionth.
          </p>
          <ul class="press-features">
            <li><span class="press-tick">✓</span> 4-color CMYK + spot color printing</li>
            <li><span class="press-tick">✓</span> Up to 18,000 sheets per hour</li>
            <li><span class="press-tick">✓</span> 2400 DPI razor-sharp resolution</li>
            <li><span class="press-tick">✓</span> Eco-friendly soy-based inks</li>
          </ul>
        </div>

        <!-- 3D animated press machine -->
        <div class="press-machine">
          <div class="press-frame">
            <!-- Paper feed in -->
            <div class="press-paper press-paper--feed"></div>
            <!-- 4 CMYK rollers rotating -->
            <div class="press-rollers">
              <div class="press-roller press-roller--c"><div class="press-roller-stripe"></div></div>
              <div class="press-roller press-roller--m"><div class="press-roller-stripe"></div></div>
              <div class="press-roller press-roller--y"><div class="press-roller-stripe"></div></div>
              <div class="press-roller press-roller--k"><div class="press-roller-stripe"></div></div>
            </div>
            <!-- Paper moving through -->
            <div class="press-paper-track">
              <div class="press-paper press-paper--moving"></div>
              <div class="press-paper press-paper--moving" style="animation-delay: -1.6s"></div>
              <div class="press-paper press-paper--moving" style="animation-delay: -3.2s"></div>
            </div>
            <!-- Output tray -->
            <div class="press-output">
              <div class="press-output-stack">
                <div></div><div></div><div></div><div></div><div></div>
              </div>
            </div>
            <!-- Status LEDs -->
            <div class="press-leds">
              <span class="press-led press-led--green"></span>
              <span class="press-led press-led--yellow"></span>
              <span class="press-led press-led--red"></span>
            </div>
            <div class="press-label">AL FALAH PRINT 4.0</div>
          </div>
          <div class="press-base"></div>
        </div>
      </div>
    </section>

    <!-- Paper Roll Unfurl Section -->
    <section class="paper-roll-section" ref="rollSection">
      <div class="container roll-container">
        <div class="roll-stage">
          <div class="paper-roll">
            <div class="paper-roll-cylinder"></div>
            <div class="paper-roll-end paper-roll-end--front"></div>
            <div class="paper-roll-end paper-roll-end--back"></div>
            <div class="paper-roll-stripes"></div>
          </div>
          <div class="paper-unfurl">
            <div class="paper-unfurl-sheet">
              <div class="unfurl-bar unfurl-bar--c"></div>
              <div class="unfurl-bar unfurl-bar--m"></div>
              <div class="unfurl-bar unfurl-bar--y"></div>
              <div class="unfurl-bar unfurl-bar--k"></div>
              <div class="unfurl-image"></div>
            </div>
          </div>
        </div>

        <div class="roll-text">
          <span class="roll-eyebrow">FROM ROLL TO REALITY</span>
          <h2 class="roll-title">Endless Rolls,<br><em>Limitless</em> Designs</h2>
          <p class="roll-desc">
            From large-format banners to vinyl wraps, we feed massive paper and substrate rolls
            through our presses to create signage and prints at any scale.
          </p>
          <div class="roll-badges">
            <div class="roll-badge"><strong>5m</strong><span>Max Print Width</span></div>
            <div class="roll-badge"><strong>1200m²</strong><span>Daily Output</span></div>
            <div class="roll-badge"><strong>24/7</strong><span>Production</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D Tilt Print Process Section -->
    <section class="process-3d-section" ref="processSection">
      <div class="container">
        <div class="section-header section-header--center">
          <span class="process-eyebrow">HOW WE WORK</span>
          <h2 class="section-title">From Idea to <em>Print</em></h2>
          <p class="section-subtitle">Five expert steps that turn your vision into a perfectly printed reality.</p>
        </div>

        <div class="process-grid">
          <div
            v-for="(step, idx) in processSteps"
            :key="step.title"
            class="process-card"
            @mousemove="onTiltMove($event)"
            @mouseleave="onTiltLeave($event)"
          >
            <div class="process-card-inner">
              <div class="process-card-num">{{ String(idx + 1).padStart(2, '0') }}</div>
              <div class="process-card-icon" v-html="step.icon"></div>
              <h3 class="process-card-title">{{ step.title }}</h3>
              <p class="process-card-desc">{{ step.desc }}</p>
              <div class="process-card-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach — 4 Pillars -->
    <section class="approach-section" ref="approachSection">
      <div class="container">
        <div class="section-header section-header--center">
          <span class="approach-eyebrow">OUR APPROACH</span>
          <h2 class="section-title">Built on <em>Four Pillars</em></h2>
          <p class="section-subtitle">The values that guide every project — from the first conversation to final delivery.</p>
        </div>
        <div class="approach-grid">
          <div
            v-for="(pillar, i) in approachPillars"
            :key="pillar.title"
            class="approach-card"
            @mousemove="onTiltMove($event)"
            @mouseleave="onTiltLeave($event)"
          >
            <div class="approach-card-inner">
              <div class="approach-card-num">0{{ i + 1 }}</div>
              <div class="approach-card-icon" v-html="pillar.icon"></div>
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.desc }}</p>
              <div class="approach-card-glow"></div>
            </div>
          </div>
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
import CinematicScene from '../components/CinematicScene.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const openServiceForm = inject('openServiceForm')

const searchQuery = ref('')

const trendingSection = ref(null)
const trustSection = ref(null)
const ctaSection = ref(null)
const coverflowSection = ref(null)
const coverflowEl = ref(null)
const welcomeSection = ref(null)
const whySection = ref(null)
const approachSection = ref(null)

// Scroll-pinned cube refs/state
const cubeSection = ref(null)
const cubeEl = ref(null)
const cubeActiveFace = ref(0)

// CMYK + Print Process refs
const cmykSection = ref(null)
const processSection = ref(null)
const pressSection = ref(null)
const rollSection = ref(null)

// Print process steps
const processSteps = [
  {
    title: 'Design',
    desc: 'Our creative team brings your vision to life with custom graphic design tailored to your brand.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  },
  {
    title: 'Pre-Press',
    desc: 'Color calibration, plate preparation, and proofing — every detail checked before printing begins.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg>',
  },
  {
    title: 'Print',
    desc: 'High-precision offset and digital presses produce vivid, accurate prints in any quantity.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  },
  {
    title: 'Finish',
    desc: 'Foil stamping, embossing, lamination, and die-cutting add the perfect premium touch.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  },
  {
    title: 'Deliver',
    desc: 'Carefully packed and shipped across the UAE — your finished product arrives ready to impress.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  },
]

// 3D mouse tilt handlers (works for any card with an *-inner / *-glow child)
function onTiltMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  const rotateY = (px - 0.5) * 18
  const rotateX = (0.5 - py) * 18
  const inner = card.querySelector('.process-card-inner, .approach-card-inner')
  if (inner) {
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  }
  const glow = card.querySelector('.process-card-glow, .approach-card-glow')
  if (glow) {
    glow.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(46,139,192,0.35) 0%, transparent 60%)`
    glow.style.opacity = '1'
  }
}

function onTiltLeave(e) {
  const card = e.currentTarget
  const inner = card.querySelector('.process-card-inner, .approach-card-inner')
  if (inner) {
    inner.style.transform = 'rotateX(0) rotateY(0) translateZ(0)'
  }
  const glow = card.querySelector('.process-card-glow, .approach-card-glow')
  if (glow) glow.style.opacity = '0'
}

const cubeSlides = [
  {
    title: 'Business Cards',
    desc: 'Premium printed cards with foil, embossing, NFC, and unique die-cut shapes that turn first impressions into lasting ones.',
    features: ['Gold & silver foil stamping', 'NFC smart cards', 'Die-cut and special shapes', 'Premium soft-touch finishes']
  },
  {
    title: 'Custom Packaging',
    desc: 'Rigid boxes, food-safe packaging and luxury retail boxes designed to protect and showcase your products.',
    features: ['Rigid gift boxes', 'Food-grade printing', 'Custom shipping boxes', 'Branded paper bags']
  },
  {
    title: 'Signage & Neon',
    desc: 'Indoor, outdoor, neon, and LED signs that make your brand impossible to miss — day or night.',
    features: ['Custom neon signage', '3D metal letters', 'Roll-up & feather flags', 'Vehicle wraps']
  },
  {
    title: 'Apparel & Merch',
    desc: 'High-quality custom T-shirts, hoodies, caps and corporate gifts ready to wear your brand everywhere.',
    features: ['Screen & DTG printing', 'Embroidered polos', 'Branded caps & hoodies', 'Tote bags & welcome kits']
  },
]

// 3D Coverflow state
const activeIndex = ref(0)
const coverflowItems = [
  { slug: 'gold-foil-business-cards', name: 'Gold Foil Business Cards', category: 'Business Cards' },
  { slug: 'neon-signage', name: 'Custom Neon Signage', category: 'Signage' },
  { slug: 'rigid-box-packaging', name: 'Rigid Box Packaging', category: 'Packaging' },
  { slug: 'nfcsmart-business-card', name: 'NFC Smart Business Card', category: 'Business Cards' },
  { slug: 'custom-t-shirts', name: 'Custom T-Shirts', category: 'Apparel' },
  { slug: 'vehicle-branding', name: 'Vehicle Branding', category: 'Branding' },
  { slug: 'roll-up-banners', name: 'Roll-Up Banners', category: 'Banners' },
  { slug: 'metal-business-cards', name: 'Metal Business Cards', category: 'Business Cards' },
  { slug: 'exhibition-booth-setup', name: 'Exhibition Booth Setup', category: 'Displays' },
]

function getCoverflowStyle(idx) {
  const offset = idx - activeIndex.value
  const abs = Math.abs(offset)
  const sign = Math.sign(offset)
  // Hide cards too far away
  if (abs > 3) return { opacity: 0, pointerEvents: 'none', transform: `translate3d(0,0,-1200px)` }
  const translateX = offset * 180
  const translateZ = -abs * 220
  const rotateY = sign * Math.min(abs * 35, 60) * -1
  const opacity = abs === 0 ? 1 : Math.max(0.35, 1 - abs * 0.25)
  const zIndex = 100 - abs
  return {
    transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg)`,
    opacity,
    zIndex,
  }
}

function setActive(idx) {
  activeIndex.value = (idx + coverflowItems.length) % coverflowItems.length
}
function nextSlide() { setActive(activeIndex.value + 1) }
function prevSlide() { setActive(activeIndex.value - 1) }

// Drag/swipe support
let dragStartX = 0
let dragStartIdx = 0
let isDragging = false

function onCoverflowDown(e) {
  isDragging = true
  dragStartX = e.clientX
  dragStartIdx = activeIndex.value
  pauseAutoplay()
  if (e.target.setPointerCapture) {
    try { e.target.setPointerCapture(e.pointerId) } catch (_) {}
  }
}
function onCoverflowMove(e) {
  if (!isDragging) return
  const dx = e.clientX - dragStartX
  const step = Math.round(-dx / 90)
  setActive(dragStartIdx + step)
}
function onCoverflowUp() {
  if (!isDragging) return
  isDragging = false
  resumeAutoplay()
}

// Autoplay
let autoplayTimer = null
function startAutoplay() {
  autoplayTimer = setInterval(() => { nextSlide() }, 3500)
}
function pauseAutoplay() {
  if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null }
}
function resumeAutoplay() {
  pauseAutoplay()
  startAutoplay()
}

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

// Why Choose Us — points
const whyPoints = [
  {
    title: 'Expertise',
    desc: 'Five decades of know-how across printing, branding and advertising — we have seen it all.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  {
    title: 'Dedication',
    desc: 'A team that treats every project like it is our own, from first sketch to final delivery.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  },
  {
    title: 'Client-Centric',
    desc: 'Your goals shape every decision — we listen first, then build solutions around you.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>',
  },
  {
    title: 'Holistic Approach',
    desc: 'Printing, branding and advertising under one roof — one partner, one consistent story.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  },
]

// Our Approach — 4 Pillars
const approachPillars = [
  {
    title: 'Collaboration',
    desc: 'We believe the best results are born from collaboration. We work closely with you to understand your goals, challenges and unique offerings — ensuring our solutions align seamlessly with your vision.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>',
  },
  {
    title: 'Creativity',
    desc: 'Creativity is at the core of everything we do. Our team thinks outside the box to bring fresh ideas to the table, infusing innovation into every project to set you apart from the competition.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
  },
  {
    title: 'Quality',
    desc: 'Our commitment to excellence is unwavering. We take pride in delivering materials, branding assets and advertising campaigns that reflect the highest standards of quality and professionalism.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  },
  {
    title: 'Results-Driven',
    desc: 'We measure our success by the impact we make on your business. From increased brand recognition to enhanced engagement, we focus on achieving tangible results that drive growth.',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  },
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
  // Old hero animations removed — cinematic 3D scene now handles the hero.

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

  animateSection(trustSection.value, '.trust-item', { stagger: 0.12 })

  // Welcome / About AFME section
  if (welcomeSection.value) {
    const st = ScrollTrigger.create({
      trigger: welcomeSection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(welcomeSection.value.querySelectorAll('.welcome-text > *'), {
          x: -50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        })
        gsap.from(welcomeSection.value.querySelector('.welcome-visual'), {
          x: 80, opacity: 0, rotationY: -15,
          transformPerspective: 1200,
          duration: 1, ease: 'power3.out', delay: 0.2,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Why Choose Us section
  if (whySection.value) {
    const st = ScrollTrigger.create({
      trigger: whySection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(whySection.value.querySelectorAll('.why-text > *'), {
          x: -40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        })
        gsap.from(whySection.value.querySelectorAll('.why-point'), {
          y: 60, opacity: 0,
          rotationY: -25, rotationX: 10,
          transformPerspective: 1200,
          duration: 0.85, stagger: 0.1, ease: 'power3.out', delay: 0.2,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Approach pillars section
  if (approachSection.value) {
    const st = ScrollTrigger.create({
      trigger: approachSection.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(approachSection.value.querySelectorAll('.section-header > *'), {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        })
        gsap.from(approachSection.value.querySelectorAll('.approach-card'), {
          y: 80, opacity: 0,
          rotationY: -25, rotationX: 12,
          transformPerspective: 1200,
          duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Start carousel autoplay immediately so it spins on its own
  startAutoplay()

  // Print Process cards entrance
  if (processSection.value) {
    const st = ScrollTrigger.create({
      trigger: processSection.value,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.from(processSection.value.querySelectorAll('.process-card'), {
          y: 80,
          opacity: 0,
          rotationY: -30,
          rotationX: 20,
          transformPerspective: 1200,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Printing Press section entrance
  if (pressSection.value) {
    const st = ScrollTrigger.create({
      trigger: pressSection.value,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.from(pressSection.value.querySelectorAll('.press-text > *'), {
          x: -50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        })
        gsap.from(pressSection.value.querySelector('.press-machine'), {
          x: 80, opacity: 0, rotationY: -25, scale: 0.85,
          transformPerspective: 1400, duration: 1.1, ease: 'power3.out', delay: 0.15,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Paper Roll section entrance
  if (rollSection.value) {
    const st = ScrollTrigger.create({
      trigger: rollSection.value,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.from(rollSection.value.querySelector('.roll-stage'), {
          x: -80, opacity: 0, rotationY: 30,
          transformPerspective: 1400, duration: 1.1, ease: 'power3.out',
        })
        gsap.from(rollSection.value.querySelectorAll('.roll-text > *'), {
          x: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // CMYK section entrance
  if (cmykSection.value) {
    const st = ScrollTrigger.create({
      trigger: cmykSection.value,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.from(cmykSection.value.querySelectorAll('.cmyk-text > *'), {
          x: -60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        })
        gsap.from(cmykSection.value.querySelector('.cmyk-stage'), {
          scale: 0.6, opacity: 0, rotationY: 45,
          transformPerspective: 1400,
          duration: 1.2, ease: 'power3.out', delay: 0.2,
        })
      },
    })
    scrollTriggers.push(st)
  }

  // Scroll-pinned 3D cube — pin the section and step through faces discretely.
  // CSS rotates the cube via [data-face] so the cube + text always land in sync.
  if (cubeSection.value && cubeEl.value) {
    const totalFaces = cubeSlides.length
    const st = ScrollTrigger.create({
      trigger: cubeSection.value,
      start: 'top top',
      end: () => '+=' + (window.innerHeight * totalFaces),
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const idx = Math.min(
          totalFaces - 1,
          Math.floor(self.progress * totalFaces)
        )
        if (cubeActiveFace.value !== idx) cubeActiveFace.value = idx
      },
    })
    scrollTriggers.push(st)
  }

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
  pauseAutoplay()
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

/* ========== 3D Coverflow Carousel ========== */
.coverflow-section {
  padding: 80px 0 90px;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #eaf3fa 50%, var(--bg-primary) 100%);
  position: relative;
  overflow: hidden;
}

.coverflow-section::before,
.coverflow-section::after {
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  pointer-events: none;
}

.coverflow-section::before {
  left: -120px;
  top: 20%;
  background: var(--accent-teal);
}

.coverflow-section::after {
  right: -120px;
  bottom: 10%;
  background: var(--color-blue);
}

.coverflow-eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.25em;
  font-weight: 600;
  color: var(--accent-teal);
  margin-bottom: 10px;
}

.coverflow {
  position: relative;
  height: 460px;
  margin: 40px auto 24px;
  perspective: 1600px;
  perspective-origin: 50% 50%;
  touch-action: pan-y;
  user-select: none;
  overflow: hidden;
}

.coverflow-stage {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.coverflow-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 380px;
  margin: -190px 0 0 -140px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.35),
              0 18px 36px -18px rgba(46, 139, 192, 0.25);
  overflow: hidden;
  cursor: grab;
  transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1),
              opacity 0.6s ease,
              box-shadow 0.4s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.coverflow-card:active {
  cursor: grabbing;
}

.coverflow-card.is-active {
  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.45),
              0 0 0 1px rgba(46, 139, 192, 0.18),
              0 24px 60px -16px rgba(46, 139, 192, 0.4);
}

.coverflow-card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  display: block;
}

.coverflow-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.35) 50%,
    rgba(255, 255, 255, 0) 65%);
  transform: translateX(-100%);
  transition: transform 0.9s ease;
  pointer-events: none;
}

.coverflow-card.is-active .coverflow-shine {
  transform: translateX(100%);
}

.coverflow-card-info {
  padding: 16px 20px;
  background: #fff;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.coverflow-card-cat {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent-teal);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.coverflow-card-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.coverflow-card-reflection {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 75%, rgba(46, 139, 192, 0.08) 100%);
  pointer-events: none;
}

.coverflow-nav {
  position: absolute;
  top: 50%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-50%);
  transition: background 0.3s, transform 0.3s, color 0.3s;
  z-index: 200;
}

.coverflow-nav:hover {
  background: var(--accent-teal);
  color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.coverflow-nav--prev { left: 8%; }
.coverflow-nav--next { right: 8%; }

.coverflow-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.coverflow-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(46, 139, 192, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.coverflow-dot.active {
  background: var(--accent-teal);
  width: 28px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .coverflow {
    height: 380px;
  }
  .coverflow-card {
    width: 220px;
    height: 320px;
    margin: -160px 0 0 -110px;
  }
  .coverflow-nav { display: none; }
  .coverflow-section { padding: 56px 0 64px; }
}

/* ========== Scroll-pinned 3D Cube ========== */
.cube-section {
  background: linear-gradient(180deg, #0f1923 0%, #1a2a3a 50%, #0f1923 100%);
  position: relative;
  overflow: hidden;
  color: #fff;
}

.cube-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(46, 139, 192, 0.25) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(74, 171, 222, 0.18) 0%, transparent 50%);
  pointer-events: none;
}

.cube-pin {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cube-container {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* Cube stage */
.cube-stage {
  position: relative;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1600px;
  perspective-origin: 50% 50%;
}

.cube {
  position: relative;
  width: 340px;
  height: 340px;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
}
.cube[data-face="0"] { transform: rotateY(0deg); }
.cube[data-face="1"] { transform: rotateY(-90deg); }
.cube[data-face="2"] { transform: rotateY(-180deg); }
.cube[data-face="3"] { transform: rotateY(-270deg); }

.cube-face {
  position: absolute;
  inset: 0;
  width: 340px;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45),
              0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.cube-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cube-face-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: rgba(15, 25, 35, 0.85);
  backdrop-filter: blur(10px);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 10px 16px;
  border-radius: 8px;
  text-transform: uppercase;
}

/* Position 4 faces of cube — half-edge = 170px */
.cube-face--front  { transform: translateZ(170px); }
.cube-face--right  { transform: rotateY(90deg)  translateZ(170px); }
.cube-face--back   { transform: rotateY(180deg) translateZ(170px); }
.cube-face--left   { transform: rotateY(-90deg) translateZ(170px); }

/* Soft shadow under cube */
.cube-shadow {
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 280px;
  height: 30px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%);
  transform: translateX(-50%);
  filter: blur(8px);
  pointer-events: none;
}

/* Right side text */
.cube-content {
  position: relative;
  padding: 20px 0;
}

.cube-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal-light);
  margin-bottom: 24px;
  padding: 6px 14px;
  background: rgba(74, 171, 222, 0.12);
  border: 1px solid rgba(74, 171, 222, 0.25);
  border-radius: 50px;
}

.cube-slides {
  position: relative;
  min-height: 320px;
}

.cube-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
  pointer-events: none;
}

/* Slides not yet reached wait off-screen to the right */
.cube-slide.future {
  opacity: 0;
  transform: translateX(120px);
}

/* Slides already passed exit toward the left */
.cube-slide.past {
  opacity: 0;
  transform: translateX(-120px);
}

/* Active slide is in place */
.cube-slide.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.cube-slide-num {
  font-size: 64px;
  font-weight: 200;
  line-height: 1;
  color: rgba(255, 255, 255, 0.15);
  margin-bottom: 4px;
}

.cube-slide-title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 16px;
  color: #fff;
  letter-spacing: -0.5px;
}

.cube-slide-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
  max-width: 480px;
}

.cube-slide-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.cube-slide-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.85);
}

.cube-slide-features svg {
  flex-shrink: 0;
  color: var(--accent-teal-light);
}

.cube-progress {
  display: flex;
  gap: 8px;
  margin-top: 32px;
}

.cube-progress-dot {
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.15);
  transition: background 0.4s ease, width 0.4s ease;
}

.cube-progress-dot.active {
  background: var(--accent-teal-light);
  width: 56px;
}

@media (max-width: 1024px) {
  .cube-container {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-top: 30px;
  }
  .cube-stage { height: 360px; }
  .cube, .cube-face { width: 260px; height: 260px; }
  .cube-face--front  { transform: translateZ(130px); }
  .cube-face--right  { transform: rotateY(90deg)  translateZ(130px); }
  .cube-face--back   { transform: rotateY(180deg) translateZ(130px); }
  .cube-face--left   { transform: rotateY(-90deg) translateZ(130px); }
  .cube-slide-title { font-size: 1.8rem; }
  .cube-slide-num { font-size: 48px; }
  .cube-slides { min-height: 260px; }
}

@media (max-width: 640px) {
  .cube-slide-features { grid-template-columns: 1fr; }
}

/* ========== CMYK Color Section ========== */
.cmyk-section {
  background: linear-gradient(180deg, #f8fafd 0%, #eef4fa 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.cmyk-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(46, 139, 192, 0.08) 1px, transparent 0);
  background-size: 24px 24px;
  pointer-events: none;
}

.cmyk-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cmyk-text {
  padding-right: 20px;
}

.cmyk-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: var(--accent-teal);
  background: rgba(46, 139, 192, 0.1);
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.cmyk-title {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 18px;
  letter-spacing: -1px;
}

.cmyk-title em {
  font-style: normal;
  background: linear-gradient(90deg, #00aeef 0%, #ec008c 33%, #fff200 66%, #1a1a1a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cmyk-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 480px;
}

.cmyk-stats {
  display: flex;
  gap: 36px;
}

.cmyk-stat {
  display: flex;
  flex-direction: column;
}

.cmyk-stat strong {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-teal);
  line-height: 1;
}

.cmyk-stat span {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* CMYK animated stage */
.cmyk-stage {
  position: relative;
  width: 100%;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1400px;
}

.cmyk-orbit {
  position: absolute;
  width: 360px;
  height: 360px;
  transform-style: preserve-3d;
  animation: cmykOrbit 14s linear infinite;
}

@keyframes cmykOrbit {
  from { transform: rotateZ(0deg); }
  to   { transform: rotateZ(360deg); }
}

.cmyk-blob {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(8px);
  mix-blend-mode: multiply;
  opacity: 0.85;
  animation: cmykPulse 4s ease-in-out infinite;
}

.cmyk-blob--c {
  background: radial-gradient(circle, #00aeef 0%, #00aeef88 70%, transparent 100%);
  top: 0;
  left: 50%;
  margin-left: -100px;
}

.cmyk-blob--m {
  background: radial-gradient(circle, #ec008c 0%, #ec008c88 70%, transparent 100%);
  top: 50%;
  right: 0;
  margin-top: -100px;
  animation-delay: -1s;
}

.cmyk-blob--y {
  background: radial-gradient(circle, #fff200 0%, #fff20088 70%, transparent 100%);
  bottom: 0;
  left: 50%;
  margin-left: -100px;
  animation-delay: -2s;
}

.cmyk-blob--k {
  background: radial-gradient(circle, #1a1a1a 0%, #1a1a1a99 70%, transparent 100%);
  top: 50%;
  left: 0;
  margin-top: -100px;
  animation-delay: -3s;
}

@keyframes cmykPulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.12); }
}

.cmyk-paper {
  position: relative;
  width: 220px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.18),
              0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 5;
  transform: rotate(-4deg);
  animation: cmykPaperFloat 6s ease-in-out infinite;
  padding: 20px;
}

@keyframes cmykPaperFloat {
  0%, 100% { transform: rotate(-4deg) translateY(0); }
  50%      { transform: rotate(-4deg) translateY(-12px); }
}

.cmyk-paper-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.cmyk-paper-line {
  height: 6px;
  border-radius: 3px;
}

.cmyk-paper-line--1 { width: 80%; background: #1a1a1a; }
.cmyk-paper-line--2 { width: 60%; background: #00aeef; }
.cmyk-paper-line--3 { width: 70%; background: #ec008c; }
.cmyk-paper-line--4 { width: 50%; background: #fff200; }

.cmyk-paper-image {
  flex: 1;
  margin: 8px 0;
  background: linear-gradient(135deg, #00aeef 0%, #ec008c 50%, #fff200 100%);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.cmyk-paper-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), transparent 50%);
}

@media (max-width: 1024px) {
  .cmyk-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .cmyk-text { padding-right: 0; text-align: center; }
  .cmyk-stats { justify-content: center; }
}

/* ========== Welcome / About AFME ========== */
.welcome-section {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #f5f9fc 100%);
  position: relative;
  overflow: hidden;
}

.welcome-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.welcome-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal);
  background: rgba(46, 139, 192, 0.1);
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 22px;
  text-transform: uppercase;
}

.welcome-title {
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 22px;
  color: var(--text-primary);
}

.welcome-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.welcome-desc {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 28px;
  max-width: 520px;
}

.welcome-cta {
  display: flex;
  gap: 14px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}

.btn-welcome-primary,
.btn-welcome-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1.5px solid transparent;
}

.btn-welcome-primary {
  background: var(--accent-teal);
  color: #fff;
}

.btn-welcome-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(46, 139, 192, 0.3);
}

.btn-welcome-outline {
  background: transparent;
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.btn-welcome-outline:hover {
  background: var(--text-primary);
  color: #fff;
  transform: translateY(-2px);
}

.welcome-stats {
  display: flex;
  gap: 36px;
  padding-top: 24px;
  border-top: 1px solid var(--border-light);
}

.welcome-stat strong {
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent-teal);
  line-height: 1;
}

.welcome-stat span {
  display: block;
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.4;
}

.welcome-visual {
  position: relative;
  perspective: 1500px;
}

.welcome-image-stack {
  position: relative;
  height: 460px;
  transform-style: preserve-3d;
}

.welcome-img {
  position: absolute;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
  transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.welcome-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.welcome-img--back {
  width: 60%;
  height: 70%;
  top: 0;
  right: 0;
  transform: rotateY(-12deg) rotateX(5deg) translateZ(-30px);
}

.welcome-img--front {
  width: 65%;
  height: 75%;
  bottom: 0;
  left: 0;
  transform: rotateY(8deg) rotateX(-3deg) translateZ(40px);
}

.welcome-image-stack:hover .welcome-img--back {
  transform: rotateY(-6deg) rotateX(3deg) translateZ(-20px);
}

.welcome-image-stack:hover .welcome-img--front {
  transform: rotateY(4deg) rotateX(-1deg) translateZ(50px);
}

.welcome-floating-card {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #fff;
  padding: 18px 22px;
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 10;
  transform: translateZ(80px);
}

.welcome-floating-num {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-teal);
  line-height: 1;
}

.welcome-floating-card strong {
  display: block;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.welcome-floating-card span {
  display: block;
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

@media (max-width: 1024px) {
  .welcome-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .welcome-text { text-align: center; }
  .welcome-desc { margin-left: auto; margin-right: auto; }
  .welcome-cta, .welcome-stats { justify-content: center; }
  .welcome-image-stack { height: 380px; }
}

@media (max-width: 600px) {
  .welcome-stats {
    flex-wrap: wrap;
    gap: 20px;
  }
}

/* ========== Why Choose Us ========== */
.why-section {
  padding: 100px 0;
  background: var(--bg-primary);
}

.why-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.why-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal);
  margin-bottom: 14px;
}

.why-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 22px;
  color: var(--text-primary);
}

.why-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.why-desc {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 18px;
}

.btn-why {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 12px 26px;
  background: var(--accent-teal);
  color: #fff;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-why:hover {
  background: var(--bg-teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(46, 139, 192, 0.3);
}

.why-points {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  perspective: 1400px;
}

.why-point {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 26px 22px;
  border: 1px solid var(--border-light);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
              box-shadow 0.4s ease;
}

.why-point:hover {
  transform: translateY(-6px) rotateX(2deg);
  box-shadow: 0 22px 50px rgba(46, 139, 192, 0.18);
}

.why-point-num {
  position: absolute;
  top: 14px;
  right: 18px;
  font-size: 1.6rem;
  font-weight: 200;
  color: rgba(46, 139, 192, 0.2);
}

.why-point-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: rgba(46, 139, 192, 0.1);
  color: var(--accent-teal);
  border-radius: 12px;
  margin-bottom: 14px;
}

.why-point h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.why-point p {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .why-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 600px) {
  .why-points {
    grid-template-columns: 1fr;
  }
}

/* ========== Approach (4 Pillars) ========== */
.approach-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f5f9fc 0%, var(--bg-primary) 100%);
}

.approach-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal);
  margin-bottom: 12px;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 50px;
  perspective: 1500px;
}

.approach-card {
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  height: 320px;
}

.approach-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 18px;
  padding: 32px 26px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06),
              0 0 0 1px rgba(46, 139, 192, 0.05);
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
              box-shadow 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.approach-card:hover .approach-card-inner {
  box-shadow: 0 24px 60px rgba(46, 139, 192, 0.18),
              0 0 0 1px rgba(46, 139, 192, 0.18);
}

.approach-card-num {
  font-size: 2.6rem;
  font-weight: 200;
  color: rgba(46, 139, 192, 0.2);
  line-height: 1;
  margin-bottom: 14px;
  transform: translateZ(30px);
}

.approach-card-icon {
  display: inline-flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: rgba(46, 139, 192, 0.1);
  color: var(--accent-teal);
  border-radius: 14px;
  margin-bottom: 18px;
  transform: translateZ(50px);
}

.approach-card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
  transform: translateZ(40px);
}

.approach-card p {
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--text-secondary);
  transform: translateZ(20px);
}

.approach-card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: 18px;
}

@media (max-width: 1024px) {
  .approach-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .approach-grid {
    grid-template-columns: 1fr;
  }
}

/* ========== 3D Printing Press Section ========== */
.press-section {
  position: relative;
  padding: 100px 0 110px;
  background:
    radial-gradient(ellipse at top, #1c2b3d 0%, #0c1622 70%);
  color: #fff;
  overflow: hidden;
}

.press-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}

/* Floating CMYK ink drops */
.ink-drops {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.ink-drop {
  position: absolute;
  top: -40px;
  left: var(--left);
  width: var(--size);
  height: calc(var(--size) * 1.4);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  filter: blur(0.5px);
  opacity: 0.8;
  animation: inkDropFall 6s var(--delay) linear infinite;
  transform-origin: top center;
}

.ink-drop::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: calc(var(--size) * 2.5);
  height: calc(var(--size) * 0.8);
  border-radius: 50%;
  border: 2px solid currentColor;
  transform: translate(-50%, 100%) scale(0);
  opacity: 0;
  animation: inkSplash 6s var(--delay) linear infinite;
}

.ink-drop--c { background: #00aeef; color: #00aeef; box-shadow: 0 0 20px #00aeef88; }
.ink-drop--m { background: #ec008c; color: #ec008c; box-shadow: 0 0 20px #ec008c88; }
.ink-drop--y { background: #fff200; color: #fff200; box-shadow: 0 0 20px #fff20088; }
.ink-drop--k { background: #2a2a2a; color: #555;    box-shadow: 0 0 20px #00000088; }

@keyframes inkDropFall {
  0%   { top: -5%;  opacity: 0; transform: scale(0.6); }
  10%  { opacity: 0.9; transform: scale(1); }
  85%  { top: 90%;  opacity: 0.9; transform: scale(1); }
  92%  { top: 92%;  opacity: 0; transform: scaleY(0.4) scaleX(1.4); }
  100% { top: 92%;  opacity: 0; }
}

@keyframes inkSplash {
  0%, 85%  { opacity: 0; transform: translate(-50%, 100%) scale(0); }
  88%      { opacity: 0.7; transform: translate(-50%, 100%) scale(0.4); }
  100%     { opacity: 0; transform: translate(-50%, 100%) scale(2); }
}

.press-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.press-text {
  padding-right: 20px;
}

.press-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--accent-teal-light);
  background: rgba(74, 171, 222, 0.12);
  border: 1px solid rgba(74, 171, 222, 0.25);
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 22px;
}

.press-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: #fff;
}

.press-title em {
  font-style: normal;
  background: linear-gradient(120deg, #4AABDE 0%, #00aeef 50%, #4AABDE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.press-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 24px;
  max-width: 480px;
}

.press-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.press-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
}

.press-tick {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  background: var(--accent-teal);
  color: #fff;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
}

/* The 3D press machine */
.press-machine {
  position: relative;
  perspective: 1400px;
  perspective-origin: 50% 50%;
}

.press-frame {
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 320px;
  margin: 0 auto;
  background: linear-gradient(180deg, #1f2d3f 0%, #0f1923 100%);
  border-radius: 18px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transform: rotateX(8deg) rotateY(-12deg);
  transform-style: preserve-3d;
}

/* Paper feed in (left side) */
.press-paper--feed {
  position: absolute;
  left: 14px;
  top: 50%;
  width: 70px;
  height: 90px;
  background: #fff;
  border-radius: 2px;
  transform: translateY(-50%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.press-paper--feed::before,
.press-paper--feed::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  height: 2px;
  background: #ddd;
}
.press-paper--feed::before { top: 12px; }
.press-paper--feed::after  { top: 22px; }

/* CMYK rollers */
.press-rollers {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -50%);
  display: flex;
  gap: 12px;
}

.press-roller {
  position: relative;
  width: 56px;
  height: 130px;
  border-radius: 50% / 14%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5),
              inset 0 0 12px rgba(0, 0, 0, 0.3),
              inset 0 4px 0 rgba(255, 255, 255, 0.15);
  overflow: hidden;
  animation: rollerSpin 1.4s linear infinite;
}

.press-roller--c { background: linear-gradient(180deg, #00cdf2 0%, #0097c9 50%, #00cdf2 100%); }
.press-roller--m { background: linear-gradient(180deg, #ff1aa3 0%, #c2007a 50%, #ff1aa3 100%); animation-delay: -0.35s; }
.press-roller--y { background: linear-gradient(180deg, #fff340 0%, #d6c800 50%, #fff340 100%); animation-delay: -0.7s; }
.press-roller--k { background: linear-gradient(180deg, #444 0%, #111 50%, #444 100%); animation-delay: -1.05s; }

.press-roller-stripe {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.18) 0 4px,
    transparent 4px 14px
  );
}

@keyframes rollerSpin {
  0%   { background-position: 0 0; }
  100% { background-position: 0 -130px; }
}

/* Paper moving through */
.press-paper-track {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.press-paper--moving {
  position: absolute;
  top: calc(50% + 28px);
  left: 0;
  width: 70px;
  height: 50px;
  background: linear-gradient(180deg, #fff 60%, #4AABDE 60%);
  border-radius: 2px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.4);
  animation: paperMove 4.8s linear infinite;
}

@keyframes paperMove {
  0%   { left: -80px; opacity: 0; transform: rotate(-2deg); }
  10%  { opacity: 1; }
  45%  { left: 50%; transform: translateX(-50%) rotate(0); }
  90%  { opacity: 1; }
  100% { left: calc(100% + 20px); transform: rotate(2deg); opacity: 0; }
}

/* Output tray */
.press-output {
  position: absolute;
  right: 14px;
  bottom: 14px;
  display: flex;
  align-items: flex-end;
  height: 70px;
}

.press-output-stack {
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
}

.press-output-stack div {
  width: 60px;
  height: 6px;
  background: linear-gradient(90deg, #fff 60%, #4AABDE 60%);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
  animation: stackUp 4.8s linear infinite;
  opacity: 0;
}

.press-output-stack div:nth-child(1) { animation-delay: 0.6s; }
.press-output-stack div:nth-child(2) { animation-delay: 1.6s; }
.press-output-stack div:nth-child(3) { animation-delay: 2.6s; }
.press-output-stack div:nth-child(4) { animation-delay: 3.6s; }
.press-output-stack div:nth-child(5) { animation-delay: 4.6s; }

@keyframes stackUp {
  0%, 5%   { opacity: 0; transform: translateY(-30px); }
  10%      { opacity: 1; transform: translateY(0); }
  100%     { opacity: 1; transform: translateY(0); }
}

.press-leds {
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  gap: 8px;
}

.press-led {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0 0 12px currentColor;
}

.press-led--green  { background: #34d399; color: #34d399; animation: ledBlink 1.2s infinite; }
.press-led--yellow { background: #fbbf24; color: #fbbf24; animation: ledBlink 1.8s infinite; }
.press-led--red    { background: #f87171; color: #f87171; opacity: 0.4; }

@keyframes ledBlink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75%      { opacity: 0.3; }
}

.press-label {
  position: absolute;
  bottom: 14px;
  left: 14px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
}

.press-base {
  width: 80%;
  max-width: 460px;
  height: 18px;
  margin: 12px auto 0;
  background: linear-gradient(180deg, #1a2535 0%, #0c1622 100%);
  border-radius: 0 0 30px 30px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

@media (max-width: 1024px) {
  .press-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .press-text { padding-right: 0; text-align: center; }
  .press-features { align-items: center; }
}

/* ========== Paper Roll Section ========== */
.paper-roll-section {
  position: relative;
  padding: 100px 0;
  background: linear-gradient(180deg, #faf9f7 0%, #f0ebe3 100%);
  overflow: hidden;
}

.paper-roll-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(46, 139, 192, 0.1) 1px, transparent 0);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.4;
}

.roll-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.roll-stage {
  position: relative;
  height: 360px;
  perspective: 1400px;
}

/* Paper roll cylinder */
.paper-roll {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotateY(-15deg) rotateX(5deg);
  transform-style: preserve-3d;
  width: 140px;
  height: 220px;
}

.paper-roll-cylinder {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      #fff 0 4px,
      #f0eee8 4px 8px
    );
  border-radius: 50% / 14%;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.25),
    inset -20px 0 30px rgba(0, 0, 0, 0.18),
    inset 20px 0 30px rgba(255, 255, 255, 0.6);
  animation: rollSpin 8s linear infinite;
}

@keyframes rollSpin {
  0%   { background-position: 0 0; }
  100% { background-position: 200px 0; }
}

.paper-roll-end {
  position: absolute;
  top: 50%;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  border-radius: 50%;
  background: radial-gradient(circle, #888 0%, #333 100%);
  box-shadow: 0 0 0 2px #555 inset;
}

.paper-roll-end--front { left: -16px; }
.paper-roll-end--back  { right: -16px; }

.paper-roll-stripes {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
  border-radius: 50% / 14%;
  pointer-events: none;
}

/* Unfurled paper sheet */
.paper-unfurl {
  position: absolute;
  left: 130px;
  top: 50%;
  transform: translateY(-50%) rotateY(-8deg);
  transform-style: preserve-3d;
  perspective: 1200px;
}

.paper-unfurl-sheet {
  width: 320px;
  height: 220px;
  background: #fff;
  border-radius: 4px;
  padding: 22px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.18),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.paper-unfurl-sheet::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  bottom: 0;
  width: 8px;
  background: linear-gradient(90deg, rgba(0,0,0,0.15), transparent);
  border-radius: 4px 0 0 4px;
}

.unfurl-bar {
  height: 8px;
  border-radius: 4px;
  animation: unfurlGrow 2.5s ease-out infinite;
  transform-origin: left center;
}

.unfurl-bar--c { width: 70%; background: #00aeef; animation-delay: 0s; }
.unfurl-bar--m { width: 55%; background: #ec008c; animation-delay: 0.2s; }
.unfurl-bar--y { width: 80%; background: #fff200; animation-delay: 0.4s; }
.unfurl-bar--k { width: 45%; background: #1a1a1a; animation-delay: 0.6s; }

@keyframes unfurlGrow {
  0%, 100% { transform: scaleX(0); opacity: 0; }
  20%, 80% { transform: scaleX(1); opacity: 1; }
}

.unfurl-image {
  flex: 1;
  margin-top: 8px;
  background: linear-gradient(135deg, #4AABDE 0%, #ec008c 50%, #fff200 100%);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.unfurl-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%);
}

.roll-text {
  padding-left: 20px;
}

.roll-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: var(--accent-teal);
  background: rgba(46, 139, 192, 0.1);
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.roll-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 18px;
  color: var(--text-primary);
}

.roll-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.roll-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 28px;
  max-width: 460px;
}

.roll-badges {
  display: flex;
  gap: 28px;
}

.roll-badge {
  display: flex;
  flex-direction: column;
}

.roll-badge strong {
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--accent-teal);
  line-height: 1;
}

.roll-badge span {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .roll-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .roll-text { padding-left: 0; text-align: center; }
  .roll-badges { justify-content: center; }
  .roll-stage { height: 320px; }
}

@media (max-width: 640px) {
  .paper-unfurl-sheet { width: 240px; height: 180px; }
  .paper-roll { width: 100px; height: 170px; }
  .paper-unfurl { left: 90px; }
}

/* ========== Print Process Section ========== */
.process-3d-section {
  padding: 90px 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #f5f9fc 100%);
  position: relative;
  overflow: hidden;
}

.process-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: var(--accent-teal);
  margin-bottom: 12px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  margin-top: 40px;
  perspective: 1500px;
}

.process-card {
  position: relative;
  height: 320px;
  cursor: pointer;
  transform-style: preserve-3d;
}

.process-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 18px;
  padding: 30px 22px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(46, 139, 192, 0.06);
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
              box-shadow 0.4s ease;
  overflow: hidden;
}

.process-card:hover .process-card-inner {
  box-shadow: 0 24px 60px rgba(46, 139, 192, 0.18),
              0 0 0 1px rgba(46, 139, 192, 0.15);
}

.process-card-num {
  font-size: 3.2rem;
  font-weight: 200;
  color: rgba(46, 139, 192, 0.18);
  line-height: 1;
  margin-bottom: 10px;
  transform: translateZ(30px);
}

.process-card-icon {
  display: inline-flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: rgba(46, 139, 192, 0.1);
  color: var(--accent-teal);
  border-radius: 14px;
  margin-bottom: 18px;
  transform: translateZ(40px);
}

.process-card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
  transform: translateZ(50px);
}

.process-card-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);
  transform: translateZ(20px);
}

.process-card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: 18px;
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .process-card { height: 280px; }
}

@media (max-width: 600px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
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
