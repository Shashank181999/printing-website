<template>
  <div class="social-sidebar" :class="{ hidden: !visible }">
    <a href="https://facebook.com/alfalahmiddleeast" target="_blank" rel="noopener" aria-label="Facebook" class="social-link social-link--fb">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    </a>
    <a href="https://instagram.com/alfalahme" target="_blank" rel="noopener" aria-label="Instagram" class="social-link social-link--ig">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    </a>
    <a href="https://linkedin.com/company/alfalah-me" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link social-link--li">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    </a>
    <div class="social-divider"></div>
    <a href="https://wa.me/971567268735" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-link social-link--wa">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const visible = ref(true)
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    // Only hide during home banner scroll
    if (route.path === '/') {
      const bannerEnd = window.innerHeight * 2.5
      visible.value = window.scrollY >= bannerEnd
    } else {
      visible.value = true
    }
    ticking = false
  })
}

// Re-check on route change
watch(() => route.path, () => {
  visible.value = route.path !== '/'
  if (route.path === '/') onScroll()
})

onMounted(() => {
  if (route.path === '/') {
    visible.value = false
    onScroll()
  }
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.social-sidebar.hidden {
  opacity: 0;
  transform: translateY(-50%) translateX(50px);
  pointer-events: none;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.social-link:hover {
  transform: scale(1.15) translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.social-link--fb { color: #1877F2; }
.social-link--fb:hover { background: #1877F2; color: #fff; }
.social-link--ig { color: #E4405F; }
.social-link--ig:hover { background: #E4405F; color: #fff; }
.social-link--li { color: #0A66C2; }
.social-link--li:hover { background: #0A66C2; color: #fff; }
.social-link--wa { color: #25D366; }
.social-link--wa:hover { background: #25D366; color: #fff; }

.social-divider {
  width: 20px;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 2px 0;
}

@media (max-width: 768px) {
  .social-sidebar {
    right: 10px;
    gap: 6px;
  }
  .social-link {
    width: 36px;
    height: 36px;
  }
  .social-link svg {
    width: 16px;
    height: 16px;
  }
}
</style>
