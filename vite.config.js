import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 🔥 VERY IMPORTANT (this fixes Tailwind/CSS/JS paths)
  base: '/react/',
})