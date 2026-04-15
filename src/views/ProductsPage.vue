<template>
  <div class="products-page">
    <!-- Breadcrumb Bar -->
    <div class="breadcrumb-bar">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="breadcrumb-sep">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </span>
          <span class="breadcrumb-current">Products</span>
        </nav>
        <p class="breadcrumb-results">{{ filteredProducts.length }} products available</p>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="container">
      <div class="products-layout">

        <!-- Mobile Search -->
        <div class="mobile-search">
          <div class="search-box">
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
            <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Mobile Horizontal Filter Bar -->
        <div class="mobile-filter-bar">
          <button
            v-for="cat in categories"
            :key="'m-' + cat.id"
            class="mobile-filter-chip"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            {{ cat.name }}
            <span class="chip-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>

        <!-- Desktop Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-inner">
            <!-- Search -->
            <div class="sidebar-search">
              <div class="search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search products..."
                  class="search-input"
                />
                <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
            </div>

            <!-- Categories -->
            <div class="sidebar-section">
              <div class="sidebar-section-header">
                <h3 class="sidebar-title">Categories</h3>
                <button
                  v-if="activeCategory !== 'all' || searchQuery"
                  class="clear-filters"
                  @click="clearFilters"
                >
                  Clear Filters
                </button>
              </div>
              <ul class="category-list">
                <li
                  v-for="cat in categories"
                  :key="cat.id"
                  class="category-item"
                  :class="{ active: activeCategory === cat.id }"
                  @click="activeCategory = cat.id"
                >
                  <span class="category-icon">{{ cat.icon }}</span>
                  <span class="category-name">{{ cat.name }}</span>
                  <span class="category-count">{{ getCategoryCount(cat.id) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- Product Grid Area -->
        <main class="products-main">
          <!-- Top Toolbar -->
          <div class="grid-toolbar">
            <div class="toolbar-left">
              <span class="showing-count">
                Showing <strong>{{ visibleProducts.length }}</strong> of <strong>{{ filteredProducts.length }}</strong> products
              </span>
            </div>
            <div class="toolbar-right">
              <div class="view-toggle">
                <button class="view-btn active" title="Grid View">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                  </svg>
                </button>
                <button class="view-btn" title="List View">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                  </svg>
                </button>
              </div>
              <div class="sort-dropdown">
                <select class="sort-select">
                  <option>Default</option>
                  <option>Name: A-Z</option>
                  <option>Name: Z-A</option>
                  <option>Category</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Products Grid -->
          <div v-if="filteredProducts.length > 0" class="products-grid">
            <div
              v-for="(product, index) in visibleProducts"
              :key="product.slug"
              class="product-card"
              :style="{ '--delay': (index % 12) * 0.04 + 's' }"
              @click="openProduct(product)"
            >
              <div class="product-image-area">
                <img
                  :src="'/products/' + product.slug + '.webp'"
                  :alt="product.name"
                  class="product-image"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                />
              </div>
              <div class="product-body">
                <span class="product-category-tag">{{ product.category }}</span>
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-desc">{{ product.description }}</p>
                <button class="btn-get-quote" @click="openServiceForm">
                  Get Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Load More -->
          <div v-if="hasMore" class="load-more-wrap">
            <button class="btn-load-more" @click="loadMore">
              Load More Products
              <span class="load-more-remaining">{{ filteredProducts.length - visibleCount }} remaining</span>
            </button>
          </div>

          <!-- Empty State -->
          <div v-if="filteredProducts.length === 0" class="empty-state">
            <div class="empty-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
                <path d="M8 11h6"/>
              </svg>
            </div>
            <h3 class="empty-title">No products found</h3>
            <p class="empty-desc">We couldn't find any products matching your criteria. Try adjusting your search or filters.</p>
            <button class="btn-clear-empty" @click="clearFilters">Clear All Filters</button>
          </div>
        </main>
      </div>
    </div>

    <!-- Bottom CTA -->
    <section class="bottom-cta">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text">
            <h2>Can't find what you need?</h2>
            <p>Al Falah Middle East offers custom printing solutions tailored to your exact requirements.</p>
          </div>
          <div class="cta-actions">
            <button class="btn-cta-primary" @click="openServiceForm">
              Request Custom Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="https://wa.me/971567268735" target="_blank" class="btn-cta-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Detail Modal -->
    <Teleport to="body">
      <transition name="modal">
        <div v-if="selectedProduct" class="product-modal-overlay" @click.self="closeProduct">
          <div class="product-modal">
            <button class="modal-close" @click="closeProduct">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div class="modal-image">
              <img :src="'/products/' + selectedProduct.slug + '.webp'" :alt="selectedProduct.name" />
            </div>
            <div class="modal-info">
              <span class="modal-category">{{ selectedProduct.category }}</span>
              <h2 class="modal-title">{{ selectedProduct.name }}</h2>
              <p class="modal-desc">{{ selectedProduct.description }}</p>
              <div class="modal-features">
                <div class="modal-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Premium Quality Materials
                </div>
                <div class="modal-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Custom Sizes Available
                </div>
                <div class="modal-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Fast Turnaround
                </div>
                <div class="modal-feature">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                  UAE-Wide Delivery
                </div>
              </div>
              <div class="modal-actions">
                <button class="modal-btn modal-btn--primary" @click="closeProduct(); openServiceForm()">
                  Get Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <a href="https://wa.me/971567268735" target="_blank" class="modal-btn modal-btn--outline">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const openServiceForm = inject('openServiceForm')
const selectedProduct = ref(null)
const activeCategory = ref('all')
const searchQuery = ref('')
const ITEMS_PER_PAGE = 12
const visibleCount = ref(ITEMS_PER_PAGE)

watch([activeCategory, searchQuery], () => {
  visibleCount.value = ITEMS_PER_PAGE
})

const clearFilters = () => {
  activeCategory.value = 'all'
  searchQuery.value = ''
}

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

const openProduct = (product) => {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

const closeProduct = () => {
  selectedProduct.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ===== Page Layout ===== */
.products-page {
  background: var(--bg-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  max-width: 96%;
  margin: 0 auto;
  padding: 0 12px;
}

/* ===== Breadcrumb Bar ===== */
.breadcrumb-bar {
  background: var(--bg-secondary);
  border-bottom: 1px solid #e8e7e3;
  padding: 16px 0;
  padding-top: 100px;
}

.breadcrumb-bar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: var(--accent-teal);
}

.breadcrumb-sep {
  color: #ccc;
  display: flex;
  align-items: center;
}

.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 600;
}

.breadcrumb-results {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
}

/* ===== Main Layout (sidebar + grid) ===== */
.products-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  padding: 32px 0 0;
  align-items: start;
}

/* ===== Mobile Search (hidden on desktop) ===== */
.mobile-search {
  display: none;
}

/* ===== Mobile Filter Bar (hidden on desktop) ===== */
.mobile-filter-bar {
  display: none;
}

/* ===== Sidebar ===== */
.sidebar {
  grid-column: 1;
  grid-row: 1 / 3;
}

.sidebar-inner {
  position: sticky;
  top: 90px;
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
}

.sidebar-inner::-webkit-scrollbar {
  width: 4px;
}

.sidebar-inner::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}

.sidebar-search {
  margin-bottom: 24px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-secondary);
  border: 1px solid #e8e7e3;
  border-radius: 8px;
  transition: border-color 0.2s;
}

.search-box:focus-within {
  border-color: var(--accent-teal);
  background: white;
}

.search-box svg {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  border: none;
  background: none;
  font-size: 14px;
  font-family: var(--font-sans);
  color: var(--text-primary);
  outline: none;
}

.search-input::placeholder {
  color: #aaa;
}

.search-clear {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 2px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.search-clear:hover {
  color: var(--text-primary);
}

/* Sidebar Categories */
.sidebar-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.sidebar-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--text-secondary);
  margin: 0;
}

.clear-filters {
  background: none;
  border: none;
  font-size: 12px;
  font-family: var(--font-sans);
  color: var(--accent-teal);
  cursor: pointer;
  font-weight: 500;
  padding: 0;
}

.clear-filters:hover {
  text-decoration: underline;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.category-item:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.category-item.active {
  background: rgba(46, 139, 192, 0.08);
  color: var(--accent-teal);
  font-weight: 600;
}

.category-icon {
  font-size: 16px;
  width: 22px;
  text-align: center;
  flex-shrink: 0;
}

.category-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.category-count {
  font-size: 11px;
  font-weight: 600;
  color: #aaa;
  background: var(--bg-secondary);
  padding: 2px 8px;
  border-radius: 10px;
  flex-shrink: 0;
}

.category-item.active .category-count {
  background: rgba(46, 139, 192, 0.15);
  color: var(--accent-teal);
}

/* ===== Product Grid Area ===== */
.products-main {
  grid-column: 2;
  min-width: 0;
  padding-bottom: 60px;
}

/* Grid Toolbar */
.grid-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 24px;
  gap: 16px;
  flex-wrap: wrap;
}

.toolbar-left {
  flex-shrink: 0;
}

.showing-count {
  font-size: 13px;
  color: var(--text-secondary);
}

.showing-count strong {
  color: var(--text-primary);
  font-weight: 600;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-toggle {
  display: flex;
  border: 1px solid #e8e7e3;
  border-radius: 6px;
  overflow: hidden;
}

.view-btn {
  background: white;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  transition: all 0.15s;
}

.view-btn + .view-btn {
  border-left: 1px solid #e8e7e3;
}

.view-btn.active {
  background: var(--accent-teal);
  color: white;
}

.view-btn:hover:not(.active) {
  background: var(--bg-secondary);
}

.sort-select {
  padding: 6px 28px 6px 12px;
  border: 1px solid #e8e7e3;
  border-radius: 6px;
  font-size: 13px;
  font-family: var(--font-sans);
  color: var(--text-secondary);
  background: white;
  cursor: pointer;
  appearance: auto;
  outline: none;
}

.sort-select:focus {
  border-color: var(--accent-teal);
}

/* ===== Products Grid ===== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  animation: cardAppear 0.4s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
  border-color: rgba(46, 139, 192, 0.2);
}

/* Product Image */
.product-image-area {
  aspect-ratio: 1;
  background: #f2f2f2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
  transform: scale(1.06);
}

/* Product Body */
.product-body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-category-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-teal);
  margin-bottom: 8px;
}

.product-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
}

.product-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.55;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.btn-get-quote {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 16px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  margin-top: auto;
}

.btn-get-quote:hover {
  background: #0b6265;
  transform: translateY(-1px);
}

.btn-get-quote:active {
  transform: translateY(0);
}

/* ===== Load More ===== */
.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.btn-load-more {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 36px;
  background: white;
  color: var(--text-primary);
  border: 2px solid #ddd;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-load-more:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 139, 192, 0.12);
}

.load-more-remaining {
  font-size: 12px;
  font-weight: 500;
  color: #999;
  padding: 3px 12px;
  background: var(--bg-secondary);
  border-radius: 20px;
}

/* ===== Empty State ===== */
.empty-state {
  text-align: center;
  padding: 80px 24px;
}

.empty-icon {
  color: #ccc;
  margin-bottom: 20px;
}

.empty-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px;
}

.empty-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 24px;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.btn-clear-empty {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-clear-empty:hover {
  background: #0b6265;
}

/* ===== Bottom CTA ===== */
.bottom-cta {
  background: var(--bg-secondary);
  padding: 64px 0;
  border-top: 1px solid #e8e7e3;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.cta-text h2 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  margin: 0 0 8px;
}

.cta-text p {
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.btn-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--accent-teal);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.btn-cta-primary:hover {
  background: #0b6265;
}

.btn-cta-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: var(--text-primary);
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-cta-whatsapp:hover {
  border-color: #25d366;
  color: #25d366;
}

/* ===== Responsive: Tablet (1024px and below) ===== */
@media (max-width: 1024px) {
  .products-layout {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sidebar {
    display: none;
  }

  /* Show mobile search and filters */
  .mobile-search {
    display: block;
    padding: 16px 0 0;
  }

  .mobile-search .search-box {
    width: 100%;
  }

  .mobile-filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 16px 0;
    position: sticky;
    top: 70px;
    z-index: 40;
    background: var(--bg-primary);
    border-bottom: 1px solid #eee;
    margin: 0 -24px;
    padding-left: 24px;
    padding-right: 24px;
  }


  .mobile-filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: white;
    border: 1px solid #e8e7e3;
    border-radius: 100px;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .mobile-filter-chip:hover {
    border-color: var(--accent-teal);
    color: var(--accent-teal);
  }

  .mobile-filter-chip.active {
    background: var(--accent-teal);
    border-color: var(--accent-teal);
    color: white;
  }

  .chip-count {
    font-size: 11px;
    font-weight: 600;
    padding: 1px 6px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.06);
  }

  .mobile-filter-chip.active .chip-count {
    background: rgba(255, 255, 255, 0.25);
  }

  .products-main {
    padding-top: 8px;
  }

  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .cta-inner {
    flex-direction: column;
    text-align: center;
  }

  .cta-actions {
    justify-content: center;
  }
}

/* ===== Responsive: Mobile (768px and below) ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .breadcrumb-bar .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .breadcrumb-results {
    font-size: 12px;
  }

  .mobile-filter-bar {
    top: 60px;
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .grid-toolbar {
    padding: 10px 12px;
  }

  .toolbar-right {
    display: none;
  }

  .product-body {
    padding: 12px 14px 14px;
  }

  .product-name {
    font-size: 14px;
  }

  .product-desc {
    font-size: 12px;
    margin-bottom: 12px;
  }

  .btn-get-quote {
    padding: 9px 12px;
    font-size: 12px;
  }

  .product-image-area {
    padding: 12px;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-cta-primary,
  .btn-cta-whatsapp {
    justify-content: center;
    width: 100%;
  }
}

/* ===== Responsive: Small Mobile (480px and below) ===== */
@media (max-width: 480px) {
  .products-grid {
    gap: 10px;
  }

  .product-image-area {
    padding: 10px;
  }

  .product-body {
    padding: 10px 12px 12px;
  }

  .product-name {
    font-size: 13px;
  }

  .product-desc {
    font-size: 11px;
    -webkit-line-clamp: 2;
  }

  .product-category-tag {
    font-size: 9px;
  }

  .btn-get-quote {
    padding: 8px 10px;
    font-size: 11px;
    border-radius: 6px;
  }

  .mobile-filter-chip {
    font-size: 12px;
    padding: 6px 12px;
  }
}

/* ===== Product Modal ===== */
.product-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.product-modal {
  background: #fff;
  border-radius: 20px;
  max-width: 860px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: var(--text-primary);
}

.modal-image {
  background: #f5f5f5;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0 0 20px;
}

.modal-image img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.modal-info {
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
}

.modal-category {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 8px;
}

.modal-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1;
  margin-bottom: 14px;
}

.modal-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.modal-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.modal-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-secondary);
}

.modal-feature svg {
  color: var(--accent-teal);
  flex-shrink: 0;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.modal-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease;
}

.modal-btn--primary {
  background: var(--accent-teal);
  color: #fff;
}

.modal-btn--primary:hover {
  background: #1a6fa0;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(46, 139, 192, 0.3);
}

.modal-btn--outline {
  background: transparent;
  border: 1.5px solid var(--border-medium);
  color: var(--text-primary);
}

.modal-btn--outline:hover {
  border-color: var(--text-primary);
  background: var(--text-primary);
  color: #fff;
}

/* Modal transition */
.modal-enter-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .product-modal {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease;
}
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-leave-active .product-modal {
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.modal-enter-from {
  opacity: 0;
}
.modal-enter-from .product-modal {
  transform: translateY(30px) scale(0.96);
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-leave-to .product-modal {
  transform: translateY(10px) scale(0.98);
  opacity: 0;
}

@media (max-width: 768px) {
  .product-modal {
    grid-template-columns: 1fr;
    max-height: 95vh;
  }
  .modal-image {
    border-radius: 20px 20px 0 0;
    padding: 24px;
  }
  .modal-info {
    padding: 28px 24px;
  }
}

@media (max-width: 480px) {
  .product-modal-overlay {
    padding: 12px;
  }
  .modal-image {
    padding: 16px;
  }
  .modal-info {
    padding: 20px 16px;
  }
  .modal-actions {
    flex-direction: column;
  }
  .modal-btn {
    justify-content: center;
    width: 100%;
  }
}
</style>
