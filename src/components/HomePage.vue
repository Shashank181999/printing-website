<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <div ref="heroTextRef" class="hero-text">
            <span class="hero-badge">Premium Printing Services</span>
            <h1>
              <span class="line">Transform Your</span>
              <span class="line highlight">Ideas Into Print</span>
            </h1>
            <p>We bring your vision to life with state-of-the-art printing technology. From business cards to large format banners, we deliver exceptional quality.</p>
            <div class="hero-buttons">
              <button class="btn-primary">Explore Services</button>
              <button class="btn-secondary">
                <span class="play-icon">▶</span>
                Watch Video
              </button>
            </div>
          </div>

          <div ref="heroImageRef" class="hero-image">
            <div class="image-container">
              <div class="floating-card card-1">
                <span class="card-icon">🎨</span>
                <span>Custom Design</span>
              </div>
              <div class="floating-card card-2">
                <span class="card-icon">⚡</span>
                <span>Fast Delivery</span>
              </div>
              <div class="floating-card card-3">
                <span class="card-icon">✨</span>
                <span>Premium Quality</span>
              </div>
              <div class="main-visual">
                <div class="printer-graphic">
                  <div class="printer-body"></div>
                  <div class="paper"></div>
                  <div class="paper paper-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref="scrollIndicatorRef" class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="marquee-section">
      <div class="marquee-wrapper">
        <div ref="marqueeRef" class="marquee-track">
          <div class="marquee-content">
            <span class="marquee-item">Business Cards</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Flyers & Brochures</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Large Format Printing</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Custom Packaging</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">T-Shirt Printing</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Stickers & Labels</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Banners & Signs</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Photo Prints</span>
            <span class="marquee-dot">●</span>
          </div>
          <div class="marquee-content">
            <span class="marquee-item">Business Cards</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Flyers & Brochures</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Large Format Printing</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Custom Packaging</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">T-Shirt Printing</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Stickers & Labels</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Banners & Signs</span>
            <span class="marquee-dot">●</span>
            <span class="marquee-item">Photo Prints</span>
            <span class="marquee-dot">●</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section ref="servicesRef" class="services">
      <!-- Curtain Animation Overlay -->
      <div class="curtain-overlay" ref="blindsRef">
        <div class="curtain-left"></div>
        <div class="curtain-right"></div>
      </div>

      <div class="container">
        <div class="section-header">
          <span class="section-badge">What We Offer</span>
          <h2>Our Printing Services</h2>
          <p>Professional printing solutions for all your needs</p>
        </div>

        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a href="#" class="service-link">Learn More →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section ref="statsRef" class="stats">
      <div class="container">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section ref="productsRef" class="products">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Products</span>
          <h2>Popular Print Products</h2>
          <p>High-quality prints for every occasion</p>
        </div>

        <div class="products-grid">
          <div v-for="(product, index) in products" :key="index" class="product-card">
            <div class="product-image" :style="{ background: product.color }">
              <span class="product-emoji">{{ product.emoji }}</span>
            </div>
            <div class="product-info">
              <h4>{{ product.name }}</h4>
              <p>Starting at <span class="price">{{ product.price }}</span></p>
              <button class="btn-outline">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Preview Section - Billboard -->
    <section ref="designPreviewRef" class="design-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Live Preview</span>
          <h2>See Your Billboard Come to Life</h2>
          <p>Upload your design and customize text to preview your roadside banner</p>
        </div>

        <div class="billboard-preview">
          <!-- Billboard Scene -->
          <div class="billboard-scene">
            <!-- Sky -->
            <div class="sky">
              <div class="cloud cloud-1"></div>
              <div class="cloud cloud-2"></div>
              <div class="cloud cloud-3"></div>
            </div>

            <!-- Billboard Structure -->
            <div class="billboard-structure">
              <div class="billboard-frame">
                <div class="billboard-inner">
                  <!-- Background Image -->
                  <div class="billboard-bg" :style="uploadedImage ? { backgroundImage: `url(${uploadedImage})` } : {}">
                    <div v-if="!uploadedImage" class="billboard-placeholder">
                      <span>Upload Your Design</span>
                    </div>
                  </div>

                  <!-- Cover Boxes - to hide existing text -->
                  <div
                    v-for="(box, index) in coverBoxes"
                    :key="'box-' + index"
                    class="cover-box"
                    :class="{ active: selectedElement === 'box-' + index }"
                    :style="{
                      left: box.x + 'px',
                      top: box.y + 'px',
                      width: box.width + 'px',
                      height: box.height + 'px',
                      backgroundColor: box.color
                    }"
                    @mousedown="startDrag($event, 'box-' + index, box)"
                    @click="selectElement('box-' + index)"
                  >
                    <div class="resize-handle" @mousedown.stop="startResize($event, box)"></div>
                    <button class="delete-btn" @click.stop="deleteBox(index)">×</button>
                  </div>

                  <!-- Draggable Text Elements -->
                  <div
                    class="draggable-text headline"
                    :class="{ active: selectedElement === 'headline' }"
                    :style="{
                      left: textSettings.headlineX + 'px',
                      top: textSettings.headlineY + 'px',
                      color: textSettings.headlineColor,
                      fontSize: textSettings.headlineSize + 'px',
                      backgroundColor: textSettings.headlineBg,
                      textShadow: textSettings.textShadow ? '2px 2px 8px rgba(0,0,0,0.8)' : 'none'
                    }"
                    @mousedown="startDrag($event, 'headline', textSettings)"
                    @click="selectElement('headline')"
                  >
                    <span
                      contenteditable="true"
                      @input="updateHeadline"
                      @mousedown.stop
                      v-text="textSettings.headline"
                    ></span>
                  </div>

                  <div
                    class="draggable-text subtext"
                    :class="{ active: selectedElement === 'subtext' }"
                    :style="{
                      left: textSettings.subtextX + 'px',
                      top: textSettings.subtextY + 'px',
                      color: textSettings.subtextColor,
                      fontSize: textSettings.subtextSize + 'px',
                      backgroundColor: textSettings.subtextBg,
                      textShadow: textSettings.textShadow ? '1px 1px 4px rgba(0,0,0,0.8)' : 'none'
                    }"
                    @mousedown="startDrag($event, 'subtext', textSettings)"
                    @click="selectElement('subtext')"
                  >
                    <span
                      contenteditable="true"
                      @input="updateSubtext"
                      @mousedown.stop
                      v-text="textSettings.subtext"
                    ></span>
                  </div>

                  <div
                    class="draggable-text cta-text"
                    :class="{ active: selectedElement === 'cta' }"
                    :style="{
                      left: textSettings.ctaX + 'px',
                      top: textSettings.ctaY + 'px',
                      backgroundColor: textSettings.ctaBgColor,
                      color: textSettings.ctaTextColor,
                      fontSize: textSettings.ctaSize + 'px'
                    }"
                    @mousedown="startDrag($event, 'cta', textSettings)"
                    @click="selectElement('cta')"
                  >
                    <span
                      contenteditable="true"
                      @input="updateCta"
                      @mousedown.stop
                      v-text="textSettings.cta"
                    ></span>
                  </div>
                </div>
                <div class="billboard-border"></div>
              </div>

              <!-- Billboard Poles -->
              <div class="billboard-poles">
                <div class="pole pole-left"></div>
                <div class="pole pole-right"></div>
              </div>
            </div>

            <!-- Ground / Road -->
            <div class="ground">
              <div class="road">
                <div class="road-line"></div>
                <div class="road-line"></div>
                <div class="road-line"></div>
              </div>
              <div class="grass grass-left"></div>
              <div class="grass grass-right"></div>
            </div>
          </div>

          <!-- Controls Panel -->
          <div class="billboard-controls">
            <div class="control-section">
              <h4>Upload Design</h4>
              <div class="upload-box" @click="triggerUpload" @dragover.prevent @drop.prevent="handleDrop">
                <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" hidden />
                <span class="upload-icon">📤</span>
                <span>{{ uploadedImage ? 'Change Image' : 'Upload Image' }}</span>
              </div>
              <button v-if="uploadedImage" class="btn-small" @click="clearDesign">Remove</button>
            </div>

            <div class="control-section">
              <h4>Cover Box</h4>
              <p class="control-hint">Add boxes to cover existing text</p>
              <button class="btn-add" @click="addCoverBox">+ Add Cover Box</button>
              <div v-if="coverBoxes.length > 0" class="control-row">
                <input type="color" v-model="boxColor" class="color-picker" title="Box Color" />
                <span class="control-label">Box color</span>
              </div>
            </div>

            <div class="control-section">
              <h4>Headline</h4>
              <p class="control-hint">Drag to position on billboard</p>
              <input type="text" v-model="textSettings.headline" placeholder="Your Headline" class="text-input" />
              <div class="control-row">
                <input type="color" v-model="textSettings.headlineColor" class="color-picker" title="Text" />
                <input type="color" v-model="textSettings.headlineBg" class="color-picker" title="Background" />
                <input type="range" v-model="textSettings.headlineSize" min="16" max="60" class="size-slider" />
              </div>
            </div>

            <div class="control-section">
              <h4>Subtext</h4>
              <input type="text" v-model="textSettings.subtext" placeholder="Your subtext here" class="text-input" />
              <div class="control-row">
                <input type="color" v-model="textSettings.subtextColor" class="color-picker" title="Text" />
                <input type="color" v-model="textSettings.subtextBg" class="color-picker" title="Background" />
                <input type="range" v-model="textSettings.subtextSize" min="10" max="32" class="size-slider" />
              </div>
            </div>

            <div class="control-section">
              <h4>Call to Action</h4>
              <input type="text" v-model="textSettings.cta" placeholder="Call Now!" class="text-input" />
              <div class="control-row">
                <input type="color" v-model="textSettings.ctaBgColor" class="color-picker" title="Background" />
                <input type="color" v-model="textSettings.ctaTextColor" class="color-picker" title="Text" />
                <input type="range" v-model="textSettings.ctaSize" min="10" max="24" class="size-slider" />
              </div>
            </div>

            <div class="control-section">
              <label class="checkbox-label">
                <input type="checkbox" v-model="textSettings.textShadow" />
                <span>Text Shadow</span>
              </label>
            </div>

            <div class="control-actions">
              <button class="btn-outline" @click="resetDesign">Reset All</button>
              <button class="btn-primary">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section ref="ctaSectionRef" class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Get a free quote today and let's bring your ideas to life</p>
          <div class="cta-buttons">
            <button class="btn-primary btn-large">Get Free Quote</button>
            <button class="btn-secondary-light">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroTextRef = ref(null)
const heroImageRef = ref(null)
const scrollIndicatorRef = ref(null)
const marqueeRef = ref(null)
const servicesRef = ref(null)
const statsRef = ref(null)
const productsRef = ref(null)
const designPreviewRef = ref(null)
const ctaSectionRef = ref(null)
const blindsRef = ref(null)

// Design Preview - Billboard
const fileInput = ref(null)
const uploadedImage = ref(null)
const selectedElement = ref(null)
const coverBoxes = ref([])
const boxColor = ref('#ffffff')

const textSettings = ref({
  headline: 'Your Brand Here',
  headlineColor: '#ffffff',
  headlineBg: 'transparent',
  headlineSize: 36,
  headlineX: 150,
  headlineY: 40,
  subtext: 'Quality printing services for your business',
  subtextColor: '#ffffff',
  subtextBg: 'transparent',
  subtextSize: 14,
  subtextX: 100,
  subtextY: 90,
  cta: 'Call Now!',
  ctaBgColor: '#ff6b35',
  ctaTextColor: '#ffffff',
  ctaSize: 14,
  ctaX: 200,
  ctaY: 140,
  textShadow: true
})

// Drag functionality
let isDragging = false
let dragTarget = null
let dragData = null
let startX = 0
let startY = 0
let startPosX = 0
let startPosY = 0

const selectElement = (id) => {
  selectedElement.value = id
}

const startDrag = (e, id, data) => {
  isDragging = true
  dragTarget = id
  dragData = data
  startX = e.clientX
  startY = e.clientY

  if (id === 'headline') {
    startPosX = textSettings.value.headlineX
    startPosY = textSettings.value.headlineY
  } else if (id === 'subtext') {
    startPosX = textSettings.value.subtextX
    startPosY = textSettings.value.subtextY
  } else if (id === 'cta') {
    startPosX = textSettings.value.ctaX
    startPosY = textSettings.value.ctaY
  } else if (id.startsWith('box-')) {
    startPosX = data.x
    startPosY = data.y
  }

  selectElement(id)

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
  if (!isDragging) return

  const dx = e.clientX - startX
  const dy = e.clientY - startY

  if (dragTarget === 'headline') {
    textSettings.value.headlineX = Math.max(0, startPosX + dx)
    textSettings.value.headlineY = Math.max(0, startPosY + dy)
  } else if (dragTarget === 'subtext') {
    textSettings.value.subtextX = Math.max(0, startPosX + dx)
    textSettings.value.subtextY = Math.max(0, startPosY + dy)
  } else if (dragTarget === 'cta') {
    textSettings.value.ctaX = Math.max(0, startPosX + dx)
    textSettings.value.ctaY = Math.max(0, startPosY + dy)
  } else if (dragTarget.startsWith('box-')) {
    dragData.x = Math.max(0, startPosX + dx)
    dragData.y = Math.max(0, startPosY + dy)
  }
}

const stopDrag = () => {
  isDragging = false
  dragTarget = null
  dragData = null
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

// Resize functionality for boxes
let isResizing = false
let resizeBox = null
let resizeStartX = 0
let resizeStartY = 0
let resizeStartW = 0
let resizeStartH = 0

const startResize = (e, box) => {
  isResizing = true
  resizeBox = box
  resizeStartX = e.clientX
  resizeStartY = e.clientY
  resizeStartW = box.width
  resizeStartH = box.height

  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
}

const onResize = (e) => {
  if (!isResizing) return

  const dx = e.clientX - resizeStartX
  const dy = e.clientY - resizeStartY

  resizeBox.width = Math.max(20, resizeStartW + dx)
  resizeBox.height = Math.max(20, resizeStartH + dy)
}

const stopResize = () => {
  isResizing = false
  resizeBox = null
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
}

// Cover box functions
const addCoverBox = () => {
  coverBoxes.value.push({
    x: 50,
    y: 50,
    width: 100,
    height: 40,
    color: boxColor.value
  })
}

const deleteBox = (index) => {
  coverBoxes.value.splice(index, 1)
}

const updateHeadline = (e) => {
  textSettings.value.headline = e.target.innerText
}

const updateSubtext = (e) => {
  textSettings.value.subtext = e.target.innerText
}

const updateCta = (e) => {
  textSettings.value.cta = e.target.innerText
}

const resetDesign = () => {
  uploadedImage.value = null
  coverBoxes.value = []
  selectedElement.value = null
  textSettings.value = {
    headline: 'Your Brand Here',
    headlineColor: '#ffffff',
    headlineBg: 'transparent',
    headlineSize: 36,
    headlineX: 150,
    headlineY: 40,
    subtext: 'Quality printing services for your business',
    subtextColor: '#ffffff',
    subtextBg: 'transparent',
    subtextSize: 14,
    subtextX: 100,
    subtextY: 90,
    cta: 'Call Now!',
    ctaBgColor: '#ff6b35',
    ctaTextColor: '#ffffff',
    ctaSize: 14,
    ctaX: 200,
    ctaY: 140,
    textShadow: true
  }
  if (fileInput.value) fileInput.value.value = ''
}

const triggerUpload = () => {
  fileInput.value.click()
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const clearDesign = () => {
  uploadedImage.value = null
  fileInput.value.value = ''
}

const services = [
  { icon: '📄', title: 'Business Cards', description: 'Premium business cards that make a lasting impression with various finishes and materials.' },
  { icon: '📰', title: 'Flyers & Brochures', description: 'Eye-catching marketing materials to promote your business and events.' },
  { icon: '🎯', title: 'Banners & Signs', description: 'Large format printing for maximum visibility and impact.' },
  { icon: '📦', title: 'Packaging', description: 'Custom packaging solutions that protect and showcase your products.' },
  { icon: '👕', title: 'Apparel Printing', description: 'High-quality prints on t-shirts, hoodies, and other apparel.' },
  { icon: '🖼️', title: 'Photo Printing', description: 'Gallery-quality photo prints on premium paper and canvas.' }
]

const stats = [
  { number: '10K+', label: 'Happy Customers' },
  { number: '50M+', label: 'Prints Delivered' },
  { number: '15+', label: 'Years Experience' },
  { number: '99%', label: 'Satisfaction Rate' }
]

const products = [
  { name: 'Business Cards', price: '$19.99', emoji: '💳', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { name: 'Flyers', price: '$29.99', emoji: '📋', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { name: 'Posters', price: '$14.99', emoji: '🖼️', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { name: 'Stickers', price: '$9.99', emoji: '⭐', color: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  { name: 'Banners', price: '$49.99', emoji: '🚩', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
  { name: 'Brochures', price: '$39.99', emoji: '📖', color: 'linear-gradient(135deg, #a8edea, #fed6e3)' }
]

onMounted(() => {
  // Hero animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  heroTl.from('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5
  })
  .from('.hero-text h1 .line', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  }, '-=0.4')
  .from('.hero-text p', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.hero-buttons button', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
  }, '-=0.4')
  .from(heroImageRef.value, {
    x: 100,
    opacity: 0,
    duration: 1
  }, '-=1')
  .from('.floating-card', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  }, '-=0.5')
  .from(scrollIndicatorRef.value, {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, '-=0.3')

  // Floating animation for cards
  gsap.to('.floating-card.card-1', {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
  gsap.to('.floating-card.card-2', {
    y: -20,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    delay: 0.5
  })
  gsap.to('.floating-card.card-3', {
    y: -12,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    delay: 1
  })

  // Gradient orb animations
  gsap.to('.orb-1', {
    x: 100,
    y: -50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  gsap.to('.orb-2', {
    x: -80,
    y: 60,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  gsap.to('.orb-3', {
    x: 60,
    y: 80,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Marquee animation
  gsap.to('.marquee-track', {
    xPercent: -50,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })

  // Curtain reveal animation for services section
  const curtainTl = gsap.timeline({
    scrollTrigger: {
      trigger: servicesRef.value,
      start: 'top 75%',
      once: true
    }
  })

  curtainTl
    .to('.curtain-left', {
      xPercent: -100,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0)
    .to('.curtain-right', {
      xPercent: 100,
      duration: 1.2,
      ease: 'power3.inOut',
      onComplete: () => {
        if (blindsRef.value) {
          blindsRef.value.style.display = 'none'
        }
      }
    }, 0)

  // Services cards animate in after curtains open
  const serviceCards = document.querySelectorAll('.service-card')
  serviceCards.forEach((card, i) => {
    gsap.fromTo(card,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: servicesRef.value,
          start: 'top 75%'
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.5 + i * 0.1,
        ease: 'power3.out'
      }
    )
  })

  // Stats scroll animation
  const statItems = document.querySelectorAll('.stat-item')
  statItems.forEach((item, i) => {
    gsap.fromTo(item,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%'
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
      }
    )
  })

  // Products scroll animation
  const productCards = document.querySelectorAll('.product-card')
  productCards.forEach((card, i) => {
    gsap.fromTo(card,
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%'
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out'
      }
    )
  })

  // Billboard Preview scroll animation
  gsap.fromTo('.billboard-scene',
    { scale: 0.9, opacity: 0 },
    {
      scrollTrigger: {
        trigger: designPreviewRef.value,
        start: 'top 80%'
      },
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }
  )

  gsap.fromTo('.billboard-controls',
    { x: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: designPreviewRef.value,
        start: 'top 80%'
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    }
  )

  // CTA scroll animation
  gsap.fromTo('.cta-content',
    { y: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ctaSectionRef.value,
        start: 'top 85%'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }
  )
})
</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 100px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  top: 10%;
  right: 20%;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  bottom: 20%;
  left: 10%;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  top: 50%;
  left: 40%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  color: #ff6b35;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
}

.hero-text h1 {
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 25px;
}

.hero-text h1 .line {
  display: block;
}

.hero-text h1 .highlight {
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text p {
  font-size: 18px;
  color: #aaa;
  line-height: 1.7;
  margin-bottom: 35px;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 16px 35px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
  padding: 16px 35px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.play-icon {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.hero-image {
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  height: 500px;
}

.main-visual {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(247, 147, 30, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.printer-graphic {
  position: relative;
  width: 150px;
  height: 100px;
}

.printer-body {
  width: 150px;
  height: 80px;
  background: linear-gradient(135deg, #333, #222);
  border-radius: 10px;
  position: relative;
}

.printer-body::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 10px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  border-radius: 5px;
}

.paper {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 60px;
  background: #fff;
  border-radius: 3px;
  animation: paperSlide 3s infinite ease-in-out;
}

.paper-2 {
  animation-delay: 1.5s;
  opacity: 0.7;
}

@keyframes paperSlide {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(20px); }
}

.floating-card {
  position: absolute;
  padding: 15px 25px;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
  font-size: 24px;
}

.card-1 {
  top: 50px;
  left: 0;
}

.card-2 {
  top: 180px;
  right: 0;
}

.card-3 {
  bottom: 80px;
  left: 40px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 12px;
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid #666;
  border-radius: 15px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #666;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
}

/* Marquee Section */
.marquee-section {
  padding: 40px 0;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  overflow: hidden;
}

.marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: fit-content;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 30px;
  white-space: nowrap;
}

.marquee-item {
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.marquee-dot {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
}

/* Services Section */
.services {
  padding: 120px 0;
  background: #0d0d0d;
  position: relative;
  overflow: hidden;
}

/* Curtain Animation */
.curtain-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
}

.curtain-left,
.curtain-right {
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, var(--accent-teal) 40%, var(--bg-teal-dark) 70%, #0a0a0a 100%);
  position: relative;
}

.curtain-left {
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

.curtain-right {
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.6);
}

.curtain-left::after,
.curtain-right::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    180deg,
    transparent 0px,
    rgba(255, 255, 255, 0.03) 2px,
    transparent 4px,
    transparent 30px
  );
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 50px;
  color: #ff6b35;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 15px;
}

.section-header p {
  color: #888;
  font-size: 18px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  padding: 40px;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: all 0.4s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 107, 53, 0.3);
  box-shadow: 0 20px 50px rgba(255, 107, 53, 0.1);
}

.service-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 15px;
}

.service-card p {
  color: #888;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-link {
  color: #ff6b35;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #f7931e;
}

/* Stats Section */
.stats {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(247, 147, 30, 0.05));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 56px;
  font-weight: 500;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  color: #888;
  font-size: 16px;
  font-weight: 500;
}

/* Products Section */
.products {
  padding: 120px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.product-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-emoji {
  font-size: 64px;
}

.product-info {
  padding: 25px;
}

.product-info h4 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}

.product-info p {
  color: #888;
  font-size: 14px;
  margin-bottom: 20px;
}

.price {
  color: #ff6b35;
  font-weight: 400;
}

.btn-outline {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 107, 53, 0.5);
  border-radius: 10px;
  color: #ff6b35;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: #ff6b35;
}

/* Design Preview Section - Billboard */
.design-preview {
  padding: 120px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%);
  overflow: hidden;
}

.billboard-preview {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 50px;
  align-items: start;
}

/* Billboard Scene */
.billboard-scene {
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(180deg, #87CEEB 0%, #E0F6FF 60%, #98D8AA 60%, #7BC47F 100%);
}

.sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(180deg, #4A90D9 0%, #87CEEB 50%, #B8E4F9 100%);
}

.cloud {
  position: absolute;
  background: #fff;
  border-radius: 50px;
  opacity: 0.9;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: #fff;
  border-radius: 50%;
}

.cloud-1 {
  width: 100px;
  height: 40px;
  top: 15%;
  left: 10%;
  animation: cloudMove 20s linear infinite;
}

.cloud-1::before {
  width: 50px;
  height: 50px;
  top: -25px;
  left: 15px;
}

.cloud-1::after {
  width: 35px;
  height: 35px;
  top: -15px;
  left: 50px;
}

.cloud-2 {
  width: 80px;
  height: 30px;
  top: 25%;
  right: 20%;
  animation: cloudMove 25s linear infinite reverse;
}

.cloud-2::before {
  width: 40px;
  height: 40px;
  top: -20px;
  left: 10px;
}

.cloud-3 {
  width: 60px;
  height: 25px;
  top: 10%;
  right: 40%;
  animation: cloudMove 30s linear infinite;
}

@keyframes cloudMove {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(100px); }
}

/* Billboard Structure */
.billboard-structure {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.billboard-frame {
  position: relative;
  width: 500px;
  height: 200px;
  background: #222;
  border-radius: 5px;
  padding: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.billboard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border-radius: 3px;
  overflow: hidden;
}

.billboard-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #1a1a1a;
}

.billboard-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

/* Cover Boxes */
.cover-box {
  position: absolute;
  cursor: move;
  border: 2px dashed transparent;
  transition: border-color 0.2s;
  z-index: 5;
}

.cover-box:hover,
.cover-box.active {
  border-color: #ff6b35;
}

.cover-box .resize-handle {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  background: #ff6b35;
  border-radius: 2px;
  cursor: se-resize;
  opacity: 0;
  transition: opacity 0.2s;
}

.cover-box:hover .resize-handle,
.cover-box.active .resize-handle {
  opacity: 1;
}

.cover-box .delete-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  background: #ff4444;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.cover-box:hover .delete-btn,
.cover-box.active .delete-btn {
  opacity: 1;
}

/* Draggable Text Elements */
.draggable-text {
  position: absolute;
  cursor: move;
  padding: 6px 12px;
  border: 2px dashed transparent;
  border-radius: 4px;
  transition: border-color 0.2s, background-color 0.2s;
  z-index: 10;
  user-select: none;
}

.draggable-text:hover,
.draggable-text.active {
  border-color: rgba(255, 107, 53, 0.8);
}

.draggable-text span {
  outline: none;
  cursor: text;
  display: block;
}

.draggable-text span:focus {
  cursor: text;
}

.headline {
  font-weight: 500;
  letter-spacing: 1px;
}

.subtext {
  font-weight: 300;
}

.cta-text {
  border-radius: 50px;
  font-weight: 500;
}

.billboard-border {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 4px solid #333;
  border-radius: 8px;
  pointer-events: none;
}

/* Billboard Poles */
.billboard-poles {
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: -5px;
}

.pole {
  width: 20px;
  height: 180px;
  background: linear-gradient(90deg, #555 0%, #888 50%, #555 100%);
  border-radius: 0 0 5px 5px;
}

/* Ground */
.ground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
}

.road {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.road-line {
  width: 60px;
  height: 6px;
  background: #f0e68c;
  border-radius: 3px;
}

.grass {
  position: absolute;
  bottom: 80px;
  height: calc(100% - 80px);
  width: 100%;
  background: linear-gradient(180deg, #7BC47F 0%, #5da85f 100%);
}

/* Controls Panel */
.billboard-controls {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(10px);
}

.control-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.control-section h4 {
  font-size: 13px;
  font-weight: 400;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.control-hint {
  font-size: 11px;
  color: #555;
  margin-top: -5px;
}

.control-label {
  font-size: 12px;
  color: #666;
}

.btn-add {
  padding: 10px 15px;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  color: #ff6b35;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add:hover {
  background: rgba(255, 107, 53, 0.2);
  border-color: #ff6b35;
}

.upload-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(255, 107, 53, 0.4);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  color: #888;
}

.upload-box:hover {
  border-color: #ff6b35;
  background: rgba(255, 107, 53, 0.05);
  color: #fff;
}

.upload-box .upload-icon {
  font-size: 20px;
}

.text-input {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.text-input:focus {
  outline: none;
  border-color: #ff6b35;
  background: rgba(255, 107, 53, 0.05);
}

.control-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-picker {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 2px;
}

.color-picker::-webkit-color-swatch {
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.size-slider {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-appearance: none;
  cursor: pointer;
}

.size-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff6b35;
  cursor: pointer;
}

.size-label {
  font-size: 12px;
  color: #666;
  min-width: 40px;
  text-align: right;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #888;
  font-size: 14px;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #ff6b35;
  cursor: pointer;
}

.btn-small {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #888;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-small:hover {
  border-color: #ff6b35;
  color: #ff6b35;
}

.control-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.control-actions .btn-outline {
  flex: 1;
  width: auto;
}

.control-actions .btn-primary {
  flex: 1;
}

@media (max-width: 1024px) {
  .billboard-preview {
    grid-template-columns: 1fr;
  }

  .billboard-scene {
    height: 400px;
  }

  .billboard-frame {
    width: 90%;
    max-width: 400px;
    height: 160px;
  }

  .billboard-poles {
    gap: 150px;
  }

  .pole {
    height: 140px;
  }
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn-large {
  padding: 18px 45px;
  font-size: 18px;
  background: #fff;
  color: #ff6b35;
}

.btn-large:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.btn-secondary-light {
  padding: 18px 45px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text p {
    margin: 0 auto 35px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image {
    display: none;
  }

  .services-grid,
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .services-grid,
  .products-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .cta-content h2 {
    font-size: 32px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
