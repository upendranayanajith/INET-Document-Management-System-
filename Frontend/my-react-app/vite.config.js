import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.entry']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfworker: ['pdfjs-dist/build/pdf.worker.entry']
        }
      }
    }
  },
  server: {
    host: '10.10.1.80',
    port: 5173,
    strictPort: true,
  }
})