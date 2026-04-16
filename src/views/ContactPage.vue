<template>
  <div class="contact-page">
    <!-- Hero Section with Dark Background -->
    <section class="contact-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1920&q=80" alt="Printing Studio" />
      </div>
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-label">Contact AFME</span>
          <h1 class="hero-title">
            Let's Transform<br>
            <span class="highlight">Your Ideas</span><br>
            Into <em>Reality</em>
          </h1>
          <p class="hero-desc">
            At AFME, we are more than just a printing company — we are your partners
            in transforming ideas into tangible realities. Reach out to discuss your next
            print, branding or activation project with our team.
          </p>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Contact Main Section -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Info & Details -->
          <div class="contact-details">
            <div class="details-header">
              <span class="section-label">Contact Details</span>
              <h2 class="details-title">Visit Our <em>Studio</em></h2>
            </div>

            <div class="info-cards">
              <!-- Location Card -->
              <div class="info-card">
                <div class="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="card-content">
                  <h3>Our Location</h3>
                  <p>Sharaf DG, Dubai</p>
                  <a href="https://maps.google.com/?q=Sharaf+DG+Dubai" target="_blank" class="location-link">Get Directions →</a>
                </div>
              </div>

              <!-- Phone Card -->
              <div class="info-card">
                <div class="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="card-content">
                  <h3>Call Us</h3>
                  <p>+971 56 726 8735</p>
                </div>
              </div>

              <!-- Email Card -->
              <div class="info-card">
                <div class="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="card-content">
                  <h3>Email Us</h3>
                  <p>sales@alfalah-me.com</p>
                </div>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="hours-section">
              <h3 class="hours-title">Working Hours</h3>
              <div class="hours-grid">
                <div class="hours-item">
                  <span class="day">Monday — Friday</span>
                  <span class="time">9:00 AM — 6:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Saturday</span>
                  <span class="time">9:00 AM — 4:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="day">Sunday</span>
                  <span class="time">Closed</span>
                </div>
              </div>
            </div>

            <!-- Google Map -->
            <div class="map-preview">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923767.2638908796!2d54.08373187812501!3d25.2549091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4320b2d773eb%3A0xc69324231815f362!2sSharaf%20DG!5e0!3m2!1sen!2sae!4v1775993147919!5m2!1sen!2sae"
                width="100%"
                height="240"
                style="border:0; border-radius: 12px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="form-section">
            <div class="form-wrapper">
              <div class="form-header">
                <span class="section-label">Send a Message</span>
                <h2 class="form-title">Start Your <em>Project</em></h2>
                <p class="form-desc">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <form @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div class="form-group">
                    <label for="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      v-model="form.company"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>Type of Service</label>
                  <div class="service-tags">
                    <button
                      v-for="service in services"
                      :key="service"
                      type="button"
                      class="service-tag"
                      :class="{ active: form.service === service }"
                      @click="form.service = service"
                    >
                      {{ service }}
                    </button>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Your Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    placeholder="Tell us about your project, requirements, and timeline..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" class="submit-btn" :disabled="isSubmitting">
                  <span v-if="isSubmitting">Sending Message...</span>
                  <span v-else>Send Message</span>
                  <svg v-if="!isSubmitting" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13"/>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>

              <!-- Success State -->
              <transition name="success">
                <div v-if="submitSuccess" class="success-overlay">
                  <div class="success-content">
                    <div class="success-icon">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.</p>
                    <button @click="resetForm" class="reset-btn">Send Another Message</button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Prefer a <em>Direct Call?</em></h2>
          <p class="cta-desc">Our team is available during business hours to discuss your project requirements.</p>
          <a href="tel:+97142345678" class="cta-phone">
            <span class="phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span class="phone-number">+971 4 XXX XXXX</span>
          </a>
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

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const services = ['Printing', 'Branding', 'Packaging', 'Signage', 'Corporate Gifts', 'Events']

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitSuccess.value = true
}

const resetForm = () => {
  submitSuccess.value = false
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  }
}

onMounted(() => {
  // Hero - quick fade up
  gsap.set(['.hero-label', '.hero-title', '.hero-desc'], { opacity: 0, y: 10 })
  gsap.to('.hero-label', { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' })
  gsap.to('.hero-title', { y: 0, opacity: 1, duration: 0.3, delay: 0.05, ease: 'power2.out' })
  gsap.to('.hero-desc', { y: 0, opacity: 1, duration: 0.25, delay: 0.1, ease: 'power2.out' })

  // Smooth reveal helper - hides first, animates on scroll
  const reveal = (trigger, targets, opts = {}) => {
    const els = document.querySelectorAll(targets)
    if (!els.length) return
    els.forEach(el => {
      el.style.transition = 'none'
      el.style.opacity = '0'
      el.style.transform = `translateY(${opts.y ?? 30}px)`
    })
    ScrollTrigger.create({
      trigger: document.querySelector(trigger),
      start: opts.start || 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(els, {
          y: 0, opacity: 1,
          duration: opts.duration ?? 0.9,
          stagger: opts.stagger ?? 0.08,
          ease: 'power2.out',
          delay: opts.delay ?? 0,
          onComplete: () => els.forEach(el => el.style.transition = ''),
        })
      },
    })
  }

  // Left side - contact details
  reveal('.contact-details', '.details-header')
  reveal('.info-cards', '.info-card', { stagger: 0.1 })
  reveal('.hours-section', '.hours-title, .hours-item', { stagger: 0.08 })
  reveal('.map-preview', '.map-preview', { y: 20 })

  // Right side - form
  reveal('.form-section', '.form-header', { delay: 0.1 })
  reveal('.contact-form', '.form-group', { stagger: 0.06, delay: 0.15 })
  reveal('.contact-form', '.submit-btn', { delay: 0.3 })

  // CTA
  reveal('.contact-cta', '.cta-content, .cta-phone', { stagger: 0.1 })

  // Hover effects for info cards
  document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
      gsap.to(card.querySelector('.card-icon'), { scale: 1.1, duration: 0.3 })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
      gsap.to(card.querySelector('.card-icon'), { scale: 1, duration: 0.3 })
    })
  })

  // Hover effects for service tags
  document.querySelectorAll('.service-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      if (!tag.classList.contains('active')) {
        gsap.to(tag, { scale: 1.05, duration: 0.2 })
      }
    })
    tag.addEventListener('mouseleave', () => {
      gsap.to(tag, { scale: 1, duration: 0.2 })
    })
  })
})
</script>

<style scoped>
/* Hero Section */
.contact-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(46, 139, 192, 0.85) 0%, rgba(10, 92, 95, 0.8) 30%, rgba(26, 26, 26, 0.92) 100%);
  z-index: 1;
}

.contact-hero .container {
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 700px;
  padding: 100px 0;
}

.hero-label {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 80px);
  font-weight: 400;
  line-height: 0.95;
  color: #ffffff;
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.hero-title .highlight {
  color: rgba(255, 255, 255, 0.6);
}

.hero-title em {
  font-style: normal;
  font-weight: 200;
  color: #ffffff;
}

.hero-desc {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  max-width: 520px;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.4);
  transform: scaleY(0);
  transform-origin: top;
}

/* Contact Main Section */
.contact-main {
  padding: 120px 0;
  background: var(--bg-primary);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: start;
}

/* Contact Details */
.contact-details {
  position: sticky;
  top: 120px;
}

.details-header {
  margin-bottom: 48px;
}

.details-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 300;
  color: var(--text-primary);
  margin-top: 12px;
}

.details-title em {
  font-style: normal;
  font-weight: 200;
  color: var(--accent-teal);
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 28px;
  background: var(--bg-secondary);
  border-radius: 16px;
  transition: all var(--transition-base);
  cursor: default;
}

.info-card:hover {
  box-shadow: var(--shadow-md);
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-teal);
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.card-content h3 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.card-content p {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
}

.location-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-teal);
  transition: color 0.3s ease;
}

.location-link:hover {
  color: var(--text-primary);
}

/* Hours Section */
.hours-section {
  margin-bottom: 40px;
}

.hours-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 200;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: var(--bg-secondary);
  border-radius: 10px;
}

.hours-item .day {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
}

.hours-item .time {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

/* Map Preview */
.map-preview {
  height: 180px;
  background: linear-gradient(135deg, var(--accent-teal) 0%, var(--bg-teal-dark) 100%);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.map-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.map-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  color: white;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
}

.map-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

/* Form Section */
.form-section {
  position: relative;
}

.form-wrapper {
  background: var(--bg-secondary);
  border-radius: 24px;
  padding: 56px;
  position: relative;
  overflow: hidden;
}

.form-header {
  margin-bottom: 40px;
}

.form-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 300;
  color: var(--text-primary);
  margin: 12px 0 16px;
}

.form-title em {
  font-style: normal;
  font-weight: 200;
  color: var(--accent-teal);
}

.form-desc {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  padding: 16px 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  transition: all var(--transition-base);
  width: 100%;
  min-width: 0;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-teal);
  box-shadow: 0 0 0 4px rgba(46, 139, 192, 0.08);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-light);
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.service-tag {
  padding: 12px 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-medium);
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.service-tag:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

.service-tag.active {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 40px;
  background: var(--accent-teal);
  border: none;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all var(--transition-base);
  margin-top: 8px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-teal-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(46, 139, 192, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Success Overlay */
.success-overlay {
  position: absolute;
  inset: 0;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  z-index: 10;
}

.success-content {
  text-align: center;
  padding: 40px;
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: rgba(46, 139, 192, 0.1);
  border-radius: 50%;
  color: var(--accent-teal);
  margin-bottom: 28px;
}

.success-content h3 {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.success-content p {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 360px;
  margin: 0 auto 32px;
}

.reset-btn {
  padding: 14px 32px;
  background: transparent;
  border: 1px solid var(--border-medium);
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.reset-btn:hover {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: white;
}

.success-enter-active,
.success-leave-active {
  transition: all 0.5s ease;
}

.success-enter-from,
.success-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* CTA Section */
.contact-cta {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 300;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.cta-title em {
  font-style: normal;
  font-weight: 200;
  color: var(--accent-teal);
}

.cta-desc {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 36px;
}

.cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 40px;
  background: var(--accent-teal);
  border-radius: 60px;
  color: white;
  transition: all var(--transition-base);
}

.cta-phone:hover {
  background: var(--accent-teal-light);
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(46, 139, 192, 0.3);
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.phone-number {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .contact-details {
    position: relative;
    top: 0;
  }

  .form-wrapper {
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 80px 0;
  }

  .contact-main {
    padding: 80px 0;
  }

  .form-wrapper {
    padding: 32px 24px;
    border-radius: 16px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 20px;
  }

  .cta-phone {
    flex-direction: column;
    padding: 24px 40px;
  }

  .contact-cta {
    padding: 80px 0;
  }

  .container {
    padding: 0 20px;
  }

  .service-tags {
    gap: 8px;
  }

  .service-tag {
    padding: 10px 16px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    min-height: 80vh;
  }

  .hero-content {
    padding: 60px 0;
  }

  .hero-title {
    font-size: clamp(36px, 10vw, 56px);
  }

  .hero-desc {
    font-size: 15px;
  }

  .contact-main {
    padding: 56px 0;
  }

  .container {
    padding: 0 16px;
  }

  .form-wrapper {
    padding: 24px 16px;
    border-radius: 12px;
  }

  .form-group input,
  .form-group textarea {
    padding: 14px 16px;
    font-size: 14px;
  }

  .service-tag {
    padding: 8px 14px;
    font-size: 11px;
  }

  .submit-btn {
    padding: 16px 32px;
    font-size: 14px;
  }

  .info-card {
    padding: 16px;
    gap: 14px;
  }

  .card-icon {
    width: 44px;
    height: 44px;
  }

  .hours-item {
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .contact-cta {
    padding: 56px 0;
  }

  .phone-number {
    font-size: 18px;
  }

  .details-header {
    margin-bottom: 32px;
  }

  .success-content {
    padding: 24px;
  }

  .success-icon {
    width: 80px;
    height: 80px;
  }
}
</style>
