<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="closeModal">
      <div ref="modalRef" class="modal">
        <button class="modal-close" @click="closeModal" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-content" v-if="!submitSuccess">
          <div class="modal-header">
            <span class="modal-label">Bespoke Inquiry</span>
            <h2 class="modal-title">Request a <em>Quote</em></h2>
            <p class="modal-desc">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  placeholder="john@company.com"
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
                  required
                  placeholder="+971 50 123 4567"
                />
              </div>
              <div class="form-group">
                <label for="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  placeholder="Company LLC"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Service Required</label>
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
              <label for="message">Project Details</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Describe your project requirements, quantities, timeline..."
                rows="3"
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="btn-secondary" @click="closeModal">
                Cancel
              </button>
              <button type="submit" class="btn-primary" :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Submit Inquiry</span>
                <svg v-if="!isSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div class="success-content" v-else>
          <div class="success-icon">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>Your inquiry has been submitted successfully. Our team will contact you shortly.</p>
          <button class="btn-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['close'])

const modalRef = ref(null)
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const services = [
  'Printing',
  'Labels',
  'Branding',
  'Events',
  'Design',
  'Signage'
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const closeModal = () => {
  document.body.style.overflow = ''
  emit('close')
}

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitSuccess.value = true
}

onMounted(() => {
  document.body.style.overflow = 'hidden'

  gsap.from(modalRef.value, {
    y: 40,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(6px);
  z-index: 2000;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 540px;
  background: var(--bg-primary);
  border-radius: 16px;
  padding: 32px 36px;
  box-sizing: border-box;
  margin: auto;
  flex-shrink: 0;
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: none;
  border-radius: 50%;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: var(--border-light);
  color: var(--text-primary);
}

.modal-header {
  margin-bottom: 32px;
}

.modal-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-teal);
  margin-bottom: 6px;
  display: block;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.modal-title em {
  font-style: normal;
  color: var(--accent-teal);
}

.modal-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 4px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.form-group label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  padding: 10px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 16px;
  font-family: var(--font-sans);
  color: var(--text-primary);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-teal);
  box-shadow: 0 0 0 3px rgba(46, 139, 192, 0.08);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-light);
}

.form-group textarea {
  resize: vertical;
  min-height: 70px;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.service-tag {
  padding: 6px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-tag:hover {
  border-color: var(--text-primary);
}

.service-tag.active {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: white;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 4px;
}

.btn-secondary {
  padding: 14px 24px;
  background: transparent;
  border: 1px solid var(--border-medium);
  border-radius: 50px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.btn-primary {
  padding: 14px 24px;
  background: var(--accent-teal);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  background: var(--bg-teal-dark);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-content {
  text-align: center;
  padding: 40px 0;
}

.success-icon {
  color: var(--accent-teal);
  margin-bottom: 24px;
}

.success-content h3 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.success-content p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

@media (max-width: 640px) {
  .modal-overlay {
    padding: 12px;
    align-items: flex-start;
    padding-top: 40px;
  }

  .modal {
    padding: 28px 20px;
    max-height: none;
    border-radius: 14px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .form-actions button {
    width: 100%;
    justify-content: center;
  }
}
</style>
