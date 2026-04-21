<template>
  <footer ref="footerRef" class="footer">
    <!-- Thin falling lines (CSS only, no canvas) -->
    <div class="footer-drops" aria-hidden="true">
      <span v-for="n in 18" :key="'d'+n" class="footer-drop" :style="{
        '--left': (n * 5.5 - 2) + '%',
        '--delay': (n * 0.37 % 4.2).toFixed(1) + 's',
        '--h': (40 + (n % 4) * 12) + 'px',
        '--speed': (4 + (n % 3) * 1.5).toFixed(1) + 's',
      }"></span>
      <span v-for="n in 18" :key="'s'+n" class="footer-splash" :style="{
        '--left': (n * 5.5 - 2) + '%',
        '--delay': (n * 0.37 % 4.2).toFixed(1) + 's',
        '--speed': (4 + (n % 3) * 1.5).toFixed(1) + 's',
      }">
        <span class="ripple ripple-1"></span>
        <span class="ripple ripple-2"></span>
        <span class="splash-bead bead-l"></span>
        <span class="splash-bead bead-r"></span>
      </span>
    </div>

    <!-- Main Footer -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <router-link to="/" class="footer-logo" aria-label="Al Falah Middle East — Home">
              <img :src="logoImage" alt="Al Falah Middle East" class="footer-logo-image" />
            </router-link>
            <div class="brand-info">
              <h3 class="brand-name">Al Falah Middle East</h3>
              <p class="brand-desc">
                Your trusted partner for premium printing, creative branding, and innovative advertising solutions — serving the UAE since 2020.
              </p>
            </div>
            <div class="social-links">
              <a href="https://facebook.com/alfalahmiddleeast" target="_blank" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/alfalahme" target="_blank" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/alfalah-me" target="_blank" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
                <li><router-link to="/services">Our Services</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li><router-link to="/services#services-grid">Offset/Digital Printing</router-link></li>
                <li><router-link to="/services#services-grid">Labels Production</router-link></li>
                <li><router-link to="/services#services-grid">Brand Activation</router-link></li>
                <li><router-link to="/services#services-grid">Stand Production</router-link></li>
                <li><router-link to="/services#services-grid">Event Management</router-link></li>
                <li><router-link to="/services#services-grid">Creative & Design</router-link></li>
                <li><router-link to="/services#services-grid">Vehicle Graphics</router-link></li>
              </ul>
            </div>

            <div class="footer-column footer-contact">
              <h4>Contact</h4>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Location</span>
                  <p>Sharaf DG, Dubai</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Email</span>
                  <a href="mailto:sales@alfalah-me.com">sales@alfalah-me.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span class="contact-label">Hours</span>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoImage from '@/assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)
const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1.2 })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  gsap.from('.footer-brand > *', {
    scrollTrigger: { trigger: '.footer-main', start: 'top 90%' },
    y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
  })
  gsap.from('.footer-column', {
    scrollTrigger: { trigger: '.footer-main', start: 'top 85%' },
    y: 40, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
  })
})
</script>

<style scoped>
.footer {
  position: relative;
  background: #0b1120;
  color: white;
  overflow: hidden;
  isolation: isolate;
}

/* ════════════════════════════════════════
   CSS-only thin falling lines
   ════════════════════════════════════════ */
.footer-drops {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.footer-drop {
  position: absolute;
  top: -10%;
  left: var(--left);
  width: 2px;
  height: var(--h, 50px);
  background: linear-gradient(to bottom,
    transparent 0%,
    rgba(120, 200, 240, 0.25) 40%,
    rgba(160, 220, 250, 0.9) 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  filter: drop-shadow(0 0 2px rgba(120, 200, 240, 0.6));
  opacity: 0;
  will-change: top, opacity, transform;
  transform: translateX(-50%);
  animation: footerFall var(--speed, 5s) var(--delay, 0s) cubic-bezier(0.45, 0, 0.9, 0.35) infinite;
}

@keyframes footerFall {
  0%   { top: -12%; opacity: 0; transform: translateX(-50%) scaleY(1); }
  6%   { opacity: 0.9; }
  80%  { top: calc(100% - 6px); opacity: 0.95; transform: translateX(-50%) scaleY(1); }
  84%  { top: calc(100% - 2px); opacity: 0.7; transform: translateX(-50%) scaleY(0.25); }
  86%  { top: calc(100% - 2px); opacity: 0; transform: translateX(-50%) scaleY(0); }
  100% { top: calc(100% - 2px); opacity: 0; transform: translateX(-50%) scaleY(0); }
}

/* ────────── Splash on impact (ripple rings + flying beads) ────────── */
.footer-splash {
  position: absolute;
  left: var(--left);
  bottom: 4px;
  width: 0;
  height: 0;
  pointer-events: none;
}

.ripple {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 28px;
  height: 10px;
  margin-left: -14px;
  border: 1.5px solid rgba(140, 210, 245, 0.95);
  border-bottom-color: transparent;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transform-origin: center bottom;
  animation: footerRipple var(--speed, 5s) var(--delay, 0s) ease-out infinite;
}

.ripple-2 {
  width: 44px;
  height: 16px;
  margin-left: -22px;
  border-width: 1px;
  border-color: rgba(110, 190, 235, 0.7);
  border-bottom-color: transparent;
  animation: footerRipple2 var(--speed, 5s) var(--delay, 0s) ease-out infinite;
}

@keyframes footerRipple {
  0%, 82% { transform: scale(0); opacity: 0; }
  84%     { transform: scale(0.15); opacity: 1; }
  92%     { transform: scale(1); opacity: 0.7; }
  100%    { transform: scale(1.3); opacity: 0; }
}

@keyframes footerRipple2 {
  0%, 84% { transform: scale(0); opacity: 0; }
  87%     { transform: scale(0.2); opacity: 0.9; }
  100%    { transform: scale(1.2); opacity: 0; }
}

/* Splash beads fly out sideways/upward on impact */
.splash-bead {
  position: absolute;
  left: -1.5px;
  bottom: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(180, 225, 250, 1);
  box-shadow: 0 0 3px rgba(140, 210, 245, 0.8);
  opacity: 0;
}

.bead-l {
  animation: footerBeadL var(--speed, 5s) var(--delay, 0s) cubic-bezier(0.3, 0.7, 0.4, 1) infinite;
}

.bead-r {
  animation: footerBeadR var(--speed, 5s) var(--delay, 0s) cubic-bezier(0.3, 0.7, 0.4, 1) infinite;
}

@keyframes footerBeadL {
  0%, 82%  { transform: translate(0, 0) scale(0.6); opacity: 0; }
  84%      { transform: translate(0, 0) scale(1); opacity: 1; }
  90%      { transform: translate(-12px, -10px) scale(0.9); opacity: 0.9; }
  95%      { transform: translate(-18px, -2px) scale(0.7); opacity: 0; }
  100%     { transform: translate(-18px, -2px) scale(0); opacity: 0; }
}

@keyframes footerBeadR {
  0%, 82%  { transform: translate(0, 0) scale(0.6); opacity: 0; }
  84%      { transform: translate(0, 0) scale(1); opacity: 1; }
  90%      { transform: translate(12px, -10px) scale(0.9); opacity: 0.9; }
  95%      { transform: translate(18px, -2px) scale(0.7); opacity: 0; }
  100%     { transform: translate(18px, -2px) scale(0); opacity: 0; }
}

/* ════════════════════════════════════════
   Layout
   ════════════════════════════════════════ */
.footer-main,
.footer-bottom {
  position: relative;
  z-index: 1;
}

.footer-main {
  padding: 72px 0 56px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  gap: 72px;
}

/* ════════════════════════════════════════
   Brand
   ════════════════════════════════════════ */
.footer-logo {
  display: inline-block;
  margin-bottom: 18px;
}

.footer-logo-image {
  height: 72px;
  width: auto;
  transition: transform 0.3s ease;
}

.footer-logo:hover .footer-logo-image {
  transform: scale(1.05);
}

.brand-name {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.5vw, 32px);
  font-weight: 400;
  color: white;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.brand-desc {
  font-size: 13px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.55);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
  transform: translateY(-2px);
}

/* ════════════════════════════════════════
   Link Columns
   ════════════════════════════════════════ */
.footer-links-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.footer-column h4 {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: white;
  margin-bottom: 22px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(74, 171, 222, 0.2);
}

.footer-column ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-column li a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-column li a:hover {
  color: #4AABDE;
  transform: translateX(4px);
}

/* ════════════════════════════════════════
   Contact
   ════════════════════════════════════════ */
.footer-contact .contact-item {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.contact-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 171, 222, 0.08);
  border: 1px solid rgba(74, 171, 222, 0.15);
  border-radius: 8px;
  color: #4AABDE;
  flex-shrink: 0;
}

.footer-contact .contact-label {
  display: block;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 3px;
}

.footer-contact p,
.footer-contact a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: #4AABDE;
}

/* ════════════════════════════════════════
   Bottom Bar
   ════════════════════════════════════════ */
.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copyright {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}

.bottom-links {
  display: flex;
  gap: 20px;
}

.bottom-links a {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.3s ease;
}

.bottom-links a:hover {
  color: #4AABDE;
}

.back-to-top {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
  transform: translateY(-2px);
}

/* ════════════════════════════════════════
   Responsive
   ════════════════════════════════════════ */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .brand-desc { max-width: none; }
}

@media (max-width: 768px) {
  .footer-main { padding: 56px 0 36px; }

  .footer-links-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .footer-contact {
    grid-column: 1 / -1;
  }

  .footer-column { text-align: center; }
  .footer-column h4 { display: inline-block; }
  .footer-contact .contact-item { justify-content: center; }
  .footer-brand { text-align: center; }
  .social-links { justify-content: center; }
  .brand-desc { margin-left: auto; margin-right: auto; }

  .bottom-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-main {
    padding: 44px 0 28px;
  }

  .footer-links-wrapper {
    grid-template-columns: 1fr;
  }

  .footer-contact {
    grid-column: auto;
  }

  .footer-logo-image {
    height: 56px;
  }

  .brand-name {
    font-size: 22px;
  }

  .brand-desc {
    font-size: 12px;
  }

  .footer-column h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .footer-column ul {
    gap: 10px;
  }

  .footer-bottom {
    padding: 16px 0;
  }

  .copyright {
    font-size: 11px;
  }

  .bottom-links a {
    font-size: 11px;
  }
}
</style>
