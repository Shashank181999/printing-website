import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // Critical: ensure a single three.js instance so addons (PMREM, bloom,
    // post-processing) share classes with our `import * as THREE from 'three'`.
    dedupe: ['three', 'gsap']
  },
  optimizeDeps: {
    include: [
      'three',
      'three/examples/jsm/environments/RoomEnvironment.js',
      'three/examples/jsm/postprocessing/EffectComposer.js',
      'three/examples/jsm/postprocessing/RenderPass.js',
      'three/examples/jsm/postprocessing/UnrealBloomPass.js',
      'gsap',
      'gsap/ScrollTrigger',
      '@studio-freight/lenis'
    ]
  }
})
