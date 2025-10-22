import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Adiciona essa linha
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

