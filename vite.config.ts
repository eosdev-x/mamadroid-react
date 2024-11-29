import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'Dist',  // Directly output to Dist
    emptyOutDir: true
  },
    optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
