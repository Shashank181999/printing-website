<template>
  <section ref="galleryRef" class="portfolio-gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Our Work</span>
        <h2>Featured Projects</h2>
        <p>Explore our portfolio of successful projects across various industries</p>
      </div>

      <div class="filter-tabs">
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-tab', { active: activeCategory === category }]"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="gallery-item"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="gallery-image" :style="{ background: project.gradient }">
            <span class="project-emoji">{{ project.emoji }}</span>
          </div>
          <div class="gallery-overlay">
            <span class="project-category">{{ project.category }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <button class="btn-view">View Project</button>
          </div>
        </div>
      </div>

      <div class="gallery-cta">
        <p>Want to see more of our work?</p>
        <button class="btn-primary">View Full Portfolio</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryRef = ref(null)
const activeCategory = ref('All')

const categories = ['All', 'Printing', 'Branding', 'Events', 'Signage', 'Packaging']

const projects = [
  {
    id: 1,
    title: 'Corporate Annual Report',
    description: 'Premium offset printing with special finishes',
    category: 'Printing',
    emoji: '📚',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    id: 2,
    title: 'Hotel Brand Identity',
    description: 'Complete brand activation for luxury hotel chain',
    category: 'Branding',
    emoji: '🏨',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
  },
  {
    id: 3,
    title: 'Tech Summit 2024',
    description: 'Full event management and exhibition stands',
    category: 'Events',
    emoji: '🎪',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  },
  {
    id: 4,
    title: 'Highway Billboard Campaign',
    description: 'Large format outdoor advertising',
    category: 'Signage',
    emoji: '🛣️',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
  },
  {
    id: 5,
    title: 'Luxury Cosmetics Packaging',
    description: 'Custom packaging with metallic finishes',
    category: 'Packaging',
    emoji: '💄',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)'
  },
  {
    id: 6,
    title: 'Restaurant Menu Design',
    description: 'Creative design and premium printing',
    category: 'Printing',
    emoji: '🍽️',
    gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)'
  },
  {
    id: 7,
    title: 'Fleet Vehicle Branding',
    description: 'Complete vehicle wrap for delivery fleet',
    category: 'Branding',
    emoji: '🚚',
    gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)'
  },
  {
    id: 8,
    title: 'Mall Wayfinding System',
    description: 'Comprehensive signage and wayfinding solution',
    category: 'Signage',
    emoji: '🏬',
    gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

onMounted(() => {
  gsap.from('.filter-tab', {
    scrollTrigger: {
      trigger: galleryRef.value,
      start: 'top 80%'
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out'
  })

  const items = document.querySelectorAll('.gallery-item')
  items.forEach((item, i) => {
    gsap.fromTo(item,
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%'
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out'
      }
    )
  })
})
</script>

<style scoped>
.portfolio-gallery {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 10px 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 50px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tab:hover {
  border-color: var(--accent-orange);
  color: var(--accent-orange);
}

.filter-tab.active {
  background: var(--accent-gradient);
  border-color: transparent;
  color: #fff;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
}

.gallery-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
}

.project-emoji {
  font-size: 64px;
  opacity: 0.9;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0) 0%, rgba(26, 26, 46, 0.95) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.project-category {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  color: #ff6b35;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  width: fit-content;
}

.gallery-overlay h3 {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.gallery-overlay p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.btn-view {
  padding: 10px 20px;
  background: var(--accent-gradient);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.btn-view:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
}

.gallery-cta {
  text-align: center;
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid var(--border-light);
}

.gallery-cta p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 16px;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .portfolio-gallery {
    padding: 60px 0;
  }

  .filter-tabs {
    gap: 8px;
  }

  .filter-tab {
    padding: 8px 16px;
    font-size: 13px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gallery-item {
    aspect-ratio: 16/12;
  }

  .project-emoji {
    font-size: 48px;
  }
}
</style>
