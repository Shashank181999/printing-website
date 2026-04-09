<template>
  <section ref="testimonialsRef" class="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Testimonials</span>
        <h2>What Our Clients Say</h2>
        <p>Trusted by leading brands and businesses across the Middle East</p>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card"
        >
          <div class="quote-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar" :style="{ background: testimonial.avatarColor }">
              {{ testimonial.initials }}
            </div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <span>{{ testimonial.title }}, {{ testimonial.company }}</span>
            </div>
          </div>
          <div class="testimonial-rating">
            <span v-for="n in 5" :key="n" class="star">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonialsRef = ref(null)

const testimonials = [
  {
    text: "Al Falah has been our trusted printing partner for over 10 years. Their attention to detail and commitment to quality is unmatched. Every project is delivered on time and exceeds expectations.",
    name: "Ahmed Al Maktoum",
    title: "Marketing Director",
    company: "Emirates Group",
    initials: "AM",
    avatarColor: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  {
    text: "The brand activation campaign they executed for our product launch was phenomenal. Creative, professional, and delivered exceptional results. Highly recommended!",
    name: "Sarah Thompson",
    title: "Brand Manager",
    company: "Unilever MENA",
    initials: "ST",
    avatarColor: "linear-gradient(135deg, #f093fb, #f5576c)"
  },
  {
    text: "We've worked with many printing companies, but Al Falah stands out for their expertise and customer service. They truly understand our brand and deliver consistently.",
    name: "Mohammed Hassan",
    title: "Operations Manager",
    company: "Dubai Holding",
    initials: "MH",
    avatarColor: "linear-gradient(135deg, #43e97b, #38f9d7)"
  }
]

onMounted(() => {
  const cards = document.querySelectorAll('.testimonial-card')
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%'
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.15,
        ease: 'power3.out'
      }
    )
  })
})
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: var(--bg-primary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 35px;
  position: relative;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.quote-icon {
  color: var(--accent-orange);
  opacity: 0.3;
  margin-bottom: 20px;
}

.testimonial-text {
  color: var(--text-primary);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.author-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 3px;
}

.author-info span {
  font-size: 13px;
  color: var(--text-secondary);
}

.testimonial-rating {
  display: flex;
  gap: 3px;
}

.star {
  color: #FFD700;
  font-size: 16px;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 25px;
  }
}
</style>
