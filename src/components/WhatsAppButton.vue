<template>
  <a
    ref="buttonRef"
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Contact us on WhatsApp"
  >
    <svg viewBox="0 0 32 32" fill="currentColor" class="whatsapp-icon">
      <path d="M16.004 0C7.165 0 0 7.163 0 16c0 2.82.736 5.586 2.133 8.022L.075 32l8.224-2.028A15.923 15.923 0 0016.004 32C24.838 32 32 24.837 32 16S24.838 0 16.004 0zm0 29.214c-2.655 0-5.26-.72-7.53-2.079l-.54-.32-5.6 1.382 1.416-5.448-.351-.557A13.103 13.103 0 012.786 16c0-7.295 5.933-13.23 13.218-13.23S29.214 8.705 29.214 16c0 7.295-5.925 13.214-13.21 13.214zm7.25-9.898c-.398-.199-2.354-1.162-2.72-1.295-.365-.133-.631-.199-.897.2-.266.398-1.03 1.294-1.263 1.56-.232.265-.465.298-.863.1-.398-.2-1.68-.62-3.2-1.977-1.183-1.055-1.981-2.359-2.214-2.757-.232-.398-.024-.614.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.777-.652-.672-.896-.684-.232-.011-.498-.014-.764-.014-.266 0-.697.1-.1062.498-.365.398-1.394 1.362-1.394 3.323 0 1.96 1.428 3.856 1.627 4.122.199.265 2.808 4.283 6.802 6.007.95.41 1.692.655 2.27.839.954.303 1.822.26 2.508.158.765-.114 2.354-.962 2.687-1.89.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.465z"/>
    </svg>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const buttonRef = ref(null)

const whatsappNumber = '+971501234567'
const defaultMessage = 'Hello! I am interested in your printing services.'
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(defaultMessage)}`

onMounted(() => {
  gsap.from(buttonRef.value, {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 1.5,
    ease: 'back.out(1.7)'
  })
})
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 32px;
  right: 100px;
  z-index: 1000;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
  transition: all 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.45);
}

.whatsapp-icon {
  width: 26px;
  height: 26px;
}

@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 24px;
    right: 80px;
    width: 52px;
    height: 52px;
  }

  .whatsapp-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
