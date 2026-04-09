<template>
  <div class="products-page">
    <!-- Hero Banner -->
    <section class="products-hero">
      <div class="products-hero-bg"></div>
      <div class="container">
        <div class="products-hero-content">
          <span class="section-label">Our Products</span>
          <h1 class="products-hero-title">
            Premium Print<br><em>Products</em>
          </h1>
          <p class="products-hero-desc">
            Explore our extensive range of 85+ printing and branding products. From business cards to outdoor signage, we deliver exceptional quality for every need.
          </p>
        </div>
      </div>
      <div class="products-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C320,120 720,120 1440,60 L1440,120 L0,120 Z" fill="var(--bg-primary)"/>
        </svg>
      </div>
    </section>

    <!-- Filter Bar -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="filter-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            <span class="filter-icon">{{ cat.icon }}</span>
            {{ cat.name }}
            <span class="filter-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>
        <div class="search-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="search-input"
          />
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-grid-section">
      <div class="container">
        <div class="products-count">
          Showing <strong>{{ visibleProducts.length }}</strong> of <strong>{{ filteredProducts.length }}</strong> products
        </div>
        <div class="products-grid">
          <div
            v-for="(product, index) in visibleProducts"
            :key="product.slug"
            class="product-card"
            :style="{ '--delay': (index % 12) * 0.05 + 's' }"
          >
            <div class="product-image-wrapper">
              <img
                :src="'/products/' + product.slug + '.webp'"
                :alt="product.name"
                class="product-image"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
              />
              <div class="product-overlay">
                <button class="btn-quote-product" @click="openServiceForm">
                  Get Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
              <span class="product-badge">{{ product.category }}</span>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-desc">{{ product.description }}</p>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div v-if="hasMore" class="load-more-wrap">
          <button class="btn-load-more" @click="loadMore">
            Load More Products
            <span class="load-more-count">{{ filteredProducts.length - visibleCount }} remaining</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>

        <div v-if="filteredProducts.length === 0" class="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="products-cta">
      <div class="container">
        <div class="products-cta-content">
          <h2>Can't Find What You're Looking For?</h2>
          <p>We offer custom printing solutions tailored to your specific requirements. Get in touch with our team for a personalized quote.</p>
          <div class="products-cta-actions">
            <button class="btn-primary" @click="openServiceForm">
              Request Custom Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="https://wa.me/971567268735" target="_blank" class="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const openServiceForm = inject('openServiceForm')
const activeCategory = ref('all')
const searchQuery = ref('')
const ITEMS_PER_PAGE = 12
const visibleCount = ref(ITEMS_PER_PAGE)

// Reset visible count when filter or search changes
watch([activeCategory, searchQuery], () => {
  visibleCount.value = ITEMS_PER_PAGE
})

const categories = [
  { id: 'all', name: 'All Products', icon: '📦' },
  { id: 'Business Cards', name: 'Business Cards', icon: '💳' },
  { id: 'Printing & Publications', name: 'Printing', icon: '🖨️' },
  { id: 'Stationery', name: 'Stationery', icon: '📝' },
  { id: 'Labels & Stickers', name: 'Labels & Stickers', icon: '🏷️' },
  { id: 'Packaging', name: 'Packaging', icon: '📦' },
  { id: 'Signage & Banners', name: 'Signage & Banners', icon: '🪧' },
  { id: 'Branding & Displays', name: 'Branding', icon: '🎯' },
  { id: 'Apparel & Merchandise', name: 'Apparel', icon: '👕' },
  { id: 'Awards & Gifts', name: 'Awards & Gifts', icon: '🏆' },
  { id: 'Signage & Letters', name: 'Signage Letters', icon: '✨' },
]

const products = [
  // Business Cards
  { slug: 'die-cut-business-cards', name: 'Die-Cut Business Cards', category: 'Business Cards', description: 'Custom-shaped cards that stand out from the crowd with unique die-cut designs.' },
  { slug: 'gold-foil-business-cards', name: 'Gold Foil Business Cards', category: 'Business Cards', description: 'Luxurious gold foil stamped cards for a premium, elegant first impression.' },
  { slug: 'metal-business-cards', name: 'Metal Business Cards', category: 'Business Cards', description: 'Durable metal cards that leave a lasting impression with a modern, sleek finish.' },
  { slug: 'frostedclear-pvc-cards', name: 'Frosted & Clear PVC Cards', category: 'Business Cards', description: 'Transparent or frosted PVC cards for a unique, eye-catching look.' },
  { slug: 'textured-business-cards', name: 'Textured Business Cards', category: 'Business Cards', description: 'Tactile finishes that add depth and character to your business card design.' },
  { slug: 'square-business-cards', name: 'Square Business Cards', category: 'Business Cards', description: 'Modern square-format cards that break away from traditional rectangular shapes.' },
  { slug: 'premium-mattesoft-touch-cards', name: 'Premium Matte Soft-Touch Cards', category: 'Business Cards', description: 'Velvety smooth matte finish cards with a luxurious soft-touch coating.' },
  { slug: 'nfcsmart-business-card', name: 'NFC Smart Business Card', category: 'Business Cards', description: 'Technology-enabled cards with embedded NFC chip for instant digital sharing.' },
  { slug: 'special-cards', name: 'Special Finish Cards', category: 'Business Cards', description: 'Premium cards with spot UV, embossing, debossing, and other specialty finishes.' },
  { slug: 'id-cards', name: 'ID Cards', category: 'Business Cards', description: 'Professional employee and membership identification cards with custom printing.' },

  // Printing & Publications
  { slug: 'annual-report', name: 'Annual Reports', category: 'Printing & Publications', description: 'Professional corporate annual reports with premium binding and finishing.' },
  { slug: 'bookss', name: 'Books', category: 'Printing & Publications', description: 'High-quality book printing with various binding options and paper stocks.' },
  { slug: 'magazine', name: 'Magazines', category: 'Printing & Publications', description: 'Vibrant magazine printing with saddle-stitch or perfect binding options.' },
  { slug: 'company-profile', name: 'Company Profiles', category: 'Printing & Publications', description: 'Impressive corporate profiles that showcase your brand story and services.' },
  { slug: 'company-profile-bookle', name: 'Company Profile Booklets', category: 'Printing & Publications', description: 'Compact booklet-format company profiles for presentations and meetings.' },
  { slug: 'spiral-notebooks', name: 'Spiral Notebooks', category: 'Printing & Publications', description: 'Custom branded spiral notebooks for corporate use and promotional giveaways.' },
  { slug: 'desk-calendar', name: 'Desk Calendars', category: 'Printing & Publications', description: 'Custom desk calendars that keep your brand visible all year round.' },

  // Stationery
  { slug: 'letterheads', name: 'Letterheads', category: 'Stationery', description: 'Professional branded letterheads for official correspondence and communication.' },
  { slug: 'envelopes', name: 'Envelopes', category: 'Stationery', description: 'Custom printed envelopes in various sizes for professional mailing needs.' },
  { slug: 'customized-envelopes', name: 'Customized Envelopes', category: 'Stationery', description: 'Fully custom-designed envelopes with special finishes and branding elements.' },
  { slug: 'certificate-folder', name: 'Certificate Folders', category: 'Stationery', description: 'Elegant folders for presenting certificates, diplomas, and important documents.' },
  { slug: 'certificates-with-frame', name: 'Certificates with Frame', category: 'Stationery', description: 'Professionally printed certificates with matching frames for awards and recognition.' },
  { slug: 'die-cut-folders', name: 'Die-Cut Folders', category: 'Stationery', description: 'Custom-shaped presentation folders with die-cut designs and pockets.' },
  { slug: 'delivery-challan', name: 'Delivery Challans', category: 'Stationery', description: 'Custom delivery challan books for efficient logistics and documentation.' },
  { slug: 'invoicencr-books', name: 'Invoice & NCR Books', category: 'Stationery', description: 'Multi-copy carbonless invoice books for seamless business transactions.' },
  { slug: 'pen', name: 'Branded Pens', category: 'Stationery', description: 'Custom printed pens with your logo for everyday brand visibility.' },

  // Labels & Stickers
  { slug: 'product-labels-stickers', name: 'Product Labels & Stickers', category: 'Labels & Stickers', description: 'Custom adhesive labels and stickers for product branding and identification.' },
  { slug: 'die-cut-stickers', name: 'Die-Cut Stickers', category: 'Labels & Stickers', description: 'Precision-cut stickers in any shape for creative branding applications.' },
  { slug: 'sticker-sheets', name: 'Sticker Sheets', category: 'Labels & Stickers', description: 'Multiple stickers on a single sheet for promotional and decorative use.' },
  { slug: 'label-rolls', name: 'Label Rolls', category: 'Labels & Stickers', description: 'Roll-format labels for high-volume product labeling and packaging.' },
  { slug: 'pharma-labels', name: 'Pharmaceutical Labels', category: 'Labels & Stickers', description: 'Compliant pharmaceutical labels meeting industry standards and regulations.' },
  { slug: 'plan-printing-labels', name: 'Plan Printing & Labels', category: 'Labels & Stickers', description: 'Large format plan printing and industrial labeling solutions.' },
  { slug: 'tin-packaging-label', name: 'Tin Packaging Labels', category: 'Labels & Stickers', description: 'Durable labels designed specifically for tin and metal packaging applications.' },
  { slug: 'custom-packing-tape', name: 'Custom Packing Tape', category: 'Labels & Stickers', description: 'Branded packing tape for secure shipping with maximum brand exposure.' },

  // Packaging
  { slug: 'food-packaging-box-custom', name: 'Food Packaging Boxes', category: 'Packaging', description: 'Food-safe custom packaging boxes for restaurants, bakeries, and food brands.' },
  { slug: 'packaging-box-custom', name: 'Custom Packaging Boxes', category: 'Packaging', description: 'Tailor-made packaging solutions designed to protect and showcase your products.' },
  { slug: 'rigid-box-packaging', name: 'Rigid Box Packaging', category: 'Packaging', description: 'Premium rigid boxes for luxury products, gifts, and high-end retail packaging.' },
  { slug: 'productshipping-boxes', name: 'Product & Shipping Boxes', category: 'Packaging', description: 'Sturdy branded boxes for safe shipping and professional product presentation.' },
  { slug: 'paper-shopping-bags', name: 'Paper Shopping Bags', category: 'Packaging', description: 'Eco-friendly branded paper bags for retail, events, and corporate gifting.' },
  { slug: 'printed-bottles', name: 'Printed Bottles', category: 'Packaging', description: 'Custom branded water bottles and drinkware for corporate and promotional use.' },
  { slug: 'printed-satin-ribbons', name: 'Printed Satin Ribbons', category: 'Packaging', description: 'Elegant custom-printed satin ribbons for gift wrapping and luxury packaging.' },
  { slug: 'printed-satin-ribbons-2', name: 'Decorative Satin Ribbons', category: 'Packaging', description: 'Premium satin ribbons with custom designs for events and special occasions.' },

  // Signage & Banners
  { slug: 'outdoor-billboard-and-banners', name: 'Outdoor Billboards & Banners', category: 'Signage & Banners', description: 'Large-format outdoor billboards and banners for maximum visibility and impact.' },
  { slug: 'roll-up-banners', name: 'Roll-Up Banners', category: 'Signage & Banners', description: 'Portable retractable banners perfect for exhibitions, events, and retail spaces.' },
  { slug: 'fence-banners', name: 'Fence Banners', category: 'Signage & Banners', description: 'Weather-resistant mesh banners for fences, construction sites, and events.' },
  { slug: 'oudor-fence-banners', name: 'Outdoor Fence Banners', category: 'Signage & Banners', description: 'Durable outdoor fence banners designed to withstand wind and weather.' },
  { slug: 'outdoor-feather-flags', name: 'Outdoor Feather Flags', category: 'Signage & Banners', description: 'Eye-catching feather flags for storefronts, events, and promotional displays.' },
  { slug: 'teardrop-flags', name: 'Teardrop Flags', category: 'Signage & Banners', description: 'Distinctive teardrop-shaped flags for indoor and outdoor promotional displays.' },
  { slug: 'a-frame-sidewalk-sign', name: 'A-Frame Sidewalk Signs', category: 'Signage & Banners', description: 'Foldable sidewalk signs for restaurants, retail stores, and directional use.' },
  { slug: 'coroplast-signs', name: 'Coroplast Signs', category: 'Signage & Banners', description: 'Lightweight corrugated plastic signs for temporary and semi-permanent displays.' },
  { slug: 'table-flags', name: 'Table Flags', category: 'Signage & Banners', description: 'Mini desktop flags for corporate meetings, events, and reception areas.' },
  { slug: 'canopytent', name: 'Canopy Tents', category: 'Signage & Banners', description: 'Custom branded canopy tents for outdoor events, markets, and promotions.' },
  { slug: 'vinylflex-media-roll', name: 'Vinyl & Flex Media Rolls', category: 'Signage & Banners', description: 'High-quality vinyl and flex media rolls for large-format printing projects.' },

  // Branding & Displays
  { slug: 'backdrop', name: 'Event Backdrops', category: 'Branding & Displays', description: 'Custom event backdrops for press conferences, photo ops, and stage setups.' },
  { slug: 'media-wallstep-and-repeat', name: 'Media Wall & Step-and-Repeat', category: 'Branding & Displays', description: 'Professional media walls and step-and-repeat banners for red carpet events.' },
  { slug: 'exhibition-booth-setup', name: 'Exhibition Booth Setup', category: 'Branding & Displays', description: 'Complete exhibition booth design, fabrication, and setup services.' },
  { slug: 'trade-show-backdropspartitions', name: 'Trade Show Partitions', category: 'Branding & Displays', description: 'Modular backdrop partitions for trade shows and exhibition spaces.' },
  { slug: 'pop-display-stands', name: 'POP Display Stands', category: 'Branding & Displays', description: 'Point-of-purchase display stands that drive retail sales and brand awareness.' },
  { slug: 'glassfacade-branding', name: 'Glass Facade Branding', category: 'Branding & Displays', description: 'Professional glass and window branding for offices, stores, and buildings.' },
  { slug: 'frost-film', name: 'Frost Film', category: 'Branding & Displays', description: 'Privacy frost film for glass surfaces with optional custom branding designs.' },
  { slug: 'office-branding', name: 'Office Branding', category: 'Branding & Displays', description: 'Complete office branding solutions including wall graphics and wayfinding.' },
  { slug: 'vehicle-branding', name: 'Vehicle Branding', category: 'Branding & Displays', description: 'Full and partial vehicle wraps for fleet branding and mobile advertising.' },
  { slug: 'letter-branding', name: 'Letter Branding', category: 'Branding & Displays', description: 'Custom dimensional letter signage for storefronts and interior branding.' },
  { slug: 'promotional-balloons', name: 'Promotional Balloons', category: 'Branding & Displays', description: 'Custom printed balloons for events, store openings, and brand promotions.' },

  // Apparel & Merchandise
  { slug: 'custom-t-shirts', name: 'Custom T-Shirts', category: 'Apparel & Merchandise', description: 'Premium quality custom printed t-shirts for teams, events, and promotions.' },
  { slug: 'polo-t-shirt', name: 'Polo T-Shirts', category: 'Apparel & Merchandise', description: 'Professional branded polo shirts for corporate wear and uniforms.' },
  { slug: 'hoodie', name: 'Hoodies', category: 'Apparel & Merchandise', description: 'Custom printed and embroidered hoodies for brand merchandise and teams.' },
  { slug: 'branded-caps', name: 'Branded Caps', category: 'Apparel & Merchandise', description: 'Custom embroidered and printed caps for promotional and team use.' },
  { slug: 'tote-bags', name: 'Tote Bags', category: 'Apparel & Merchandise', description: 'Eco-friendly branded tote bags for events, retail, and corporate gifting.' },
  { slug: 'lanyards', name: 'Lanyards', category: 'Apparel & Merchandise', description: 'Custom printed lanyards for ID badges, events, and brand visibility.' },
  { slug: 'wrist-bands', name: 'Wrist Bands', category: 'Apparel & Merchandise', description: 'Custom wristbands for events, concerts, festivals, and access control.' },
  { slug: 'part-bands', name: 'Party Bands', category: 'Apparel & Merchandise', description: 'Custom branded party and event wristbands with various material options.' },
  { slug: 'printed-mugs', name: 'Printed Mugs', category: 'Apparel & Merchandise', description: 'Custom printed ceramic mugs for corporate gifts and promotional merchandise.' },
  { slug: 'welcome-kits', name: 'Welcome Kits', category: 'Apparel & Merchandise', description: 'Curated onboarding and welcome kits for new employees and VIP clients.' },

  // Awards & Gifts
  { slug: 'trophyawards', name: 'Trophies & Awards', category: 'Awards & Gifts', description: 'Custom trophies and awards for corporate recognition and achievements.' },
  { slug: 'badgesmedallions', name: 'Badges & Medallions', category: 'Awards & Gifts', description: 'Custom metal badges and medallions for events, awards, and branding.' },

  // Signage & Letters
  { slug: '3d-acryliccolored-letters', name: '3D Acrylic Colored Letters', category: 'Signage & Letters', description: 'Vibrant 3D acrylic letters for eye-catching indoor and outdoor signage.' },
  { slug: '3d-metal-letters-signage', name: '3D Metal Letter Signage', category: 'Signage & Letters', description: 'Premium metal letter signage for a professional and durable brand presence.' },
  { slug: 'neon-signage', name: 'Neon Signage', category: 'Signage & Letters', description: 'Custom LED neon signs for storefronts, offices, and event installations.' },
  { slug: 'acrylic-name-plate', name: 'Acrylic Name Plates', category: 'Signage & Letters', description: 'Elegant acrylic name plates for offices, desks, and door signage.' },
  { slug: 'wooden-name-plate', name: 'Wooden Name Plates', category: 'Signage & Letters', description: 'Classic wooden name plates with engraving for a warm, natural aesthetic.' },
  { slug: 'table-top-name-plate', name: 'Table-Top Name Plates', category: 'Signage & Letters', description: 'Professional desk name plates for executives, conferences, and reception.' },

  // Miscellaneous
  { slug: 'able-cover', name: 'Table Covers', category: 'Branding & Displays', description: 'Custom branded table covers for exhibitions, events, and trade shows.' },
  { slug: 'table-mat', name: 'Table Mats', category: 'Branding & Displays', description: 'Custom printed table mats for restaurants, hotels, and corporate dining.' },
  { slug: 'car-mat', name: 'Car Mats', category: 'Apparel & Merchandise', description: 'Custom branded car mats for dealerships and corporate fleet vehicles.' },
  { slug: 'footrace-mat-for-car', name: 'Car Floor Mats', category: 'Apparel & Merchandise', description: 'Durable custom car floor mats with branded designs and logos.' },
]

const getCategoryCount = (categoryId) => {
  if (categoryId === 'all') return products.length
  return products.filter(p => p.category === categoryId).length
}

const filteredProducts = computed(() => {
  let result = products
  if (activeCategory.value !== 'all') {
    result = result.filter(p => p.category === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
  }
  return result
})

const visibleProducts = computed(() => filteredProducts.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < filteredProducts.value.length)

const loadMore = () => {
  visibleCount.value += ITEMS_PER_PAGE
}
</script>

<style scoped>
/* Hero */
.products-hero {
  position: relative;
  padding: 200px 0 140px;
  overflow: hidden;
  min-height: 420px;
}

.products-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0d7377 0%, #0a5c5f 50%, #073e40 100%);
}

.products-hero-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.products-hero-bg::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
  border-radius: 50%;
}

.products-hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.products-hero .section-label {
  color: rgba(255, 255, 255, 0.85);
}

.products-hero-title {
  font-family: var(--font-serif);
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 300;
  color: white;
  line-height: 1.1;
  margin-bottom: 24px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.15);
}

.products-hero-title em {
  font-style: normal;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.85);
}

.products-hero-desc {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 520px;
}

.products-hero-curve {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
}

.products-hero-curve svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* Filter Section */
.filter-section {
  padding: 40px 0 0;
  position: sticky;
  top: 70px;
  z-index: 50;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-light);
}

.filter-bar {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.filter-bar::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 100px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
}

.filter-btn.active {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
}

.filter-icon {
  font-size: 14px;
}

.filter-count {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  background: rgba(0,0,0,0.06);
}

.filter-btn.active .filter-count {
  background: rgba(255,255,255,0.25);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  margin-top: 8px;
  margin-bottom: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 10px;
  max-width: 360px;
  transition: border-color 0.25s ease;
}

.search-bar:focus-within {
  border-color: var(--accent-teal);
}

.search-bar svg {
  color: var(--text-light);
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  border: none;
  background: none;
  font-size: 14px;
  color: var(--text-primary);
  outline: none;
}

.search-input::placeholder {
  color: var(--text-light);
}

/* Products Grid */
.products-grid-section {
  padding: 40px 0 80px;
}

.products-count {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 24px;
}

.products-count strong {
  color: var(--text-primary);
  font-weight: 600;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: cardFadeIn 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  border-color: rgba(13, 115, 119, 0.15);
}

.product-image-wrapper {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f7f5;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-overlay {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
  transform: translateY(0);
}

.btn-quote-product {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(13, 115, 119, 0.35);
}

.btn-quote-product:hover {
  background: var(--bg-teal-dark);
  box-shadow: 0 6px 18px rgba(13, 115, 119, 0.45);
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  background: rgba(255,255,255,0.95);
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--accent-teal);
  backdrop-filter: blur(8px);
}

.product-info {
  padding: 16px 18px 20px;
}

.product-name {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
  line-height: 1.3;
}

.product-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Load More */
.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.btn-load-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: white;
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-load-more:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(13, 115, 119, 0.15);
}

.load-more-count {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-light);
  padding: 2px 10px;
  background: var(--bg-secondary);
  border-radius: 20px;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 80px 0;
  color: var(--text-light);
}

.no-results svg {
  margin-bottom: 16px;
  opacity: 0.4;
}

.no-results h3 {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.no-results p {
  font-size: 14px;
}

/* CTA Section */
.products-cta {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.products-cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.products-cta-content h2 {
  font-family: var(--font-serif);
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 300;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.products-cta-content p {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.products-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .products-hero {
    padding: 150px 0 100px;
  }

  .filter-section {
    top: 60px;
  }
}

@media (max-width: 768px) {
  .products-hero {
    padding: 130px 0 80px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .product-info {
    padding: 12px 14px 16px;
  }

  .product-name {
    font-size: 14px;
  }

  .product-desc {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }

  .filter-section {
    top: 56px;
  }

  .search-bar {
    max-width: 100%;
  }

  .products-cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .products-hero {
    padding: 120px 0 60px;
  }

  .products-hero-desc {
    font-size: 15px;
  }

  .product-image {
    padding: 12px;
  }

  .product-badge {
    font-size: 9px;
    padding: 3px 8px;
  }

  .filter-btn {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
