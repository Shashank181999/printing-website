<template>
  <section class="story" ref="sectionEl">
    <div class="story-stage" :class="{ 'is-open': activeIndex > 0 }">
      <canvas ref="canvasEl" class="story-canvas"></canvas>
      <div class="bg-glow" ref="glowEl"></div>
      <div class="bg-vignette"></div>

      <!-- Chapter text overlays — crossfade via CSS on .active -->
      <div
        v-for="(s, i) in stories"
        :key="s.id"
        :class="['story-text', { active: activeIndex === i }]"
      >
        <div class="story-text-inner">
          <span class="story-kicker">{{ s.kicker }}</span>
          <h2 class="story-title" v-html="s.title"></h2>
          <p class="story-desc">{{ s.desc }}</p>
          <div v-if="s.cta" class="story-cta">
            <router-link to="/products" class="btn-gold">
              Shop Products <span class="arrow">&rarr;</span>
            </router-link>
            <router-link to="/contact" class="btn-ghost">Get a Quote</router-link>
          </div>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="story-progress">
        <div class="story-progress-fill" ref="progressEl"></div>
      </div>

      <!-- Chapter dots -->
      <ul class="story-dots" aria-hidden="true">
        <li
          v-for="(s, i) in stories"
          :key="s.id + '-dot'"
          :class="{ active: activeIndex === i }"
        >
          <span class="dot"></span>
          <span class="dot-label">{{ s.label }}</span>
        </li>
      </ul>

      <!-- Scroll hint -->
      <div :class="['scroll-hint', { hidden: activeIndex !== 0 }]">
        <span>Scroll to turn the page</span>
        <span class="scroll-bar"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// =============================================================
// Story chapters — each page of the book is a chapter.
// hero = main image on the page; thumbs = small images in the strip below.
// =============================================================
const stories = [
  {
    id: 'intro',
    label: 'Intro',
    chapter: '00',
    hero: '/products/company-profile.webp',
    thumbs: [],
    kicker: 'Al Falah · Middle East · Dubai',
    title: 'Print the <em>story</em><br />behind your brand',
    desc: "A craft half a century in the making. Dubai's trusted studio for print, branding and advertising. Scroll to turn the page.",
  },
  {
    id: 'brochure',
    label: 'Brochures',
    chapter: '01',
    hero: '/products/magazine.webp',
    thumbs: [
      '/products/company-profile.webp',
      '/products/annual-report.webp',
      '/products/company-profile-bookle.webp',
    ],
    kicker: 'Brochures & print collateral',
    title: 'Folded <em>stories</em>',
    desc: 'Tri-fold, bi-fold, saddle stitched. Premium stocks, spot UV, gold foil and soft-touch lamination — engineered paper that guides the eye page after page.',
  },
  {
    id: 'label',
    label: 'Labels',
    chapter: '02',
    hero: '/products/product-labels-stickers.webp',
    thumbs: [
      '/products/pharma-labels.webp',
      '/products/label-rolls.webp',
      '/products/sticker-sheets.webp',
    ],
    kicker: 'Labels & product identity',
    title: 'Shelf-ready <em>craft</em>',
    desc: 'Die-cut, embossed, metallic. Waterproof and freezer-safe stocks, hot foil and holograms. Every millimetre sculpted to pull weight on the shelf.',
  },
  {
    id: 'banner',
    label: 'Banners',
    chapter: '03',
    hero: '/products/roll-up-banners.webp',
    thumbs: [
      '/products/outdoor-feather-flags.webp',
      '/products/fence-banners.webp',
      '/products/teardrop-flags.webp',
    ],
    kicker: 'Banners & exhibition signage',
    title: 'Stand <em>tall</em>',
    desc: 'Roll-ups, tension fabric, exhibition backdrops. 4K dye-sublimation printing on aluminium hardware — pin-sharp, built to travel.',
  },
  {
    id: 'giftbox',
    label: 'Packaging',
    chapter: '04',
    hero: '/products/rigid-box-packaging.webp',
    thumbs: [
      '/products/paper-shopping-bags.webp',
      '/products/productshipping-boxes.webp',
      '/products/food-packaging-box-custom.webp',
    ],
    kicker: 'Luxury packaging',
    title: 'Unboxing as <em>theatre</em>',
    desc: 'Rigid set-up boxes, magnetic closures, ribboned lids. Velvet, linen and leatherette finishes with custom foam and silk inserts — the first touch of your brand.',
  },
  {
    id: 'cards',
    label: 'Cards',
    chapter: '05',
    hero: '/products/gold-foil-business-cards.webp',
    thumbs: [
      '/products/metal-business-cards.webp',
      '/products/premium-mattesoft-touch-cards.webp',
      '/products/nfcsmart-business-card.webp',
    ],
    kicker: 'Business cards & stationery',
    title: 'First <em>impressions</em>',
    desc: 'Gold foil, metal, soft-touch and NFC smart cards. Letterpress, debossing and edge painting on cotton stocks — the handshake before the handshake.',
  },
  {
    id: 'signage',
    label: 'Signage',
    chapter: '06',
    hero: '/products/neon-signage.webp',
    thumbs: [
      '/products/3d-metal-letters-signage.webp',
      '/products/glassfacade-branding.webp',
      '/products/acrylic-name-plate.webp',
    ],
    kicker: 'Signage & 3D branding',
    title: 'Built to be <em>seen</em>',
    desc: 'Neon, 3D metal letters, acrylic and frosted glass. Architectural-grade signage fabricated and installed across Dubai and the wider UAE.',
  },
  {
    id: 'apparel',
    label: 'Apparel',
    chapter: '07',
    hero: '/products/custom-t-shirts.webp',
    thumbs: [
      '/products/hoodie.webp',
      '/products/polo-t-shirt.webp',
      '/products/branded-caps.webp',
    ],
    kicker: 'Apparel & merchandise',
    title: 'Wear the <em>brand</em>',
    desc: 'Embroidered, screen-printed and DTG. Premium cotton tees, hoodies and caps — uniforms and giveaways your team will actually wear.',
  },
  {
    id: 'outro',
    label: 'Begin',
    chapter: '08',
    hero: '/products/office-branding.webp',
    thumbs: [
      '/products/welcome-kits.webp',
      '/products/trophyawards.webp',
      '/products/certificates-with-frame.webp',
    ],
    kicker: 'Begin the story',
    title: 'Make your brand<br /><em>unforgettable</em>',
    desc: 'From concept to delivery — Al Falah prints the vision behind your business.',
    cta: true,
  },
]

// =============================================================
// Refs
// =============================================================
const sectionEl = ref(null)
const canvasEl = ref(null)
const progressEl = ref(null)
const glowEl = ref(null)
const activeIndex = ref(0)

// Three.js state
let renderer, scene, camera, pmrem, envTex
let rafId = 0
let resizeHandler
const disposables = []
const triggers = []
let clock = new THREE.Clock()

// Book parts
let book, bookTopCoverGroup, bookBottomCover
const bookPages = [] // array of page groups (hinge groups), one per product chapter

// Decoration
let particles

// =============================================================
// Helpers
// =============================================================
function track(item) {
  disposables.push(item)
  return item
}

// Generate a branded cover canvas texture — high-contrast, large elements
function makeCoverTexture() {
  const W = 1024
  const H = 1440
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const ctx = c.getContext('2d')

  // Navy base with radial highlight
  ctx.fillStyle = '#0a1845'
  ctx.fillRect(0, 0, W, H)
  const rg = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, W * 0.9)
  rg.addColorStop(0, 'rgba(201, 162, 39, 0.28)')
  rg.addColorStop(0.6, 'rgba(10, 24, 69, 0)')
  rg.addColorStop(1, 'rgba(2, 6, 22, 0.4)')
  ctx.fillStyle = rg
  ctx.fillRect(0, 0, W, H)

  // Thick gold outer frame
  ctx.strokeStyle = '#c9a227'
  ctx.lineWidth = 14
  ctx.strokeRect(70, 70, W - 140, H - 140)

  // Inner thin frame
  ctx.strokeStyle = '#c9a227'
  ctx.lineWidth = 3
  ctx.strokeRect(100, 100, W - 200, H - 200)

  // Thick gold corner accents
  ctx.strokeStyle = '#f0d97a'
  ctx.lineWidth = 12
  const corner = 100
  ;[
    [70, 70, 1, 1],
    [W - 70, 70, -1, 1],
    [70, H - 70, 1, -1],
    [W - 70, H - 70, -1, -1],
  ].forEach(([x, y, sx, sy]) => {
    ctx.beginPath()
    ctx.moveTo(x, y + sy * corner)
    ctx.lineTo(x, y)
    ctx.lineTo(x + sx * corner, y)
    ctx.stroke()
  })

  // Kicker — top
  ctx.fillStyle = '#f0d97a'
  ctx.font = '600 52px "Oswald", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('PRINT · BRAND · BEYOND', W / 2, 240)

  // Gold bar under kicker
  ctx.fillStyle = '#c9a227'
  ctx.fillRect(W / 2 - 160, 300, 320, 5)

  // BIG Bebas-style title
  ctx.fillStyle = '#ffffff'
  ctx.font = '400 280px "Bebas Neue", "Anton", sans-serif'
  ctx.fillText('AL FALAH', W / 2, 620)

  // Gold divider
  ctx.fillStyle = '#c9a227'
  ctx.fillRect(W / 2 - 220, 780, 440, 5)

  // Subtitle — also Bebas Neue but smaller
  ctx.fillStyle = '#f0d97a'
  ctx.font = '400 140px "Bebas Neue", "Anton", sans-serif'
  ctx.fillText('MIDDLE EAST', W / 2, 890)

  // Tagline italic
  ctx.fillStyle = 'rgba(255, 255, 255, 0.78)'
  ctx.font = '400 italic 40px "Oswald", sans-serif'
  ctx.fillText('The story behind every brand', W / 2, 1000)

  // Bottom diamond ornament
  ctx.fillStyle = '#c9a227'
  ctx.save()
  ctx.translate(W / 2, 1180)
  ctx.rotate(Math.PI / 4)
  ctx.fillRect(-22, -22, 44, 44)
  ctx.restore()

  // Estd text (no numbers)
  ctx.fillStyle = '#f0d97a'
  ctx.font = '400 64px "Bebas Neue", "Anton", sans-serif'
  ctx.fillText('DUBAI  ·  UAE', W / 2, 1285)

  const tex = track(new THREE.CanvasTexture(c))
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 16
  return tex
}

// Draw an image fitted ("contain") inside a box, with an optional white card
// background, drop shadow and thin navy border. Used for the hero and thumbs.
function drawImageInBox(ctx, img, x, y, boxW, boxH, opts = {}) {
  const { card = true, padding = 0.06, shadow = true, border = true } = opts
  if (card) {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(x, y, boxW, boxH)
  }
  if (img && img.complete && img.naturalWidth > 0) {
    const aspect = img.naturalWidth / img.naturalHeight
    const innerW = boxW * (1 - padding * 2)
    const innerH = boxH * (1 - padding * 2)
    let dw = innerW
    let dh = dw / aspect
    if (dh > innerH) {
      dh = innerH
      dw = dh * aspect
    }
    const dx = x + (boxW - dw) / 2
    const dy = y + (boxH - dh) / 2
    ctx.save()
    if (shadow) {
      ctx.shadowColor = 'rgba(0,0,0,0.22)'
      ctx.shadowBlur = 26
      ctx.shadowOffsetY = 10
    }
    ctx.drawImage(img, dx, dy, dw, dh)
    ctx.restore()
  }
  if (border) {
    ctx.strokeStyle = 'rgba(10, 24, 69, 0.16)'
    ctx.lineWidth = 2
    ctx.strokeRect(x + 0.5, y + 0.5, boxW - 1, boxH - 1)
  }
}

// Generate a magazine-style page canvas: header bar, big chapter number,
// a hero product photo and a strip of three thumbnails. The HTML overlay
// still handles the readable title + description; this is the printed art.
function makePageTexture(story, heroImg, thumbImgs) {
  const w = 1024
  const h = 1440
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')

  // Cream paper background
  ctx.fillStyle = '#f8f3e8'
  ctx.fillRect(0, 0, w, h)

  // Subtle paper grain
  ctx.fillStyle = 'rgba(10, 24, 69, 0.025)'
  for (let i = 0; i < 900; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1)
  }

  // Top navy header bar
  ctx.fillStyle = '#0a1845'
  ctx.fillRect(0, 0, w, 140)
  ctx.fillStyle = '#f0d97a'
  ctx.font = '400 60px "Bebas Neue", "Anton", sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText('AL FALAH', 80, 70)
  ctx.textAlign = 'right'
  ctx.font = '400 46px "Bebas Neue", "Anton", sans-serif'
  ctx.fillText(story.label.toUpperCase(), w - 80, 70)
  // Gold strip under header
  ctx.fillStyle = '#c9a227'
  ctx.fillRect(0, 140, w, 6)

  // Giant ghosted chapter number in the corner
  if (story.chapter) {
    ctx.save()
    ctx.fillStyle = 'rgba(10, 24, 69, 0.07)'
    ctx.font = '400 520px "Bebas Neue", "Anton", sans-serif'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'top'
    ctx.fillText(story.chapter, w - 50, 160)
    ctx.restore()
  }

  // Hero image — large, fills the upper region
  const heroX = 80
  const heroY = 200
  const heroW = w - 160
  const heroH = 720
  drawImageInBox(ctx, heroImg, heroX, heroY, heroW, heroH)

  // Section label above thumb strip
  ctx.fillStyle = '#0a1845'
  ctx.font = '600 30px "Oswald", sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillText('FROM THE COLLECTION', 80, 985)
  ctx.fillStyle = '#c9a227'
  ctx.fillRect(80, 1000, 110, 4)

  // Thumbnail strip (3 cards)
  const thumbY = 1030
  const thumbH = 240
  const thumbGap = 22
  const thumbW = (w - 160 - thumbGap * 2) / 3
  for (let i = 0; i < 3; i++) {
    const tx = 80 + i * (thumbW + thumbGap)
    drawImageInBox(ctx, thumbImgs && thumbImgs[i], tx, thumbY, thumbW, thumbH)
  }

  // Bottom footer bar — brand strip
  ctx.fillStyle = '#c9a227'
  ctx.fillRect(0, h - 126, w, 6)
  ctx.fillStyle = '#0a1845'
  ctx.fillRect(0, h - 120, w, 120)
  ctx.fillStyle = '#f0d97a'
  ctx.font = '400 48px "Bebas Neue", "Anton", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('PRINT  ·  BRAND  ·  BEYOND', w / 2, h - 60)

  const tex = track(new THREE.CanvasTexture(c))
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 16
  return tex
}

// A simple back-of-page texture (cream with subtle ornament)
function makeBackPageTexture() {
  const w = 1024
  const h = 1440
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#f5f0e3'
  ctx.fillRect(0, 0, w, h)
  // subtle texture
  ctx.fillStyle = 'rgba(201,162,39,0.06)'
  for (let i = 0; i < 200; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2)
  }
  const tex = track(new THREE.CanvasTexture(c))
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

// =============================================================
// Build the 3D book — stacked along Z axis, pages hinge at left edge (spine)
// =============================================================
function buildBook(pageTextures, coverTex, backPageTex) {
  const g = new THREE.Group()

  const W = 2.6   // cover width (left-right)
  const H = 3.2   // cover height (top-bottom)
  const coverD = 0.06
  const pageD = 0.008

  const edgeMat = track(
    new THREE.MeshPhysicalMaterial({ color: 0xece4d0, metalness: 0, roughness: 0.75 })
  )
  const coverEdgeMat = track(
    new THREE.MeshPhysicalMaterial({ color: 0x0a1230, metalness: 0.35, roughness: 0.4 })
  )
  const coverFrontMat = track(
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.55,
      clearcoat: 0.4,
      map: coverTex,
    })
  )
  const coverInsideMat = track(
    new THREE.MeshPhysicalMaterial({
      color: 0x0a1845,
      metalness: 0.3,
      roughness: 0.4,
      clearcoat: 0.5,
    })
  )

  const NUM_PAGES = 8

  // Z layout: back cover behind, pages in the middle, top cover in front.
  const backCoverZ = -(NUM_PAGES * pageD) / 2 - coverD / 2 - 0.004
  const topCoverZ = (NUM_PAGES * pageD) / 2 + coverD / 2 + 0.004

  // Back cover — not hinged (never moves)
  const bottomGeo = track(new THREE.BoxGeometry(W, H, coverD))
  bookBottomCover = new THREE.Mesh(bottomGeo, [
    coverEdgeMat, coverEdgeMat, coverEdgeMat, coverEdgeMat,
    coverInsideMat, // +Z: inside of back cover (visible when all pages lifted)
    coverFrontMat,  // -Z: back of book (outside)
  ])
  bookBottomCover.position.z = backCoverZ
  g.add(bookBottomCover)

  // Pages — stacked along Z between the covers, each hinged at spine (x = -W/2)
  const pageGeo = track(new THREE.BoxGeometry(W, H, pageD))
  for (let i = 0; i < NUM_PAGES; i++) {
    const hinge = new THREE.Group()
    hinge.position.x = -W / 2
    // Stack pages so page 0 (brochure) is at the TOP of the stack — the first
    // page revealed when the front cover opens. Pages i=1..N-1 are stacked below.
    hinge.position.z = (NUM_PAGES * pageD) / 2 - (i + 0.5) * pageD

    const pageFrontMat = track(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.75,
        clearcoat: 0.2,
        map: pageTextures[i],
      })
    )
    const pageBackMat = track(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.75,
        map: backPageTex,
      })
    )
    const mats = [
      edgeMat, edgeMat, edgeMat, edgeMat,
      pageFrontMat, // +Z: front of page (visible when looking at open spread)
      pageBackMat,  // -Z: back of page (visible when the previous page is flipped over)
    ]
    const pageMesh = new THREE.Mesh(pageGeo, mats)
    pageMesh.position.x = W / 2
    hinge.add(pageMesh)
    g.add(hinge)
    bookPages.push(hinge)
  }

  // Top (front) cover — hinged at left edge (spine)
  bookTopCoverGroup = new THREE.Group()
  bookTopCoverGroup.position.x = -W / 2
  bookTopCoverGroup.position.z = topCoverZ
  const topCoverGeo = track(new THREE.BoxGeometry(W, H, coverD))
  const topMats = [
    coverEdgeMat, coverEdgeMat, coverEdgeMat, coverEdgeMat,
    coverFrontMat,  // +Z: outside front (visible when closed)
    coverInsideMat, // -Z: inside of front cover
  ]
  const topCoverMesh = new THREE.Mesh(topCoverGeo, topMats)
  topCoverMesh.position.x = W / 2
  bookTopCoverGroup.add(topCoverMesh)
  g.add(bookTopCoverGroup)

  return g
}

// =============================================================
// Particles
// =============================================================
function buildParticles(count = 600) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const c1 = new THREE.Color(0xc9a227)
  const c2 = new THREE.Color(0xffeaa0)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    const c = Math.random() > 0.5 ? c1 : c2
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }
  const geo = track(new THREE.BufferGeometry())
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const mat = track(
    new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
  )
  return new THREE.Points(geo, mat)
}

// =============================================================
// Load product images as HTMLImageElement (not THREE.TextureLoader —
// we draw them onto a CanvasTexture with layout text)
// =============================================================
function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

// =============================================================
// Responsive layout — position the book and camera based on viewport.
// Two targets: closedX (book on the right, hero text on the left) and
// openX (book centred, text lives as a bottom card).
// Called on init and on every resize.
// =============================================================
const layout = {
  closedX: 1.6,
  openX: 0,
  closedY: 0,
  openY: 0.6,
  closedScale: 1,
  openScale: 0.65,
}

function applyResponsiveLayout() {
  if (!book || !camera) return
  const w = window.innerWidth
  const h = window.innerHeight
  const aspect = w / h
  const isMobile = w < 900
  const isNarrow = w < 1300

  // NOTE: The book's spine (hinge) sits at local x = -W/2, so when we want
  // the OPEN spread to be visually centered on the camera's lookAt.x, we
  // must set book.x = lookAt.x + W/2 * scale. (If we set openX = lookAt.x
  // the flipped cover extends leftward and the spread lands left-of-center.)
  // W (cover width) in buildBook = 2.6, so half-width = 1.3.
  const HALF_W = 1.3
  if (isMobile) {
    layout.openScale = 0.6
    layout.closedScale = 0.95
    layout.closedX = 0
    layout.openX = 0 + HALF_W * layout.openScale
    layout.closedY = 0.2
    layout.openY = 0.25
    camera.position.set(0, 0.4, 7.8)
    camera.lookAt(0, 0.1, 0)
  } else if (isNarrow) {
    layout.openScale = 0.78
    layout.closedScale = 1
    layout.closedX = 1.2
    layout.openX = 0.5 + HALF_W * layout.openScale
    layout.closedY = 0
    layout.openY = 0.2
    camera.position.set(0.3, 0.8, 6.4)
    camera.lookAt(0.5, 0.2, 0)
  } else {
    layout.openScale = 0.82
    layout.closedScale = 1
    layout.closedX = 1.5
    layout.openX = 0.6 + HALF_W * layout.openScale
    layout.closedY = 0
    layout.openY = 0.2
    camera.position.set(0.4, 0.8, 6.2)
    camera.lookAt(0.6, 0.2, 0)
  }
  // Snap book to whichever state is currently active so a resize
  // while mid-chapter doesn't jerk the book.
  const isOpen = activeIndex.value > 0
  book.position.set(
    isOpen ? layout.openX : layout.closedX,
    isOpen ? layout.openY : layout.closedY,
    0
  )
  const s = isOpen ? layout.openScale : layout.closedScale
  book.scale.set(s, s, s)
  camera.aspect = aspect
  camera.updateProjectionMatrix()
}

// =============================================================
// Initialise scene
// =============================================================
async function initScene() {
  renderer = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.outputColorSpace = THREE.SRGBColorSpace

  scene = new THREE.Scene()

  // PMREM environment for real PBR reflections
  pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileEquirectangularShader()
  envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = envTex

  camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  )
  camera.position.set(0.6, 0.8, 5.8)
  camera.lookAt(0.8, 0, 0)

  // Lights — soft, studio-style
  scene.add(new THREE.AmbientLight(0xffffff, 0.25))
  scene.add(new THREE.HemisphereLight(0xffe5b4, 0x080c18, 0.45))

  const key = new THREE.DirectionalLight(0xffffff, 0.6)
  key.position.set(3, 6, 5)
  scene.add(key)

  const rim = new THREE.DirectionalLight(0xc9a227, 0.6)
  rim.position.set(-4, 2, -3)
  scene.add(rim)

  const fill = new THREE.DirectionalLight(0x7aa9ff, 0.25)
  fill.position.set(4, -2, 3)
  scene.add(fill)

  // Wait for Google Fonts to be loaded before drawing canvas textures,
  // otherwise canvas falls back to the default font and the look changes.
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.load('400 200px "Bebas Neue"')
      await document.fonts.load('600 36px "Oswald"')
      await document.fonts.ready
    } catch (e) {
      // ignore — canvas will fall back to sans-serif
    }
  }

  // Load all product images (hero + thumbs across all chapters), de-duplicated.
  const allSrcs = new Set()
  for (const s of stories) {
    if (s.hero) allSrcs.add(s.hero)
    for (const t of s.thumbs || []) allSrcs.add(t)
  }
  const srcList = Array.from(allSrcs)
  const loaded = await Promise.all(srcList.map((src) => loadImage(src)))
  const imageMap = {}
  srcList.forEach((src, i) => (imageMap[src] = loaded[i]))

  // Skip index 0 (intro) — the COVER is the intro. Pages are stories[1..N-1].
  const pageTextures = []
  for (let i = 1; i < stories.length; i++) {
    const s = stories[i]
    const heroImg = imageMap[s.hero]
    const thumbImgs = (s.thumbs || []).map((t) => imageMap[t])
    pageTextures.push(makePageTexture(s, heroImg, thumbImgs))
  }
  const coverTex = makeCoverTexture()
  const backPageTex = makeBackPageTexture()

  // Build book — initial position set by applyResponsiveLayout
  book = buildBook(pageTextures, coverTex, backPageTex)
  book.rotation.y = -0.3
  book.rotation.x = -0.12
  scene.add(book)

  applyResponsiveLayout()

  // Particles
  particles = buildParticles()
  scene.add(particles)
}

// =============================================================
// Tick loop
// =============================================================
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05)
  const t = clock.elapsedTime

  // (No idle float — book position is controlled by applyResponsiveLayout only)
  if (particles) {
    particles.rotation.y += dt * 0.03
    particles.rotation.x += dt * 0.01
  }

  renderer.render(scene, camera)
  rafId = requestAnimationFrame(tick)
}

// =============================================================
// Scroll animations
// =============================================================
function setupScrollAnimations() {
  const N = stories.length

  // Chapter text fade via activeIndex (CSS handles opacity)
  stories.forEach((s, i) => {
    const segStart = i / N
    const segEnd = (i + 1) / N
    triggers.push(
      ScrollTrigger.create({
        trigger: sectionEl.value,
        start: `${segStart * 100}% top`,
        end: `${segEnd * 100}% top`,
        onEnter: () => (activeIndex.value = i),
        onEnterBack: () => (activeIndex.value = i),
      })
    )
  })

  // Progress bar
  if (progressEl.value) {
    gsap.to(progressEl.value, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionEl.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })
  }

  // Master timeline — drives the book through the story.
  // `invalidateOnRefresh` makes GSAP re-evaluate function-based values
  // on each ScrollTrigger.refresh() so resize picks up the new layout.closedX/openX.
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      invalidateOnRefresh: true,
    },
  })

  // Timeline total = N segments
  const seg = 100 / N

  const FLIP = -Math.PI * 0.94
  const flipEase = 'power2.inOut'

  // ---------- Ch 0: Intro — book closed, slow tilt ----------
  tl.to(book.rotation, { y: 0.1, x: -0.08, duration: seg, ease: 'sine.inOut' }, 0)
  tl.set(book.position, { x: () => layout.closedX, y: () => layout.closedY }, 0)
  tl.set(book.scale, { x: () => layout.closedScale, y: () => layout.closedScale, z: () => layout.closedScale }, 0)

  // ---------- Ch 1: Brochure — front cover opens, book slides to centre ----------
  const c1 = seg * 1
  tl.to(bookTopCoverGroup.rotation, { y: FLIP, duration: seg * 0.88, ease: flipEase }, c1)
  tl.to(book.rotation, { y: -0.12, x: -0.16, duration: seg, ease: 'sine.inOut' }, c1)
  tl.to(
    book.position,
    {
      x: () => layout.openX,
      y: () => layout.openY,
      duration: seg * 0.7,
      ease: 'power2.inOut',
    },
    c1
  )
  tl.to(
    book.scale,
    {
      x: () => layout.openScale,
      y: () => layout.openScale,
      z: () => layout.openScale,
      duration: seg * 0.7,
      ease: 'power2.inOut',
    },
    c1
  )

  // ---------- Chapters 2..(N-1): each flips bookPages[i-2] ----------
  // Slight rotation tilts per chapter for variety as you scroll.
  const tilts = [
    { y: -0.22, x: -0.2 },  // ch 2 — Labels
    { y: -0.1,  x: -0.18 }, // ch 3 — Banners
    { y:  0.04, x: -0.18 }, // ch 4 — Packaging
    { y: -0.18, x: -0.16 }, // ch 5 — Cards
    { y: -0.04, x: -0.2  }, // ch 6 — Signage
    { y:  0.08, x: -0.18 }, // ch 7 — Apparel
    { y: -0.12, x: -0.12 }, // ch 8 — Outro
  ]
  for (let i = 2; i < N; i++) {
    const ci = seg * i
    const pageIdx = i - 2
    if (bookPages[pageIdx]) {
      tl.to(bookPages[pageIdx].rotation, { y: FLIP, duration: seg * 0.88, ease: flipEase }, ci)
    }
    const tilt = tilts[i - 2] || { y: -0.1, x: -0.16 }
    tl.to(book.rotation, { y: tilt.y, x: tilt.x, duration: seg, ease: 'sine.inOut' }, ci)
  }

  // Background glow shift per chapter — one entry per story
  const palettes = [
    { a: '#0a1230', b: '#c9a227' }, // intro
    { a: '#0a1d4a', b: '#c9a227' }, // brochures
    { a: '#2a1a0b', b: '#e8c857' }, // labels
    { a: '#0a2a3a', b: '#c9a227' }, // banners
    { a: '#1f0a1a', b: '#c9a227' }, // packaging
    { a: '#1a1408', b: '#f0d97a' }, // cards
    { a: '#240a2a', b: '#c9a227' }, // signage
    { a: '#0a2218', b: '#e8c857' }, // apparel
    { a: '#0a1230', b: '#f0d97a' }, // outro
  ]
  stories.forEach((s, i) => {
    const segStart = i / N
    gsap.to(glowEl.value, {
      '--glow-a': palettes[i].a,
      '--glow-b': palettes[i].b,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionEl.value,
        start: `${segStart * 100}% top`,
        end: `${(segStart + 1 / N) * 100}% top`,
        scrub: 0.6,
      },
    })
  })
}

// =============================================================
// Lifecycle
// =============================================================
onMounted(async () => {
  await nextTick()
  await initScene()
  setupScrollAnimations()
  clock.start()
  tick()

  resizeHandler = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    applyResponsiveLayout()
    ScrollTrigger.refresh()
  }
  window.addEventListener('resize', resizeHandler)
  setTimeout(() => ScrollTrigger.refresh(), 300)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  triggers.forEach((t) => t.kill())
  ScrollTrigger.getAll().forEach((t) => t.kill())
  if (pmrem) pmrem.dispose()
  if (envTex) envTex.dispose()
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss?.()
  }
  disposables.forEach((d) => {
    if (d && typeof d.dispose === 'function') d.dispose()
  })
  disposables.length = 0
})
</script>

<style scoped>
.story {
  position: relative;
  width: 100%;
  height: 900vh;
  background: #04080f;
  color: #f3f4f6;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  isolation: isolate;
}

.story-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.story-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.bg-glow {
  position: absolute;
  inset: 0;
  z-index: 1;
  --glow-a: #050810;
  --glow-b: #0a1230;
  /* Subtle radial haze at bottom only — no bright left-side blob. */
  background:
    radial-gradient(
      ellipse 70% 60% at 50% 120%,
      rgba(201, 162, 39, 0.08) 0%,
      transparent 60%
    ),
    #04080f;
  transition: background 0.2s linear;
}

.bg-vignette {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.5) 100%);
  mix-blend-mode: multiply;
}

/* Chapter text */
.story-text {
  position: absolute;
  top: 50%;
  left: 7vw;
  right: auto;
  transform: translateY(-50%);
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1),
    top 0.8s cubic-bezier(0.65, 0, 0.35, 1),
    left 0.8s cubic-bezier(0.65, 0, 0.35, 1),
    transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
  visibility: hidden;
}
.story-text.active {
  opacity: 1;
  visibility: visible;
}
.story-text-inner {
  max-width: 460px;
  pointer-events: auto;
}

/* When the book opens (chapter 1+), the text sits on the LEFT page of the
   open spread. The spine is at viewport center (50%), so the card is
   right-anchored just left of center and extends leftward into the left
   page area. It reads like magazine copy printed on the page. */
.story-stage.is-open .story-text {
  top: 50%;
  left: 50%;
  right: auto;
  transform: translate(calc(-100% - 24px), -50%);
  width: min(360px, 26vw);
}
.story-stage.is-open .story-text-inner {
  max-width: 100%;
  padding: 26px 28px 28px;
  background: linear-gradient(
    160deg,
    rgba(4, 8, 15, 0.78) 0%,
    rgba(4, 8, 15, 0.58) 100%
  );
  border: 1px solid rgba(201, 162, 39, 0.22);
  border-radius: 16px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}
.story-stage.is-open .story-kicker {
  font-size: 11px;
  padding: 7px 14px;
  margin-bottom: 18px;
}
.story-stage.is-open .story-title {
  font-size: clamp(32px, 3.6vw, 52px);
  margin-bottom: 16px;
}
.story-stage.is-open .story-desc {
  font-size: 13.5px;
  line-height: 1.7;
  margin-bottom: 22px;
}
.story-stage.is-open .story-cta {
  gap: 10px;
}
.story-stage.is-open .btn-gold,
.story-stage.is-open .btn-ghost {
  padding: 13px 22px;
  font-size: 11px;
}

/* Subtle vertical scrim on the left so the text card sits cleanly against
   the book, no matter which page is currently showing. */
.story-stage.is-open::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50vw;
  z-index: 4;
  background: linear-gradient(
    90deg,
    rgba(4, 8, 15, 0.5) 0%,
    rgba(4, 8, 15, 0.12) 55%,
    rgba(4, 8, 15, 0) 100%
  );
  pointer-events: none;
}
.story-text-inner > * {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}
.story-text.active .story-text-inner > * {
  opacity: 1;
  transform: translateY(0);
}
.story-text.active .story-kicker { transition-delay: 0.15s; }
.story-text.active .story-title  { transition-delay: 0.25s; }
.story-text.active .story-desc   { transition-delay: 0.38s; }
.story-text.active .story-cta    { transition-delay: 0.48s; }

.story-kicker {
  display: inline-block;
  font-family: 'Oswald', 'Bebas Neue', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #c9a227;
  padding: 9px 20px;
  border: 1px solid rgba(201, 162, 39, 0.5);
  border-radius: 100px;
  margin-bottom: 28px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(201, 162, 39, 0.08);
}

.story-title {
  font-family: 'Bebas Neue', 'Anton', sans-serif;
  font-size: clamp(58px, 8vw, 132px);
  font-weight: 400;
  line-height: 0.95;
  margin: 0 0 28px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-transform: uppercase;
}
.story-title :deep(em) {
  font-style: normal;
  font-weight: 400;
  background: linear-gradient(120deg, #c9a227 0%, #f0d97a 45%, #c9a227 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.story-desc {
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 30px;
  max-width: 460px;
  font-weight: 300;
}
.story-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.btn-gold,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 17px 32px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
}
.btn-gold {
  background: linear-gradient(120deg, #c9a227, #e8c857);
  color: #04080f;
  border: 1px solid transparent;
  box-shadow: 0 10px 40px rgba(201, 162, 39, 0.35);
}
.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 52px rgba(201, 162, 39, 0.55);
}
.btn-gold .arrow {
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}
.btn-gold:hover .arrow { transform: translateX(4px); }
.btn-ghost {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(6px);
}
.btn-ghost:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

/* Progress bar */
.story-progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 10;
}
.story-progress-fill {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #c9a227, #f0d97a);
  transform: scaleX(0);
  transform-origin: left center;
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.75);
  will-change: transform;
}

/* Dots */
.story-dots {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.story-dots li {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-end;
}
.story-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.55);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  display: block;
}
.story-dots .dot-label {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.story-dots li.active .dot {
  background: #c9a227;
  border-color: #c9a227;
  transform: scale(1.5);
  box-shadow: 0 0 18px rgba(201, 162, 39, 0.9);
}
.story-dots li.active .dot-label {
  opacity: 1;
  transform: translateX(0);
  color: #ffffff;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  transition: opacity 0.6s ease;
}
.scroll-hint.hidden {
  opacity: 0;
  pointer-events: none;
}
.scroll-hint .scroll-bar {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, #c9a227, transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%   { transform: scaleY(0); transform-origin: top; }
  45%  { transform: scaleY(1); transform-origin: top; }
  55%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* Responsive */
@media (max-width: 960px) {
  .story-text {
    top: auto;
    bottom: 18vh;
    transform: none;
    left: 24px;
    right: 24px;
  }
  .story-text-inner {
    max-width: 100%;
    background: linear-gradient(180deg, rgba(4, 8, 15, 0), rgba(4, 8, 15, 0.6) 30%, rgba(4, 8, 15, 0.85));
    padding: 22px 22px 26px;
    border-radius: 14px;
    backdrop-filter: blur(8px);
  }
  .story-title { font-size: clamp(32px, 8.5vw, 48px); }
  .story-desc { font-size: 14px; }
  .story-dots { right: 14px; gap: 16px; }
  .story-dots .dot-label { display: none; }
  .scroll-hint { bottom: 28px; }
}

@media (max-width: 480px) {
  .story-text-inner {
    padding: 18px 16px 22px;
  }
  .story-title { font-size: clamp(28px, 8vw, 40px); }
  .story-desc { font-size: 13px; margin-bottom: 20px; }
  .story-kicker { font-size: 11px; padding: 7px 14px; margin-bottom: 18px; }
  .btn-gold,
  .btn-ghost {
    padding: 12px 18px;
    font-size: 10px;
  }
  .story-dots { display: none; }
  .scroll-hint { display: none; }
}
</style>
