import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// User-site GitHub Pages (mustafag63.github.io) serves from the domain root,
// so base stays "/" even in production — no repo-name subpath needed.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
