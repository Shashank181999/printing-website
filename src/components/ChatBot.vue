<template>
  <div class="chatbot-wrapper">
    <!-- Chat Toggle Button -->
    <button
      class="chat-toggle"
      :class="{ active: isOpen }"
      @click="toggleChat"
      aria-label="Chat with us"
    >
      <svg v-if="!isOpen" class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <svg v-else class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>

    <!-- Chat Window -->
    <transition name="chat">
      <div v-if="isOpen" class="chat-window">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">
              <img :src="logoImage" alt="Al Falah" />
            </div>
            <div>
              <h4>Al Falah Support</h4>
              <span class="chat-status">
                <span class="status-dot"></span>
                Online now
              </span>
            </div>
          </div>
          <button class="chat-close" @click="isOpen = false">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div class="chat-messages" ref="messagesRef">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="chat-msg"
            :class="msg.from"
          >
            <div class="msg-bubble">{{ msg.text }}</div>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
          <div v-if="isTyping" class="chat-msg bot">
            <div class="msg-bubble typing">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>

        <!-- Quick Replies -->
        <div v-if="showQuickReplies" class="quick-replies">
          <button
            v-for="(reply, i) in quickReplies"
            :key="i"
            class="quick-reply"
            @click="sendQuickReply(reply)"
          >
            {{ reply }}
          </button>
        </div>

        <!-- Input -->
        <div class="chat-input-area">
          <input
            v-model="userInput"
            type="text"
            placeholder="Type a message..."
            class="chat-input"
            @keyup.enter="sendMessage"
          />
          <button class="chat-send" @click="sendMessage" :disabled="!userInput.trim()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import logoImage from '@/assets/logo.png'

const isOpen = ref(false)
const isTyping = ref(false)
const userInput = ref('')
const messagesRef = ref(null)
const showQuickReplies = ref(true)
const messageCount = ref(0)

const quickReplies = [
  'Get a Quote',
  'Business Cards',
  'Banners & Signage',
  'Packaging',
  'Contact Info',
]

const getTime = () => {
  const now = new Date()
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const messages = ref([
  { from: 'bot', text: 'Hello! Welcome to Al Falah Middle East. How can I help you today?', time: getTime() },
])

const scrollToBottom = async () => {
  await nextTick()
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) scrollToBottom()
}

const botReply = (userText) => {
  const text = userText.toLowerCase()
  messageCount.value++

  // After 3 messages, suggest WhatsApp
  const whatsappNudge = messageCount.value >= 3
    ? '\n\nFor faster help, chat with our team directly on WhatsApp: wa.me/971567268735'
    : ''

  if (text.includes('quote') || text.includes('price') || text.includes('cost') || text.includes('how much')) {
    return 'We\'d love to help with a quote! Pricing depends on the product, quantity, and finish. Share your requirements and we\'ll prepare a custom quote within 24 hours. Call us at +971 56 726 8735 or click "Get Quote" on any product.' + whatsappNudge
  }
  if (text.includes('about') || text.includes('who') || text.includes('company') || text.includes('afme') || text.includes('al falah')) {
    return 'Al Falah Middle East (AFME) has been Dubai\'s trusted printing partner since 1974 — that\'s 50 years of expertise! We offer 8 service verticals: Printing, Labels, Brand Activation, Stand Production, Event Management, Creative Design, Corporate Gifts, and Vehicle Graphics.' + whatsappNudge
  }
  if (text.includes('business card')) {
    return 'We offer 10+ types of business cards: Gold Foil, Metal, NFC Smart Cards, Die-Cut, Frosted PVC, Textured, Square, Matte Soft-Touch, and more. Starting from 250 pieces. Premium finishes include embossing, debossing, spot UV, and edge painting.' + whatsappNudge
  }
  if (text.includes('banner') || text.includes('sign') || text.includes('neon')) {
    return 'Our signage range includes Roll-Up Banners, Feather Flags, Fence Banners, Outdoor Billboards, Neon Signs, 3D Metal Letters, Acrylic Signage, and LED displays. We handle design, production, and installation across UAE.' + whatsappNudge
  }
  if (text.includes('packaging') || text.includes('box') || text.includes('bag')) {
    return 'We produce Rigid Gift Boxes, Food Packaging, Shipping Boxes, Paper Shopping Bags, Custom Tape, and Printed Ribbons. All with custom printing, embossing, foil stamping, and spot UV options.' + whatsappNudge
  }
  if (text.includes('print') || text.includes('brochure') || text.includes('flyer') || text.includes('catalog') || text.includes('magazine')) {
    return 'Our printing services cover Brochures, Flyers, Catalogs, Magazines, Annual Reports, Company Profiles, Books, Calendars, and Notebooks. We use both offset and digital presses for the best quality at any quantity.' + whatsappNudge
  }
  if (text.includes('label') || text.includes('sticker')) {
    return 'We produce Product Labels, Pharma Labels, Roll Labels, Die-Cut Stickers, Sheet Stickers, and Barcode Labels. Available in waterproof, freezer-safe, and metallic finishes.' + whatsappNudge
  }
  if (text.includes('apparel') || text.includes('shirt') || text.includes('cap') || text.includes('hoodie') || text.includes('uniform')) {
    return 'Custom apparel printing: T-Shirts, Polo Shirts, Hoodies, Caps, and Jackets. We offer screen printing, DTG, embroidery, and sublimation. Perfect for corporate uniforms, events, and merchandise.' + whatsappNudge
  }
  if (text.includes('vehicle') || text.includes('car') || text.includes('wrap') || text.includes('fleet')) {
    return 'Full and partial vehicle wraps, cut vinyl graphics, and fleet branding. We design, print, and install across Dubai and UAE. Turn your vehicles into mobile billboards!' + whatsappNudge
  }
  if (text.includes('event') || text.includes('exhibition') || text.includes('booth') || text.includes('stand')) {
    return 'We handle end-to-end event solutions: Exhibition Booth Design & Setup, Backdrop Banners, Pop-Up Stands, Promotional Materials, and on-site branding. From concept to installation.' + whatsappNudge
  }
  if (text.includes('gift') || text.includes('corporate') || text.includes('welcome kit') || text.includes('merchandise')) {
    return 'Corporate gifting solutions: Welcome Kits, Branded Merchandise, Award Trophies, Gift Boxes, Lanyards, Badges, and custom promotional items. Perfect for client appreciation and team events.' + whatsappNudge
  }
  if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('address') || text.includes('location') || text.includes('where')) {
    return 'Reach us at:\n📞 +971 56 726 8735\n📧 sales@alfalah-me.com\n📍 Dubai, UAE\n⏰ Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM\n\nOr chat on WhatsApp: wa.me/971567268735'
  }
  if (text.includes('delivery') || text.includes('shipping') || text.includes('time') || text.includes('fast') || text.includes('urgent')) {
    return 'Standard delivery: 3-5 business days. Rush/express available for most products. We deliver across all UAE emirates and ship internationally to 15+ countries.' + whatsappNudge
  }
  if (text.includes('design') || text.includes('creative')) {
    return 'We offer free design support! Our in-house creative team handles Brand Identity, Logo Design, Print Collateral, Packaging Design, and Concept Artwork. Share your brief and we\'ll create something amazing.' + whatsappNudge
  }
  if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('good')) {
    return 'Hello! 👋 Welcome to Al Falah Middle East — 50 years of printing excellence in Dubai. How can I help you today? Ask me about our products, services, or pricing!'
  }
  if (text.includes('thank') || text.includes('thanks')) {
    return 'You\'re welcome! Happy to help. For any future inquiries, we\'re always here. You can also reach us on WhatsApp: wa.me/971567268735'
  }
  if (text.includes('whatsapp') || text.includes('chat') || text.includes('talk') || text.includes('human') || text.includes('person') || text.includes('agent')) {
    return 'Connect with our team directly on WhatsApp for instant support: wa.me/971567268735\n\nOr call us at +971 56 726 8735. We\'re available Mon-Fri 9 AM - 6 PM, Sat 9 AM - 4 PM.'
  }

  return 'I can help with info about our products (Business Cards, Banners, Packaging, Apparel, Signage, Labels), pricing, delivery, or services. What would you like to know?' + whatsappNudge
}

const sendMessage = () => {
  const text = userInput.value.trim()
  if (!text) return

  showQuickReplies.value = false
  messages.value.push({ from: 'user', text, time: getTime() })
  userInput.value = ''
  scrollToBottom()

  isTyping.value = true
  scrollToBottom()

  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ from: 'bot', text: botReply(text), time: getTime() })
    scrollToBottom()
  }, 1000 + Math.random() * 500)
}

const sendQuickReply = (reply) => {
  userInput.value = reply
  sendMessage()
}

</script>

<style scoped>
.chatbot-wrapper {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
}

/* Toggle Button */
.chat-toggle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: var(--accent-teal);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(46, 139, 192, 0.35);
  transition: all 0.3s ease;
}

.chat-toggle:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 28px rgba(46, 139, 192, 0.45);
}

.chat-toggle.active {
  background: var(--text-primary);
}

.chat-icon {
  transition: transform 0.3s ease;
}

/* Chat Window */
.chat-window {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 370px;
  height: 520px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Header */
.chat-header {
  padding: 16px 18px;
  background: var(--accent-teal);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.chat-avatar img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.chat-header h4 {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
}

.chat-status {
  font-size: 11px;
  opacity: 0.85;
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  display: inline-block;
}

.chat-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  padding: 4px;
  transition: opacity 0.2s;
}

.chat-close:hover {
  opacity: 1;
}

/* Messages */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f9f8f6;
}

.chat-msg {
  display: flex;
  flex-direction: column;
  max-width: 82%;
}

.chat-msg.bot {
  align-self: flex-start;
}

.chat-msg.user {
  align-self: flex-end;
}

.msg-bubble {
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-line;
}

.chat-msg.bot .msg-bubble {
  background: white;
  color: var(--text-primary);
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.chat-msg.user .msg-bubble {
  background: var(--accent-teal);
  color: white;
  border-bottom-right-radius: 4px;
}

.msg-time {
  font-size: 10px;
  color: var(--text-light);
  margin-top: 4px;
  padding: 0 4px;
}

.chat-msg.user .msg-time {
  align-self: flex-end;
}

/* Typing indicator */
.typing {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-light);
  animation: bounce 1.4s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
}

/* Quick Replies */
.quick-replies {
  padding: 8px 16px 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background: #f9f8f6;
  border-top: 1px solid var(--border-light);
}

.quick-reply {
  padding: 6px 14px;
  background: white;
  border: 1px solid var(--border-medium);
  border-radius: 20px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--accent-teal);
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-reply:hover {
  background: var(--accent-teal);
  border-color: var(--accent-teal);
  color: white;
}

/* Input */
.chat-input-area {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid var(--border-light);
  background: white;
  flex-shrink: 0;
}

.chat-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--border-light);
  border-radius: 24px;
  font-size: 16px;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: var(--accent-teal);
}

.chat-input::placeholder {
  color: var(--text-light);
}

.chat-send {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--accent-teal);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.chat-send:hover {
  background: var(--bg-teal-dark);
}

.chat-send:disabled {
  opacity: 0.4;
  cursor: default;
}

/* Transition */
.chat-enter-active {
  animation: chatIn 0.3s ease;
}

.chat-leave-active {
  animation: chatIn 0.25s ease reverse;
}

@keyframes chatIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .chatbot-wrapper {
    bottom: 90px;
    right: 16px;
  }

  .chat-window {
    width: calc(100vw - 32px);
    height: 460px;
    right: -16px;
  }

  .chat-toggle {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 24px);
    right: -12px;
    bottom: 64px;
    height: 420px;
  }
}
</style>
