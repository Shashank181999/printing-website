<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80" alt="Printing Press" class="hero-bg-img" />
        <div class="hero-bg-overlay"></div>
      </div>

      <!-- Blind Reveal Overlay -->
      <div class="hero-blinds">
        <div class="blind-strip" v-for="n in 8" :key="n"></div>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="hero-label">
              <span class="label-line"></span>
              50 Years of Excellence
            </span>
            <h1 class="hero-title">
              Printing &<br>
              <span class="title-highlight">Branding</span><br>
              <span class="title-italic">Excellence</span>
            </h1>
            <p class="hero-desc">
              Your trusted partner for premium printing, creative branding, and innovative advertising solutions since 1974.
            </p>
            <div class="hero-actions">
              <button class="btn-hero-primary" @click="openServiceForm">
                <span>Start Your Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <router-link to="/about" class="btn-hero-secondary">
                Explore Our Work
              </router-link>
            </div>
          </div>

          <!-- Hero Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-number">50+</span>
              <span class="hero-stat-label">Years Experience</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">1000+</span>
              <span class="hero-stat-label">Projects Done</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">15+</span>
              <span class="hero-stat-label">Countries</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Curved Bottom -->
      <div class="hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C320,120 720,120 1440,60 L1440,120 L0,120 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="about-preview">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-col">
            <div class="about-image-wrapper">
              <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=800&q=80" alt="Our Workshop" class="about-img" />
              <div class="about-image-badge">
                <span class="badge-number">50+</span>
                <span class="badge-text">Years of<br>Excellence</span>
              </div>
            </div>
          </div>
          <div class="about-content-col">
            <span class="section-label">About Us</span>
            <h2 class="section-title">
              Transforming Ideas Into<br>
              <em>Tangible Realities</em>
            </h2>
            <p class="section-desc">
              Al Falah Middle East is your comprehensive printing, branding, and advertising partner. We offer a blend of expertise, dedication, and a client-centric approach to help businesses enhance their market presence.
            </p>
            <p class="section-desc">
              From offset and digital printing to brand activation and event management, we bridge traditional craftsmanship with modern innovation.
            </p>
            <div class="about-features">
              <div class="about-feature">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>Premium Quality</span>
              </div>
              <div class="about-feature">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>On-Time Delivery</span>
              </div>
              <div class="about-feature">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>Creative Solutions</span>
              </div>
            </div>
            <router-link to="/about" class="btn-outline">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Vertical Progress -->
      <div class="vertical-progress">
        <div class="v-progress-track">
          <div class="v-progress-fill about-progress"></div>
        </div>
        <span class="v-progress-label">ABOUT</span>
      </div>
    </section>

    <!-- Story of Excellence Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-row">
          <div class="story-content">
            <span class="section-label">Since 1974</span>
            <h2 class="section-title">Story of <em>Excellence</em></h2>
            <p class="story-text">
              For over five decades, Al Falah Middle East has been the trusted partner for businesses seeking premium printing and branding solutions. Our journey began with a single press and a vision for perfection.
            </p>
            <p class="story-text">
              Today, we blend heritage craftsmanship with cutting-edge technology, serving clients across 15+ countries with the same dedication to quality that defined our founding.
            </p>
            <router-link to="/about" class="story-link">
              Discover Our Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=800&q=80" alt="Our Story" />
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="what-we-offer">
      <div class="container">
        <div class="offer-header">
          <span class="section-label">Our Expertise</span>
          <h2 class="section-title">What We <em>Offer</em></h2>
          <p class="offer-intro">
            With over 50 years of experience, Al Falah Middle East delivers comprehensive solutions
            that transform your brand vision into reality. From concept to completion, we're your trusted partner.
          </p>
        </div>

        <div class="offer-grid">
          <div v-for="(offer, index) in offerings" :key="index" class="offer-card">
            <div class="offer-card-icon">{{ offer.icon }}</div>
            <h3 class="offer-card-title">{{ offer.title }}</h3>
            <p class="offer-card-desc">{{ offer.description }}</p>
            <ul class="offer-card-features">
              <li v-for="(feature, fIndex) in offer.features" :key="fIndex">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="offer-cta">
          <p>Need a custom solution? We tailor our services to meet your unique requirements.</p>
          <button class="btn-primary" @click="openServiceForm">
            Discuss Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Vertical Progress -->
      <div class="vertical-progress right">
        <div class="v-progress-track">
          <div class="v-progress-fill offer-progress"></div>
        </div>
        <span class="v-progress-label">OFFER</span>
      </div>
    </section>

    <!-- The Craft Section - Dark with Image -->
    <section class="craft-section">
      <div class="craft-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
      <div class="container">
        <div class="craft-content">
          <span class="craft-label">◆ The Craft ◆</span>
          <h2 class="craft-title">Where Precision<br>Meets <em>Passion</em></h2>
          <p class="craft-desc">
            Every project begins with understanding your vision. Our master craftsmen combine decades of expertise with cutting-edge technology to deliver results that exceed expectations.
          </p>
          <div class="craft-stats">
            <div class="craft-stat">
              <span class="craft-stat-number">1000+</span>
              <span class="craft-stat-label">Projects Completed</span>
            </div>
            <div class="craft-stat">
              <span class="craft-stat-number">15+</span>
              <span class="craft-stat-label">Countries Served</span>
            </div>
            <div class="craft-stat">
              <span class="craft-stat-number">50+</span>
              <span class="craft-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div class="craft-image-wrapper">
          <div class="craft-image">
            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80" alt="Our Craft" />
          </div>
          <div class="craft-image-accent"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <!-- Curtain Overlays -->
      <div class="curtain-overlay curtain-top"></div>
      <div class="curtain-overlay curtain-bottom"></div>

      <!-- Top Wave -->
      <div class="section-wave wave-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 Q360,0 720,50 T1440,30 L1440,0 L0,0 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>

      <!-- Blob Shape -->
      <div class="blob-shape"></div>

      <div class="container services-content">
        <div class="services-header">
          <span class="section-label">Quick Services</span>
          <h2 class="section-title">Our <em>Services</em></h2>
          <p class="section-subtitle">Get a quick quote for any of our services</p>
        </div>

        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <button class="card-link" @click="openServiceForm">
              Get Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Vertical Progress -->
      <div class="vertical-progress right">
        <div class="v-progress-track">
          <div class="v-progress-fill services-progress"></div>
        </div>
        <span class="v-progress-label">SERVICES</span>
      </div>

      <!-- Bottom Wave -->
      <div class="section-wave wave-bottom">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,30 Q360,100 720,50 T1440,70 L1440,100 L0,100 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section">
      <!-- Split Layer Overlay -->
      <div class="split-overlay">
        <div class="split-layer split-top">
          <span class="split-text">FEATURED</span>
        </div>
        <div class="split-center-line"></div>
        <div class="split-layer split-bottom">
          <span class="split-text">PROJECTS</span>
        </div>
      </div>

      <div class="container portfolio-content">
        <div class="portfolio-header">
          <div>
            <span class="section-label">Our Products</span>
            <h2 class="section-title">Featured <em>Products</em></h2>
          </div>
          <router-link to="/products" class="text-link">
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>

        <div class="portfolio-grid">
          <div class="portfolio-item portfolio-item-large">
            <div class="portfolio-image">
              <img src="/products/exhibition-booth-setup.webp" alt="Exhibition Booth Setup" loading="lazy" />
            </div>
            <div class="portfolio-overlay">
              <span class="portfolio-category">Exhibitions</span>
              <h4>Exhibition Booth Setup</h4>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <img src="/products/vehicle-branding.webp" alt="Vehicle Branding" loading="lazy" />
            </div>
            <div class="portfolio-overlay">
              <span class="portfolio-category">Branding</span>
              <h4>Vehicle Branding</h4>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <img src="/products/neon-signage.webp" alt="Custom Neon Signage" loading="lazy" />
            </div>
            <div class="portfolio-overlay">
              <span class="portfolio-category">Signage</span>
              <h4>Custom Neon Signage</h4>
            </div>
          </div>
          <div class="portfolio-item portfolio-cta">
            <div class="portfolio-cta-content">
              <h4>Need a Quote?</h4>
              <p>Let's discuss how we can bring your vision to life.</p>
              <button class="btn-primary" @click="openServiceForm">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Progress -->
      <div class="vertical-progress">
        <div class="v-progress-track">
          <div class="v-progress-fill portfolio-progress"></div>
        </div>
        <span class="v-progress-label">WORK</span>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products">
      <div class="container">
        <div class="featured-header">
          <div class="featured-header-text">
            <span class="section-label">Our Products</span>
            <h2 class="section-title">What We <em>Create</em></h2>
            <p class="section-desc">From premium business cards to large-format signage, we bring your brand to life with 85+ print products.</p>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="feat-tabs">
          <button
            v-for="tab in featuredTabs"
            :key="tab.id"
            class="feat-tab"
            :class="{ active: activeFeatTab === tab.id }"
            @click="activeFeatTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>

        <!-- Product Cards -->
        <div class="featured-grid">
          <div
            v-for="(product, index) in activeFeaturedProducts"
            :key="product.slug"
            class="featured-card"
            :style="{ '--i': index }"
          >
            <div class="featured-img-wrap">
              <img
                :src="'/products/' + product.slug + '.webp'"
                :alt="product.name"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
              />
              <div class="featured-hover">
                <button class="featured-quote-btn" @click="openServiceForm">Get Quote</button>
              </div>
            </div>
            <div class="featured-card-info">
              <h4>{{ product.name }}</h4>
              <p>{{ product.desc }}</p>
            </div>
          </div>
        </div>

        <div class="featured-cta-row">
          <router-link to="/products" class="btn-primary">
            View All 85+ Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <!-- Decorative Elements -->
      <div class="deco-circle deco-circle-1"></div>
      <div class="deco-circle deco-circle-2"></div>

      <div class="container">
        <div class="testimonial-content">
          <div class="quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.5V14H7.5C7.5 15.93 9.07 17.5 11 17.5V19.5C7.96 19.5 5.5 17.04 5.5 14V7.5H11ZM18.5 7.5V14H15C15 15.93 16.57 17.5 18.5 17.5V19.5C15.46 19.5 13 17.04 13 14V7.5H18.5Z"/>
            </svg>
          </div>
          <blockquote class="testimonial-quote">
            Al Falah has been our trusted printing partner for over 10 years. Their attention to detail, commitment to quality, and exceptional service make them stand out in the industry.
          </blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">AM</div>
            <div class="author-info">
              <span class="author-name">Ahmed Al Maktoum</span>
              <span class="author-title">Marketing Director, Emirates Group</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <!-- Top Curve -->
      <div class="cta-curve">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 Q720,0 1440,80 L1440,0 L0,0 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>

      <div class="container">
        <div class="cta-grid">
          <div class="cta-content">
            <h2 class="cta-title">
              Ready to Elevate<br>
              Your <em>Brand?</em>
            </h2>
            <p class="cta-desc">
              Let's create something extraordinary together. Contact us today for a free consultation.
            </p>
            <div class="cta-actions">
              <button class="btn-cta-primary" @click="openServiceForm">
                Get Free Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="tel:+971567268735" class="btn-cta-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
          <div class="cta-badge">
            <span class="cta-badge-number">50+</span>
            <span class="cta-badge-text">Years of Excellence</span>
          </div>
        </div>
      </div>

      <!-- Decorative Shape -->
      <div class="cta-shape"></div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const openServiceForm = inject('openServiceForm')

const activeFeatTab = ref('popular')

const featuredTabs = [
  { id: 'popular', name: 'Most Popular' },
  { id: 'cards', name: 'Business Cards' },
  { id: 'signage', name: 'Signage & Banners' },
  { id: 'branding', name: 'Branding' },
]

const featuredData = {
  popular: [
    { slug: 'gold-foil-business-cards', name: 'Gold Foil Business Cards', desc: 'Luxury gold foil stamped cards' },
    { slug: 'neon-signage', name: 'Neon Signage', desc: 'Custom LED neon signs' },
    { slug: 'rigid-box-packaging', name: 'Rigid Box Packaging', desc: 'Premium luxury packaging' },
    { slug: 'custom-t-shirts', name: 'Custom T-Shirts', desc: 'Premium branded apparel' },
    { slug: 'roll-up-banners', name: 'Roll-Up Banners', desc: 'Portable display banners' },
    { slug: 'vehicle-branding', name: 'Vehicle Branding', desc: 'Fleet wraps & graphics' },
    { slug: 'nfcsmart-business-card', name: 'NFC Smart Cards', desc: 'Tap-to-share digital cards' },
    { slug: 'exhibition-booth-setup', name: 'Exhibition Booths', desc: 'Complete booth solutions' },
  ],
  cards: [
    { slug: 'gold-foil-business-cards', name: 'Gold Foil Cards', desc: 'Luxury gold foil stamped' },
    { slug: 'metal-business-cards', name: 'Metal Cards', desc: 'Durable stainless steel' },
    { slug: 'nfcsmart-business-card', name: 'NFC Smart Cards', desc: 'Tap-to-share technology' },
    { slug: 'frostedclear-pvc-cards', name: 'Frosted PVC Cards', desc: 'Transparent & frosted' },
    { slug: 'die-cut-business-cards', name: 'Die-Cut Cards', desc: 'Custom-shaped designs' },
    { slug: 'textured-business-cards', name: 'Textured Cards', desc: 'Tactile premium finishes' },
    { slug: 'square-business-cards', name: 'Square Cards', desc: 'Modern square format' },
    { slug: 'special-cards', name: 'Special Finish Cards', desc: 'Spot UV & embossing' },
  ],
  signage: [
    { slug: 'neon-signage', name: 'Neon Signage', desc: 'Custom LED neon signs' },
    { slug: 'roll-up-banners', name: 'Roll-Up Banners', desc: 'Portable retractable banners' },
    { slug: 'outdoor-feather-flags', name: 'Feather Flags', desc: 'Eye-catching outdoor flags' },
    { slug: '3d-acryliccolored-letters', name: '3D Acrylic Letters', desc: 'Vibrant 3D signage' },
    { slug: 'outdoor-billboard-and-banners', name: 'Billboards & Banners', desc: 'Large-format outdoor ads' },
    { slug: 'a-frame-sidewalk-sign', name: 'Sidewalk Signs', desc: 'Foldable A-frame signs' },
    { slug: 'coroplast-signs', name: 'Coroplast Signs', desc: 'Lightweight plastic signs' },
    { slug: 'table-flags', name: 'Table Flags', desc: 'Mini desktop flags' },
  ],
  branding: [
    { slug: 'vehicle-branding', name: 'Vehicle Branding', desc: 'Fleet wraps & graphics' },
    { slug: 'exhibition-booth-setup', name: 'Exhibition Booths', desc: 'Complete booth setup' },
    { slug: 'glassfacade-branding', name: 'Glass Branding', desc: 'Window & facade graphics' },
    { slug: 'office-branding', name: 'Office Branding', desc: 'Wall graphics & wayfinding' },
    { slug: 'backdrop', name: 'Event Backdrops', desc: 'Custom event backdrops' },
    { slug: 'media-wallstep-and-repeat', name: 'Media Walls', desc: 'Step-and-repeat banners' },
    { slug: 'frost-film', name: 'Frost Film', desc: 'Privacy & branding film' },
    { slug: 'pop-display-stands', name: 'POP Displays', desc: 'Retail display stands' },
  ],
}

const activeFeaturedProducts = computed(() => featuredData[activeFeatTab.value] || featuredData.popular)

const services = [
  { icon: '🖨️', title: 'Offset/Digital Printing', description: 'High-quality printing solutions for brochures, catalogs, and publications.' },
  { icon: '🏷️', title: 'Labels Production', description: 'Custom labels and stickers for products and packaging.' },
  { icon: '🎯', title: 'Brand Activation', description: 'Strategic brand experiences that engage your audience.' },
  { icon: '🏗️', title: 'Stand Production', description: 'Eye-catching exhibition stands for trade shows.' },
  { icon: '🎪', title: 'Event Management', description: 'End-to-end event planning and execution.' },
  { icon: '🎨', title: 'Creative & Design', description: 'Innovative design solutions for print and digital.' },
  { icon: '🎁', title: 'Corporate Gifts', description: 'Premium branded merchandise and gifts.' },
  { icon: '🚗', title: 'Vehicle Graphics', description: 'Fleet branding and vehicle wrap solutions.' }
]

const offerings = [
  {
    icon: '🖨️',
    title: 'Offset & Digital Printing',
    description: 'State-of-the-art printing technology delivering exceptional quality for all your print materials, from small runs to large-scale production.',
    features: ['Brochures & Catalogs', 'Business Cards & Stationery', 'Annual Reports', 'Magazines & Newsletters']
  },
  {
    icon: '🏷️',
    title: 'Labels & Packaging',
    description: 'Custom label solutions and packaging designs that make your products stand out on shelves and create lasting impressions.',
    features: ['Product Labels', 'Wine & Beverage Labels', 'Food Packaging', 'Industrial Labels']
  },
  {
    icon: '🎯',
    title: 'Brand Activation',
    description: 'Strategic brand experiences that create meaningful connections between your brand and target audience through immersive campaigns.',
    features: ['In-store Promotions', 'Product Launches', 'Experiential Marketing', 'Sampling Campaigns']
  },
  {
    icon: '🏗️',
    title: 'Exhibition & Stand Production',
    description: 'Eye-catching exhibition stands and displays that capture attention and effectively communicate your brand message at trade shows.',
    features: ['Custom Exhibition Stands', 'Modular Displays', 'Pop-up Shops', 'Retail Fixtures']
  },
  {
    icon: '🎪',
    title: 'Event Management',
    description: 'Complete event planning and execution services, from concept development to on-ground management for memorable experiences.',
    features: ['Corporate Events', 'Product Launches', 'Conferences & Seminars', 'Gala Dinners']
  },
  {
    icon: '🎨',
    title: 'Creative & Design',
    description: 'Innovative design solutions that bring your vision to life, combining creativity with strategic thinking for impactful visual communication.',
    features: ['Brand Identity Design', 'Packaging Design', 'Marketing Collateral', 'Digital Assets']
  }
]

let scrollTriggers = []

onMounted(() => {
  // Check if this is first visit (preloader shows) or page navigation
  // Hero text entry animation (on load)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 })

  heroTl
    .from('.hero-label', { x: -30, opacity: 0, duration: 0.8 })
    .from('.label-line', { scaleX: 0, duration: 0.6 }, '-=0.3')
    .from('.hero-title', { y: 60, opacity: 0, duration: 1 }, '-=0.5')
    .from('.title-highlight', { backgroundSize: '0% 100%', duration: 0.8 }, '-=0.3')
    .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-actions > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')
    .from('.hero-stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')

  // Blind reveal on scroll - blinds close as user scrolls down through hero
  const blindTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
    }
  })

  blindTl.fromTo('.blind-strip',
    { scaleY: 0 },
    { scaleY: 1, stagger: 0.05, ease: 'none' }
  )

  // Hero parallax
  scrollTriggers.push(
    gsap.to('.hero-bg-img', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 200,
      scale: 1.1,
      ease: 'none'
    })
  )


  // About section - SPLIT ANIMATION
  // Image from left
  scrollTriggers.push(
    gsap.fromTo('.about-image-wrapper',
      { x: -100, opacity: 0 },
      {
        scrollTrigger: { trigger: '.about-preview', start: 'top 80%' },
        x: 0, opacity: 1, duration: 1.2, ease: 'power4.out'
      }
    )
  )

  // Badge pops in
  scrollTriggers.push(
    gsap.fromTo('.about-image-badge',
      { scale: 0, rotation: -90 },
      {
        scrollTrigger: { trigger: '.about-preview', start: 'top 70%' },
        scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)'
      }
    )
  )

  // Content from right with stagger
  scrollTriggers.push(
    gsap.fromTo('.about-content-col > *',
      { x: 80, opacity: 0 },
      {
        scrollTrigger: { trigger: '.about-preview', start: 'top 75%' },
        x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      }
    )
  )

  // What We Offer section - ANIMATED
  // Header scales up
  scrollTriggers.push(
    gsap.fromTo('.offer-header',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.what-we-offer', start: 'top 85%' },
        y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out'
      }
    )
  )

  // Offer cards stagger from bottom
  scrollTriggers.push(
    gsap.fromTo('.offer-card',
      { y: 80, opacity: 0, scale: 0.9 },
      {
        scrollTrigger: { trigger: '.offer-grid', start: 'top 85%' },
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out'
      }
    )
  )

  // CTA rises up
  scrollTriggers.push(
    gsap.fromTo('.offer-cta',
      { y: 60, opacity: 0 },
      {
        scrollTrigger: { trigger: '.offer-cta', start: 'top 90%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
      }
    )
  )

  // Craft Section - Enhanced animations
  scrollTriggers.push(
    gsap.fromTo('.craft-label',
      { y: 30, opacity: 0, letterSpacing: '0.5em' },
      {
        scrollTrigger: { trigger: '.craft-section', start: 'top 80%' },
        y: 0, opacity: 1, letterSpacing: '0.3em', duration: 0.8, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.craft-title',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.craft-section', start: 'top 75%' },
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.craft-desc',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: { trigger: '.craft-section', start: 'top 70%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
      }
    )
  )

  // Stats counter animation
  document.querySelectorAll('.craft-stat').forEach((stat, index) => {
    scrollTriggers.push(
      gsap.fromTo(stat,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          scrollTrigger: { trigger: '.craft-stats', start: 'top 85%' },
          y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: index * 0.15
        }
      )
    )
  })

  // Craft image - set initial state hidden
  gsap.set('.craft-image', { clipPath: 'inset(100% 0 0 0)' })
  gsap.set('.craft-image img', { scale: 1.3 })
  gsap.set('.craft-image-accent', { scale: 0, rotation: -45 })

  // Craft image reveal timeline
  const craftImageTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.craft-image-wrapper',
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })

  craftImageTl
    .to('.craft-image', {
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.5,
      ease: 'power4.out'
    })
    .to('.craft-image img', {
      scale: 1,
      duration: 2,
      ease: 'power3.out'
    }, 0)
    .to('.craft-image-accent', {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)'
    }, 0.5)

  scrollTriggers.push(craftImageTl)

  // Services section - CURTAIN LAYER REVEAL
  gsap.set('.services-content', { opacity: 0, y: 30 })
  gsap.set('.services-header', { opacity: 0, y: 40 })
  gsap.set('.service-card', { opacity: 0, y: 50, scale: 0.9 })

  const servicesTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  servicesTimeline
    .to('.curtain-top', { yPercent: -100, duration: 1, ease: 'power4.inOut' })
    .to('.curtain-bottom', { yPercent: 100, duration: 1, ease: 'power4.inOut' }, '<')
    .to('.services-content', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.services-header', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .to('.service-card', { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.4')

  scrollTriggers.push(servicesTimeline)

  // Blob animation
  scrollTriggers.push(
    gsap.to('.blob-shape', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -150,
      rotation: 60,
      ease: 'none'
    })
  )

  // Portfolio section - SPLIT LAYER REVEAL
  gsap.set('.portfolio-content', { opacity: 0 })
  gsap.set('.portfolio-header', { opacity: 0, y: 50 })
  gsap.set('.portfolio-item', { opacity: 0, scale: 0.85 })
  gsap.set('.split-center-line', { scaleX: 0 })

  const portfolioRevealTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.portfolio-section',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })

  portfolioRevealTl
    .to('.split-center-line', { scaleX: 1, duration: 0.6, ease: 'power4.out' })
    .to('.split-top', { yPercent: -100, duration: 1, ease: 'power3.inOut' })
    .to('.split-bottom', { yPercent: 100, duration: 1, ease: 'power3.inOut' }, '<')
    .to('.split-center-line', { opacity: 0, duration: 0.4 }, '<0.2')
    .to('.portfolio-content', { opacity: 1, duration: 0.5 }, '-=0.5')
    .to('.portfolio-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
    .to('.portfolio-item', { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.4')

  scrollTriggers.push(portfolioRevealTl)

  // Story Section - Simple row with clip-path reveal
  scrollTriggers.push(
    gsap.fromTo('.story-content > *',
      { x: -60, opacity: 0 },
      {
        scrollTrigger: { trigger: '.story-section', start: 'top 80%' },
        x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out'
      }
    )
  )

  // Image with clip-path reveal
  scrollTriggers.push(
    gsap.fromTo('.story-image',
      { clipPath: 'inset(0 0 0 100%)', opacity: 0 },
      {
        scrollTrigger: { trigger: '.story-section', start: 'top 80%' },
        clipPath: 'inset(0 0% 0 0%)',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut'
      }
    )
  )

  // Testimonial - SCALE & FADE
  scrollTriggers.push(
    gsap.fromTo('.quote-icon',
      { scale: 0, rotation: -45 },
      {
        scrollTrigger: { trigger: '.testimonial-section', start: 'top 80%' },
        scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.testimonial-quote',
      { y: 50, opacity: 0 },
      {
        scrollTrigger: { trigger: '.testimonial-section', start: 'top 75%' },
        y: 0, opacity: 1, duration: 1, ease: 'power3.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.testimonial-author',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.testimonial-section', start: 'top 70%' },
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
      }
    )
  )

  // CTA - SPLIT ANIMATION
  scrollTriggers.push(
    gsap.fromTo('.cta-content',
      { x: -80, opacity: 0 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
        x: 0, opacity: 1, duration: 1, ease: 'power4.out'
      }
    )
  )

  scrollTriggers.push(
    gsap.fromTo('.cta-badge',
      { x: 80, opacity: 0, scale: 0.8 },
      {
        scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
        x: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)'
      }
    )
  )

  // Service card hover effects - smooth transitions
  document.querySelectorAll('.service-card').forEach(card => {
    const icon = card.querySelector('.service-icon')
    const title = card.querySelector('h3')
    const link = card.querySelector('.card-link')

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        boxShadow: '0 25px 50px rgba(13, 115, 119, 0.12)',
        borderColor: 'rgba(13, 115, 119, 0.15)',
        duration: 0.5,
        ease: 'power3.out'
      })
      gsap.to(icon, { scale: 1.15, y: -8, duration: 0.4, ease: 'power3.out' })
      gsap.to(title, { color: 'var(--accent-teal)', x: 3, duration: 0.3, ease: 'power2.out' })
      gsap.to(link, { x: 5, duration: 0.3, ease: 'power2.out' })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        borderColor: 'transparent',
        duration: 0.5,
        ease: 'power3.out'
      })
      gsap.to(icon, { scale: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      gsap.to(title, { color: 'var(--text-primary)', x: 0, duration: 0.3, ease: 'power2.out' })
      gsap.to(link, { x: 0, duration: 0.3, ease: 'power2.out' })
    })
  })

  // Offer card hover effects - smooth transitions
  document.querySelectorAll('.offer-card').forEach(card => {
    const icon = card.querySelector('.offer-card-icon')
    const number = card.querySelector('.offer-card-number')
    const title = card.querySelector('.offer-card-title')

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        boxShadow: '0 25px 50px rgba(13, 115, 119, 0.15)',
        borderColor: 'rgba(13, 115, 119, 0.2)',
        duration: 0.5,
        ease: 'power3.out'
      })
      gsap.to(icon, { scale: 1.1, y: -5, duration: 0.4, ease: 'power3.out' })
      gsap.to(number, { color: 'var(--accent-teal)', opacity: 0.8, duration: 0.4, ease: 'power2.out' })
      gsap.to(title, { color: 'var(--accent-teal)', duration: 0.3, ease: 'power2.out' })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        duration: 0.5,
        ease: 'power3.out'
      })
      gsap.to(icon, { scale: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      gsap.to(number, { color: 'var(--border-medium)', opacity: 0.5, duration: 0.4, ease: 'power2.out' })
      gsap.to(title, { color: 'var(--text-primary)', duration: 0.3, ease: 'power2.out' })
    })
  })

  // Portfolio items - smooth hover
  document.querySelectorAll('.portfolio-item:not(.portfolio-cta)').forEach(item => {
    const img = item.querySelector('img')
    const overlay = item.querySelector('.portfolio-overlay')
    const category = item.querySelector('.portfolio-category')

    item.addEventListener('mouseenter', () => {
      gsap.to(item, { y: -8, duration: 0.5, ease: 'power3.out' })
      gsap.to(img, { scale: 1.08, duration: 0.7, ease: 'power3.out' })
      gsap.to(overlay, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' })
      if (category) gsap.to(category, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
    })

    item.addEventListener('mouseleave', () => {
      gsap.to(item, { y: 0, duration: 0.5, ease: 'power3.out' })
      gsap.to(img, { scale: 1, duration: 0.7, ease: 'power3.out' })
      gsap.to(overlay, { y: 10, opacity: 0.95, duration: 0.4, ease: 'power3.out' })
      if (category) gsap.to(category, { scale: 1, duration: 0.3, ease: 'power2.out' })
    })
  })
})

onUnmounted(() => {
  scrollTriggers.forEach(trigger => {
    if (trigger && trigger.kill) trigger.kill()
  })
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Hero Blinds - scroll reveal */
.hero-blinds {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  pointer-events: none;
}

.blind-strip {
  flex: 1;
  height: 100%;
  background: var(--bg-primary);
  transform: scaleY(0);
  transform-origin: bottom center;
  will-change: transform;
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
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(250, 249, 247, 0.97) 0%,
    rgba(250, 249, 247, 0.9) 40%,
    rgba(250, 249, 247, 0.7) 70%,
    rgba(250, 249, 247, 0.4) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 60px 80px;
}

.hero-content {
  max-width: 700px;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 24px;
}

.label-line {
  width: 40px;
  height: 2px;
  background: var(--accent-teal);
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 300;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 28px;
}

.title-highlight {
  background: linear-gradient(120deg, var(--accent-teal) 0%, var(--accent-teal) 100%);
  background-repeat: no-repeat;
  background-size: 100% 30%;
  background-position: 0 90%;
}

.title-italic {
  font-weight: 500;
  color: var(--accent-teal);
}

.hero-desc {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
}

.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 32px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-hero-primary:hover {
  background: var(--bg-teal-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(13, 115, 119, 0.3);
}

.btn-hero-primary svg {
  transition: transform 0.3s ease;
}

.btn-hero-primary:hover svg {
  transform: translateX(4px);
}

.btn-hero-secondary {
  padding: 18px 28px;
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-hero-secondary:hover {
  border-color: var(--text-primary);
  background: var(--text-primary);
  color: white;
}

.hero-stats {
  display: flex;
  gap: 48px;
}

.hero-stat {
  display: flex;
  flex-direction: column;
}

.hero-stat-number {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  color: var(--text-primary);
}

.hero-stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
}


.hero-curve {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 10;
}

.hero-curve svg {
  width: 100%;
  height: 100px;
  display: block;
}

/* About Preview Section */
.about-preview {
  padding: 140px 0;
  background: var(--bg-primary);
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.about-image-wrapper {
  position: relative;
}

.about-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.12);
}

.about-image-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  background: var(--accent-teal);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 15px 40px rgba(13, 115, 119, 0.3);
}

.badge-number {
  font-family: var(--font-serif);
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
}

.badge-text {
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
  opacity: 0.9;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0;
}

.about-feature {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-teal);
}

.about-feature span {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: transparent;
  border: 2px solid var(--accent-teal);
  border-radius: 8px;
  color: var(--accent-teal);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--accent-teal);
  color: white;
}

.btn-outline svg {
  transition: transform 0.3s ease;
}

.btn-outline:hover svg {
  transform: translateX(4px);
}

/* What We Offer Section */
.what-we-offer {
  padding: 140px 0;
  background: var(--bg-primary);
  position: relative;
}

.offer-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 70px;
}

.offer-intro {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-top: 20px;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  min-height: 200px;
}

.offer-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 40px 32px;
  position: relative;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  cursor: pointer;
  will-change: transform, box-shadow;
  overflow: hidden;
}

.offer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-teal), var(--bg-teal-dark));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.offer-card:hover::before {
  transform: scaleX(1);
}

.offer-card-number {
  position: absolute;
  top: 24px;
  right: 28px;
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 400;
  color: var(--border-medium);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.offer-card-icon {
  font-size: 48px;
  margin-bottom: 24px;
  display: inline-block;
  will-change: transform;
}

.offer-card-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 14px;
  transition: color 0.3s ease;
}

.offer-card-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.offer-card-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.offer-card-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-secondary);
}

.offer-card-features svg {
  color: var(--accent-teal);
  flex-shrink: 0;
}

.offer-cta {
  margin-top: 70px;
  text-align: center;
  padding: 50px;
  background: var(--bg-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.offer-cta p {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 500px;
}

/* Services Section */
.services-section {
  padding: 160px 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}


/* Curtain Overlay */
.curtain-overlay {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--bg-primary);
  z-index: 50;
  pointer-events: none;
}

.curtain-top {
  top: 0;
}

.curtain-bottom {
  bottom: 0;
}

.services-content {
  position: relative;
  z-index: 2;
}

.section-wave {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
}

.section-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

.wave-top {
  top: -1px;
}

.wave-bottom {
  bottom: -1px;
}

.blob-shape {
  position: absolute;
  top: -100px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(13, 115, 119, 0.1), rgba(13, 115, 119, 0.03));
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  z-index: 0;
}

.services-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.section-subtitle {
  font-size: 17px;
  color: var(--text-secondary);
  margin-top: 16px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}

.service-card {
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 36px 28px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  will-change: transform, box-shadow;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-teal), var(--bg-teal-dark));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  font-size: 44px;
  margin-bottom: 20px;
  display: inline-block;
  will-change: transform;
}

.service-card h3 {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.service-card p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-teal);
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-link:hover {
  gap: 12px;
}

/* Portfolio Section */
.portfolio-section {
  padding: 120px 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

/* Portfolio Split Layer */
.split-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
}

.split-layer {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(135deg, #0d7377 0%, #0a5c5f 50%, #1a1a1a 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.split-top {
  top: 0;
  align-items: flex-end;
  padding-bottom: 30px;
}

.split-bottom {
  bottom: 0;
  align-items: flex-start;
  padding-top: 30px;
}

.split-text {
  font-family: var(--font-serif);
  font-size: clamp(40px, 10vw, 120px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.15);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.split-center-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--accent-teal);
  transform: translateY(-50%);
  z-index: 10;
  box-shadow: 0 0 20px var(--accent-teal), 0 0 40px var(--accent-teal);
}


.portfolio-content {
  position: relative;
  z-index: 10;
}

.portfolio-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
}

.portfolio-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  will-change: transform;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.portfolio-item-large {
  grid-row: span 2;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  background: #f5f3f0;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: contain;
  padding: 20px;
  will-change: transform;
}

.portfolio-item-large .portfolio-image img {
  min-height: 100%;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  color: white;
  transform: translateY(20px);
  opacity: 0.9;
}

.portfolio-category {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--accent-teal);
  padding: 6px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.portfolio-overlay h4 {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 400;
}

.portfolio-cta {
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-cta-content {
  text-align: center;
  padding: 40px;
}

.portfolio-cta h4 {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.portfolio-cta p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

/* Testimonial Section */
.testimonial-section {
  padding: 140px 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.testimonial-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.quote-icon {
  color: var(--accent-teal);
  opacity: 0.3;
  margin-bottom: 24px;
}

.testimonial-quote {
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: var(--accent-teal);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
}

.author-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.author-name {
  font-weight: 600;
  color: var(--text-primary);
}

.author-title {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  z-index: 0;
}

.deco-circle-1 {
  width: 350px;
  height: 350px;
  top: -100px;
  left: -100px;
}

.deco-circle-2 {
  width: 250px;
  height: 250px;
  bottom: -60px;
  right: -80px;
  border-color: var(--accent-teal);
  opacity: 0.2;
}

/* Craft Section - Dark */
.craft-section {
  position: relative;
  padding: 180px 0 140px;
  background: linear-gradient(135deg, #0d7377 0%, #0a5c5f 40%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
}

.craft-curve {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
}

.craft-curve svg {
  width: 100%;
  height: 80px;
  display: block;
}

.craft-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.craft-label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.craft-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 300;
  line-height: 1.15;
  margin-bottom: 28px;
}

.craft-title em {
  font-style: normal;
  font-weight: 200;
}

.craft-desc {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 50px;
}

.craft-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.craft-stat {
  text-align: center;
}

.craft-stat-number {
  display: block;
  font-family: var(--font-serif);
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 8px;
}

.craft-stat-label {
  font-size: 13px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
}

.craft-image-wrapper {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.craft-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
  will-change: clip-path;
}

.craft-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.craft-image:hover img {
  transform: scale(1.03);
}

.craft-image-accent {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: -1;
}

@media (max-width: 1024px) {
  .craft-curve {
    display: none;
  }

  .craft-section {
    padding: 120px 0 100px;
  }

  .craft-stats {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .craft-stats {
    flex-direction: column;
    gap: 30px;
  }

  .craft-stat-number {
    font-size: 40px;
  }

  .craft-image img {
    height: 350px;
  }

  .craft-image-accent {
    display: none;
  }
}

/* Story Section */
.story-section {
  padding: 140px 0;
  background: var(--bg-secondary);
  position: relative;
}

.story-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.story-content {
  padding: 20px 0;
}

.story-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.story-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--accent-teal);
  margin-top: 16px;
  transition: all 0.3s ease;
}

.story-link:hover {
  gap: 16px;
}

.story-link svg {
  transition: transform 0.3s ease;
}

.story-link:hover svg {
  transform: translateX(4px);
}

.story-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  will-change: clip-path;
}

.story-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.story-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .story-row {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .story-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 100px 0;
  }

  .story-image img {
    height: 320px;
  }
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: var(--accent-teal);
  position: relative;
  overflow: hidden;
}

.cta-curve {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.cta-curve svg {
  width: 100%;
  height: 60px;
  display: block;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cta-content {
  max-width: 500px;
}

.cta-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 400;
  line-height: 1.1;
  color: white;
  margin-bottom: 20px;
}

.cta-title em {
  font-style: normal;
  font-weight: 200;
}

.cta-desc {
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 36px;
}

.cta-actions {
  display: flex;
  gap: 16px;
}

.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: white;
  color: var(--accent-teal);
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.btn-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: transparent;
  color: white;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-cta-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: white;
}

.cta-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  text-align: center;
}

.cta-badge-number {
  font-family: var(--font-serif);
  font-size: 56px;
  font-weight: 400;
  color: white;
  line-height: 1;
}

.cta-badge-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 8px;
}

.cta-shape {
  position: absolute;
  bottom: -200px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

/* Vertical Progress Bar */
.vertical-progress {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 20;
}

.vertical-progress.right {
  left: auto;
  right: 40px;
}

.v-progress-track {
  width: 3px;
  height: 100px;
  background: var(--border-light);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.v-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--accent-teal);
  border-radius: 3px;
}

.v-progress-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--text-light);
}

/* Common Styles */
.section-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-primary);
}

.section-title em {
  font-style: normal;
  font-weight: 200;
  color: var(--accent-teal);
}

.section-desc {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

/* Responsive */
@media (max-width: 1200px) {
  .services-grid,
  .offer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .vertical-progress {
    display: none;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    padding: 140px 40px 100px;
  }

  .about-grid,
  .cta-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about-image-badge {
    bottom: 20px;
    right: 20px;
  }

  .cta-badge {
    display: none;
  }

  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }

  .portfolio-item-large {
    grid-row: span 1;
  }

  .hero-curve,
  .section-wave,
  .cta-curve {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 120px 24px 80px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-hero-primary,
  .btn-hero-secondary {
    justify-content: center;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 32px;
  }


  .services-grid,
  .portfolio-grid,
  .offer-grid {
    grid-template-columns: 1fr;
  }

  .offer-cta {
    padding: 40px 24px;
  }

  .cta-actions {
    flex-direction: column;
  }

  .deco-circle {
    display: none;
  }
}
/* Featured Products Section */
.featured-products {
  padding: 100px 0 80px;
  background: var(--bg-secondary);
}

.featured-header {
  text-align: center;
  margin-bottom: 40px;
}

.featured-header .section-desc {
  max-width: 520px;
  margin: 0 auto;
}

/* Tabs */
.feat-tabs {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.feat-tab {
  padding: 10px 22px;
  background: transparent;
  border: 1.5px solid var(--border-medium);
  border-radius: 100px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.25s ease;
}

.feat-tab:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

.feat-tab.active {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
}

/* Grid */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.featured-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  border-color: rgba(13, 115, 119, 0.15);
}

.featured-img-wrap {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f7f5;
}

.featured-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.featured-card:hover .featured-img-wrap img {
  transform: scale(1.05);
}

.featured-hover {
  position: absolute;
  bottom: 12px;
  right: 12px;
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.3s ease;
}

.featured-card:hover .featured-hover {
  opacity: 1;
  transform: translateY(0);
}

.featured-quote-btn {
  padding: 8px 18px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(13, 115, 119, 0.3);
}

.featured-quote-btn:hover {
  background: var(--bg-teal-dark);
}

.featured-card-info {
  padding: 16px 18px 20px;
}

.featured-card-info h4 {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 4px;
}

.featured-card-info p {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.4;
}

.featured-cta-row {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .featured-products {
    padding: 60px 0;
  }

  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .featured-card-info {
    padding: 12px 14px 16px;
  }

  .featured-card-info h4 {
    font-size: 13px;
  }

  .featured-card-info p {
    font-size: 11px;
  }

  .featured-img-wrap img {
    padding: 14px;
  }

  .feat-tab {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>
