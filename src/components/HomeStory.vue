<template>
  <!-- 250vh wrapper — snappy scroll distance -->
  <div class="scroll-story" ref="wrapperEl">
    <div class="scroll-story__stage">

      <!-- ====== BACKGROUND LAYERS (crossfade on scroll) ====== -->
      <div class="ss-bg">
        <div class="ss-bg-layer ss-bg-1" ref="bg1El"></div>
        <div class="ss-bg-layer ss-bg-2" ref="bg2El"></div>
        <div class="ss-bg-layer ss-bg-3" ref="bg3El"></div>
        <div class="ss-vignette"></div>
        <!-- Subtle grid overlay for depth -->
        <div class="ss-grid"></div>
      </div>

      <!-- ====== 3D HERO OBJECT (the printer) ====== -->
      <div class="ss-hero-perspective">
        <div class="ss-hero" ref="heroEl">
          <div class="ss-hero-glow" ref="glowEl"></div>
          <img
            src="/hero/large-format-printer.png"
            alt="Large format printer"
            class="ss-hero-img"
          />
          <div class="ss-hero-shadow" ref="shadowEl"></div>
        </div>
      </div>

      <!-- ====== CHAPTER 1 — PRINT YOUR VISION ====== -->
      <div class="ss-panel ss-panel--left" ref="panel1El">
        <span class="ss-kicker">Section 01 · Al Falah Studio</span>
        <h2 class="ss-heading">PRINT YOUR <em>VISION</em></h2>
        <p class="ss-body">
          Five decades turning ideas into things you can hold, wear and walk
          through. Dubai's trusted studio for print, branding and advertising.
        </p>
        <div class="ss-stats">
          <div class="ss-stat">
            <strong>50</strong><span>Years</span>
          </div>
          <div class="ss-stat">
            <strong>1K+</strong><span>Brands</span>
          </div>
          <div class="ss-stat">
            <strong>8</strong><span>Verticals</span>
          </div>
        </div>
      </div>

      <!-- ====== CHAPTER 2 — CRAFTED TO PERFECTION ====== -->
      <div class="ss-panel ss-panel--right" ref="panel2El">
        <span class="ss-kicker">Section 02 · The Press</span>
        <h2 class="ss-heading">CRAFTED TO <em>PERFECTION</em></h2>
        <p class="ss-body">
          CMYK calibrated to a hair, presses tuned by hand, soft-touch finishes
          that change the way a brand feels in the moment of contact.
        </p>
        <div class="ss-features">
          <div class="ss-feature">
            <span class="ss-tick">&#10003;</span> 2400 DPI Resolution
          </div>
          <div class="ss-feature">
            <span class="ss-tick">&#10003;</span> Spot UV &amp; Gold Foil
          </div>
          <div class="ss-feature">
            <span class="ss-tick">&#10003;</span> Eco-Friendly Inks
          </div>
          <div class="ss-feature">
            <span class="ss-tick">&#10003;</span> 18,000 Sheets/Hour
          </div>
        </div>
      </div>

      <!-- ====== CHAPTER 3 — BUILT TO BE SEEN ====== -->
      <div class="ss-panel ss-panel--final" ref="panel3El">
        <div class="ss-final-inner">
          <span class="ss-kicker">Section 03 · Begin the Story</span>
          <h2 class="ss-heading ss-heading--large">BUILT TO BE <em>SEEN</em></h2>
          <p class="ss-body">
            Cards, brochures, packaging, banners, neon, apparel, vehicles —
            everywhere your brand needs to live, we build it.
          </p>
          <div class="ss-cta">
            <router-link to="/products" class="ss-btn ss-btn--primary">
              Explore Products <span>&rarr;</span>
            </router-link>
            <router-link to="/contact" class="ss-btn ss-btn--ghost">
              Get a Quote
            </router-link>
          </div>
          <div class="ss-final-tags">
            <span>Business Cards</span>
            <span>Banners</span>
            <span>Packaging</span>
            <span>Apparel</span>
            <span>Signage</span>
            <span>Brochures</span>
          </div>
        </div>
      </div>

      <!-- ====== PROGRESS BAR (right edge) ====== -->
      <div class="ss-progress">
        <div class="ss-progress-track">
          <div class="ss-progress-fill" ref="progressFillEl"></div>
        </div>
        <div class="ss-progress-labels">
          <span :class="{ active: activeChapter >= 0 }">Print</span>
          <span :class="{ active: activeChapter >= 1 }">Craft</span>
          <span :class="{ active: activeChapter >= 2 }">Beyond</span>
        </div>
      </div>

      <!-- ====== SCROLL CUE ====== -->
      <div class="ss-scroll-cue" ref="scrollCueEl">
        SCROLL TO EXPLORE
        <span class="ss-cue-bar"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ───── refs ───── */
const wrapperEl    = ref(null)
const bg1El        = ref(null)
const bg2El        = ref(null)
const bg3El        = ref(null)
const heroEl       = ref(null)
const glowEl       = ref(null)
const shadowEl     = ref(null)
const panel1El     = ref(null)
const panel2El     = ref(null)
const panel3El     = ref(null)
const progressFillEl = ref(null)
const scrollCueEl  = ref(null)
const activeChapter = ref(0)

let ctx // GSAP context for clean teardown

onMounted(() => {
  // Mobile: skip all animation, show static chapter 1
  if (window.innerWidth <= 768) {
    // Don't use gsap.set on panel1 — it overwrites CSS transform: translateY(-50%)
    panel1El.value.style.opacity = '1'
    panel2El.value.style.opacity = '0'
    panel3El.value.style.opacity = '0'
    bg1El.value.style.opacity = '1'
    bg2El.value.style.opacity = '0'
    bg3El.value.style.opacity = '0'
    if (scrollCueEl.value) scrollCueEl.value.style.opacity = '0'
    return
  }

  ctx = gsap.context(() => {

    /* ── Initial states ── */
    // Panels: ch1 visible, ch2 & ch3 hidden below
    gsap.set(panel1El.value, { opacity: 1, y: 0 })
    gsap.set(panel2El.value, { opacity: 0, y: 50 })
    gsap.set(panel3El.value, { opacity: 0, y: 50 })

    // Backgrounds: ch1 visible
    gsap.set(bg1El.value, { opacity: 1 })
    gsap.set(bg2El.value, { opacity: 0 })
    gsap.set(bg3El.value, { opacity: 0 })

    // Hero: starts right-of-center, tilted in 3D
    gsap.set(heroEl.value, {
      left: '63%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      rotateY: -18,
      rotateX: 6,
      scale: 1,
    })

    /* ── Continuous subtle float ── */
    gsap.to(heroEl.value, {
      y: '-=14',
      duration: 2.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    /* ═══════════════════════════════════════════════════
       MASTER SCROLL-SCRUBBED TIMELINE
       300vh wrapper + scrub 1.6 = buttery smooth
       ═══════════════════════════════════════════════════ */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperEl.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.6,
        onUpdate(self) {
          const p = self.progress
          if (progressFillEl.value)
            progressFillEl.value.style.transform = `scaleY(${p})`
          activeChapter.value = p < 0.28 ? 0 : p < 0.58 ? 1 : 2
        },
      },
    })

    /* ═══ Chapter 1 — hero drifts from first scroll ═══ */
    tl.to(heroEl.value, {
      left: '57%',
      top: '48%',
      rotateY: -12,
      rotateX: 4,
      scale: 1.02,
      duration: 0.18,
      ease: 'power1.inOut',
    }, 0)

    // Scroll cue fades
    tl.to(scrollCueEl.value, { opacity: 0, duration: 0.08 }, 0.03)

    /* ═══ TRANSITION: Chapter 1 → 2 (0.16 → 0.36) ═══ */
    // Panel 1 out — slow fade
    tl.to(panel1El.value, {
      opacity: 0, y: -30, duration: 0.12, ease: 'power2.inOut',
    }, 0.16)

    // Hero glides right → left
    tl.to(heroEl.value, {
      left: '32%',
      top: '46%',
      rotateY: 16,
      rotateX: -4,
      scale: 1.08,
      duration: 0.20,
      ease: 'power2.inOut',
    }, 0.18)

    // Glow shifts
    tl.to(glowEl.value, {
      background: 'radial-gradient(ellipse at center, rgba(0,205,242,0.5), transparent 65%)',
      duration: 0.18,
    }, 0.19)

    // Shadow widens
    tl.to(shadowEl.value, {
      scaleX: 1.2, opacity: 0.35, duration: 0.16,
    }, 0.19)

    // BG crossfade — long overlap
    tl.to(bg1El.value, { opacity: 0, duration: 0.16 }, 0.18)
    tl.to(bg2El.value, { opacity: 1, duration: 0.16 }, 0.20)

    // Panel 2 in — eases in gently
    tl.to(panel2El.value, {
      opacity: 1, y: 0, duration: 0.12, ease: 'power2.out',
    }, 0.30)

    /* ── Chapter 2 active (0.36 → 0.50) — hero drifts ── */
    tl.to(heroEl.value, { rotateY: 13, duration: 0.14, ease: 'power1.inOut' }, 0.36)

    /* ═══ TRANSITION: Chapter 2 → 3 (0.50 → 0.72) ═══ */
    // Panel 2 out
    tl.to(panel2El.value, {
      opacity: 0, y: -30, duration: 0.12, ease: 'power2.inOut',
    }, 0.50)

    // Hero moves center, shrinks, fades
    tl.to(heroEl.value, {
      left: '50%',
      top: '35%',
      rotateY: 0,
      rotateX: 18,
      scale: 0.35,
      opacity: 0,
      duration: 0.20,
      ease: 'power2.inOut',
    }, 0.52)

    // Shadow fades
    tl.to(shadowEl.value, { opacity: 0, duration: 0.14 }, 0.52)

    // BG crossfade
    tl.to(bg2El.value, { opacity: 0, duration: 0.16 }, 0.52)
    tl.to(bg3El.value, { opacity: 1, duration: 0.16 }, 0.54)

    // Panel 3 in
    tl.to(panel3El.value, {
      opacity: 1, y: 0, duration: 0.14, ease: 'power2.out',
    }, 0.64)

    /* ── Hold Chapter 3 (0.72 → 1.0) ── */

  }, wrapperEl.value)
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
/* ════════════════════════════════════════════════════
   SCROLL-STORY WRAPPER & PINNED STAGE
   ════════════════════════════════════════════════════ */
.scroll-story {
  position: relative;
  width: 100%;
  height: 300vh; /* smooth scroll distance */
}

.scroll-story__stage {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* ════════════════════════════════════════
   BACKGROUND LAYERS
   ════════════════════════════════════════ */
.ss-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.ss-bg-layer {
  position: absolute;
  inset: 0;
  will-change: opacity;
}

.ss-bg-1 {
  background:
    radial-gradient(ellipse 65% 55% at 30% 45%, rgba(74, 171, 222, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 80% 75%, rgba(46, 139, 192, 0.10) 0%, transparent 60%),
    linear-gradient(165deg, #060e1e 0%, #0b1a35 45%, #071225 100%);
}
.ss-bg-2 {
  background:
    radial-gradient(ellipse 55% 50% at 75% 40%, rgba(0, 174, 239, 0.20) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 20% 70%, rgba(0, 205, 242, 0.14) 0%, transparent 60%),
    linear-gradient(165deg, #0a1a32 0%, #081830 45%, #0a1a32 100%);
}
.ss-bg-3 {
  background:
    radial-gradient(ellipse 55% 50% at 50% 55%, rgba(74, 171, 222, 0.16) 0%, transparent 55%),
    radial-gradient(ellipse 45% 45% at 70% 30%, rgba(236, 0, 140, 0.10) 0%, transparent 60%),
    linear-gradient(165deg, #0a1a32 0%, #10082a 45%, #0a1230 100%);
}

.ss-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.45) 100%);
  pointer-events: none;
}

.ss-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
}

/* ════════════════════════════════════════
   3D HERO OBJECT
   ════════════════════════════════════════ */
.ss-hero-perspective {
  position: absolute;
  inset: 0;
  z-index: 10;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  pointer-events: none;
}

.ss-hero {
  position: absolute;
  width: clamp(280px, 30vw, 460px);
  transform-style: preserve-3d;
  will-change: transform, left, top, opacity;
}

.ss-hero-img {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(74, 171, 222, 0.25))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  transform: translateZ(30px); /* pop forward in 3D space */
}

.ss-hero-glow {
  position: absolute;
  inset: -10% -15% -15% -15%;
  background: radial-gradient(ellipse at center, rgba(74, 171, 222, 0.40), transparent 65%);
  filter: blur(50px);
  z-index: -1;
  animation: glowPulse 4s ease-in-out infinite alternate;
  will-change: opacity, transform;
}
@keyframes glowPulse {
  0%   { opacity: 0.5; transform: scale(0.92); }
  100% { opacity: 0.85; transform: scale(1.08); }
}

.ss-hero-shadow {
  position: absolute;
  bottom: -18%;
  left: 10%;
  right: 10%;
  height: 40px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35), transparent 70%);
  filter: blur(18px);
  transform: scaleX(1) rotateX(80deg);
  transform-origin: center top;
  opacity: 0.4;
  will-change: transform, opacity;
}

/* ════════════════════════════════════════
   CONTENT PANELS
   ════════════════════════════════════════ */
.ss-panel {
  position: absolute;
  z-index: 20;
  max-width: 520px;
  will-change: transform, opacity;
}

.ss-panel--left {
  left: 7%;
  top: 50%;
  transform: translateY(-50%);
}
.ss-panel--right {
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
}
.ss-panel--final {
  /* override base .ss-panel */
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  max-width: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.ss-final-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 760px;
  width: 100%;
  padding: 0 40px;
}
.ss-panel--final .ss-kicker {
  margin-bottom: 20px;
}
.ss-panel--final .ss-heading {
  font-size: clamp(60px, 9vw, 150px);
  line-height: 0.9;
  margin-bottom: 20px;
}
.ss-panel--final .ss-body {
  max-width: 520px;
  margin: 0 auto 32px;
  font-size: 16px;
}
.ss-final-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 32px;
}
.ss-final-tags span {
  padding: 8px 20px;
  border: 1px solid rgba(74, 171, 222, 0.25);
  border-radius: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  background: rgba(74, 171, 222, 0.06);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}
.ss-final-tags span:hover {
  border-color: #4AABDE;
  color: #fff;
  background: rgba(74, 171, 222, 0.15);
}

/* ── Typography ── */
.ss-kicker {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #4AABDE;
  padding: 8px 18px;
  border: 1px solid rgba(74, 171, 222, 0.35);
  border-radius: 100px;
  margin-bottom: 24px;
  background: rgba(74, 171, 222, 0.08);
  backdrop-filter: blur(6px);
}

.ss-heading {
  font-family: 'Bebas Neue', 'Anton', sans-serif;
  font-size: clamp(48px, 6.5vw, 110px);
  font-weight: 400;
  line-height: 0.92;
  letter-spacing: 0.005em;
  margin: 0 0 24px;
  color: #ffffff;
  text-transform: uppercase;
}
.ss-heading em {
  font-style: normal;
  background: linear-gradient(120deg, #4aabde 0%, #00cdf2 50%, #4aabde 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ss-body {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 30px;
  font-weight: 300;
}

/* ── Stats ── */
.ss-stats {
  display: flex;
  gap: 44px;
}
.ss-stat {
  display: flex;
  flex-direction: column;
}
.ss-stat strong {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 52px;
  line-height: 1;
  background: linear-gradient(180deg, #fff 0%, #4aabde 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.ss-stat span {
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 5px;
}

/* ── Features ── */
.ss-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.ss-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
}
.ss-tick {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  background: #4AABDE;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

/* ── CTA Buttons ── */
.ss-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.ss-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 30px;
  border-radius: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.ss-btn--primary {
  background: linear-gradient(135deg, #4aabde 0%, #2e8bc0 100%);
  color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 12px 36px rgba(74, 171, 222, 0.35);
}
.ss-btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 48px rgba(74, 171, 222, 0.5);
}
.ss-btn--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
}
.ss-btn--ghost:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

/* ════════════════════════════════════════
   PROGRESS BAR (right edge)
   ════════════════════════════════════════ */
.ss-progress {
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 14px;
}

.ss-progress-track {
  width: 2px;
  height: 120px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
  overflow: hidden;
}
.ss-progress-fill {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #4aabde, #00cdf2);
  transform-origin: top;
  transform: scaleY(0);
  will-change: transform;
}

.ss-progress-labels {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.ss-progress-labels span {
  font-family: 'Oswald', sans-serif;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  transition: color 0.4s ease, transform 0.4s ease;
}
.ss-progress-labels span.active {
  color: rgba(255, 255, 255, 0.85);
  transform: translateX(-3px);
}

/* ════════════════════════════════════════
   SCROLL CUE
   ════════════════════════════════════════ */
.ss-scroll-cue {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 9px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  will-change: opacity;
}
.ss-cue-bar {
  display: block;
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, #4aabde, transparent);
  animation: cueBounce 2.2s ease-in-out infinite;
}
@keyframes cueBounce {
  0%   { transform: scaleY(0); transform-origin: top; }
  45%  { transform: scaleY(1); transform-origin: top; }
  55%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ════════════════════════════════════════
   RESPONSIVE
   ════════════════════════════════════════ */
@media (max-width: 1100px) {
  .ss-panel--left,
  .ss-panel--right {
    left: 6%;
    right: auto;
    max-width: 420px;
  }
  .ss-hero {
    width: clamp(220px, 38vw, 340px);
  }
}

@media (max-width: 768px) {
  /* Static hero — no scroll */
  .scroll-story { height: auto; }
  .scroll-story__stage { position: relative; height: 100svh; min-height: 600px; }
  .ss-hero-perspective,
  .ss-progress,
  .ss-scroll-cue,
  .ss-panel--right,
  .ss-panel--final { display: none !important; }
  .ss-panel--left {
    left: 24px; right: 24px;
    top: 50%; bottom: auto;
    transform: translateY(-50%);
    max-width: none; text-align: left;
  }
  .ss-heading {
    font-size: clamp(44px, 13vw, 72px);
    line-height: 0.9;
    margin-bottom: 20px;
  }
  .ss-kicker {
    font-size: 11px;
    padding: 8px 16px;
    margin-bottom: 20px;
  }
  .ss-body {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 28px;
    color: rgba(255,255,255,0.8);
  }
  .ss-stats {
    gap: 32px;
    margin-bottom: 32px;
  }
  .ss-stat strong { font-size: 44px; }
  .ss-stat span { font-size: 11px; }
  .ss-features { grid-template-columns: 1fr; }
  /* Show CTA buttons on mobile hero */
  .ss-panel--left .ss-cta { display: none; }
}

@media (max-width: 480px) {
  .scroll-story__stage { min-height: 100svh; }
  .ss-panel--left { left: 20px; right: 20px; }
  .ss-heading { font-size: clamp(38px, 11vw, 56px); }
  .ss-body { font-size: 15px; }
  .ss-stats { gap: 24px; }
  .ss-stat strong { font-size: 38px; }
  .ss-kicker { font-size: 10px; padding: 7px 14px; }
}
</style>
