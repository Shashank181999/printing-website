<template>
  <footer ref="footerRef" class="footer">
    <!-- Raindrop Canvas Layer -->
    <canvas ref="rainCanvas" class="rain-canvas" aria-hidden="true"></canvas>

    <!-- Main Footer -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <router-link to="/" class="footer-logo">
              <img :src="logoImage" alt="Al Falah Middle East FZ LLC" class="footer-logo-image" />
            </router-link>
            <div class="brand-info">
              <h3 class="brand-name">Al Falah Middle East FZ LLC</h3>
              <p class="brand-desc">
                Your trusted partner for premium printing, creative branding, and innovative advertising solutions since 1974.
              </p>
            </div>
            <div class="social-links">
              <a href="https://facebook.com/alfalahmiddleeast" target="_blank" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/alfalahme" target="_blank" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/alfalah-me" target="_blank" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links Columns -->
          <div class="footer-links-wrapper">
            <div class="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><a href="/#services">Our Services</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Offset/Digital Printing</a></li>
                <li><a href="#">Labels Production</a></li>
                <li><a href="#">Brand Activation</a></li>
                <li><a href="#">Stand Production</a></li>
                <li><a href="#">Event Management</a></li>
                <li><a href="#">Creative & Design</a></li>
                <li><a href="#">Vehicle Graphics</a></li>
              </ul>
            </div>

            <div class="footer-column footer-contact">
              <h4>Contact Us</h4>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Phone</span>
                  <a href="tel:+971567268735">+971 56 726 8735</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Email</span>
                  <a href="mailto:info@alfalah-me.com">info@alfalah-me.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Working Hours</span>
                  <p>Mon - Fri: 09:00 - 18:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <p class="copyright">
            &copy; {{ currentYear }} Al Falah Middle East FZ LLC. All rights reserved.
          </p>
          <div class="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <button class="back-to-top" @click="scrollToTop" aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoImage from '@/assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)
const rainCanvas = ref(null)

const currentYear = computed(() => new Date().getFullYear())

// Raindrop animation state
let rainAnimationId = null
let rainResizeObserver = null
let raindrops = []
let splashes = []

const scrollToTop = () => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 1.2,
    ease: 'power3.inOut'
  })
}

// ---------- Raindrop Animation ----------
function initRain() {
  const canvas = rainCanvas.value
  const footer = footerRef.value
  if (!canvas || !footer) return

  const ctx = canvas.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const resize = () => {
    const rect = footer.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const targetCount = Math.min(180, Math.floor(rect.width / 8))
    raindrops = Array.from({ length: targetCount }, () => createDrop(rect.width, rect.height, true))
  }

  const createDrop = (w, h, randomY = false) => ({
    x: Math.random() * w,
    y: randomY ? Math.random() * h : -20 - Math.random() * 40,
    length: 10 + Math.random() * 18,
    speed: 4 + Math.random() * 6,
    opacity: 0.25 + Math.random() * 0.55,
    thickness: 0.8 + Math.random() * 1.2,
    drift: -0.4 + Math.random() * 0.2, // slight angled fall
  })

  const draw = () => {
    const w = canvas.width / dpr
    const h = canvas.height / dpr
    ctx.clearRect(0, 0, w, h)

    // Draw raindrops as gradient lines
    for (const d of raindrops) {
      const grad = ctx.createLinearGradient(d.x, d.y, d.x + d.drift * d.length, d.y + d.length)
      grad.addColorStop(0, `rgba(174, 214, 241, 0)`)
      grad.addColorStop(0.4, `rgba(174, 214, 241, ${d.opacity * 0.6})`)
      grad.addColorStop(1, `rgba(220, 240, 255, ${d.opacity})`)
      ctx.strokeStyle = grad
      ctx.lineWidth = d.thickness
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(d.x, d.y)
      ctx.lineTo(d.x + d.drift * d.length, d.y + d.length)
      ctx.stroke()

      d.y += d.speed
      d.x += d.drift

      if (d.y > h - 4) {
        // create a splash and recycle the drop to the top
        if (splashes.length < 60 && Math.random() > 0.4) {
          splashes.push({
            x: d.x + d.drift * d.length,
            y: h - 2 - Math.random() * 2,
            radius: 0,
            maxRadius: 4 + Math.random() * 4,
            opacity: 0.5 + Math.random() * 0.3,
          })
        }
        Object.assign(d, createDrop(w, h, false))
      }
    }

    // Draw splashes (expanding rings)
    for (let i = splashes.length - 1; i >= 0; i--) {
      const s = splashes[i]
      ctx.strokeStyle = `rgba(174, 214, 241, ${s.opacity})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.radius, Math.PI, Math.PI * 2)
      ctx.stroke()
      s.radius += 0.4
      s.opacity -= 0.025
      if (s.opacity <= 0 || s.radius >= s.maxRadius) splashes.splice(i, 1)
    }

    rainAnimationId = requestAnimationFrame(draw)
  }

  resize()
  draw()

  rainResizeObserver = new ResizeObserver(resize)
  rainResizeObserver.observe(footer)
}

onMounted(() => {
  // Skip animation if user prefers reduced motion
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) initRain()

  gsap.from('.footer-brand > *', {
    scrollTrigger: {
      trigger: '.footer-main',
      start: 'top 90%'
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.footer-column', {
    scrollTrigger: {
      trigger: '.footer-main',
      start: 'top 85%'
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.footer-column li', {
    scrollTrigger: {
      trigger: '.footer-main',
      start: 'top 80%'
    },
    x: -20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.03,
    ease: 'power3.out'
  })
})

onUnmounted(() => {
  if (rainAnimationId) cancelAnimationFrame(rainAnimationId)
  if (rainResizeObserver) rainResizeObserver.disconnect()
  raindrops = []
  splashes = []
})
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--bg-dark);
  color: white;
  overflow: hidden;
  isolation: isolate;
}

/* Raindrop canvas overlay */
.rain-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.85;
  mix-blend-mode: screen;
}

.footer-main,
.footer-bottom {
  position: relative;
  z-index: 1;
}

/* Main Footer */
.footer-main {
  padding: 80px 0 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 80px;
}

/* Brand */
.footer-logo {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-logo-image {
  height: 80px;
  width: auto;
  transition: all 0.3s ease;
}

.footer-logo:hover .footer-logo-image {
  transform: scale(1.05);
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
}

.brand-desc {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-teal);
  color: white;
  transform: translateY(-3px);
}

/* Links */
.footer-links-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-column h4 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  margin-bottom: 24px;
}

.footer-column ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-column li a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.footer-column li a:hover {
  color: white;
  padding-left: 6px;
}

/* Contact */
.footer-contact .contact-item {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: var(--accent-teal);
  flex-shrink: 0;
}

.footer-contact .contact-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 4px;
}

.footer-contact p,
.footer-contact a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: white;
}

/* Footer Bottom */
.footer-bottom {
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-links a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease;
}

.bottom-links a:hover {
  color: white;
}

.back-to-top {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: var(--accent-teal);
  color: white;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .footer-links-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }

  .brand-desc {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 60px 0 40px;
  }

  .footer-links-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-column {
    text-align: center;
  }

  .footer-contact .contact-item {
    justify-content: center;
  }

  .footer-brand {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .brand-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .bottom-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
