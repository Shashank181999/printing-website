<template>
  <section class="hero" ref="heroEl">
    <!-- Sticky stage — sits inside the tall section and pins for the scroll story -->
    <div class="hero-pin" ref="pinEl">
      <!-- Background layers -->
      <div class="hero-bg">
        <div class="hero-bg-grid"></div>
        <div class="hero-bg-glow hero-bg-glow--a" :data-stage="stageIdx"></div>
        <div class="hero-bg-glow hero-bg-glow--b" :data-stage="stageIdx"></div>
      </div>

      <!-- CMYK ink rain with surface splash -->
      <div class="hero-particles" aria-hidden="true">
        <span
          v-for="(p, i) in particles"
          :key="'d-' + i"
          class="hero-particle"
          :class="`hero-particle--${p.c}`"
          :style="{
            '--x': p.x + '%',
            '--delay': p.delay + 's',
            '--dur': p.dur + 's',
          }"
        ></span>
        <span
          v-for="(p, i) in particles"
          :key="'s-' + i"
          class="hero-splash"
          :class="`hero-splash--${p.c}`"
          :style="{
            '--x': p.x + '%',
            '--delay': p.delay + 's',
            '--dur': p.dur + 's',
          }"
        >
          <span class="hero-ripple hero-ripple-1"></span>
          <span class="hero-ripple hero-ripple-2"></span>
          <span class="hero-bead hero-bead--l"></span>
          <span class="hero-bead hero-bead--r"></span>
        </span>
      </div>

      <!-- Vertical edge label -->
      <div class="hero-edge-label">
        <span>EST · 1973</span>
        <span class="hero-edge-bar"></span>
        <span>DUBAI · UAE</span>
      </div>

      <!-- Main grid -->
      <div class="hero-grid">
        <!-- LEFT: text that crossfades per stage -->
        <div class="hero-text">
          <div class="hero-eyebrow">
            <span class="hero-eyebrow-dot"></span>
            <span>AL FALAH MIDDLE EAST</span>
          </div>

          <div class="hero-stage-stack" :data-stage="stageIdx">
            <div class="hero-stage-num">0{{ stageIdx + 1 }} / 0{{ stages.length }}</div>
            <h1 class="hero-headline" :key="'h-' + stageIdx">
              <span class="hero-line">{{ stages[stageIdx].word1 }}</span>
              <span class="hero-line"><em>{{ stages[stageIdx].word2 }}</em></span>
            </h1>
            <p class="hero-desc" :key="'d-' + stageIdx">{{ stages[stageIdx].desc }}</p>
          </div>

          <!-- CTA reveals on the final stage -->
          <div class="hero-cta" :class="{ visible: stageIdx === stages.length - 1 }">
            <router-link to="/products" class="hero-btn hero-btn--primary">
              Explore Products
              <span class="hero-arrow">&rarr;</span>
            </router-link>
            <router-link to="/contact" class="hero-btn hero-btn--ghost">
              Get a Quote
            </router-link>
          </div>
        </div>

        <!-- RIGHT: printer scene with transforming layers -->
        <div class="hero-scene" ref="sceneEl">
          <!-- Soft platform glow under the printer -->
          <div class="hero-platform">
            <div class="hero-platform-glow"></div>
            <div class="hero-platform-ring"></div>
          </div>

          <!-- The printer is the constant centerpiece across all stages -->
          <div class="hero-printer" ref="printerEl">
            <img src="/hero/large-format-printer.png" alt="Large format printer" />
          </div>

          <!-- Stage 2: blank paper sheets flying out of the printer -->
          <div class="hero-papers" :class="`hero-papers--stage-${stageIdx}`">
            <div
              v-for="i in 5"
              :key="'paper-' + i"
              class="hero-paper"
              :class="`hero-paper--${i}`"
            >
              <div class="hero-paper-line hero-paper-line--c"></div>
              <div class="hero-paper-line hero-paper-line--m"></div>
              <div class="hero-paper-line hero-paper-line--y"></div>
              <div class="hero-paper-line hero-paper-line--k"></div>
            </div>
          </div>

          <!-- Stage 3: product cards fan out around the printer -->
          <div class="hero-products" :class="`hero-products--stage-${stageIdx}`">
            <div
              v-for="(p, i) in productCards"
              :key="'prod-' + i"
              class="hero-product"
              :class="`hero-product--${i + 1}`"
            >
              <img :src="p.src" :alt="p.label" />
              <div class="hero-product-tag">{{ p.label }}</div>
            </div>
          </div>

          <!-- Live press badge -->
          <div class="hero-live-badge">
            <span class="hero-live-dot"></span>
            PRESS LIVE · {{ stages[stageIdx].label.toUpperCase() }}
          </div>
        </div>
      </div>

      <!-- Bottom progress + stage tabs -->
      <div class="hero-progress">
        <div class="hero-progress-track">
          <div class="hero-progress-fill" :style="{ transform: `scaleX(${progress})` }"></div>
        </div>
        <div class="hero-progress-tabs">
          <button
            v-for="(s, i) in stages"
            :key="'tab-' + i"
            class="hero-progress-tab"
            :class="{ active: stageIdx === i, done: i < stageIdx }"
            @click="goToStage(i)"
          >
            <span class="hero-progress-tab-num">0{{ i + 1 }}</span>
            <span class="hero-progress-tab-label">{{ s.label }}</span>
          </button>
        </div>
      </div>

      <!-- Scroll hint (only on first stage) -->
      <div class="hero-scroll-hint" :class="{ hidden: stageIdx > 0 }">
        <span>SCROLL TO BEGIN</span>
        <span class="hero-scroll-line"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroEl = ref(null)
const pinEl = ref(null)
const printerEl = ref(null)
const sceneEl = ref(null)

const stageIdx = ref(0)
const progress = ref(0)

const stages = [
  {
    label: 'Print',
    word1: 'PRINT',
    word2: 'YOUR VISION',
    desc: 'Since 2020, turning ideas into things you can hold, wear and walk through. Al Falah is where Dubai\'s biggest brands come to be made real.',
  },
  {
    label: 'Craft',
    word1: 'CRAFTED',
    word2: 'TO PERFECTION',
    desc: 'Studio-grade presses, calibrated rollers and pressmen who notice the things others miss. Every sheet inspected, every color hit.',
  },
  {
    label: 'Beyond',
    word1: 'BEYOND',
    word2: 'THE PAGE',
    desc: 'From cards to canvases to cars — we build brands that travel further than print. Signage, apparel, packaging, exhibition.',
  },
]

const productCards = [
  { src: '/products/die-cut-business-cards.webp', label: 'Cards' },
  { src: '/products/magazine.webp',                 label: 'Brochures' },
  { src: '/products/rigid-box-packaging.webp',      label: 'Packaging' },
  { src: '/products/neon-signage.webp',             label: 'Signage' },
]

const particles = Array.from({ length: 14 }).map((_, i) => ({
  c: ['c', 'm', 'y', 'k'][i % 4],
  x: 4 + i * 7 + Math.random() * 2,
  delay: +(Math.random() * 4).toFixed(2),
  dur: +(4 + Math.random() * 2).toFixed(2),
}))

let triggers = []
let mouseHandler = null
let printerTl = null

function goToStage(i) {
  if (!heroEl.value) {
    stageIdx.value = i
    return
  }
  const rect = heroEl.value.getBoundingClientRect()
  const sectionTop = rect.top + window.scrollY
  const scrollDistance = heroEl.value.offsetHeight - window.innerHeight
  const segment = scrollDistance / stages.length
  const target = sectionTop + segment * (i + 0.5)
  if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
    window.__lenis.scrollTo(target, { duration: 1.1 })
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}

onMounted(() => {
  // Subtle mouse parallax on the printer
  mouseHandler = (e) => {
    if (!heroEl.value || !printerEl.value) return
    const rect = heroEl.value.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(printerEl.value, {
      x: cx * 24,
      y: cy * 16,
      rotationY: cx * 8,
      rotationX: -cy * 6,
      transformPerspective: 1200,
      duration: 1.2,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }
  heroEl.value.addEventListener('mousemove', mouseHandler)

  // Smooth scroll-driven printer movement timeline
  printerTl = gsap.timeline({
    defaults: { ease: 'none' },
  })

  // Stage 0 → 1: printer slides slightly right and scales down a touch
  printerTl.fromTo(
    printerEl.value,
    { xPercent: 0, scale: 1 },
    { xPercent: 8, scale: 0.95, duration: 1 }
  )
  // Stage 1 → 2: printer slides further right and scales back up
  printerTl.to(printerEl.value, {
    xPercent: 12,
    scale: 0.92,
    duration: 1,
  })

  // Bind the timeline to scroll progress
  const printerST = ScrollTrigger.create({
    trigger: heroEl.value,
    start: 'top top',
    end: 'bottom bottom',
    animation: printerTl,
    scrub: 1.2, // smooth scrubbing — 1.2s lag for buttery movement
  })
  triggers.push(printerST)

  // Stage index + progress (separate trigger, no animation — just data)
  const t = ScrollTrigger.create({
    trigger: heroEl.value,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      progress.value = self.progress
      const idx = Math.min(
        stages.length - 1,
        Math.floor(self.progress * stages.length * 0.999)
      )
      if (stageIdx.value !== idx) stageIdx.value = idx
    },
  })
  triggers.push(t)

  // Refresh once everything has settled (fonts, images, etc).
  setTimeout(() => ScrollTrigger.refresh(), 200)
})

onBeforeUnmount(() => {
  if (heroEl.value && mouseHandler) {
    heroEl.value.removeEventListener('mousemove', mouseHandler)
  }
  if (printerTl) {
    printerTl.kill()
    printerTl = null
  }
  triggers.forEach((t) => t.kill())
  triggers = []
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  /* 1 viewport visible + 2 extra viewport heights of scroll for the 3 chapters */
  height: 320vh;
  background: #02060f;
  color: #fff;
  font-family: 'Poppins', -apple-system, sans-serif;
  isolation: isolate;
}

/* The sticky stage — sits at the top of the viewport while you scroll the
   surrounding tall section. CSS sticky is used here (not GSAP pin) because it
   plays nicely with Lenis smooth scroll. */
.hero-pin {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 720px;
  overflow: hidden;
  background: radial-gradient(ellipse at 70% 30%, #0c1f3d 0%, #050d1c 60%, #02060f 100%);
  display: flex;
  flex-direction: column;
  padding: 130px 0 0;
}

/* ============ BACKGROUND ============ */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
}
.hero-bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.6;
  mix-blend-mode: screen;
  transition: background 1.4s ease, opacity 1.4s ease;
}
.hero-bg-glow--a {
  width: 720px; height: 720px;
  top: -180px; right: -150px;
  background: radial-gradient(circle, #4AABDE, transparent 60%);
}
.hero-bg-glow--a[data-stage="1"] {
  background: radial-gradient(circle, #00aeef, transparent 60%);
  opacity: 0.55;
}
.hero-bg-glow--a[data-stage="2"] {
  background: radial-gradient(circle, #ec008c, transparent 60%);
  opacity: 0.5;
}
.hero-bg-glow--b {
  width: 620px; height: 620px;
  bottom: -200px; left: -120px;
  background: radial-gradient(circle, #2E8BC0, transparent 60%);
  opacity: 0.4;
}
.hero-bg-glow--b[data-stage="2"] {
  background: radial-gradient(circle, #ffba2b, transparent 60%);
  opacity: 0.4;
}

/* ============ INK RAIN + SURFACE SPLASH ============ */
.hero-particles {
  position: absolute;
  inset: 0;
  z-index: 7;
  pointer-events: none;
}

.hero-particle {
  position: absolute;
  top: -60px;
  left: var(--x);
  width: 2px;
  height: 50px;
  border-radius: 0 0 2px 2px;
  opacity: 0;
  animation: heroInkFall var(--dur) var(--delay) linear infinite;
  transform-origin: top center;
}

.hero-particle--c { background: linear-gradient(to bottom, transparent, #00aeef); color: #00aeef; box-shadow: 0 0 6px #00aeef; }
.hero-particle--m { background: linear-gradient(to bottom, transparent, #ec008c); color: #ec008c; box-shadow: 0 0 6px #ec008c; }
.hero-particle--y { background: linear-gradient(to bottom, transparent, #fff200); color: #fff200; box-shadow: 0 0 6px #fff200; }
.hero-particle--k { background: linear-gradient(to bottom, transparent, #4AABDE); color: #4AABDE; box-shadow: 0 0 6px #4AABDE; }

@keyframes heroInkFall {
  0%   { top: -8%;  opacity: 0;    transform: scaleY(1); }
  8%   { opacity: 0.85; }
  74%  { top: calc(100% - 130px); opacity: 0.85; transform: scaleY(1); }
  78%  { top: calc(100% - 120px); opacity: 0.4;  transform: scaleY(0.25); }
  80%  { top: calc(100% - 120px); opacity: 0;    transform: scaleY(0); }
  100% { top: calc(100% - 120px); opacity: 0;    transform: scaleY(0); }
}

/* ── Surface impact: ripple rings + flying beads ── */
.hero-splash {
  position: absolute;
  left: var(--x);
  bottom: 120px;
  width: 0;
  height: 0;
  pointer-events: none;
}

.hero-splash--c { color: #00eaff; }
.hero-splash--m { color: #ff3dae; }
.hero-splash--y { color: #ffee00; }
.hero-splash--k { color: #a5dcff; }

/* Bright central hit flash at impact moment */
.hero-splash::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 18px currentColor, 0 0 38px currentColor;
  opacity: 0;
  transform: scale(0);
  animation: heroHit var(--dur) var(--delay) ease-out infinite;
}

@keyframes heroHit {
  0%, 76%  { transform: scale(0); opacity: 0; }
  80%      { transform: scale(1.4); opacity: 1; }
  86%      { transform: scale(0.8); opacity: 0; }
  100%     { transform: scale(0); opacity: 0; }
}

.hero-ripple {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 48px;
  height: 18px;
  margin-left: -24px;
  border: 2.5px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transform-origin: center bottom;
  box-shadow: 0 0 12px currentColor;
  animation: heroRipple var(--dur) var(--delay) ease-out infinite;
}

.hero-ripple-2 {
  width: 80px;
  height: 28px;
  margin-left: -40px;
  border-width: 1.5px;
  animation: heroRipple2 var(--dur) var(--delay) ease-out infinite;
}

@keyframes heroRipple {
  0%, 78% { transform: scale(0); opacity: 0; }
  81%     { transform: scale(0.25); opacity: 1; }
  88%     { transform: scale(1); opacity: 0.85; }
  100%    { transform: scale(1.6); opacity: 0; }
}

@keyframes heroRipple2 {
  0%, 80% { transform: scale(0); opacity: 0; }
  84%     { transform: scale(0.35); opacity: 0.9; }
  100%    { transform: scale(1.5); opacity: 0; }
}

.hero-bead {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
  opacity: 0;
}

.hero-bead--l { animation: heroBeadL var(--dur) var(--delay) cubic-bezier(0.3, 0.7, 0.4, 1) infinite; }
.hero-bead--r { animation: heroBeadR var(--dur) var(--delay) cubic-bezier(0.3, 0.7, 0.4, 1) infinite; }

@keyframes heroBeadL {
  0%, 78%  { transform: translate(0, 0) scale(0.5); opacity: 0; }
  81%      { transform: translate(0, 0) scale(1); opacity: 1; }
  88%      { transform: translate(-18px, -14px) scale(0.9); opacity: 1; }
  95%      { transform: translate(-28px, -2px) scale(0.5); opacity: 0; }
  100%     { transform: translate(-28px, -2px) scale(0); opacity: 0; }
}

@keyframes heroBeadR {
  0%, 78%  { transform: translate(0, 0) scale(0.5); opacity: 0; }
  81%      { transform: translate(0, 0) scale(1); opacity: 1; }
  88%      { transform: translate(18px, -14px) scale(0.9); opacity: 1; }
  95%      { transform: translate(28px, -2px) scale(0.5); opacity: 0; }
  100%     { transform: translate(28px, -2px) scale(0); opacity: 0; }
}

/* ============ EDGE LABEL ============ */
.hero-edge-label {
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left center;
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  z-index: 5;
  white-space: nowrap;
}
.hero-edge-bar {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, rgba(74, 171, 222, 0.8), transparent);
}

/* ============ MAIN GRID ============ */
.hero-grid {
  position: relative;
  z-index: 2;
  flex: 1;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 40px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 90px 110px;
}

/* ============ TEXT (LEFT) ============ */
.hero-text {
  position: relative;
  min-width: 0;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #4AABDE;
  padding: 9px 18px;
  border: 1px solid rgba(74, 171, 222, 0.35);
  border-radius: 100px;
  background: rgba(74, 171, 222, 0.08);
  backdrop-filter: blur(8px);
  margin-bottom: 28px;
}
.hero-eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4AABDE;
  box-shadow: 0 0 12px #4AABDE;
  animation: heroDotPulse 1.6s ease-in-out infinite;
}
@keyframes heroDotPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1;   transform: scale(1.15); }
}

/* Stage stack — single block whose content is bound to the current stage.
   Each time stageIdx changes, the headline + desc remount (via :key) and
   replay the CSS fade-in animation. */
.hero-stage-stack {
  position: relative;
  min-height: 320px;
  display: flex;
  flex-direction: column;
}

@keyframes heroStageIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-stage-stack .hero-headline,
.hero-stage-stack .hero-desc {
  animation: heroStageIn 0.65s cubic-bezier(0.22, 0.61, 0.36, 1) both;
}
.hero-stage-stack .hero-desc { animation-delay: 0.06s; }

.hero-stage-num {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: rgba(74, 171, 222, 0.7);
  margin-bottom: 14px;
}

.hero-headline {
  font-family: 'Bebas Neue', 'Anton', sans-serif;
  font-size: clamp(58px, 8vw, 130px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.005em;
  margin: 0 0 26px;
  color: #ffffff;
}
.hero-headline .hero-line {
  display: block;
}
.hero-headline em {
  font-style: normal;
  font-weight: 400;
  background: linear-gradient(120deg, #4AABDE 0%, #00cdf2 50%, #4AABDE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
  max-width: 480px;
  margin: 0;
  font-weight: 300;
}

/* CTA — only visible on the final stage */
.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: opacity 0.6s 0.15s ease, transform 0.7s 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.hero-cta.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 17px 30px;
  border-radius: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.hero-btn--primary {
  background: linear-gradient(135deg, #4AABDE 0%, #2E8BC0 100%);
  color: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0 14px 40px rgba(74, 171, 222, 0.35);
}
.hero-btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 56px rgba(74, 171, 222, 0.5);
}
.hero-btn--primary .hero-arrow {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.hero-btn--primary:hover .hero-arrow { transform: translateX(5px); }
.hero-btn--ghost {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
}
.hero-btn--ghost:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

/* ============ SCENE (RIGHT) ============ */
.hero-scene {
  position: relative;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1400px;
}

.hero-platform {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 480px;
  transform: translateX(-50%);
  pointer-events: none;
}
.hero-platform-glow {
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 80px;
  background: radial-gradient(ellipse at center, rgba(74, 171, 222, 0.55), transparent 65%);
  filter: blur(36px);
  border-radius: 50%;
  animation: heroPlatformPulse 4s ease-in-out infinite alternate;
}
@keyframes heroPlatformPulse {
  0%   { opacity: 0.55; transform: scaleX(0.92); }
  100% { opacity: 0.95; transform: scaleX(1.08); }
}
.hero-platform-ring {
  position: absolute;
  left: 10%; right: 10%; top: 30px;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(74, 171, 222, 0.5), transparent);
  border-radius: 50%;
}

.hero-printer {
  position: relative;
  width: 100%;
  max-width: 540px;
  z-index: 3;
  transform-style: preserve-3d;
  will-change: transform;
  animation: heroPrinterFloat 6s ease-in-out infinite;
  transition: filter 0.8s ease;
}
@keyframes heroPrinterFloat {
  0%, 100% { translate: 0 0; }
  50%      { translate: 0 -14px; }
}
.hero-printer img {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 30px 60px rgba(74, 171, 222, 0.35))
          drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5));
}

/* ============ FLYING PAPERS (stage 2) ============ */
.hero-papers {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
}
.hero-paper {
  position: absolute;
  width: 90px;
  height: 120px;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(74, 171, 222, 0.18);
  opacity: 0;
  transform: translate(0, 0) scale(0.6) rotate(0deg);
  transition: opacity 0.9s ease, transform 1.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.hero-paper-line {
  height: 5px;
  border-radius: 3px;
  width: 80%;
}
.hero-paper-line--c { background: #00aeef; width: 75%; }
.hero-paper-line--m { background: #ec008c; width: 60%; }
.hero-paper-line--y { background: #fff200; width: 85%; }
.hero-paper-line--k { background: #1a1a1a; width: 50%; }

/* Hidden in stage 0, revealed in stages 1 & 2 */
.hero-papers--stage-0 .hero-paper {
  opacity: 0;
  transform: translate(0, 0) scale(0.4);
}
.hero-papers--stage-1 .hero-paper {
  opacity: 1;
}
.hero-papers--stage-1 .hero-paper--1 { transform: translate(-220px, -120px) rotate(-12deg); }
.hero-papers--stage-1 .hero-paper--2 { transform: translate(180px, -150px)  rotate(8deg); }
.hero-papers--stage-1 .hero-paper--3 { transform: translate(-260px, 60px)   rotate(6deg); }
.hero-papers--stage-1 .hero-paper--4 { transform: translate(220px, 80px)    rotate(-9deg); }
.hero-papers--stage-1 .hero-paper--5 { transform: translate(-30px, -200px)  rotate(3deg); }
.hero-papers--stage-2 .hero-paper {
  opacity: 0.4;
  transform: translate(0, -260px) scale(0.4) rotate(0deg);
}

/* ============ PRODUCT CARDS (stage 3) ============ */
.hero-products {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}
.hero-product {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 22px 50px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(74, 171, 222, 0.2);
  opacity: 0;
  transform: scale(0.4) translate(0, 60px) rotate(0);
  transition: opacity 0.9s ease, transform 1.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.hero-product img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-product-tag {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  font-family: 'Oswald', sans-serif;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 5px 10px;
  background: rgba(10, 18, 48, 0.85);
  border-radius: 6px;
  text-align: center;
  backdrop-filter: blur(6px);
}

/* Stage 3 (final) — products fan out around the printer */
.hero-products--stage-2 .hero-product {
  opacity: 1;
}
.hero-products--stage-2 .hero-product--1 {
  top: 4%;  left: -2%;  transform: scale(1) translate(0, 0) rotate(-7deg);
}
.hero-products--stage-2 .hero-product--2 {
  top: 0;   right: -4%; transform: scale(1) translate(0, 0) rotate(6deg); width: 110px; height: 110px;
}
.hero-products--stage-2 .hero-product--3 {
  bottom: 14%; left: -6%; transform: scale(1) translate(0, 0) rotate(5deg); width: 120px; height: 120px;
}
.hero-products--stage-2 .hero-product--4 {
  bottom: 6%; right: -3%; transform: scale(1) translate(0, 0) rotate(-8deg); width: 115px; height: 115px;
}

/* Live press badge */
.hero-live-badge {
  position: absolute;
  top: 22px;
  right: 12%;
  z-index: 6;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(10, 18, 48, 0.85);
  border: 1px solid rgba(74, 171, 222, 0.3);
  border-radius: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ffffff;
  backdrop-filter: blur(8px);
  white-space: nowrap;
}
.hero-live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 10px #34d399;
  animation: heroLiveDot 1.4s ease-in-out infinite;
}
@keyframes heroLiveDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.3; transform: scale(0.7); }
}

/* ============ PROGRESS BAR ============ */
.hero-progress {
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  z-index: 6;
  padding: 0 90px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.hero-progress-track {
  position: relative;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 2px;
}
.hero-progress-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #4AABDE, #00cdf2);
  transform-origin: left center;
  transform: scaleX(0);
  box-shadow: 0 0 20px rgba(74, 171, 222, 0.6);
  will-change: transform;
  transition: transform 0.3s ease-out;
}

.hero-progress-tabs {
  display: flex;
  gap: 36px;
  align-items: center;
}
.hero-progress-tab {
  display: flex;
  align-items: baseline;
  gap: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.4s ease;
}
.hero-progress-tab:hover { color: rgba(255, 255, 255, 0.85); }
.hero-progress-tab.done   { color: rgba(255, 255, 255, 0.55); }
.hero-progress-tab.active { color: #ffffff; }
.hero-progress-tab-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  opacity: 0.6;
}
.hero-progress-tab-label {
  font-family: 'Bebas Neue', 'Anton', sans-serif;
  font-size: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ============ SCROLL HINT ============ */
.hero-scroll-hint {
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: right center;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  transition: opacity 0.5s ease;
}
.hero-scroll-hint.hidden {
  opacity: 0;
  pointer-events: none;
}
.hero-scroll-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, #4AABDE, transparent);
  animation: heroScrollPulse 2.2s ease-in-out infinite;
  transform-origin: left center;
}
@keyframes heroScrollPulse {
  0%   { transform: scaleX(0); }
  45%  { transform: scaleX(1); }
  55%  { transform: scaleX(1); transform-origin: right center; }
  100% { transform: scaleX(0); transform-origin: right center; }
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1100px) {
  .hero-pin { padding-top: 110px; }
  .hero-grid {
    grid-template-columns: 1fr;
    padding: 30px 60px 120px;
    gap: 30px;
  }
  .hero-edge-label,
  .hero-scroll-hint { display: none; }
  .hero-scene { height: 440px; }
  .hero-headline { font-size: clamp(54px, 11vw, 96px); }
  .hero-stage-stack { min-height: 320px; }
  .hero-progress { padding: 0 60px; }
  .hero-progress-tabs { gap: 24px; }
  .hero-progress-tab-label { font-size: 20px; }
  .hero-live-badge { right: 6%; }
  .hero-papers--stage-1 .hero-paper--1 { transform: translate(-150px, -100px) rotate(-12deg); }
  .hero-papers--stage-1 .hero-paper--2 { transform: translate(140px, -130px)  rotate(8deg); }
  .hero-papers--stage-1 .hero-paper--3 { transform: translate(-180px, 50px)   rotate(6deg); }
  .hero-papers--stage-1 .hero-paper--4 { transform: translate(160px, 70px)    rotate(-9deg); }
  .hero-papers--stage-1 .hero-paper--5 { transform: translate(-20px, -160px)  rotate(3deg); }
}

@media (max-width: 720px) {
  .hero-pin { padding-top: 100px; }
  .hero-grid { padding: 30px 24px 110px; }
  .hero-headline { font-size: clamp(46px, 13vw, 72px); }
  .hero-desc { font-size: 14.5px; }
  .hero-cta { gap: 12px; }
  .hero-btn { padding: 14px 22px; font-size: 11px; }
  .hero-scene { height: 340px; }
  .hero-paper { width: 70px; height: 95px; }
  .hero-papers--stage-1 .hero-paper--1 { transform: translate(-100px, -70px) rotate(-12deg); }
  .hero-papers--stage-1 .hero-paper--2 { transform: translate(100px, -90px)  rotate(8deg); }
  .hero-papers--stage-1 .hero-paper--3 { transform: translate(-120px, 30px)  rotate(6deg); }
  .hero-papers--stage-1 .hero-paper--4 { transform: translate(110px, 50px)   rotate(-9deg); }
  .hero-papers--stage-1 .hero-paper--5 { transform: translate(-15px, -110px) rotate(3deg); }
  .hero-product { width: 80px !important; height: 80px !important; }
  .hero-progress { padding: 0 24px; bottom: 20px; }
  .hero-progress-tabs { gap: 16px; flex-wrap: wrap; }
  .hero-progress-tab-label { font-size: 16px; }
  .hero-live-badge { font-size: 9px; padding: 6px 10px; right: 4%; }
  .hero-stage-stack { min-height: 280px; }
}

@media (max-width: 480px) {
  .hero-grid { padding: 24px 16px 100px; }
  .hero-headline { font-size: clamp(36px, 10vw, 56px); }
  .hero-desc { font-size: 13px; }
  .hero-btn { padding: 12px 18px; font-size: 10px; }
  .hero-scene { height: 280px; }
  .hero-paper { width: 55px; height: 75px; }
  .hero-progress-tabs { gap: 12px; }
  .hero-progress-tab-label { font-size: 14px; }
  .hero-progress-tab-num { font-size: 10px; }
  .hero-live-badge { display: none; }
}
</style>
