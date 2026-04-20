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
          <template v-if="!currentFolder">
            <span class="breadcrumb-current">Products</span>
          </template>
          <template v-else>
            <button class="breadcrumb-link breadcrumb-btn" @click="activeFolder = null">Products</button>
            <span class="breadcrumb-sep">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </span>
            <span class="breadcrumb-current">{{ currentFolder.name }}</span>
          </template>
        </nav>
        <p class="breadcrumb-results">
          {{ currentFolder ? filteredProducts.length + ' products in folder' : folders.length + ' folders · ' + products.length + ' products' }}
        </p>
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

        <!-- Mobile Horizontal Filter Bar (folders) -->
        <div class="mobile-filter-bar">
          <button
            class="mobile-filter-chip"
            :class="{ active: !activeFolder }"
            @click="activeFolder = null"
          >
            All Folders
            <span class="chip-count">{{ folders.length }}</span>
          </button>
          <button
            v-for="f in folders"
            :key="'m-' + f.id"
            class="mobile-filter-chip"
            :class="{ active: activeFolder === f.id }"
            @click="activeFolder = f.id"
          >
            {{ f.name }}
            <span class="chip-count">{{ f.count }}</span>
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

            <!-- Folders -->
            <div class="sidebar-section">
              <div class="sidebar-section-header">
                <h3 class="sidebar-title">Folders</h3>
                <button
                  v-if="activeFolder || searchQuery"
                  class="clear-filters"
                  @click="clearFilters"
                >
                  Clear Filters
                </button>
              </div>
              <ul class="category-list">
                <li
                  class="category-item"
                  :class="{ active: !activeFolder }"
                  @click="activeFolder = null"
                >
                  <span class="category-icon">📦</span>
                  <span class="category-name">All Folders</span>
                  <span class="category-count">{{ folders.length }}</span>
                </li>
                <li
                  v-for="f in folders"
                  :key="f.id"
                  class="category-item"
                  :class="{ active: activeFolder === f.id }"
                  @click="activeFolder = f.id"
                >
                  <span class="category-icon">📁</span>
                  <span class="category-name">{{ f.name }}</span>
                  <span class="category-count">{{ f.count }}</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- Product Grid Area -->
        <main class="products-main">

          <!-- FOLDER GRID (landing view) -->
          <template v-if="!currentFolder && !searchQuery">
            <div class="grid-toolbar">
              <div class="toolbar-left">
                <span class="showing-count">
                  Browse <strong>{{ folders.length }}</strong> folders · <strong>{{ products.length }}</strong> products
                </span>
              </div>
            </div>

            <div class="folder-grid">
              <button
                v-for="(f, idx) in folders"
                :key="f.id"
                class="folder-card"
                :style="{ '--delay': (idx % 8) * 0.05 + 's' }"
                @click="openFolder(f)"
              >
                <div class="folder-card-previews">
                  <div class="folder-preview-tile" v-for="img in getFolderPreviews(f.id, 4)" :key="img">
                    <img :src="'/products/' + img + '.webp'" :alt="f.name" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div class="folder-card-body">
                  <div class="folder-card-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
                    </svg>
                  </div>
                  <div class="folder-card-text">
                    <h3 class="folder-card-title">{{ f.name }}</h3>
                    <span class="folder-card-meta">{{ f.count }} item{{ f.count === 1 ? '' : 's' }}</span>
                  </div>
                  <div class="folder-card-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                  </div>
                </div>
              </button>
            </div>
          </template>

          <!-- INSIDE A FOLDER (or searching) -->
          <template v-else>
            <!-- Top Toolbar -->
            <div class="grid-toolbar">
              <div class="toolbar-left">
                <button v-if="currentFolder" class="back-btn" @click="activeFolder = null">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                  All Folders
                </button>
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
                    :src="'/products/' + product.image + '.webp'"
                    :alt="product.name"
                    class="product-image"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                  />
                </div>
                <div class="product-body">
                  <span class="product-category-tag">{{ product.folderName }}</span>
                  <h3 class="product-name">{{ product.name }}</h3>
                  <p class="product-desc">{{ product.description }}</p>
                  <button class="btn-get-quote" @click.stop="openServiceForm">
                    Get Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </template>

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
              <img :src="'/products/' + selectedProduct.image + '.webp'" :alt="selectedProduct.name" />
            </div>
            <div class="modal-info">
              <span class="modal-category">{{ selectedProduct.folderName }}</span>
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
const activeFolder = ref(null)        // null = show folder grid; folder-id string = inside that folder
const searchQuery = ref('')
const ITEMS_PER_PAGE = 12
const visibleCount = ref(ITEMS_PER_PAGE)

watch([activeFolder, searchQuery], () => {
  visibleCount.value = ITEMS_PER_PAGE
  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
})

const clearFilters = () => {
  activeFolder.value = null
  searchQuery.value = ''
}

const folders = [
  { id: "1-offset-and-digitel",            name: "Offset & Digital Printing", rawName: "1 Offset and digitel",            count: 26 },
  { id: "2-large-format-printing",         name: "Large Format Printing",     rawName: "2 Large Format Printing",         count: 9 },
  { id: "3-advertising-and-marketing",     name: "Advertising & Marketing",   rawName: "3 Advertising And Marketing",     count: 23 },
  { id: "4-event-advertising",             name: "Event Advertising",         rawName: "4 Event Advertising",             count: 12 },
  { id: "5-corporate-and-exhibition-work", name: "Corporate & Exhibition",    rawName: "5 Corporate And Exhibition work", count: 40 },
  { id: "6-pop-up-materials",              name: "Pop-Up Materials",          rawName: "6 Pop up materials",              count: 3 },
  { id: "7-signages",                      name: "Signages",                  rawName: "7 Signages",                      count: 3 },
  { id: "8-business-card",                 name: "Business Cards",            rawName: "8 Business Card",                 count: 21 },
  { id: "9-stickers-and-labels",           name: "Stickers & Labels",         rawName: "9 Stickers and labels",           count: 9 },
  { id: "10-types-of-frost-film",          name: "Frost Film",                rawName: "10 Types of Frost Film",          count: 2 },
  { id: "11-name-plate",                   name: "Name Plates",               rawName: "11 Name Plate",                   count: 2 },
]

const products = [
  { slug: "annual-report", image: "annual-report", name: "Annual Report", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Corporate Annual Report with professional layout and finishing." },
  { slug: "brochure-templates", image: "brochure-templates", name: "Brochure Templates", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Full-color Brochure Templates with crisp folding and premium print quality." },
  { slug: "business-cards", image: "business-cards", name: "Business cards", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Premium Business cards — finished to impress, built to last." },
  { slug: "calendar", image: "calendar", name: "Calendar", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Branded Calendar that keeps your company visible year-round." },
  { slug: "car-mat", image: "car-mat", name: "Car mat", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Durable custom Car mat with branded designs and logos." },
  { slug: "catalog-2021", image: "catalog-2021", name: "Catalog 2021", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Printed Catalog 2021 with sharp color and premium paper stock." },
  { slug: "certificate-folder", image: "certificate-folder", name: "Certificate Folder", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Premium Certificate Folder for awards, recognition and achievements." },
  { slug: "company-profile-bookle", image: "company-profile-bookle", name: "Company Profile Bookle", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "High-end Company Profile Bookle to showcase your brand story and capabilities." },
  { slug: "company-profile", image: "company-profile", name: "Company Profile", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "High-end Company Profile to showcase your brand story and capabilities." },
  { slug: "corporate-certificate-design", image: "corporate-certificate-design", name: "Corporate certificate design", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Premium Corporate certificate design for awards, recognition and achievements." },
  { slug: "delivery-challan", image: "delivery-challan", name: "Delivery Challan", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Multi-copy Delivery Challan for smooth business documentation." },
  { slug: "desk-calendar", image: "desk-calendar", name: "Desk Calendar", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Branded Desk Calendar that keeps your company visible year-round." },
  { slug: "envelope", image: "envelope", name: "Envelope", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Custom printed Envelope in a range of sizes and stocks." },
  { slug: "envelopes", image: "envelopes", name: "Envelopes", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Custom printed Envelopes in a range of sizes and stocks." },
  { slug: "gold-foil-stamped-debossed-business-cards", image: "gold-foil-stamped-debossed-business-cards", name: "Gold foil stamped (debossed) business cards", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Premium Gold foil stamped (debossed) business cards — finished to impress, built to last." },
  { slug: "invoicencr-books", image: "invoicencr-books", name: "InvoiceNCR Books", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "InvoiceNCR Books printed and bound in-house with precision finishing." },
  { slug: "letterhead", image: "letterhead", name: "Letterhead", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Professionally printed Letterhead for official correspondence." },
  { slug: "letterheads", image: "letterheads", name: "Letterheads", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Professionally printed Letterheads for official correspondence." },
  { slug: "magazine", image: "magazine", name: "Magazine", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Vibrant Magazine printing with saddle-stitch or perfect binding." },
  { slug: "printed-satin-ribbons-2", image: "printed-satin-ribbons-2", name: "Printed Satin Ribbons 2", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Custom-printed Printed Satin Ribbons 2 for gift wrap and luxury packaging." },
  { slug: "spiral-notebooks", image: "spiral-notebooks", name: "Spiral Notebooks", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Spiral Notebooks printed and bound in-house with precision finishing." },
  { slug: "stickers", image: "stickers", name: "Stickers", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Custom Stickers cut to shape with weather-resistant finish." },
  { slug: "tag-printing", image: "tag-printing", name: "Tag Printing", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Precision-printed Tag Printing for retail and garments." },
  { slug: "book-layout-with-cover", image: "book-layout-with-cover", name: "book layout with cover", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "book layout with cover printed and bound in-house with precision finishing." },
  { slug: "die-cut-folders", image: "die-cut-folders", name: "die cut folders", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Elegant die cut folders printed on durable stock with custom finishes." },
  { slug: "footrace-mat-for-car", image: "footrace-mat-for-car", name: "footrace mat for car", folder: "1-offset-and-digitel", folderName: "Offset & Digital Printing", description: "Durable custom footrace mat for car with branded designs and logos." },
  { slug: "exhibition-booth-setup", image: "exhibition-booth-setup", name: "Exhibition Booth Setup", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Complete Exhibition Booth Setup design, fabrication and setup." },
  { slug: "fence-banners", image: "fence-banners", name: "Fence Banners", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Weather-resistant Fence Banners printed in vivid color." },
  { slug: "glassfacade-branding", image: "glassfacade-branding", name: "GlassFacade Branding", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Full-service GlassFacade Branding with installation and finishing." },
  { slug: "office-branding", image: "office-branding", name: "Office branding", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Full-service Office branding with installation and finishing." },
  { slug: "outdoor-billboard-and-banners", image: "outdoor-billboard-and-banners", name: "Outdoor Billboard And banners", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Massive outdoor Outdoor Billboard And banners for maximum brand visibility." },
  { slug: "outdoor-feather-flags", image: "outdoor-feather-flags", name: "Outdoor Feather Flags", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Eye-catching Outdoor Feather Flags for storefronts, events and promotions." },
  { slug: "vehicle-branding", image: "vehicle-branding", name: "Vehicle Branding", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Full-service Vehicle Branding with installation and finishing." },
  { slug: "letter-branding", image: "letter-branding", name: "letter branding", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Full-service letter branding with installation and finishing." },
  { slug: "oudor-fence-banners", image: "oudor-fence-banners", name: "oudor Fence Banners", folder: "2-large-format-printing", folderName: "Large Format Printing", description: "Weather-resistant oudor Fence Banners printed in vivid color." },
  { slug: "backdrop", image: "backdrop", name: "Backdrop.", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Professional Backdrop. for events, shoots and media walls." },
  { slug: "bags", image: "bags", name: "Bags", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Branded Bags for retail, events and corporate gifting." },
  { slug: "branded-caps", image: "branded-caps", name: "Branded Caps", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom Branded Caps for teams, staff and merchandise." },
  { slug: "canopytent", image: "canopytent", name: "CanopyTent", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom CanopyTent — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "certificates-with-frame", image: "certificates-with-frame", name: "Certificates with Frame", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Premium Certificates with Frame for awards, recognition and achievements." },
  { slug: "coroplast-signs", image: "coroplast-signs", name: "Coroplast Signs", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom Coroplast Signs built to your spec with durable materials." },
  { slug: "cushion", image: "cushion", name: "Cushion", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Curated Cushion for clients, staff and VIPs." },
  { slug: "hoodie", image: "hoodie", name: "Hoodie", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom Hoodie for teams, staff and merchandise." },
  { slug: "id-cards", image: "id-cards", name: "ID Cards", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Professional ID Cards for employees and members." },
  { slug: "lanyards", image: "lanyards", name: "Lanyards", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom Lanyards for ID access, events and festivals." },
  { slug: "media-wallstep-and-repeat", image: "media-wallstep-and-repeat", name: "Media WallStep‑and‑Repeat", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Branded Media WallStep‑and‑Repeat for red-carpet events and press coverage." },
  { slug: "orangery-award", image: "orangery-award", name: "Orangery Award -", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Distinctive Orangery Award - for recognition and achievements." },
  { slug: "paper-shopping-bags", image: "paper-shopping-bags", name: "Paper Shopping Bags", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Branded Paper Shopping Bags for retail, events and corporate gifting." },
  { slug: "pen", image: "pen", name: "Pen", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Branded Pen for everyday visibility and corporate gifting." },
  { slug: "polo-t-shirt", image: "polo-t-shirt", name: "Polo T‑shirt", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Premium Polo T‑shirt printed or embroidered with your brand." },
  { slug: "pop-up-display", image: "pop-up-display", name: "Pop Up Display", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Portable Pop Up Display for trade shows and activations." },
  { slug: "printed-bottles", image: "printed-bottles", name: "Printed Bottles", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom branded Printed Bottles for promotions and gifting." },
  { slug: "table-flags", image: "table-flags", name: "Table Flags", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Eye-catching Table Flags for storefronts, events and promotions." },
  { slug: "teardrop-flags", image: "teardrop-flags", name: "Teardrop Flags", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Eye-catching Teardrop Flags for storefronts, events and promotions." },
  { slug: "trade-show-backdropspartitions", image: "trade-show-backdropspartitions", name: "Trade‑show BackdropsPartitions", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Professional Trade‑show BackdropsPartitions for events, shoots and media walls." },
  { slug: "umbrella", image: "umbrella", name: "Umbrella", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom Umbrella — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "packaging-box-custom", image: "packaging-box-custom", name: "packaging box custom", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Custom packaging box custom designed to protect and showcase your product." },
  { slug: "roll-up-banners", image: "roll-up-banners", name: "roll up banners", folder: "3-advertising-and-marketing", folderName: "Advertising & Marketing", description: "Weather-resistant roll up banners printed in vivid color." },
  { slug: "a-book-layout-design-with-cover", image: "a-book-layout-design-with-cover", name: "A book layout design with cover", folder: "4-event-advertising", folderName: "Event Advertising", description: "A book layout design with cover printed and bound in-house with precision finishing." },
  { slug: "best-trade-show-displays", image: "best-trade-show-displays", name: "Best Trade show displays", folder: "4-event-advertising", folderName: "Event Advertising", description: "Custom Best Trade show displays — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "box-packaging-contest", image: "box-packaging-contest", name: "Box Packaging contest", folder: "4-event-advertising", folderName: "Event Advertising", description: "Custom Box Packaging contest designed to protect and showcase your product." },
  { slug: "conservatory-and-orangery-award", image: "conservatory-and-orangery-award", name: "Conservatory & Orangery Award -", folder: "4-event-advertising", folderName: "Event Advertising", description: "Distinctive Conservatory & Orangery Award - for recognition and achievements." },
  { slug: "curved-pop-up-stands", image: "curved-pop-up-stands", name: "Curved Pop Up Stands", folder: "4-event-advertising", folderName: "Event Advertising", description: "Portable Curved Pop Up Stands for trade shows and activations." },
  { slug: "custom-table-covers", image: "custom-table-covers", name: "Custom Table Covers", folder: "4-event-advertising", folderName: "Event Advertising", description: "Fitted custom Custom Table Covers for exhibitions and events." },
  { slug: "elegant-corporate-gifts-hamper", image: "elegant-corporate-gifts-hamper", name: "Elegant Corporate Gifts Hamper", folder: "4-event-advertising", folderName: "Event Advertising", description: "Curated Elegant Corporate Gifts Hamper for clients, staff and VIPs." },
  { slug: "employee-welcome-kit", image: "employee-welcome-kit", name: "Employee Welcome Kit", folder: "4-event-advertising", folderName: "Event Advertising", description: "Curated Employee Welcome Kit for clients, staff and VIPs." },
  { slug: "lightbox", image: "lightbox", name: "Lightbox", folder: "4-event-advertising", folderName: "Event Advertising", description: "Custom Lightbox designed to protect and showcase your product." },
  { slug: "locking-storage-counters", image: "locking-storage-counters", name: "Locking Storage Counters", folder: "4-event-advertising", folderName: "Event Advertising", description: "Branded Locking Storage Counters for exhibitions and on-site activations." },
  { slug: "pop-up-fabric-displays", image: "pop-up-fabric-displays", name: "Pop Up Fabric Displays", folder: "4-event-advertising", folderName: "Event Advertising", description: "Portable Pop Up Fabric Displays for trade shows and activations." },
  { slug: "trade-show-booth", image: "trade-show-booth", name: "Trade Show Booth", folder: "4-event-advertising", folderName: "Event Advertising", description: "Complete Trade Show Booth design, fabrication and setup." },
  { slug: "5-corporate-and-exhibition-work-backdrop", image: "backdrop", name: "Backdrop.", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Professional Backdrop. for events, shoots and media walls." },
  { slug: "badgesmedallions", image: "badgesmedallions", name: "BadgesMedallions", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Distinctive BadgesMedallions for recognition and achievements." },
  { slug: "bookss", image: "bookss", name: "Bookss", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Bookss printed and bound in-house with precision finishing." },
  { slug: "5-corporate-and-exhibition-work-branded-caps", image: "branded-caps", name: "Branded Caps", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Branded Caps for teams, staff and merchandise." },
  { slug: "5-corporate-and-exhibition-work-canopytent", image: "canopytent", name: "CanopyTent", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom CanopyTent — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "carnet-a5-publicitaire", image: "carnet-a5-publicitaire", name: "Carnet A5 publicitaire", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Carnet A5 publicitaire — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "5-corporate-and-exhibition-work-certificates-with-frame", image: "certificates-with-frame", name: "Certificates with Frame", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Premium Certificates with Frame for awards, recognition and achievements." },
  { slug: "5-corporate-and-exhibition-work-coroplast-signs", image: "coroplast-signs", name: "Coroplast Signs", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Coroplast Signs built to your spec with durable materials." },
  { slug: "food-packaging-box-custom", image: "food-packaging-box-custom", name: "Food packaging box custom", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Food packaging box custom designed to protect and showcase your product." },
  { slug: "5-corporate-and-exhibition-work-hoodie", image: "hoodie", name: "Hoodie", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Hoodie for teams, staff and merchandise." },
  { slug: "5-corporate-and-exhibition-work-id-cards", image: "id-cards", name: "ID Cards", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Professional ID Cards for employees and members." },
  { slug: "information-support-pegboard", image: "information-support-pegboard", name: "Information support Pegboard", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Durable custom Information support Pegboard with branded designs and logos." },
  { slug: "5-corporate-and-exhibition-work-lanyards", image: "lanyards", name: "Lanyards", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Lanyards for ID access, events and festivals." },
  { slug: "5-corporate-and-exhibition-work-media-wallstep-and-repeat", image: "media-wallstep-and-repeat", name: "Media WallStep‑and‑Repeat", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Branded Media WallStep‑and‑Repeat for red-carpet events and press coverage." },
  { slug: "5-corporate-and-exhibition-work-orangery-award", image: "orangery-award", name: "Orangery Award -", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Distinctive Orangery Award - for recognition and achievements." },
  { slug: "pop-display-stands", image: "pop-display-stands", name: "POP Display Stands", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom POP Display Stands — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "5-corporate-and-exhibition-work-paper-shopping-bags", image: "paper-shopping-bags", name: "Paper Shopping Bags", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Branded Paper Shopping Bags for retail, events and corporate gifting." },
  { slug: "5-corporate-and-exhibition-work-pen", image: "pen", name: "Pen", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Branded Pen for everyday visibility and corporate gifting." },
  { slug: "pendrive", image: "pendrive", name: "Pendrive", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Branded Pendrive for everyday visibility and corporate gifting." },
  { slug: "5-corporate-and-exhibition-work-polo-t-shirt", image: "polo-t-shirt", name: "Polo T‑shirt", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Premium Polo T‑shirt printed or embroidered with your brand." },
  { slug: "5-corporate-and-exhibition-work-pop-up-display", image: "pop-up-display", name: "Pop Up Display", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Portable Pop Up Display for trade shows and activations." },
  { slug: "5-corporate-and-exhibition-work-printed-bottles", image: "printed-bottles", name: "Printed Bottles", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom branded Printed Bottles for promotions and gifting." },
  { slug: "printed-mugs", image: "printed-mugs", name: "Printed Mugs", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom branded Printed Mugs for promotions and gifting." },
  { slug: "printed-satin-ribbons", image: "printed-satin-ribbons", name: "Printed Satin Ribbons", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom-printed Printed Satin Ribbons for gift wrap and luxury packaging." },
  { slug: "productshipping-boxes", image: "productshipping-boxes", name: "ProductShipping Boxes", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom ProductShipping Boxes designed to protect and showcase your product." },
  { slug: "promotional-balloons", image: "promotional-balloons", name: "Promotional Balloons", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom printed Promotional Balloons for events and store openings." },
  { slug: "rigid-box-packaging", image: "rigid-box-packaging", name: "Rigid Box Packaging", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Rigid Box Packaging designed to protect and showcase your product." },
  { slug: "5-corporate-and-exhibition-work-table-flags", image: "table-flags", name: "Table Flags", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Eye-catching Table Flags for storefronts, events and promotions." },
  { slug: "table-top-name-plate", image: "table-top-name-plate", name: "Table‑top Name Plate", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Elegant Table‑top Name Plate for offices, desks and door signage." },
  { slug: "5-corporate-and-exhibition-work-teardrop-flags", image: "teardrop-flags", name: "Teardrop Flags", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Eye-catching Teardrop Flags for storefronts, events and promotions." },
  { slug: "tote-bags", image: "tote-bags", name: "Tote Bags", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Branded Tote Bags for retail, events and corporate gifting." },
  { slug: "tradeshow-booth-design", image: "tradeshow-booth-design", name: "Tradeshow booth design", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Tradeshow booth design built to your spec with durable materials." },
  { slug: "5-corporate-and-exhibition-work-trade-show-backdropspartitions", image: "trade-show-backdropspartitions", name: "Trade‑show BackdropsPartitions", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Professional Trade‑show BackdropsPartitions for events, shoots and media walls." },
  { slug: "trophyawards", image: "trophyawards", name: "TrophyAwards", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Distinctive TrophyAwards for recognition and achievements." },
  { slug: "welcome-kits", image: "welcome-kits", name: "Welcome Kits", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Curated Welcome Kits for clients, staff and VIPs." },
  { slug: "wrist-bands", image: "wrist-bands", name: "Wrist Bands", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom Wrist Bands for ID access, events and festivals." },
  { slug: "able-cover", image: "able-cover", name: "able Cover", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom able Cover — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "5-corporate-and-exhibition-work-packaging-box-custom", image: "packaging-box-custom", name: "packaging box custom", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Custom packaging box custom designed to protect and showcase your product." },
  { slug: "5-corporate-and-exhibition-work-roll-up-banners", image: "roll-up-banners", name: "roll up banners", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Weather-resistant roll up banners printed in vivid color." },
  { slug: "rollup-banners", image: "rollup-banners", name: "rollup banners,", folder: "5-corporate-and-exhibition-work", folderName: "Corporate & Exhibition", description: "Weather-resistant rollup banners, printed in vivid color." },
  { slug: "booth-braning", image: "booth-braning", name: "Booth Braning", folder: "6-pop-up-materials", folderName: "Pop-Up Materials", description: "Complete Booth Braning design, fabrication and setup." },
  { slug: "booth-design", image: "booth-design", name: "Booth Design", folder: "6-pop-up-materials", folderName: "Pop-Up Materials", description: "Custom Booth Design built to your spec with durable materials." },
  { slug: "shell-scheme-and-rental", image: "shell-scheme-and-rental", name: "Shell Scheme and Rental", folder: "6-pop-up-materials", folderName: "Pop-Up Materials", description: "Custom Shell Scheme and Rental — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "3d-acryliccolored-letters", image: "3d-acryliccolored-letters", name: "3D AcrylicColored Letters", folder: "7-signages", folderName: "Signages", description: "Bright 3D 3D AcrylicColored Letters for indoor and outdoor signage." },
  { slug: "3d-metal-letters-signage", image: "3d-metal-letters-signage", name: "3D Metal Letters Signage", folder: "7-signages", folderName: "Signages", description: "Custom 3D Metal Letters Signage built to your spec with durable materials." },
  { slug: "neon-signage", image: "neon-signage", name: "Neon Signage", folder: "7-signages", folderName: "Signages", description: "Custom Neon Signage built to your spec with durable materials." },
  { slug: "brown-kraft-business-cards-1", image: "brown-kraft-business-cards-1", name: "Brown Kraft Business Cards (1)", folder: "8-business-card", folderName: "Business Cards", description: "Premium Brown Kraft Business Cards (1) — finished to impress, built to last." },
  { slug: "brown-kraft-business-cards", image: "brown-kraft-business-cards", name: "Brown Kraft Business Cards", folder: "8-business-card", folderName: "Business Cards", description: "Premium Brown Kraft Business Cards — finished to impress, built to last." },
  { slug: "8-business-card-business-cards", image: "business-cards", name: "Business cards", folder: "8-business-card", folderName: "Business Cards", description: "Premium Business cards — finished to impress, built to last." },
  { slug: "die-cut-business-cards", image: "die-cut-business-cards", name: "Die‑cut Business Cards", folder: "8-business-card", folderName: "Business Cards", description: "Premium Die‑cut Business Cards — finished to impress, built to last." },
  { slug: "elegant-brown-wood-texture-modern-style-monogram-business-card-zazzle", image: "elegant-brown-wood-texture-modern-style-monogram-business-card-zazzle", name: "Elegant Brown Wood Texture Modern Style Monogram Business Card Zazzle", folder: "8-business-card", folderName: "Business Cards", description: "Premium Elegant Brown Wood Texture Modern Style Monogram Business Card Zazzle — finished to impress, built to last." },
  { slug: "fordwich-arms-business-card", image: "fordwich-arms-business-card", name: "Fordwich Arms business card", folder: "8-business-card", folderName: "Business Cards", description: "Premium Fordwich Arms business card — finished to impress, built to last." },
  { slug: "frostedclear-pvc-cards", image: "frostedclear-pvc-cards", name: "FrostedClear PVC Cards", folder: "8-business-card", folderName: "Business Cards", description: "Privacy FrostedClear PVC Cards with optional branded graphics." },
  { slug: "gold-foil-business-card", image: "gold-foil-business-card", name: "Gold Foil Business Card", folder: "8-business-card", folderName: "Business Cards", description: "Premium Gold Foil Business Card — finished to impress, built to last." },
  { slug: "marketing-professional-elegant-black-faux-gold", image: "marketing-professional-elegant-black-faux-gold", name: "Marketing Professional Elegant Black Faux Gold", folder: "8-business-card", folderName: "Business Cards", description: "Custom Marketing Professional Elegant Black Faux Gold — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "metal-business-card", image: "metal-business-card", name: "Metal Business Card", folder: "8-business-card", folderName: "Business Cards", description: "Premium Metal Business Card — finished to impress, built to last." },
  { slug: "metal-business-cards", image: "metal-business-cards", name: "Metal Business Cards", folder: "8-business-card", folderName: "Business Cards", description: "Premium Metal Business Cards — finished to impress, built to last." },
  { slug: "modern-classic-frost-plastic-business-card-keystone-sleek-and-durable-design", image: "modern-classic-frost-plastic-business-card-keystone-sleek-and-durable-design", name: "Modern Classic Frost Plastic Business Card - Keystone Sleek & Durable Design", folder: "8-business-card", folderName: "Business Cards", description: "Premium Modern Classic Frost Plastic Business Card - Keystone Sleek & Durable Design — finished to impress, built to last." },
  { slug: "moderne-schwarze-bearbeitbare-visitenkarte-quadratische-canva-vorlage-druckbare-und-digitale-minimale-visitenkarte-schwarze-sammlung-sofortiger-download", image: "moderne-schwarze-bearbeitbare-visitenkarte-quadratische-canva-vorlage-druckbare-und-digitale-minimale-visitenkarte-schwarze-sammlung-sofortiger-download", name: "Moderne schwarze bearbeitbare Visitenkarte quadratische Canva Vorlage druckbare und digitale minimale Visitenkarte - schwarze Sammlung - sofortiger Download", folder: "8-business-card", folderName: "Business Cards", description: "Custom Moderne schwarze bearbeitbare Visitenkarte quadratische Canva Vorlage druckbare und digitale minimale Visitenkarte - schwarze Sammlung - sofortiger Download — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "nfcsmart-business-card", image: "nfcsmart-business-card", name: "NFCSmart Business Card", folder: "8-business-card", folderName: "Business Cards", description: "Premium NFCSmart Business Card — finished to impress, built to last." },
  { slug: "premium-mattesoft-touch-cards", image: "premium-mattesoft-touch-cards", name: "Premium MatteSoft‑touch Cards", folder: "8-business-card", folderName: "Business Cards", description: "Durable custom Premium MatteSoft‑touch Cards with branded designs and logos." },
  { slug: "pure-metal-cards-on-instagram-metal-member-card-silver-contour-stainless-steel-puremetalcards-membership-membercard-vip-luxury-luxurylife-advertising-branding-design-ski-skiing", image: "pure-metal-cards-on-instagram-metal-member-card-silver-contour-stainless-steel-puremetalcards-membership-membercard-vip-luxury-luxurylife-advertising-branding-design-ski-skiing", name: "Pure Metal Cards on Instagram Metal member card Silver contour stainless steel #puremetalcards #membership #membercard #vip #luxury #luxurylife #advertising #branding #design #ski #skiing", folder: "8-business-card", folderName: "Business Cards", description: "Precision-printed Pure Metal Cards on Instagram Metal member card Silver contour stainless steel #puremetalcards #membership #membercard #vip #luxury #luxurylife #advertising #branding #design #ski #skiing for retail and garments." },
  { slug: "transparent-business-cards-custom-design-plastic-card-for-business-pvc-cards-for-any-desing", image: "transparent-business-cards-custom-design-plastic-card-for-business-pvc-cards-for-any-desing", name: "Transparent Business Cards, Custom Design Plastic Card for Business PVC Cards for Any Desing", folder: "8-business-card", folderName: "Business Cards", description: "Premium Transparent Business Cards, Custom Design Plastic Card for Business PVC Cards for Any Desing — finished to impress, built to last." },
  { slug: "uv-varnish-paper-boxes-and-paper-bags-with-uv-varnish-logo-printing", image: "uv-varnish-paper-boxes-and-paper-bags-with-uv-varnish-logo-printing", name: "Uv Varnish - Paper Boxes and Paper Bags with UV Varnish Logo Printing", folder: "8-business-card", folderName: "Business Cards", description: "Branded Uv Varnish - Paper Boxes and Paper Bags with UV Varnish Logo Printing for retail, events and corporate gifting." },
  { slug: "customized-envelopes", image: "customized-envelopes", name: "customized envelopes", folder: "8-business-card", folderName: "Business Cards", description: "Custom printed customized envelopes in a range of sizes and stocks." },
  { slug: "special-cards", image: "special-cards", name: "special cards", folder: "8-business-card", folderName: "Business Cards", description: "Custom special cards — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "minimalist-white-and-beige-modern-influencer-business-card-design", image: "minimalist-white-and-beige-modern-influencer-business-card-design", name: "🎨 Minimalist White & Beige Modern Influencer Business Card Design", folder: "8-business-card", folderName: "Business Cards", description: "Premium 🎨 Minimalist White & Beige Modern Influencer Business Card Design — finished to impress, built to last." },
  { slug: "custom-packing-tape", image: "custom-packing-tape", name: "Custom Packing Tape", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Branded Custom Packing Tape for secure shipping and brand exposure." },
  { slug: "die-cut-stickers", image: "die-cut-stickers", name: "Die‑cut Stickers", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Custom Die‑cut Stickers cut to shape with weather-resistant finish." },
  { slug: "label-rolls", image: "label-rolls", name: "Label Rolls", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Durable Label Rolls for product branding and compliance." },
  { slug: "pharma-labels", image: "pharma-labels", name: "Pharma Labels", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Durable Pharma Labels for product branding and compliance." },
  { slug: "plan-printing-labels", image: "plan-printing-labels", name: "Plan Printing Labels", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Durable Plan Printing Labels for product branding and compliance." },
  { slug: "product-labels-and-stickers", image: "product-labels-and-stickers", name: "Product Labels & Stickers", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Custom Product Labels & Stickers cut to shape with weather-resistant finish." },
  { slug: "sticker-sheets", image: "sticker-sheets", name: "Sticker Sheets", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Custom Sticker Sheets cut to shape with weather-resistant finish." },
  { slug: "tin-packaging-label", image: "tin-packaging-label", name: "Tin Packaging Label", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Durable Tin Packaging Label for product branding and compliance." },
  { slug: "vinylflex-media-roll", image: "vinylflex-media-roll", name: "VinylFlex Media Roll", folder: "9-stickers-and-labels", folderName: "Stickers & Labels", description: "Custom VinylFlex Media Roll — premium quality, tailored finishes and fast UAE-wide delivery." },
  { slug: "plain-frost-film", image: "plain-frost-film", name: "Plain Frost Film", folder: "10-types-of-frost-film", folderName: "Frost Film", description: "Privacy Plain Frost Film with optional branded graphics." },
  { slug: "pvc-printed-frosted-glass-film-2219628965-aw7jhcou", image: "pvc-printed-frosted-glass-film-2219628965-aw7jhcou", name: "pvc-printed-frosted-glass-film-2219628965-aw7jhcou", folder: "10-types-of-frost-film", folderName: "Frost Film", description: "Privacy pvc-printed-frosted-glass-film-2219628965-aw7jhcou with optional branded graphics." },
  { slug: "acrylic-name-plate", image: "acrylic-name-plate", name: "Acrylic Name Plate", folder: "11-name-plate", folderName: "Name Plates", description: "Elegant Acrylic Name Plate for offices, desks and door signage." },
  { slug: "wooden-name-plate", image: "wooden-name-plate", name: "Wooden Name Plate", folder: "11-name-plate", folderName: "Name Plates", description: "Elegant Wooden Name Plate for offices, desks and door signage." },
]

const currentFolder = computed(() =>
  activeFolder.value ? folders.find(f => f.id === activeFolder.value) : null
)

// Per-folder thumbnail previews for folder cards
const getFolderPreviews = (folderId, n = 4) =>
  products.filter(p => p.folder === folderId).slice(0, n).map(p => p.image)

const filteredProducts = computed(() => {
  let result = products
  if (activeFolder.value) {
    result = result.filter(p => p.folder === activeFolder.value)
  }
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.folderName.toLowerCase().includes(query)
    )
  }
  return result
})

const openFolder = (folder) => { activeFolder.value = folder.id }

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

/* ===== Folder Grid ===== */
.folder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding-bottom: 20px;
}

.folder-card {
  position: relative;
  background: white;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  opacity: 0;
  animation: folderFadeIn 0.5s ease var(--delay, 0s) forwards;
}

@keyframes folderFadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.folder-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.10);
  border-color: rgba(46, 139, 192, 0.25);
}

.folder-card-previews {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  aspect-ratio: 1.6;
  background: #f2f2f2;
  gap: 2px;
}

.folder-preview-tile {
  background: #fafaf7;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.folder-preview-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.folder-card:hover .folder-preview-tile img {
  transform: scale(1.08);
}

.folder-card-body {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: white;
  border-top: 1px solid #eee;
}

.folder-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(46, 139, 192, 0.10);
  color: var(--accent-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, transform 0.3s ease;
}

.folder-card:hover .folder-card-icon {
  background: var(--accent-teal);
  color: white;
  transform: scale(1.05);
}

.folder-card-text {
  flex: 1;
  min-width: 0;
}

.folder-card-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.folder-card-meta {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.folder-card-arrow {
  color: #bbb;
  transition: color 0.25s ease, transform 0.25s ease;
  flex-shrink: 0;
}

.folder-card:hover .folder-card-arrow {
  color: var(--accent-teal);
  transform: translateX(3px);
}

/* ===== Back button ===== */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  margin-right: 16px;
  background: var(--bg-secondary);
  border: 1px solid #e8e7e3;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  background: white;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 0;
}

/* Breadcrumb button (when inside folder) */
.breadcrumb-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
