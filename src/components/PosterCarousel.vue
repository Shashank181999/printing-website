<template>
  <section class="poster-section" ref="rootRef" aria-label="Printing work posters">
    <div class="container poster-container">

      <div
        class="poster-viewport"
        ref="viewportRef"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        @touchstart="paused = true"
        @touchend="onTouchEnd"
      >
        <button
          class="poster-arrow poster-arrow--prev"
          type="button"
          @click="prev"
          aria-label="Previous poster"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          class="poster-arrow poster-arrow--next"
          type="button"
          @click="next"
          aria-label="Next poster"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <div class="poster-track" ref="trackRef" :style="{ transform: `translate3d(${-activeIndex * slideWidth}px, 0, 0)` }">
          <article
            v-for="(poster, i) in posters"
            :key="poster.id"
            class="poster-card"
            :class="{ 'is-active': i === activeIndex }"
            :style="{ width: slideWidth + 'px' }"
            @click="goTo(i)"
          >
            <div class="poster-card-inner">
              <img
                :src="poster.image"
                :alt="poster.title"
                loading="lazy"
                referrerpolicy="no-referrer"
                @error="onImgError($event, i)"
              />
              <div class="poster-overlay">
                <span class="poster-tag">{{ poster.tag }}</span>
                <h3 class="poster-title">{{ poster.title }}</h3>
                <p class="poster-desc">{{ poster.desc }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="poster-dots" role="tablist">
        <button
          v-for="(poster, i) in posters"
          :key="poster.id + '-dot'"
          class="poster-dot"
          :class="{ active: i === activeIndex }"
          type="button"
          :aria-label="`Show poster ${i + 1}`"
          :aria-selected="i === activeIndex"
          @click="goTo(i)"
        >
          <span class="poster-dot-fill" :style="i === activeIndex ? { animationDuration: autoplayMs + 'ms' } : {}"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const posters = ref([
  {
    id: 'offset',
    tag: 'Offset / Digital',
    title: 'Sheet-fed Press Precision',
    desc: 'Sharp CMYK reproduction, consistent dot-gain, every run.',
    image: '/images/posters/poster-1.jpg',
    fallback: 'https://picsum.photos/seed/afme-offset/1400/1700',
  },
  {
    id: 'branding',
    tag: 'Branding Suite',
    title: 'Stationery & Business Cards',
    desc: 'Letterpress, foil and spot-UV finishes that feel premium.',
    image: '/images/posters/poster-2.jpg',
    fallback: 'https://picsum.photos/seed/afme-branding/1400/1700',
  },
  {
    id: 'posters',
    tag: 'Large Format',
    title: 'Posters & Billboards',
    desc: 'Outdoor-grade inks, up to grand-format sizes.',
    image: '/images/posters/poster-3.jpg',
    fallback: 'https://picsum.photos/seed/afme-posters/1400/1700',
  },
  {
    id: 'magazines',
    tag: 'Editorial',
    title: 'Magazines & Catalogues',
    desc: 'Perfect-bound, saddle-stitched, lay-flat options.',
    image: '/images/posters/poster-4.jpg',
    fallback: 'https://picsum.photos/seed/afme-magazines/1400/1700',
  },
  {
    id: 'packaging',
    tag: 'Packaging',
    title: 'Boxes & Labels',
    desc: 'Die-cut packaging, custom labels and sticker runs.',
    image: '/images/posters/poster-5.jpg',
    fallback: 'https://picsum.photos/seed/afme-packaging/1400/1700',
  },
])

const rootRef = ref(null)
const viewportRef = ref(null)
const trackRef = ref(null)
const activeIndex = ref(0)
const paused = ref(false)
const slideWidth = ref(0)
const autoplayMs = 4500
let autoplayTimer = null
let touchStartX = 0
let touchEndX = 0

function measure() {
  if (!viewportRef.value) return
  slideWidth.value = viewportRef.value.clientWidth
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % posters.value.length
  restartAutoplay()
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + posters.value.length) % posters.value.length
  restartAutoplay()
}

function goTo(i) {
  activeIndex.value = i
  restartAutoplay()
}

function togglePause() {
  paused.value = !paused.value
  if (paused.value) {
    stopAutoplay()
  } else {
    startAutoplay()
  }
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (!paused.value) {
      activeIndex.value = (activeIndex.value + 1) % posters.value.length
    }
  }, autoplayMs)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function restartAutoplay() {
  if (!paused.value) startAutoplay()
}

function onTouchEnd(e) {
  touchEndX = e.changedTouches?.[0]?.clientX ?? touchEndX
  const dx = touchEndX - touchStartX
  if (Math.abs(dx) > 40) {
    dx < 0 ? next() : prev()
  } else {
    paused.value = false
  }
}

function onTouchStartCapture(e) {
  touchStartX = e.touches?.[0]?.clientX ?? 0
  touchEndX = touchStartX
}

function onImgError(e, i) {
  const item = posters.value[i]
  if (item && e.target && e.target.src !== item.fallback) {
    e.target.src = item.fallback
  }
}

function onKey(e) {
  if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

onMounted(async () => {
  await nextTick()
  measure()
  window.addEventListener('resize', measure)
  if (viewportRef.value) {
    viewportRef.value.addEventListener('touchstart', onTouchStartCapture, { passive: true })
  }
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('resize', measure)
  if (viewportRef.value) {
    viewportRef.value.removeEventListener('touchstart', onTouchStartCapture)
  }
})
</script>

<style scoped>
.poster-section {
  padding: 0 0 clamp(32px, 5vw, 60px);
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}


.poster-container {
  position: relative;
  z-index: 1;
}

.poster-header {
  display: flex;
  justify-content: flex-end;
  padding: 12px 0;
}

.poster-header > div:first-child {
  min-width: 0;
  flex: 1 1 320px;
}

.poster-eyebrow {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: clamp(10px, 1.2vw, 12px);
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 12px;
}

.poster-sub {
  margin-top: 10px;
  color: var(--text-secondary);
  font-size: clamp(13px, 1.5vw, 16px);
  max-width: 520px;
  line-height: 1.6;
}

.poster-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.poster-btn {
  width: clamp(38px, 4vw, 46px);
  height: clamp(38px, 4vw, 46px);
  border-radius: 50%;
  border: 1px solid var(--border-medium);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.poster-btn:hover {
  transform: translateY(-2px);
  border-color: var(--text-primary);
  background: #fff;
}

.poster-btn:active {
  transform: translateY(0);
}

.poster-btn--solid {
  background: var(--text-primary);
  color: #fff;
  border-color: var(--text-primary);
}

.poster-btn--solid:hover {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
}

.poster-btn.is-paused {
  background: var(--accent-teal);
  color: #fff;
  border-color: var(--accent-teal);
}

.poster-viewport {
  position: relative;
  overflow: hidden;
  border-radius: clamp(10px, 1.6vw, 18px);
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.18);
  background: #0a0e14;
  touch-action: pan-y;
}

.poster-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
  will-change: transform;
}

/* Overlay prev/next arrows centered on left & right of viewport */
.poster-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: var(--text-primary, #111);
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.poster-arrow:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.poster-arrow:active {
  transform: translateY(-50%) scale(0.96);
}

.poster-arrow--prev { left: 16px; }
.poster-arrow--next { right: 16px; }

@media (max-width: 640px) {
  .poster-arrow {
    width: 40px;
    height: 40px;
  }
  .poster-arrow--prev { left: 10px; }
  .poster-arrow--next { right: 10px; }
}

.poster-card {
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  transition: filter 0.5s ease;
  filter: brightness(0.75) saturate(0.9);
}

.poster-card.is-active {
  filter: brightness(1) saturate(1);
}

.poster-card-inner {
  position: relative;
  width: 100%;
  height: min(42vh, 390px);
  overflow: hidden;
}

.poster-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 8s linear;
}

.poster-card.is-active img {
  transform: scale(1.12);
}

.poster-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(18px, 3.5vw, 44px);
  color: #fff;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
  transform: translateY(8px);
  opacity: 0.9;
  transition: all 0.5s ease;
  box-sizing: border-box;
}

.poster-card.is-active .poster-overlay {
  transform: translateY(0);
  opacity: 1;
}

.poster-tag {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: clamp(9px, 1vw, 11px);
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(46, 139, 192, 0.9);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: clamp(8px, 1.2vw, 14px);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.poster-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 3.6vw, 42px);
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin: 0 0 clamp(6px, 0.8vw, 10px);
  word-break: break-word;
  overflow-wrap: break-word;
}

.poster-desc {
  font-size: clamp(12px, 1.35vw, 15px);
  line-height: 1.55;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
}

.poster-index {
  position: absolute;
  top: clamp(12px, 2vw, 24px);
  right: clamp(12px, 2vw, 28px);
  font-family: var(--font-accent);
  font-size: clamp(9px, 1vw, 11px);
  font-weight: 600;
  letter-spacing: 0.25em;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(6px);
  padding: clamp(5px, 0.8vw, 8px) clamp(10px, 1.4vw, 14px);
  border-radius: 999px;
}

.poster-dots {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: clamp(18px, 2.6vw, 28px);
  flex-wrap: wrap;
  padding: 0 8px;
}

.poster-dot {
  width: clamp(22px, 3.5vw, 40px);
  height: 3px;
  border: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.poster-dot:hover {
  background: rgba(0, 0, 0, 0.22);
}

.poster-dot.active {
  background: rgba(0, 0, 0, 0.14);
}

.poster-dot-fill {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--accent-teal);
  transform-origin: left center;
  transform: scaleX(0);
}

.poster-dot.active .poster-dot-fill {
  animation: poster-fill linear forwards;
}

@keyframes poster-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* Tablets & small laptops */
@media (max-width: 1024px) {
  .poster-header {
    align-items: flex-start;
  }

  .poster-card-inner {
    height: min(40vh, 340px);
  }
}

/* Large phones / small tablets */
@media (max-width: 768px) {
  .poster-header {
    flex-direction: column;
    align-items: stretch;
  }

  .poster-controls {
    justify-content: flex-end;
  }

  .poster-card-inner {
    height: min(39vh, 310px);
  }

  .poster-desc {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* Phones */
@media (max-width: 480px) {
  .poster-sub {
    font-size: 13px;
  }

  .poster-card-inner {
    height: min(37vh, 270px);
  }

  .poster-overlay {
    padding: 18px 16px 20px;
  }

  .poster-title {
    font-size: 20px;
  }

  .poster-desc {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }

  .poster-tag {
    font-size: 9px;
    padding: 5px 10px;
    letter-spacing: 0.2em;
  }

  .poster-btn {
    width: 40px;
    height: 40px;
  }

  .poster-dots {
    gap: 5px;
    padding: 0 16px;
  }

  .poster-dot {
    width: 22px;
  }
}

/* Ultra-narrow phones */
@media (max-width: 360px) {
  .poster-title {
    font-size: 18px;
  }

  .poster-index {
    font-size: 9px;
    padding: 4px 8px;
    letter-spacing: 0.18em;
  }

  .poster-controls {
    gap: 6px;
  }
}

/* Landscape phones — short viewports, cap height */
@media (max-height: 480px) and (orientation: landscape) {
  .poster-card-inner {
    height: 88vh;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .poster-track {
    transition: transform 0.3s ease;
  }

  .poster-card img {
    transition: none;
    transform: scale(1);
  }

  .poster-dot.active .poster-dot-fill {
    animation: none;
    transform: scaleX(1);
  }
}
</style>
